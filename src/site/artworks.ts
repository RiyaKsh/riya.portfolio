import { designArt, decoHtml } from "./artworkData";

export const esc = (s: unknown) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Built-in drawing for a design project, or a simple title tile when none exists. */
export const artFor = (key: string, title: string) =>
  designArt[key] ||
  `<div style="inset:0;background:linear-gradient(135deg,#d9d0f5,#ffe27a)"></div><div style="left:7cqw;right:7cqw;bottom:7cqw;font:700 9cqw/1 'DM Sans';letter-spacing:-.04em;color:#1f1d26">${esc(title)}</div>`;

/** Small doodle shown on marketing boards when a project has no image. */
export const decoFor = (kind: string, text: string) =>
  kind === "idea"
    ? `<p style="font:italic 18px Fraunces,serif;margin-top:8px">${esc(text || "big idea goes here")}</p>`
    : decoHtml[kind] || "";
