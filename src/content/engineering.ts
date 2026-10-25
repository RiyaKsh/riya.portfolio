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
    "status": "completed",
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
        "url": "https://github.com/RiyaKsh/kochimetro"
      },
      
    ],
    "summary": "LLM-powered document search and question answering for metro documents.",
    "problem": "Kochi Metro relies on large volumes of documents containing operational information, policies, and other important records. Finding specific information manually across these documents can be time-consuming and inefficient. The goal was to build an AI-powered document handling system that allows users to search for relevant information and ask questions in natural language, making document retrieval and information access faster and more intuitive.",
  "users": "Metro employees, administrative staff, and other authorized personnel who need to retrieve information from organizational documents efficiently. The system is designed for users who want direct answers to questions rather than manually searching through lengthy documents.",
  "role": "Designed and developed an AI-powered document search and question-answering application using React.js, Express.js, and a Large Language Model (LLM). Worked on the frontend experience, backend integration, and the workflow connecting document retrieval with natural-language question answering.",
  "decisions": [
    {
      "title": "Why LLM-powered Q&A",
      "body": "Traditional keyword-based search can locate documents containing specific terms, but it often struggles with questions phrased in natural language or queries that require contextual understanding. An LLM-powered question-answering approach provides a more intuitive way to interact with documents. The trade-offs include inference latency, computational cost, the possibility of hallucinations, and the need to ensure answers remain grounded in the available document content."
    },
    {
      "title": "Why React + Express.js",
      "body": "React.js was selected to build a responsive, component-based interface for document interaction and question answering. Express.js provided a lightweight backend for handling API requests and connecting the frontend with document-processing and LLM functionality. Using JavaScript across the frontend and backend simplified integration and made the application easier to develop and maintain."
    },
    {
      "title": "How documents are searched",
      "body": "The system follows a document-retrieval and question-answering workflow: users submit a query through the interface, the backend processes the request, relevant document information is retrieved, and the available context is used to generate an answer with an LLM. This approach aims to make information retrieval more contextual than basic keyword matching. The specific retrieval technique, document indexing strategy, and chunking method depend on the implementation."
    }
  ],
  "challenges": "One of the main engineering challenges was connecting the document retrieval workflow with LLM-based question answering while keeping the user experience straightforward. The application required coordination between the React frontend, Express.js backend, and AI processing workflow. Other important considerations included handling user queries, returning useful responses, managing response latency, and reducing the risk of answers that are unsupported by the source documents.",
  "learnings": "The project provided practical experience in integrating LLMs into a full-stack application and translating a manual document-search workflow into a natural-language interaction. It reinforced the importance of backend API design, frontend-backend integration, retrieval quality, and the reliability of AI-generated responses. Potential improvements include implementing or refining retrieval-augmented generation (RAG), adding source citations to answers, introducing document-level access controls, evaluating answer accuracy against a test dataset, and optimizing retrieval and response latency. These improvements would help make the system more reliable and suitable for real-world organizational use.",
  "image": "",
  "imageAlt": "",
  "featured": true
  },
  {
    "id": "detector",
    "folder": "vigil-ai/",
  "title": "Vigil AI — Insider Threat Detection",
  "subtitle": "ML-powered behavioral anomaly detection",
  "categories": [
    "ai",
    "sec"
  ],
  "status": "completed",
  "tools": [
    "Python",
    "scikit-learn",
    "Isolation Forest"
  ],
  "flow": [
    "User activity data",
    "Data preprocessing",
    "Feature extraction",
    "Isolation Forest",
    "Anomaly detection"
  ],
  "links": [
    {
      "label": "GitHub",
      "url": "https://github.com/RiyaKsh/VigilAI"
    }
  ],
  "summary": "An ML-powered insider threat detection system that uses Isolation Forest to identify anomalous user behavior and flag potentially suspicious activity.",
  "problem": "Traditional security monitoring often relies on predefined rules and known threat patterns. However, insider threats can emerge from legitimate users whose behavior deviates from their usual activity. Detecting such deviations is challenging, particularly when suspicious activity does not match predefined rules. Vigil AI explores an anomaly-detection approach to identify unusual user behavior and help security teams investigate potential insider threats.",
  "users": "Security analysts, SOC teams, and IT security administrators who monitor organizational activity and investigate potentially suspicious user behavior. The system is intended to support threat investigation by highlighting anomalous activity rather than automatically declaring a user malicious.",
  "role": "Worked on developing a machine-learning-based approach to insider threat detection using Python and scikit-learn. Focused on applying Isolation Forest to behavioral data, exploring anomaly detection, and designing a workflow that processes user activity and identifies potentially suspicious patterns.",
  "decisions": [
    {
      "title": "Why Isolation Forest",
      "body": "Insider threats can be difficult to identify because suspicious behavior may not follow predefined patterns, and labeled examples of malicious activity may be limited. Isolation Forest is an unsupervised anomaly-detection algorithm that identifies observations that are easier to isolate from the rest of the data. It provides a practical starting point for exploring unusual user behavior without requiring a fully labeled training dataset. Its limitations include sensitivity to feature selection and contamination settings, as well as the possibility of flagging legitimate but unusual activities."
    },
    {
      "title": "Why Python + scikit-learn",
      "body": "Python provides a flexible environment for data preprocessing, feature engineering, and machine-learning experimentation. Scikit-learn offers an established implementation of Isolation Forest and tools for building repeatable data-processing and model-training workflows. This combination keeps the initial system relatively lightweight and makes it easier to experiment with behavioral features and anomaly-detection settings."
    },
    {
      "title": "Behavioral anomaly detection",
      "body": "The detection workflow is designed to process user activity data, prepare relevant behavioral features, and apply Isolation Forest to identify observations that differ from learned patterns. The output represents potentially anomalous activity that may deserve investigation, not proof of an insider attack. The quality of detection depends on the available data, the relevance of the selected features, and how normal behavior is represented."
    }
  ],
  "challenges": "A key challenge in insider threat detection is distinguishing genuinely suspicious behavior from legitimate deviations in normal activity. Unsupervised anomaly detection can help identify unusual patterns, but unusual does not necessarily mean malicious. Selecting meaningful behavioral features, preparing consistent input data, and interpreting anomaly predictions are important parts of building a useful detection workflow.",
  "learnings": "Vigil AI explores how unsupervised machine learning can be applied to cybersecurity problems where labeled attack data may be limited. The project highlights the importance of behavioral feature engineering, anomaly interpretation, and balancing threat detection against false positives. Future improvements could include evaluating the model against labeled test data, comparing Isolation Forest with alternative anomaly-detection methods, incorporating temporal behavior patterns, explaining why an activity was flagged, and building an analyst-facing investigation dashboard. Detection performance should be validated before the system is used in a real security environment.",
  "image": "",
  "imageAlt": "",
  "featured": true
},
  
{
  "id": "churn-prediction",
  "folder": "churn-prediction/",
  "title": "Customer Churn Prediction",
  "subtitle": "Machine learning classification",
  "categories": [
    "ai",
    "data"
  ],
  "status": "In development",
  "tools": [
    "Python",
    "pandas",
    "scikit-learn"
  ],
  "flow": [
    "Customer data",
    "Data preprocessing",
    "Feature engineering",
    "Classification model",
    "Churn prediction"
  ],
  "links": [
    {
      "label": "GitHub",
      "url": "https://github.com/RiyaKsh/ChurnPrediction"
    }
  ],
  "summary": "A machine learning project that predicts customer churn to help businesses identify customers who may stop using their services.",
  "problem": "Customer churn can reduce revenue and make business growth difficult. Identifying customers who are likely to leave helps businesses understand retention risks and prioritize customer engagement.",
  "users": "Business analysts, customer success teams, and marketing teams interested in identifying customers at risk of leaving.",
  "role": "Developed a machine learning workflow for customer churn prediction, covering data preparation, feature analysis, model development, and prediction.",
  "decisions": [
    {
      "title": "Why machine learning",
      "body": "Machine learning can identify patterns in historical customer data that may be associated with churn. This enables the system to estimate churn risk for individual customers, although predictions depend on the quality and representativeness of the training data."
    },
    {
      "title": "Model selection",
      "body": "A classification approach is suitable because the objective is to predict whether a customer will churn. The final algorithm should be selected based on the models actually implemented and their performance on validation data."
    },
    {
      "title": "Evaluation",
      "body": "Churn datasets can be imbalanced, so accuracy alone may not adequately measure model performance. Precision, recall, F1-score, and the confusion matrix can provide a more complete view of how effectively the model identifies customers who churn."
    }
  ],
  "challenges": "Potential challenges include handling missing values, encoding categorical variables, selecting useful customer features, and addressing class imbalance. Evaluating false positives and false negatives is also important because missed churners and incorrectly flagged customers have different business consequences.",
  "learnings": "The project explores how classification models can turn historical customer data into actionable churn-risk predictions. Potential improvements include comparing multiple algorithms, tuning model parameters, using explainability techniques to understand churn drivers, and connecting predictions to customer-retention strategies. Actual performance should be reported using measured evaluation results.",
  "image": "",
  "imageAlt": "",
  "featured": false
},

{
  "id": "packet-analyzer",
  "folder": "packet-analyzer/",
  "title": "PacketAnalyzer — Deep Packet Inspection Engine",
  "subtitle": "Multithreaded network traffic analysis",
  "categories": [
    "sec",
    "networking",
    "systems"
  ],
  "status": "Implemented — testing with PCAP files",
  "tools": [
    "C++17",
    "Python",
    "CMake",
    "PCAP",
    "Multithreading"
  ],
  "flow": [
    "PCAP network capture",
    "Packet parsing",
    "Flow tracking using five-tuples",
    "TLS SNI and HTTP Host extraction",
    "Application classification",
    "Rule-based traffic filtering",
    "Filtered PCAP and processing report"
  ],
  "links": [
    {
      "label": "GitHub",
      "url": ""
    }
  ],
  "summary": "A multithreaded C++ deep packet inspection engine that classifies network traffic, extracts domain information, and filters packets using configurable IP, application, and domain rules.",
  "problem": "Basic packet filtering often relies on network and transport headers, which provide limited visibility into the applications and domains associated with network connections. Understanding and controlling traffic at the application level requires additional protocol inspection and connection tracking. PacketAnalyzer addresses this problem by parsing captured network traffic, identifying applications using available protocol metadata, and filtering traffic according to configurable rules.",
  "users": "Network engineers, cybersecurity practitioners, and students exploring network protocol analysis, traffic classification, and rule-based traffic filtering.",
  "role": "Designed and implemented a C++17 deep packet inspection engine that reads PCAP files, parses Ethernet, IPv4, TCP, and UDP headers, tracks connections using five-tuples, extracts TLS SNI and HTTP Host information, classifies applications, and applies configurable blocking rules. Also implemented a multithreaded processing architecture using load balancers, fast-path workers, thread-safe queues, and an output writer.",
  "decisions": [
    {
      "title": "Why deep packet inspection",
      "body": "Header-only inspection cannot reliably identify the application or destination domain behind every connection. Deep packet inspection enables the engine to examine relevant protocol data, including TLS Client Hello SNI and HTTP Host headers, to classify supported traffic. This approach improves visibility without requiring decryption of HTTPS payloads, but identification depends on the availability of inspectable metadata and supported protocol formats."
    },
    {
      "title": "Why C++17",
      "body": "C++17 provides low-level control over packet buffers, memory, and data structures, making it suitable for implementing a packet-processing engine. It also supports multithreading and synchronization primitives needed for concurrent processing. The trade-off is that manual protocol parsing requires careful bounds checking, byte-order handling, and memory-safety considerations."
    },
    {
      "title": "Why flow tracking and consistent hashing",
      "body": "The engine identifies network flows using a five-tuple consisting of source IP, destination IP, source port, destination port, and transport protocol. In the multithreaded implementation, consistent flow-based hashing routes packets belonging to the same flow to the same fast-path worker. This preserves per-flow state and supports application classification and subsequent rule-based blocking while allowing different flows to be processed concurrently."
    },
    {
      "title": "Why a multithreaded architecture",
      "body": "The multithreaded version separates packet reading, load balancing, DPI processing, and output writing. Producer-consumer queues, mutexes, and condition variables coordinate work between threads. This design creates opportunities for parallel processing and better scalability than a single-threaded pipeline, although actual performance improvements require benchmarking with representative traffic captures."
    },
    {
      "title": "How traffic is classified and filtered",
      "body": "The engine extracts available protocol metadata, inspects TLS Client Hello SNI or HTTP Host headers, and maps recognized domain patterns to application categories. Configurable rules can match source IP addresses, application types, or domains. Once a flow is classified as blocked, subsequent packets belonging to that flow are dropped from the output capture. Traffic that passes the rules is written to a filtered PCAP file, and processing statistics summarize forwarded and dropped packets."
    }
  ],
  "challenges": "Implementing a packet parser requires correctly interpreting protocol headers, variable-length fields, and network byte order. Extracting domain information from TLS Client Hello messages requires navigating nested handshake structures, while connection tracking must preserve state across multiple packets. The multithreaded implementation introduces additional complexity around thread synchronization, work distribution, and maintaining flow affinity. Another challenge is recognizing the limits of metadata-based inspection when traffic is encrypted or uses unsupported protocols.",
  "learnings": "The project strengthened practical understanding of network protocol structures, PCAP file processing, deep packet inspection, TLS SNI extraction, flow-based classification, and concurrent systems design. It also demonstrates how thread-safe queues and consistent hashing can coordinate parallel packet processing. The documented test workflow includes generated PCAP traffic and processing reports. Future improvements could include more robust malformed-packet handling, broader protocol coverage, support for modern encrypted-client-hello scenarios and QUIC traffic, persistent filtering rules, automated regression tests, and performance benchmarks. The current implementation analyzes captured PCAP files rather than acting as a complete inline network firewall, and SNI-based identification is limited when the hostname is unavailable or encrypted.",
  "image": "",
  "imageAlt": "",
  "featured": true
}


];

export const skills: Record<string, string[]> = {
  "Languages": [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C"
  ],
  "Frontend": [
    "React",
    "Angular",
  ],
  "Backend": [
    "Express.js",
    "Node.js",
    "python-flask"
  ],
  "Databases & APIs": [
    "MongoDB",
    "MySQL",
    "REST APIs",

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
    "Git",
    "Docker",
    "VS Code",

  ]
};
// export const experience: Record<string, string[]> = {
//   "Internships": [
//     // Add your confirmed software development or technical internships here.
//   ],
//   "Courses": [
//     "Data Structures and Algorithms",
//     "Database Management Systems",
//     "Computer Networks",
//     "Operating Systems",
//     "Machine Learning"
//   ],
//   "Certifications": [
//     "aws certifcate from great learning",
//     "sql certificate from springboard"
//   ],
//   "Achievements": [
//     "Maintained a CGPA of 9.45/10",
//     "Solved 300+ Data Structures and Algorithms problems",
//     "Cleared Round 2 of HackWithInfy",
//     "Developed a multithreaded Deep Packet Inspection engine using C++",
//     "Built an AI-powered document search and question-answering system",
//     "Developed an insider threat detection system using Isolation Forest"
//   ]
// };
