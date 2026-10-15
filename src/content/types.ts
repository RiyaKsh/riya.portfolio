/** Shapes of every content file. TypeScript will underline mistakes while you edit. */
export interface Social { label: string; url: string }
export interface SiteInfo { name: string; email: string; availability: string; resumeUrl: string; socials: Social[] }
export interface CaseImage { caption: string; image: string; alt: string }
export interface DesignProject {
  id: string; title: string; categories: string[]; label: string; description: string;
  tools: string; palette: string[]; typeNote: string; note?: string;
  layout: { column: string; offsetTop: string; rotate: string; aspect: string };
  artwork: string; image: string; imageAlt: string; featured: boolean;
  caseStudy: { brief: string; direction: string; explorations: CaseImage[]; finalDesigns: CaseImage[]; takeaways: string; liveUrl?: string };
}
export interface EngineeringProject {
  id: string; folder: string; title: string; subtitle: string; categories: string[]; status: string;
  tools: string[]; flow: string[]; links: { label: string; url: string }[]; summary: string;
  problem: string; users: string; role: string; decisions: { title: string; body: string }[];
  challenges: string; learnings: string; image: string; imageAlt: string; featured: boolean;
}
export type FeedType = "youtube" | "short" | "photo" | "archive";
export interface FeedItem {
  id: string; type: FeedType; title: string; category: string; platform: string; url: string; youtubeId: string;
  duration: string; aspect: string; thumbnail: string; thumbnailAlt: string; coverText: string;
  colors: [string, string]; note: string; width: string; rotate: string;
}
export interface CreatorProfile {
  handle: string; bio: string; youtubeUrl: string; instagramUrl: string;
  stats: { label: string; value: string }[]; avatar: { src: string; alt: string };
}
export interface MarketingProject {
  id: string; title: string; categories: string[]; kind: "Completed work" | "Concept"; background: string; rotate: string;
  objective: string; audience: string; approach: string; decoration: "" | "site" | "swatches" | "idea"; decorationText: string;
  image: string; imageAlt: string; caseStudy: { section: string; status: "d" | "p" | "n" | "a"; text: string }[];
}
export interface CalendarDay { day: string; pillar: string; idea: string }
export interface AboutInfo {
  hero: { eyebrow: string; headline: string; intro: string; chips: string[]; photo: { src: string; alt: string; caption: string } };
  story: { heading: string; text: string; note: string }[];
  disciplines: { name: string; href: string; color: string; description: string; connections: Record<string, string> }[];
  currently: { label: string; text: string }[];
  personality: string[]; education: string; closing: string;
}
export interface HomeInfo { currently: { label: string; text: string }[]; rotating: string[] }
export interface FeaturedRef { section: "design" | "engineering" | "marketing" | "content"; id: string; projectType: string }
