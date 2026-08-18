# Plan: a SpaceBot page

**Goal:** one page on starspace.group that tells people what SpaceBot can do,
built from what the bot actually has rather than from a list someone typed.

Status: **planned.** Nothing built. The old page has been removed — see below.

---

## 1. What was here before, and why it went

`src/routes/discord-bot/` was a 46-line page for **starspace-bot**, the previous
Discord bot. It listed exactly two commands, `affirmation` and `insult`, as a
hardcoded array in the component, and linked to a GitHub repository that has
now been archived — that repo was last touched on **13 July 2024**.

Nothing in the site linked to it. It was reachable only by typing the URL.

It was removed on **2026-08-18** rather than updated, because every line of it
was wrong: the wrong bot, a stale command list, and a dead link. The right
replacement is a different page with a different source of truth.

## 2. The rule this page exists to follow

**The command list is never written by hand.** That is the single lesson from
the page it replaces. A typed list is correct on the day it ships and wrong
every day after, and nobody notices because nothing fails.

So the page reads its content from the bot. SpaceBot registers slash commands
with Discord and stores its own configuration in D1, so the list already exists
in two authoritative places. The page uses one of them and never a third copy.

## 3. Two audiences, one page

**The public view.** Anyone, logged in or not, sees what the bot is and what it
can do — every command, what it does, and how it is invoked. This is the part
that has to be automatic.

**The signed-in view.** A visitor who signs in with Discord sees **the commands
they can actually use**, in the servers they share with the bot. SpaceBot
already has per-guild settings and role gating, so "what am I allowed to run"
is a question it can answer. That is a genuinely useful page and not a common
one — most bot sites show a list and leave the reader to find out by failing.

The signed-in view is the second half. Ship the public one first: it is most of
the value and it needs no auth at all.

## 4. Where the data comes from

Decide this before writing any component:

- **Discord's own registration** is the truest source — it is what a user's
  client will offer them. Reading it needs a bot token, so it happens
  server-side and cached, never from the browser.
- **SpaceBot's D1** holds per-guild enablement and whatever role rules exist.
  That is what turns the public list into a personal one.
- **A build-time snapshot** is the cheap version: SpaceBot publishes a JSON
  manifest of its commands, the site fetches it. This is the one to build
  first — it keeps the site and the bot decoupled and costs no live calls.

Whichever is chosen, the page must show **when the list was last refreshed**. A
stale automatic list is worse than a stale manual one, because it looks alive.

## 5. Sign-in, and the boundary

Signing in with Discord means OAuth, which means the site holds a session. Two
constraints, both learned elsewhere in this org this month:

- **The cookie must be an opaque server-side session**, not a signed blob that
  describes the user. NebulaKit had to be fixed for exactly this on 2026-08-18,
  and nabu#5 is still open for the same reason.
- **Never trust the client for role information.** Which commands a person can
  run is resolved server-side from their Discord identity and the guild's
  settings, every request. It is not a claim the browser gets to make.

Scope the OAuth request to identity and guild membership. Nothing else is
needed and anything more is a liability.

## 6. Work

1. Agree the source of truth (§4). Everything downstream depends on it.
2. SpaceBot publishes a command manifest.
3. The public page renders it, with a visible "last updated".
4. Route and navigation — the old page was an orphan nobody linked to, so this
   one gets a link or it will be just as invisible.
5. Discord sign-in, with an opaque session.
6. The personal view: the commands this person can run, per shared guild.

## 7. Open

- **Where the page lives.** `/spacebot` reads better than `/discord-bot`, and
  names the thing rather than the category.
- **Whether it is one page or two.** A long public list plus a personal view
  may want splitting.
- **What "higher level members" means precisely.** SpaceBot's own role model
  should define the tiers; the site should not invent a parallel one.
