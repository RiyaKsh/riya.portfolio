import type { AboutInfo } from "./types";
// ABOUT PAGE. Edit text freely. photo.src: "/assets/images/about/me.jpg".
export const about: AboutInfo = {
  "hero": {
    "eyebrow": "the person behind the tabs",
    "headline": "engineer by degree, creative by default.",
    "intro": "I'm {name}. I study computer science engineering, and I also design, make content and think about marketing. This page is the notes I'd tell you in person.",
    "chips": [
      "CSE student",
      "based in [Add: city]"
    ],
    "photo": {
      "src": "",
      "alt": "",
      "caption": "me, probably mid-sentence"
    }
  },
  "story": [
    {
      "heading": "the degree",
      "text": "I'm a computer science engineering student. I like building software and solving technical problems.",
      "note": "this is the engineer tab"
    },
    {
      "heading": "the visual side",
      "text": "I'm drawn to design, branding and visual storytelling.",
      "note": ""
    },
    {
      "heading": "the creative side",
      "text": "I make content and I'm into fashion, music and creative experiments.",
      "note": "trying new things on camera"
    },
    {
      "heading": "the curious side",
      "text": "I'm curious about marketing and how ideas reach people.",
      "note": ""
    },
    {
      "heading": "why so many tabs",
      "text": "[Add: in your own words, why you explore many disciplines]",
      "note": ""
    },
    {
      "heading": "right now",
      "text": "[Add: one honest sentence about where you are]"
    }
  ],
  "disciplines": [
    {
      "name": "Design",
      "href": "#/design",
      "color": "#d9d0f5",
      "description": "Brands, interfaces and visual systems.",
      "connections": {
        "Engineering": "Good visual design shapes the products I build.",
        "Content": "My visual taste carries into every frame and thumbnail.",
        "Marketing": "Brand and layout choices help ideas land."
      }
    },
    {
      "name": "Engineering",
      "href": "#/engineering",
      "color": "#cfd8e6",
      "description": "Software, AI/ML and security projects.",
      "connections": {
        "Design": "Building things makes me care how they look and feel.",
        "Content": "Engineering life is a big part of what I film.",
        "Marketing": "A product only matters if people find it."
      }
    },
    {
      "name": "Content",
      "href": "#/content",
      "color": "#ffb4a2",
      "description": "Videos, photos and personal storytelling.",
      "connections": {
        "Design": "Editing and framing are design work.",
        "Engineering": "Content explains technical ideas to real people.",
        "Marketing": "Content is how ideas travel."
      }
    },
    {
      "name": "Marketing",
      "href": "#/marketing",
      "color": "#ffd0e6",
      "description": "Strategy, brand and campaign thinking.",
      "connections": {
        "Design": "Strategy gives visual choices a purpose.",
        "Engineering": "Marketing helps what I build reach an audience.",
        "Content": "Content is the campaign people actually see."
      }
    }
  ],
  "currently": [
    {
      "label": "Learning",
      "text": "[Add: what you're learning]"
    },
    {
      "label": "Building",
      "text": "This portfolio, plus [Add: anything else]"
    },
    {
      "label": "Creating",
      "text": "[Add: current content]"
    },
    {
      "label": "Exploring",
      "text": "[Add: a side quest]"
    }
  ],
  "personality": [
    "music & singing",
    "fashion & styling",
    "creative experiments",
    "[Add: more things you love]"
  ],
  "education": "B.Tech, computer science engineering. [Add: college and year]",
  "closing": "anyway, that's a little bit of me."
};
