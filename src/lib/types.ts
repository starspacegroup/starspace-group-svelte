import type { ColorVariant } from "flowbite-svelte"

/** A coloured pill on a project or sister-space card. `color` has to be one of
 *  flowbite's variants, not any string — inline literals were widening to
 *  `string` and failing the Badge prop. */
export type Tag = { title: string; color: ColorVariant }
