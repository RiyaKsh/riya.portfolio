# Riya — one girl, too many tabs open

Portfolio built with **React 18 + TypeScript + Vite + React Router**. Content lives in simple data files, so you can add projects, photos and videos without touching the page layouts.

## How it is organised
```
src/
  content/            YOUR CONTENT (edit these)
    site.ts             name, email, availability, résumé, social links
    about.ts            About page: bio, story notes, disciplines, currently, personality
    design.ts           design projects + case studies
    engineering.ts      engineering projects + skills
    feed.ts             YouTube, Reels/Shorts, photos, archive + creator profile
    marketing.ts        marketing projects, content calendar, capabilities
    featured.ts         featured work shown on the Work page
    home.ts             "currently" window on the homepage
    types.ts            the shape of every entry (your editor underlines mistakes)
    validate.ts         checks content and warns in the browser console (dev only)
    index.ts            single entry point (swap this layer to plug in a CMS later)
  site/               PRESENTATION (you rarely need to edit)
    siteEngine.ts       page layouts and interactions
    adapt.ts            turns content into what the layouts need, with fallbacks
    artworks.ts, artworkData.ts   built-in drawn artwork used when a project has no photo
  components/         Header and PageView (React)
  styles/styles.css
public/assets/images/  your photos (see public/assets/README.md)
```
The four portfolios keep their own layouts. Content only fills them in.

## Run locally
Requires Node.js 18+.
```bash
npm install
npm run dev        # http://localhost:5173  (content warnings appear in the browser console)
npm run build      # production build into dist/
npm run preview    # test the production build
```

## Add a project
1. Open the right file: `design.ts`, `engineering.ts` or `marketing.ts`.
2. Copy an existing entry, paste it at the end of the list, and change `id` (unique, lowercase, dashes), `title`, description and other fields.
3. Save. The project appears on its portfolio page, in filters, and gets its own case-study page at `/#/design/your-id`.
4. **Reorder** projects by moving entries up or down in the list.

Design entries: `categories` (e.g. `["brand","web"]`), `palette` (hex colours), `layout.column` (grid position on desktop, e.g. `"1 / span 7"`), and `caseStudy` (brief, direction, explorations, finalDesigns, takeaways, optional `liveUrl`).
Engineering entries: `categories` use `sw`, `ai`, `sec`. `flow` draws the data-flow diagram. `links` takes GitHub and demo URLs. The first project with `featured: true` leads the page.
Marketing entries: `kind` is `"Completed work"` or `"Concept"`. Each `caseStudy` row has a `status`: `d` done, `p` proposed, `n` not measured yet, `a` to add.

If a project has no image and no `artwork`, a simple title tile is shown, so nothing breaks.

## Add or replace images
1. Put the file in `public/assets/images/<folder>/` (e.g. `public/assets/images/design/cafe-menu.jpg`).
2. In the entry, set `image: "/assets/images/design/cafe-menu.jpg"` and `imageAlt: "Menu design for the café"`.
3. To go back to the built-in artwork, set `image: ""`.

Image fields: design projects (`image`, plus `image` in each case-study exploration/final design), engineering (`image`, shown in the Architecture tab), marketing (`image`), feed items (`thumbnail`), creator avatar (`profile.avatar.src`), About portrait (`about.hero.photo.src`).

## Add a YouTube video or Instagram post
In `src/content/feed.ts`, add an entry to `feedItems`:
```ts
{ id: "youtube-7", type: "youtube", title: "My new vlog", category: "Vlog", platform: "YouTube",
  youtubeId: "dQw4w9WgXcQ",            // or url: "https://www.youtube.com/watch?v=..."
  duration: "10:24", aspect: "16/9",
  thumbnail: "/assets/images/content/new-vlog.jpg", thumbnailAlt: "Me walking through the city",
  coverText: "", colors: ["#c46a5a", "#3a1f2e"], note: "", width: "", rotate: "" }
```
- `type`: `youtube` (16:9 grid), `short` (9:16 Reels/Shorts), `photo` (photo dump), `archive` (scrapbook).
- Instagram post: set `url` to the post link and `type` to `photo` or `short`.
- Without `thumbnail`, the tile uses `colors` + `coverText`. Without a `url`, clicking opens a small viewer instead of a dead link.
- Put your handle, bio and profile links in `profile` at the top of the same file. Only add `stats` that are real.

## Update bio and social links
- Social links, email, résumé: `src/content/site.ts`. Empty links show an `[Add … link]` reminder.
- About page text: `src/content/about.ts`.
- Anything shown in yellow as `[Add: …]` is a placeholder to replace.

## Change featured projects
Edit `src/content/featured.ts`. Each row is `{ section, id, projectType }`. The order is the order on the Work page. Rows pointing to a missing id are skipped (and flagged in the console).

## Push to GitHub and deploy on Vercel
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
In [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects Vite (Build `npm run build`, Output `dist`). After that, every update is:
```bash
git add . && git commit -m "Add new project" && git push
```
Vercel redeploys automatically.

## Notes
- Routing uses `HashRouter`, so addresses look like `yoursite.com/#/design/cafe`. Direct visits and refreshes work with no server setup.
- The Contact page has no backend; it opens the visitor's email app.
- Replace `you@example.com` in `src/content/site.ts` before publishing.
- Fonts load from Google Fonts.
- Future CMS: keep the shapes in `src/content/types.ts` and change `src/content/index.ts` to load data from the CMS. The layouts do not change.
# riya.portfolio
