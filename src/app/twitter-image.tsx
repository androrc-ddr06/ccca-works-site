// Reuse the same branded card for X/Twitter previews.
// `runtime` is route-segment config and must be declared directly (not re-exported).
export const runtime = "nodejs";
export { default, alt, size, contentType } from "./opengraph-image";
