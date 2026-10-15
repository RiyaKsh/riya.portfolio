/**
 * Single entry point for all content. Pages only import from here (via src/site/adapt.ts).
 * To move content to a CMS later, replace these re-exports with fetched data of the same shapes.
 */
export { siteInfo } from "./site";
export { designProjects } from "./design";
export { engineeringProjects, skills } from "./engineering";
export { feedItems, profile } from "./feed";
export { marketingProjects, calendar, capabilities } from "./marketing";
export { about } from "./about";
export { home } from "./home";
export { workFeatured } from "./featured";
