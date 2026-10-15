/**
 * Checks content for common mistakes and prints warnings in the browser console (dev mode only).
 * It never blocks the site: missing optional data falls back to placeholders or built-in artwork.
 */
import * as C from "./index";

export function validateContent(): string[] {
  const w: string[] = [];
  const dupes = (name: string, ids: string[]) => {
    const seen = new Set<string>();
    ids.forEach((id) => { if (!id) w.push(`${name}: an entry has no id`); else if (seen.has(id)) w.push(`${name}: duplicate id "${id}"`); seen.add(id); });
  };
  const asp = /^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/;
  const url = (where: string, u: string) => { if (u && !/^(https?:\/\/|mailto:|#)/.test(u)) w.push(`${where}: "${u}" should start with https://`); };
  const img = (where: string, src: string, alt: string) => {
    if (!src) return;
    if (!src.startsWith("/assets/")) w.push(`${where}: image "${src}" should start with /assets/ (put files in public/assets/...)`);
    if (!alt) w.push(`${where}: image has no alt text (the title will be used)`);
  };

  dupes("design", C.designProjects.map((p) => p.id));
  dupes("engineering", C.engineeringProjects.map((p) => p.id));
  dupes("marketing", C.marketingProjects.map((p) => p.id));
  dupes("feed", C.feedItems.map((p) => p.id));
  if (C.designProjects.length < 3) w.push("design: add at least 3 projects so the hero previews fill up");
  if (!C.feedItems.length) w.push("feed: add at least one item");
  if (!C.engineeringProjects.length) w.push("engineering: add at least one project");
  if (!C.marketingProjects.length) w.push("marketing: add at least one project");

  C.designProjects.forEach((p) => {
    if (!p.title) w.push(`design ${p.id}: missing title`);
    if (p.layout.aspect && !asp.test(p.layout.aspect)) w.push(`design ${p.id}: aspect "${p.layout.aspect}" should look like 4/3`);
    img(`design ${p.id}`, p.image, p.imageAlt);
    p.caseStudy.explorations.concat(p.caseStudy.finalDesigns).forEach((c) => img(`design ${p.id} case study`, c.image, c.alt));
  });
  C.engineeringProjects.forEach((p) => { img(`engineering ${p.id}`, p.image, p.imageAlt); p.links.forEach((l) => url(`engineering ${p.id}`, l.url)); });
  C.marketingProjects.forEach((p) => img(`marketing ${p.id}`, p.image, p.imageAlt));
  C.feedItems.forEach((x) => {
    if (x.aspect && !asp.test(x.aspect)) w.push(`feed ${x.id}: aspect "${x.aspect}" should look like 16/9`);
    if (!["youtube", "short", "photo", "archive"].includes(x.type)) w.push(`feed ${x.id}: unknown type "${x.type}"`);
    url(`feed ${x.id}`, x.url); img(`feed ${x.id}`, x.thumbnail, x.thumbnailAlt);
  });
  C.siteInfo.socials.forEach((s) => url(`social ${s.label}`, s.url));
  url("profile youtube", C.profile.youtubeUrl); url("profile instagram", C.profile.instagramUrl);
  if (!/.+@.+\..+/.test(C.siteInfo.email)) w.push("site: email looks invalid");
  if (C.siteInfo.email.includes("example.com")) w.push("site: replace the placeholder email in src/content/site.ts");

  const ok = (sec: string, id: string) =>
    sec === "content" || (sec === "design" ? C.designProjects : sec === "engineering" ? C.engineeringProjects : C.marketingProjects).some((p) => p.id === id);
  C.workFeatured.forEach((f) => { if (!ok(f.section, f.id)) w.push(`featured: no ${f.section} project with id "${f.id}" (it will be skipped)`); });

  if (typeof console !== "undefined") w.forEach((m) => console.warn("[content] " + m));
  return w;
}
