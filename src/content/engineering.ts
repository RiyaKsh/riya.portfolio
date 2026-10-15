import type { EngineeringProject } from "./types";
// ENGINEERING PROJECTS
// Add, remove or reorder entries freely. Order here = order on the page.
// Leave "image" empty to use the built-in artwork. Put photos in public/assets/images/... and use "/assets/images/...".
// categories: "sw" (software), "ai" (AI/ML), "sec" (security). The first project with featured:true appears in the page hero.
// flow: the boxes of the data-flow diagram, in order. image: optional screenshot shown in the Architecture tab.
export const engineeringProjects: EngineeringProject[] = [
  {
    "id": "kochi",
    "folder": "kochi-docs/",
    "title": "AI Document Handling System",
    "subtitle": "Kochi Metro",
    "categories": [
      "sw",
      "ai"
    ],
    "status": "[Add: status]",
    "tools": [
      "React",
      "Express.js",
      "LLM"
    ],
    "flow": [
      "React UI",
      "Express.js API",
      "Document search",
      "LLM Q&A"
    ],
    "links": [
      {
        "label": "GitHub",
        "url": ""
      },
      {
        "label": "Demo",
        "url": ""
      }
    ],
    "summary": "LLM-powered document search and question answering for metro documents.",
    "problem": "[Add: the document problem and the existing workflow]",
    "users": "[Add: who would use it]",
    "role": "[Add: what you built yourself]",
    "decisions": [
      {
        "title": "Why LLM-powered Q&A",
        "body": "[Add: trade-offs considered]"
      },
      {
        "title": "Why React + Express.js",
        "body": "[Add: reasons]"
      },
      {
        "title": "How documents are searched",
        "body": "[Add: your actual approach]"
      }
    ],
    "challenges": "[Add: hard parts and how you solved them]",
    "learnings": "[Add: results, limitations, what you'd improve]",
    "image": "",
    "imageAlt": "",
    "featured": true
  },
  {
    "id": "detector",
    "folder": "social-eng-detector/",
    "title": "Social Engineering Attack Detector",
    "subtitle": "Text classification",
    "categories": [
      "ai",
      "sec"
    ],
    "status": "[Add: status]",
    "tools": [
      "Python",
      "scikit-learn",
      "TF-IDF"
    ],
    "flow": [
      "Message text",
      "TF-IDF features",
      "scikit-learn model",
      "Prediction"
    ],
    "links": [
      {
        "label": "GitHub",
        "url": ""
      }
    ],
    "summary": "Detects social-engineering messages using TF-IDF features and a scikit-learn model.",
    "problem": "[Add: the detection problem]",
    "users": "[Add: intended use]",
    "role": "[Add: what you built]",
    "decisions": [
      {
        "title": "Why TF-IDF",
        "body": "[Add: trade-offs]"
      },
      {
        "title": "Model choice",
        "body": "[Add: which model and why]"
      },
      {
        "title": "Evaluation",
        "body": "[Add: only real numbers you measured]"
      }
    ],
    "challenges": "[Add: challenges]",
    "learnings": "[Add: limitations and learnings]",
    "image": "",
    "imageAlt": "",
    "featured": false
  },
  {
    "id": "netsec",
    "folder": "network-detection/",
    "title": "Network security & detection",
    "subtitle": "Packets to findings",
    "categories": [
      "sec"
    ],
    "status": "[Add: status]",
    "tools": [
      "Python",
      "[Add: tools]"
    ],
    "flow": [
      "Packets",
      "Feature extraction",
      "Detection",
      "Investigation"
    ],
    "links": [
      {
        "label": "GitHub",
        "url": ""
      }
    ],
    "summary": "Packet processing, feature extraction and detection workflows.",
    "problem": "[Add: scenario]",
    "users": "[Add: intended use]",
    "role": "[Add: what you built]",
    "decisions": [
      {
        "title": "Feature choices",
        "body": "[Add: which and why]"
      },
      {
        "title": "Detection approach",
        "body": "[Add: method]"
      }
    ],
    "challenges": "[Add: challenges]",
    "learnings": "[Add: findings and limits]",
    "image": "",
    "imageAlt": "",
    "featured": false
  }
];

export const skills: Record<string, string[]> = {
  "Languages": [
    "Python",
    "JavaScript",
    "[Add: TypeScript, C/C++, Java… only what you use]"
  ],
  "Frontend": [
    "React"
  ],
  "Backend": [
    "Express.js",
    "Node.js"
  ],
  "Databases & APIs": [
    "[Add: databases and API tools you've used]"
  ],
  "AI / ML": [
    "scikit-learn",
    "TF-IDF features",
    "LLM-powered apps"
  ],
  "Security & networking": [
    "Network security",
    "Packet processing & detection"
  ],
  "Developer tools": [
    "[Add: Git, Docker, etc.]"
  ]
};
