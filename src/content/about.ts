import type { AboutInfo } from "./types";
// ABOUT PAGE. Edit text freely. photo.src: "/assets/images/about/me.jpg".
export const about: AboutInfo = {
  "hero": {
    "eyebrow": "the person behind the tabs",
    "headline": "engineer by degree, creative by default.",
    "intro": "I'm {name}. I study computer science engineering, and I also design, make content and think about marketing. This page is the notes I'd tell you in person.",
    "chips": [
      "CSE student",
      "Based in bengaluru, india",
    ],
    "photo": {
      "src": "../assets/images/about/me.jpeg",
      "alt": "",
      "caption": "yup that's my most decent photo"
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
      "text": "To be honest, I don't know. I just like to explore and try new things, and I like to share what I learn.",
      "note": ""
    },
    {
      "heading": "right now",
      "text": "In the middle of some big life changes, and trying to figure out what I want to do next.",
      "note": ""
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
      "text": "Systems design, product thinking, and how to make a business"
    },
    {
      "label": "Building",
      "text": "This portfolio, plus a few other projects"
    },
    {
      "label": "Creating",
      "text": "Content for YouTube  and insta "
    },
    {
      "label": "Exploring",
      "text": "video editing, photography, and creative experiments"
    }
  ],
  "personality": [
    "music & singing",
    "fashion & styling",
    "creative experiments",
    "trying and exploring"
  ],
  "education": "B.Tech, computer science engineering. ",
  "closing": "anyway, that's a little bit of me."
};
