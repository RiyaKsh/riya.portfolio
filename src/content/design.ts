import type { DesignProject } from "./types";
// DESIGN PROJECTS and their case studies
// Add, remove or reorder entries freely. Order here = order on the page.
// Leave "image" empty to use the built-in artwork. Put photos in public/assets/images/... and use "/assets/images/...".
// layout.column is a CSS grid-column on the 12-column canvas, e.g. "1 / span 7". Mobile ignores it.
// artwork: key of a built-in drawing in src/site/artworks.ts. If empty and no image, a simple title tile is shown.
export const designProjects: DesignProject[] = [
  {
    "id": "artist",
    "title": "Artist branding",
    "categories": [
      "brand"
    ],
    "label": "Brand identity",
    "description": "A warm, nostalgic identity and promo artwork for a musician.",
    "tools": "Illustrator, Figma",
    "palette": [
      "#e9d3b4",
      "#b4573a",
      "#4a2f27",
      "#f6ecda"
    ],
    "typeNote": "Display serif + humanist sans [Add: confirm your pairing]",
    "note": "this one's a personal favourite ♥",
    "layout": {
      "column": "1 / span 7",
      "offsetTop": "0",
      "rotate": "-.8deg",
      "aspect": "16/11"
    },
    "artwork": "artist",
    "image": "",
    "imageAlt": "",
    "featured": false,
    "caseStudy": {
      "brief": "[Add: what the project was and who it was for]",
      "direction": "[Add: the idea, the mood, and 2–3 design decisions with reasons]",
      "explorations": [
        {
          "caption": "[Add: sketch / early direction]",
          "image": "",
          "alt": ""
        },
        {
          "caption": "[Add: iteration or rejected idea]",
          "image": "",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "[Add: final mockups: replace with your images]",
          "image": "",
          "alt": ""
        }
      ],
      "takeaways": "[Add: what you learned or would do next]",
      "liveUrl": ""
    }
  },
  {
    "id": "cafe",
    "title": "Café branding",
    "categories": [
      "brand",
      "web"
    ],
    "label": "Flowers & books",
    "description": "A soft, romantic identity set in ARYA, with menu and landing page.",
    "tools": "Illustrator, Figma",
    "palette": [
      "#f3e0e0",
      "#c46a82",
      "#5b2a3a",
      "#e8e1c9"
    ],
    "typeNote": "ARYA (display) + a quiet sans [Add: body font]",
    "note": "ARYA, chosen on purpose",
    "layout": {
      "column": "8 / span 5",
      "offsetTop": "60px",
      "rotate": "1deg",
      "aspect": "4/5"
    },
    "artwork": "cafe",
    "image": "",
    "imageAlt": "",
    "featured": false,
    "caseStudy": {
      "brief": "[Add: what the project was and who it was for]",
      "direction": "[Add: the idea, the mood, and 2–3 design decisions with reasons]",
      "explorations": [
        {
          "caption": "[Add: sketch / early direction]",
          "image": "",
          "alt": ""
        },
        {
          "caption": "[Add: iteration or rejected idea]",
          "image": "",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "[Add: final mockups: replace with your images]",
          "image": "",
          "alt": ""
        }
      ],
      "takeaways": "[Add: what you learned or would do next]",
      "liveUrl": ""
    }
  },
  {
    "id": "riywears",
    "title": "Riywears",
    "categories": [
      "brand",
      "web"
    ],
    "label": "Fashion brand",
    "description": "A Gen Z fashion brand: identity, e-commerce site and campaign direction.",
    "tools": "Figma",
    "palette": [
      "#d9d0f5",
      "#faf6ee",
      "#ffe27a",
      "#1f1d26"
    ],
    "typeNote": "[Add: Riywears typefaces]",
    "note": "",
    "layout": {
      "column": "1 / span 7",
      "offsetTop": "10px",
      "rotate": "-.5deg",
      "aspect": "16/11"
    },
    "artwork": "riywears",
    "image": "",
    "imageAlt": "",
    "featured": false,
    "caseStudy": {
      "brief": "[Add: what the project was and who it was for]",
      "direction": "[Add: the idea, the mood, and 2–3 design decisions with reasons]",
      "explorations": [
        {
          "caption": "[Add: sketch / early direction]",
          "image": "",
          "alt": ""
        },
        {
          "caption": "[Add: iteration or rejected idea]",
          "image": "",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "[Add: final mockups: replace with your images]",
          "image": "",
          "alt": ""
        }
      ],
      "takeaways": "[Add: what you learned or would do next]",
      "liveUrl": ""
    }
  },
  {
    "id": "travel",
    "title": "Travel app",
    "categories": [
      "ui"
    ],
    "label": "UI / UX",
    "description": "A mobile travel planning concept with flows and components.",
    "tools": "Figma",
    "palette": [
      "#dff1ff",
      "#2f7fd1",
      "#1f1d26",
      "#ffe27a"
    ],
    "typeNote": "[Add: app typefaces]",
    "note": "",
    "layout": {
      "column": "8 / span 5",
      "offsetTop": "40px",
      "rotate": "1deg",
      "aspect": "1/1"
    },
    "artwork": "travel",
    "image": "",
    "imageAlt": "",
    "featured": false,
    "caseStudy": {
      "brief": "[Add: what the project was and who it was for]",
      "direction": "[Add: the idea, the mood, and 2–3 design decisions with reasons]",
      "explorations": [
        {
          "caption": "[Add: sketch / early direction]",
          "image": "",
          "alt": ""
        },
        {
          "caption": "[Add: iteration or rejected idea]",
          "image": "",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "[Add: final mockups: replace with your images]",
          "image": "",
          "alt": ""
        }
      ],
      "takeaways": "[Add: what you learned or would do next]",
      "liveUrl": ""
    }
  },
  {
    "id": "portfolio",
    "title": "This portfolio",
    "categories": [
      "web"
    ],
    "label": "Web design",
    "description": "Four portfolios under one playful personal homepage.",
    "tools": "HTML, CSS, JS",
    "palette": [
      "#faf6ee",
      "#d9d0f5",
      "#ffe27a",
      "#1f1d26"
    ],
    "typeNote": "DM Sans + Fraunces",
    "note": "",
    "layout": {
      "column": "1 / span 5",
      "offsetTop": "0",
      "rotate": "-1deg",
      "aspect": "4/3"
    },
    "artwork": "portfolio",
    "image": "",
    "imageAlt": "",
    "featured": false,
    "caseStudy": {
      "brief": "[Add: what the project was and who it was for]",
      "direction": "[Add: the idea, the mood, and 2–3 design decisions with reasons]",
      "explorations": [
        {
          "caption": "[Add: sketch / early direction]",
          "image": "",
          "alt": ""
        },
        {
          "caption": "[Add: iteration or rejected idea]",
          "image": "",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "[Add: final mockups: replace with your images]",
          "image": "",
          "alt": ""
        }
      ],
      "takeaways": "[Add: what you learned or would do next]",
      "liveUrl": ""
    }
  },
  {
    "id": "dashboard",
    "title": "Creator dashboard",
    "categories": [
      "ui"
    ],
    "label": "Product UI",
    "description": "A dashboard concept: data viz, components and interface states.",
    "tools": "Figma",
    "palette": [
      "#17141f",
      "#b9e6c9",
      "#bfb3f2",
      "#ffe27a"
    ],
    "typeNote": "[Add: dashboard typefaces]",
    "note": "",
    "layout": {
      "column": "6 / span 7",
      "offsetTop": "50px",
      "rotate": ".6deg",
      "aspect": "16/10"
    },
    "artwork": "dashboard",
    "image": "",
    "imageAlt": "",
    "featured": false,
    "caseStudy": {
      "brief": "[Add: what the project was and who it was for]",
      "direction": "[Add: the idea, the mood, and 2–3 design decisions with reasons]",
      "explorations": [
        {
          "caption": "[Add: sketch / early direction]",
          "image": "",
          "alt": ""
        },
        {
          "caption": "[Add: iteration or rejected idea]",
          "image": "",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "[Add: final mockups: replace with your images]",
          "image": "",
          "alt": ""
        }
      ],
      "takeaways": "[Add: what you learned or would do next]",
      "liveUrl": ""
    }
  }
];
