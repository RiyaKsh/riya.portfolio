/**
 * Turns the friendly content files into the shapes the page templates use,
 * and supplies fallbacks for missing optional fields (images, aspect ratios, URLs).
 */
import * as C from "../content";
import { artFor, decoFor, esc } from "./artworks";

export const imgTag = (src: string, alt: string) =>
  src ? `<img class="cimg" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : "";
const aspect = (a: string, d: string) => (/^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/.test(a || "") ? a : d);
const ytUrl = (id: string) => (id ? `https://www.youtube.com/watch?v=${encodeURIComponent(id)}` : "");

const s = C.siteInfo;
export const ME = {
  name: s.name, email: s.email, avail: s.availability, resume: s.resumeUrl || "#",
  socials: s.socials.map((x) => [x.label, x.url || "#"]),
};

export const DZ = C.designProjects.map((p) => ({
  id: p.id, t: p.title, cat: p.categories.join(" "), lab: "▢ " + p.label, d: p.description,
  c: p.layout.column, mt: p.layout.offsetTop, r: p.layout.rotate, a: aspect(p.layout.aspect, "4/3"),
  tools: p.tools, pal: p.palette, type: p.typeNote, an: p.note || "", cs: p.caseStudy, featured: p.featured,
  pv: p.image ? imgTag(p.image, p.imageAlt || p.title) : artFor(p.artwork, p.title),
}));

export const ENG = C.engineeringProjects.map((p) => ({
  id: p.id, f: p.folder, t: p.title, sub: p.subtitle, cat: p.categories.join(" "), status: p.status,
  tools: p.tools, flow: p.flow, links: p.links.map((l) => [l.label, l.url]), sum: p.summary,
  problem: p.problem, users: p.users, role: p.role, dec: p.decisions.map((d) => [d.title, d.body]),
  challenges: p.challenges, learn: p.learnings, featured: p.featured, img: imgTag(p.image, p.imageAlt || p.title),
}));
// the featured project (or the first one) leads the Engineering page
ENG.sort((a, b) => Number(b.featured) - Number(a.featured));
export const SK = C.skills;

const KIND: Record<string, string> = { youtube: "yt", short: "short", photo: "photo", archive: "exp" };
export const I = C.feedItems.map((x) => ({
  k: KIND[x.type] || "photo", t: x.title, cat: x.category, dur: x.duration || "",
  a: aspect(x.aspect, x.type === "short" ? "9/16" : x.type === "youtube" ? "16/9" : "1/1"),
  c: x.colors && x.colors.length === 2 ? x.colors : ["#444", "#111"], x: x.coverText || "",
  url: x.url || ytUrl(x.youtubeId), n: x.note || "", w: x.width || "240px", r: x.rotate || "0deg",
  img: imgTag(x.thumbnail, x.thumbnailAlt || x.title), platform: x.platform,
}));
const pr = C.profile;
export const CT = {
  handle: pr.handle, bio: pr.bio, yt: pr.youtubeUrl, ig: pr.instagramUrl,
  stats: pr.stats.map((x) => [x.label, x.value]), avatar: imgTag(pr.avatar.src, pr.avatar.alt || "Profile photo"),
};

export const MK = C.marketingProjects.map((p) => ({
  id: p.id, t: p.title, cat: p.categories.join(" "), kind: p.kind, bg: p.background, r: p.rotate,
  obj: p.objective, aud: p.audience, how: p.approach,
  deco: p.image ? `<div class="art" style="--a:4/3;margin-top:8px">${imgTag(p.image, p.imageAlt || p.title)}</div>` : decoFor(p.decoration, p.decorationText),
  img: p.image ? imgTag(p.image, p.imageAlt || p.title) : "",
  cs: p.caseStudy.map((c) => [c.section, c.status, c.text]),
}));
export const CAL = C.calendar.map((c) => [c.day, c.pillar, c.idea]);
export const CAPS = C.capabilities.map((c) => [c]);

export const NOW = C.home.currently.map((c) => [c.label, c.text]);
export const ROT = C.home.rotating;
export const ABOUT = C.about;
export const DISC = C.about.disciplines.map((d) => ({ k: d.name, h: d.href, c: d.color, d: d.description, to: d.connections }));
export const AN = C.about.currently.map((c) => [c.label, c.text]);
export const ABS = C.about.story.map((x) => [x.heading, x.text, x.note || ""]);
export const FEAT = C.workFeatured.map((f) => ({ d: f.section, id: f.id, type: f.projectType || "" }));
