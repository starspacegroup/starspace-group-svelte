#!/usr/bin/env bash
# Build the social share cards in static/og/.
#
# These are the images every platform shows when someone pastes a *Space link:
# Discord, Slack, X, Facebook, LinkedIn, Bluesky, Telegram, WhatsApp, iMessage.
# They are committed to the repo — this script only needs running when the
# wording, the brand art, or the layout changes. Nothing at build or deploy
# time depends on it.
#
# It composes them from the site's OWN assets so the card and the page match:
# the wood star mark and the starfield out of src/lib/images/, the coral accent
# out of tailwind.config.cjs (primary-500), and zinc-950 for the page ground.
#
# Requires ImageMagick 7 (`magick`) and the Noto Sans family. Both are dev-box
# tools; run `./scripts/build-og.sh` from the repo root.
set -euo pipefail
cd "$(dirname "$0")/.."

LOGO="src/lib/images/ai starspace logo transparent bg.png"
STARS="src/lib/images/stars_on_black_background.jpeg"
OUT="static/og"

font() { fc-match -f '%{file}' "$1" ; }
BLACK="$(font 'Noto Sans:weight=black')"
BOLD="$(font 'Noto Sans:weight=bold')"
REG="$(font 'Noto Sans:weight=regular')"
for f in "$BLACK" "$BOLD" "$REG"; do
  [[ -f "$f" ]] || { echo "missing Noto Sans (resolved '$f')" >&2; exit 1; }
done

W=1200; H=630                 # 1.91:1 — the size every platform crops toward
# 8-bit, 128 colours, max deflate. A card is one flat ground plus a starfield
# and a bloom, so 128 colours is visually lossless here and takes each file
# from ~4 MB to ~100 KB. That matters: WhatsApp drops the preview entirely for
# images over ~300 KB, and every other scraper is fetching this on a phone.
GROUND='#09090b'              # zinc-950, the page background
CORAL='#FE795D'               # primary-500
BODY='#d4d4d8'                # zinc-300
MUTED='#a1a1aa'               # zinc-400
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

# The warm bloom the site gets from the blurred mark parked off its top-left
# corner (see (app)/+layout.svelte). Pad well past the blur radius first or the
# blur stops at the canvas edge and leaves a visible box.
magick "$LOGO" -resize 820x820 -background none -gravity center -extent 1700x1700 \
  -channel A -evaluate multiply 0.9 +channel -blur 0x100 "$TMP/glow.png"

# Ground + starfield at the same 20%-ish the site shows it at + the bloom.
magick -size ${W}x${H} "xc:$GROUND" \
  \( "$STARS" -resize ${W}x${H}^ -gravity center -extent ${W}x${H} \
     -alpha set -channel A -evaluate multiply 0.22 +channel \) -composite \
  "$TMP/glow.png" -geometry -600-600 -composite \
  "$TMP/base.png"

magick "$LOGO" -resize 190x190 "$TMP/mark.png"

# card <out.png> <EYEBROW> <line>
card() {
  magick "$TMP/base.png" "$TMP/mark.png" -geometry +90+118 -composite \
    -font "$BLACK" -pointsize 136 -fill white  -annotate +312+251 '*Space' \
    -kerning 4 -font "$BOLD" -pointsize 31 -fill "$CORAL" -annotate +94+398 "$2" \
    -kerning 0 -font "$REG"  -pointsize 42 -fill "$BODY"  -annotate +94+468 "$3" \
    -font "$BOLD" -pointsize 30 -fill "$MUTED" -annotate +94+562 'starspace.group' \
    -fill "$CORAL" -draw "rectangle 0,624 $W,$H" \
    -strip -depth 8 -colors 128 -define png:compression-level=9 "$1"
  echo "  $1 ($(( $(stat -c%s "$1") / 1024 )) KB)"
}

echo "share cards:"
card "$OUT/default.png"       'COWORKING ON DISCORD' 'Work, Create, and Collaborate with Chaos and Fun!'
card "$OUT/projects.png"      'PROJECTS'             'Cool things made by the rock stars working in *Space.'
card "$OUT/sister-spaces.png" 'SISTER SPACES'        'Physical and digital partners of *Space.'

# App icons, from the same mark. iOS composites the touch icon on white unless
# it carries its own ground, so these are flattened onto zinc-950 rather than
# left transparent.
icon() {
  magick "$LOGO" -resize "$(( $1 * 78 / 100 ))x$(( $1 * 78 / 100 ))" \
    -background "$GROUND" -gravity center -extent "${1}x${1}" -strip "$2"
  echo "  $2"
}
echo "app icons:"
icon 180 static/apple-touch-icon.png
icon 192 static/icon-192.png
icon 512 static/icon-512.png
magick "$LOGO" -resize 32x32 -strip static/favicon.png
echo "  static/favicon.png"
