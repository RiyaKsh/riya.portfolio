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
    "tools": "Figma",
    "palette": [
      "#E6D4B7",
      "#6F7A5C",
      "#5A4636",
      "#E8BB59",
      "#D88A6A"
    ],
    "typeNote": "Libre Baskerville + Inter",
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
      "brief": "A branding exploration for an independent music artist, built around the idea of translating sound and emotion into a visual identity. The project captures a world that feels calm, nostalgic, intimate and deeply personal.",
      "direction": "Rooted in warmth and nostalgia, the visual identity uses soft, earthy tones, thoughtful typography and understated visual elements. Every design choice was made to create a sense of intimacy and timelessness, reflecting the artist's personality and musical expression.",
      "explorations": [
        {
          "caption": "moodboards",
          "image": "./assets/images/design/moodboards.png",
          "alt": ""
        },
        {
          "caption": "colours and typography",
          "image": "./assets/images/design/colntypo.png",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "final identity and promo artwork",
          "image": "./assets/images/design/final.png",
          "alt": ""
        }
      ],
      "takeaways": "This project taught me how to translate an abstract identity into a cohesive visual language. Beyond creating individual design assets, I explored how colours, typography and imagery can come together to tell a story and build a recognisable brand.",
      "liveUrl": "https://www.figma.com/design/4YsozkRYPr8tPaVAksdelX/Artist-Branding?node-id=12-110&t=u8Wv0CYw7YspJr9r-1"
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
      "#382A1E",
      "#E0CCB1",
      "#F1E4D1",
      "#C49F72",
      "#AE6964",
      "#D1AAA5",
      "#7A826D"
    ],
    "typeNote": "ARYA (Logo) + Playfair + Inter",
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
      "brief": "A café concept designed around the idea of exploring hobbies and discovering new interests. A space where people can step away from their routines, enjoy a cup of coffee and try something new — from pottery and journaling to reading and floral arrangements.",
      "direction": "The visual identity draws inspiration from creativity, self-expression and the little joys of everyday life. With warm colours, playful yet minimal typography and an inviting aesthetic, the branding reflects a space that feels welcoming, curious and full of possibilities.",
      "explorations": [
        {
          "caption": "moodboard",
          "image": "./assets/images/design/moodboard-cafe.png",
          "alt": ""
        },
        {
          "caption": "the original website",
          "image": "./assets/images/design/og-des.png",
          "alt": ""
        }
      ],
      "finalDesigns": [
        {
          "caption": "final identity, menu and landing page",
          "image": "./assets/images/design/final-cafe.png",
          "alt": ""
        }
      ],
      "takeaways": "This project allowed me to explore branding beyond a product or service, focusing instead on an experience. I learned how visual identity can communicate a brand's philosophy and create an emotional connection with the people it brings together.",
      "liveUrl": "https://www.figma.com/design/ajJHXi51e6ep2OG6S3rZmc/ATELIER?node-id=136-52&t=8U9qC2GAbpMiTtTI-1"
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
      "#8460CA",
      "#FFFDF1",
      "#FCFFBC",
      "#1f1d26"
    ],
    "typeNote": "Poppins",
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
      "brief": "Riywears is a contemporary ethnic wear brand celebrating everyday Indian fashion through thoughtfully designed kurtis. The concept focuses on making traditional silhouettes feel fresh, versatile and effortlessly stylish for the modern woman.",
      "direction": "The visual identity embraces a soft, feminine aesthetic with pastel lavender, warm whites and subtle pops of yellow. Clean typography and minimal design elements bring a modern touch while retaining the warmth and charm of ethnic fashion.",
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
          "caption": "final landing page",
          "image": "./assets/images/design/final-wears.png",
          "alt": ""
        }
      ],
      "takeaways": "This project helped me explore how to build a visual identity that balances tradition with modern aesthetics. From defining the brand's personality to translating it into a cohesive visual language, I learned how design can shape the way a fashion brand is perceived.",
      "liveUrl": "https://www.figma.com/design/Wk6K5dM5vAlxRpUvhDxY2W/riywears?node-id=0-1&t=I6kEP9NPlaXbsyNR-1"
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
      "#47622A",
      "#FFFEFE",
      "#1f1d26"
    ],
    "typeNote": "Fredoka(logo) + Inter",
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
      "brief": "MaCity is a travel app concept designed to make exploring new cities easier, more engaging and more personal. The idea is to help travellers discover places, find experiences and navigate unfamiliar destinations through one seamless platform.",
      "direction": "The design focuses on a clean, intuitive and user-friendly experience. A modern interface, thoughtful layouts and visually engaging elements make discovering destinations feel effortless, while keeping navigation simple and accessible.",
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
          "image": "./assets/images/design/final-travel.png",
          "alt": ""
        }
      ],
      "takeaways": "This project helped me understand how to design around user needs while balancing functionality with aesthetics. I explored information architecture, user flows and UI consistency to create an experience that makes travel planning feel less overwhelming and more exciting.",
      "liveUrl": "https://www.figma.com/design/vLS83UpqLhANbOSybqn9ir/MaCity?node-id=0-1&t=v1JqemGGFIzYRUUQ-1"
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
      "brief": "A personal portfolio bringing together four different creative and professional interests — software development, UI/UX design, content creation and marketing — under one digital space. Built around the idea of being one person with too many tabs open, the portfolio is a reflection of my curiosity and the different ways I love to create.",
      "direction": "Designed to feel like an interactive digital workspace, the experience takes inspiration from a laptop interface. Each interest has its own visual identity, layout and personality, while maintaining a cohesive overall design language. The goal was to make exploring my work feel intuitive, playful and personal.",
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
          "caption": "final portfolio homepage",
          "image": "./assets/images/design/final-portfolio.png",
          "alt": ""
        }
      ],
      "takeaways": "This project pushed me to think beyond a conventional portfolio. I explored how one website could communicate multiple sides of my personality without feeling disconnected. It challenged me to balance creative freedom, visual consistency and usability while building an experience that feels uniquely mine.",
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
      "brief": "A unified creator dashboard concept designed to bring multiple social media platforms into one place. The goal is to help content creators track their performance, monitor engagement and understand their audience without constantly switching between different platforms.",
      "direction": "The design focuses on a clean, data-driven interface with an emphasis on clarity and accessibility. Thoughtfully organised analytics, visual charts and platform-wise insights make it easier to track growth, compare performance and stay on top of content metrics.",
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
          "image": "./assets/images/design/final-dashboard.png",
          "alt": ""
        }
      ],
      "takeaways": "This project helped me explore dashboard design and data visualisation, particularly how complex information can be presented in a simple, digestible way. I learned to balance functionality, information hierarchy and aesthetics to create an experience that makes managing a creator's digital presence easier.",
      "liveUrl": "https://www.figma.com/design/dxAwR9e6E1UPisoogHQosc/dashboard---content-creator?node-id=0-1&t=ZjRRbePeGW1gyksW-1"
    }
  }
];
