// three@0.168 ships no type declarations of its own, and @types/three is not a
// dependency of this project. Without this, svelte-check fails every run with
// "Could not find a declaration file for module 'three'" from the
// physics-and-audio draft — one permanent error that trains everyone to ignore
// the other ones.
//
// This declares the gap instead of hiding it: `three` is untyped here on
// purpose. To get real types, add the matching @types/three and delete this
// file. Do not add other module shims here to quiet unrelated errors.
declare module "three"
