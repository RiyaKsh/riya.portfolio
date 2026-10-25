import type { FeedItem, CreatorProfile } from "./types";
// YOUTUBE / REELS / PHOTOS / ARCHIVE feed
// Add, remove or reorder entries freely. Order here = order on the page.
// Leave "image" empty to use the built-in artwork. Put photos in public/assets/images/... and use "/assets/images/...".
// type: "youtube" (16:9) | "short" (9:16 Reels/Shorts) | "photo" (Instagram grid) | "archive" (scrapbook).
// To link a YouTube video: set youtubeId ("dQw4w9WgXcQ") or paste the full url. For Instagram: paste the post url.
// thumbnail: "/assets/images/content/my-video.jpg" (+ thumbnailAlt). Without it, colours + coverText make the cover.
// aspect: "16/9", "9/16", "1/1", "4/5"... Items with no url open a small viewer instead.
export const profile: CreatorProfile = {
  "handle": "@itsriyy",
  "bio": "fits, feelings, films & figuring it out.",
  "youtubeUrl": "",
  "instagramUrl": "",
  "stats": [],
  "avatar": {
    "src": "",
    "alt": ""
  }
};
// stats example: [{ label: "subscribers", value: "1.2K" }]. Only add numbers that are real.

export const feedItems: FeedItem[] = [
  {
    "id": "youtube-1",
    "type": "youtube",
    "title": "a week in my engineering college life",
    "category": "College life",
    "platform": "YouTube",
    "url": "",
    "youtubeId": "",
    "duration": "12:04",
    "aspect": "",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "week in my life",
    "colors": [
      "#c46a5a",
      "#3a1f2e"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "youtube-2",
    "type": "youtube",
    "title": "GRWM for a very long day",
    "category": "GRWM",
    "platform": "YouTube",
    "url": "",
    "youtubeId": "",
    "duration": "8:31",
    "aspect": "",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "grwm",
    "colors": [
      "#c3b1ff",
      "#5b3f8f"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "youtube-3",
    "type": "youtube",
    "title": "monsoon, but cinematic",
    "category": "Cinematic vlog",
    "platform": "YouTube",
    "url": "",
    "youtubeId": "",
    "duration": "6:47",
    "aspect": "",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "monsoon",
    "colors": [
      "#5e7a7a",
      "#1d2a33"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "youtube-4",
    "type": "youtube",
    "title": "I tried something new for 7 days",
    "category": "Challenge",
    "platform": "YouTube",
    "url": "",
    "youtubeId": "",
    "duration": "14:20",
    "aspect": "",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "7 days",
    "colors": [
      "#ffe27a",
      "#c47a2a"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "youtube-5",
    "type": "youtube",
    "title": "singing at 2am",
    "category": "Music",
    "platform": "YouTube",
    "url": "",
    "youtubeId": "",
    "duration": "4:15",
    "aspect": "",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "2am",
    "colors": [
      "#2a2a5e",
      "#0f0f24"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "youtube-6",
    "type": "youtube",
    "title": "romanticising my life",
    "category": "Lifestyle",
    "platform": "YouTube",
    "url": "",
    "youtubeId": "",
    "duration": "9:02",
    "aspect": "",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "romanticise it",
    "colors": [
      "#e9a5b5",
      "#7a3f55"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "short-1",
    "type": "short",
    "title": "GRWM",
    "category": "GRWM",
    "platform": "Reels / Shorts",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "9/16",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "grwm",
    "colors": [
      "#c3b1ff",
      "#5b3f8f"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "short-2",
    "type": "short",
    "title": "outfit transition",
    "category": "Transition",
    "platform": "Reels / Shorts",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "9/16",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "fit change",
    "colors": [
      "#ffe27a",
      "#c46a5a"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "short-3",
    "type": "short",
    "title": "relatable college moment",
    "category": "College",
    "platform": "Reels / Shorts",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "9/16",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "every exam week",
    "colors": [
      "#6a8caf",
      "#1d2433"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "short-4",
    "type": "short",
    "title": "mini story",
    "category": "Story",
    "platform": "Reels / Shorts",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "9/16",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "story time",
    "colors": [
      "#a2556a",
      "#2a1426"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "short-5",
    "type": "short",
    "title": "quick experiment",
    "category": "Experiment",
    "platform": "Reels / Shorts",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "9/16",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "tried it",
    "colors": [
      "#8da07c",
      "#2a3a24"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "photo-1",
    "type": "photo",
    "title": "fit check",
    "category": "Fashion",
    "platform": "Instagram",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "4/5",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "fit check",
    "colors": [
      "#d9d0f5",
      "#8b6cf0"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "photo-2",
    "type": "photo",
    "title": "golden hour",
    "category": "Lifestyle",
    "platform": "Instagram",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "1/1",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "",
    "colors": [
      "#ffd27a",
      "#c4572a"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "photo-3",
    "type": "photo",
    "title": "campus",
    "category": "College",
    "platform": "Instagram",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "1/1",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "",
    "colors": [
      "#7a9e8a",
      "#2a3d33"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "photo-4",
    "type": "photo",
    "title": "behind the scenes",
    "category": "BTS",
    "platform": "Instagram",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "4/5",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "bts",
    "colors": [
      "#444",
      "#111"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "photo-5",
    "type": "photo",
    "title": "cinematic still",
    "category": "Cinematic",
    "platform": "Instagram",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "16/9",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "",
    "colors": [
      "#3a5e7a",
      "#101826"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "photo-6",
    "type": "photo",
    "title": "photo dump",
    "category": "Photo dump",
    "platform": "Instagram",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "1/1",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "dump",
    "colors": [
      "#e9a5b5",
      "#ffe27a"
    ],
    "note": "",
    "width": "",
    "rotate": ""
  },
  {
    "id": "archive-1",
    "type": "archive",
    "title": "favourite frame",
    "category": "Archive",
    "platform": "Archive",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "4/3",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "favourite frame",
    "colors": [
      "#c46a5a",
      "#3a1f2e"
    ],
    "note": "favourite frame #1",
    "width": "240px",
    "rotate": "-3deg"
  },
  {
    "id": "archive-2",
    "type": "archive",
    "title": "idea in progress",
    "category": "Archive",
    "platform": "Archive",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "1/1",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "idea?",
    "colors": [
      "#c3b1ff",
      "#3b3360"
    ],
    "note": "unfinished idea",
    "width": "200px",
    "rotate": "2deg"
  },
  {
    "id": "archive-3",
    "type": "archive",
    "title": "film test",
    "category": "Archive",
    "platform": "Archive",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "3/4",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "film test",
    "colors": [
      "#5e7a7a",
      "#1d2a33"
    ],
    "note": "35mm look test",
    "width": "190px",
    "rotate": "-1deg"
  },
  {
    "id": "archive-4",
    "type": "archive",
    "title": "voice note",
    "category": "Archive",
    "platform": "Archive",
    "url": "",
    "youtubeId": "",
    "duration": "",
    "aspect": "4/3",
    "thumbnail": "",
    "thumbnailAlt": "",
    "coverText": "a song draft",
    "colors": [
      "#ffe27a",
      "#c47a2a"
    ],
    "note": "song draft",
    "width": "250px",
    "rotate": "3deg"
  }
];
