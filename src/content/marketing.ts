import type { MarketingProject, CalendarDay } from "./types";
// MARKETING PROJECTS and campaigns
// Add, remove or reorder entries freely. Order here = order on the page.
// Leave "image" empty to use the built-in artwork. Put photos in public/assets/images/... and use "/assets/images/...".
// kind: "Completed work" or "Concept" (shown as a badge). Be honest: concepts stay labelled as concepts.
// status in caseStudy: "d" done, "p" proposed, "n" not measured yet, "a" to add.
// decoration: "site" | "swatches" | "idea" | "" (small built-in doodle). image replaces it.
export const marketingProjects: MarketingProject[] = [
  {
    "id": "transport",
    "title": "Family transport business website",
    "categories": [
      "seo",
      "content"
    ],
    "kind": "Completed work",
    "background": "#d4f56b",
    "rotate": "-1.2deg",
    "objective": "Give the business a clear online presence and an easy way to enquire.",
    "audience": "[Add: who books them]",
    "approach": "Website designed and built by me.",
    "decoration": "site",
    "decorationText": "",
    "image": "",
    "imageAlt": "",
    "caseStudy": [
      {
        "section": "Challenge",
        "status": "a",
        "text": "[Add: what the business needed online]"
      },
      {
        "section": "Audience",
        "status": "a",
        "text": "[Add: who the customers are]"
      },
      {
        "section": "Research",
        "status": "a",
        "text": "[Add: what you observed about their online presence]"
      },
      {
        "section": "Insight",
        "status": "a",
        "text": "[Add: ]"
      },
      {
        "section": "Concept",
        "status": "a",
        "text": "[Add: site structure and service presentation]"
      },
      {
        "section": "Execution",
        "status": "d",
        "text": "I designed and built the website. [Add: pages, service presentation, enquiry paths]"
      },
      {
        "section": "Measurement",
        "status": "p",
        "text": "Proposed: track enquiries (calls, forms, messages), qualified leads and conversion rate. Not set up yet."
      },
      {
        "section": "Results",
        "status": "n",
        "text": "No enquiry or conversion results have been measured yet."
      }
    ]
  },
  {
    "id": "own-content",
    "title": "My own content & design as marketing",
    "categories": [
      "content",
      "social"
    ],
    "kind": "Completed work",
    "background": "#c3b1ff",
    "rotate": "1.4deg",
    "objective": "[Add: what the content was meant to do]",
    "audience": "[Add: who it's for]",
    "approach": "I create and post my own content and designs.",
    "decoration": "swatches",
    "decorationText": "",
    "image": "",
    "imageAlt": "",
    "caseStudy": [
      {
        "section": "Challenge",
        "status": "a",
        "text": "[Add: ]"
      },
      {
        "section": "Audience",
        "status": "a",
        "text": "[Add: ]"
      },
      {
        "section": "Execution",
        "status": "d",
        "text": "Created content and designs. [Add: link examples and what you did]"
      },
      {
        "section": "Measurement",
        "status": "a",
        "text": "[Add: only real analytics you have]"
      },
      {
        "section": "Results",
        "status": "a",
        "text": "[Add: real learnings, e.g. what formats worked]"
      }
    ]
  },
  {
    "id": "campaign",
    "title": "Campaign concept: [Add brand]",
    "categories": [
      "campaign",
      "brand"
    ],
    "kind": "Concept",
    "background": "#ffb36b",
    "rotate": "-.8deg",
    "objective": "[Add: campaign goal]",
    "audience": "[Add: audience]",
    "approach": "Proposed strategy, not run.",
    "decoration": "idea",
    "decorationText": "big idea goes here",
    "image": "",
    "imageAlt": "",
    "caseStudy": [
      {
        "section": "Challenge",
        "status": "p",
        "text": "[Add: the opportunity]"
      },
      {
        "section": "Audience",
        "status": "p",
        "text": "[Add: who it's for]"
      },
      {
        "section": "Research",
        "status": "a",
        "text": "[Add: only real observations]"
      },
      {
        "section": "Insight",
        "status": "p",
        "text": "[Add: positioning or strategic insight]"
      },
      {
        "section": "Concept",
        "status": "p",
        "text": "[Add: the creative idea]"
      },
      {
        "section": "Execution plan",
        "status": "p",
        "text": "[Add: what you would do]"
      },
      {
        "section": "Measurement",
        "status": "p",
        "text": "[Add: how you'd measure success]"
      },
      {
        "section": "Results",
        "status": "n",
        "text": "Concept only. No results to report."
      }
    ]
  },
  {
    "id": "seo-plan",
    "title": "SEO plan: [Add site]",
    "categories": [
      "seo"
    ],
    "kind": "Concept",
    "background": "#9fd8ff",
    "rotate": "1deg",
    "objective": "[Add: goal]",
    "audience": "[Add: searchers]",
    "approach": "Proposed keyword and on-page plan, not run.",
    "decoration": "",
    "decorationText": "",
    "image": "",
    "imageAlt": "",
    "caseStudy": [
      {
        "section": "Challenge",
        "status": "p",
        "text": "[Add: the opportunity]"
      },
      {
        "section": "Audience",
        "status": "p",
        "text": "[Add: who it's for]"
      },
      {
        "section": "Research",
        "status": "a",
        "text": "[Add: only real observations]"
      },
      {
        "section": "Insight",
        "status": "p",
        "text": "[Add: positioning or strategic insight]"
      },
      {
        "section": "Concept",
        "status": "p",
        "text": "[Add: the creative idea]"
      },
      {
        "section": "Execution plan",
        "status": "p",
        "text": "[Add: what you would do]"
      },
      {
        "section": "Measurement",
        "status": "p",
        "text": "[Add: how you'd measure success]"
      },
      {
        "section": "Results",
        "status": "n",
        "text": "Concept only. No results to report."
      }
    ]
  },
  {
    "id": "growth",
    "title": "Growth experiment idea",
    "categories": [
      "growth",
      "social"
    ],
    "kind": "Concept",
    "background": "#ffd0e6",
    "rotate": "-1.4deg",
    "objective": "[Add: hypothesis]",
    "audience": "[Add: audience]",
    "approach": "Proposed test, not run.",
    "decoration": "",
    "decorationText": "",
    "image": "",
    "imageAlt": "",
    "caseStudy": [
      {
        "section": "Challenge",
        "status": "p",
        "text": "[Add: the opportunity]"
      },
      {
        "section": "Audience",
        "status": "p",
        "text": "[Add: who it's for]"
      },
      {
        "section": "Research",
        "status": "a",
        "text": "[Add: only real observations]"
      },
      {
        "section": "Insight",
        "status": "p",
        "text": "[Add: positioning or strategic insight]"
      },
      {
        "section": "Concept",
        "status": "p",
        "text": "[Add: the creative idea]"
      },
      {
        "section": "Execution plan",
        "status": "p",
        "text": "[Add: what you would do]"
      },
      {
        "section": "Measurement",
        "status": "p",
        "text": "[Add: how you'd measure success]"
      },
      {
        "section": "Results",
        "status": "n",
        "text": "Concept only. No results to report."
      }
    ]
  }
];

export const calendar: CalendarDay[] = [
  {
    "day": "Mon",
    "pillar": "College life",
    "idea": "relatable exam-week reel"
  },
  {
    "day": "Tue",
    "pillar": "Fashion",
    "idea": "GRWM idea"
  },
  {
    "day": "Wed",
    "pillar": "Music",
    "idea": "short cover clip"
  },
  {
    "day": "Thu",
    "pillar": "Experiments",
    "idea": "try-it-for-a-day"
  },
  {
    "day": "Fri",
    "pillar": "College life",
    "idea": "day-in-my-life"
  },
  {
    "day": "Sat",
    "pillar": "Fashion",
    "idea": "outfit transition"
  },
  {
    "day": "Sun",
    "pillar": "Experiments",
    "idea": "weekly recap"
  }
];

export const capabilities: string[] = [
  "Brand positioning",
  "Content planning",
  "Creative direction",
  "Social media",
  "SEO fundamentals",
  "Audience research",
  "Campaign planning",
  "Analytics & experimentation"
];
