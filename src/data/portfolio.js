// ============================================================
//  src/data/portfolio.js
//  Tutti i dati del portfolio in un unico posto.
//  Modifica solo qui per aggiornare il sito.
// ============================================================

import photo from "../assets/profile_pic.jpg"
import cv from "../assets/CV_EN.pdf"

export const personal = {
  name: "Pierpaolo Goffredo",
  title: "Ph.D. in Artificial Intelligence",
  subtitle: "AI/NLP Specialist · Innovation Pilote @ ALTEN SA",
  email: "pierpaologoffredo@gmail.com",
  location: "Nice, France",
  birthdate: "19 Jul 1996",
  photo: photo,
  cv: cv,

  social: {
    linkedin: "https://linkedin.com/in/pierpaologoffredo",
    github: "https://github.com/pierpaologoffredo",
    scholar: "https://scholar.google.com/citations?user=9jQ3S3AAAAAJ&hl=it",
  },

  summary: `AI/NLP specialist and Innovation Pilote at ALTEN SA, directing multiple AI 
  and NLP projects within the R&D department. Ph.D. in AI (Université Côte d'Azur), 
  with a record of building production-ready NLP systems and publishing at top-tier 
  venues (EMNLP, AAAI, IJCAI, ACL). Experienced in mentoring interns/PhD candidates 
  and driving adoption of LLMs, Generative AI, and advanced ML/DL.`,
};

export const experience = [
  {
    id: 1,
    role: "Innovation Pilote",
    company: "ALTEN SA",
    location: "Valbonne, France",
    period: "June 2025 – Present",
    current: true,   // <-- usato per evidenziare il ruolo attivo
    bullets: [
      "Lead strategic AI/NLP innovation projects, defining technical direction and research goals.",
      "Architect Recommender Systems and Multimodal RAG solutions integrating text, audio, and video.",
      "Oversee development of multimodal AI models for automated key-moment detection in political debates.",
      "Mentor and coordinate interns and PhD candidates.",
      "Direct a predictive analysis project on cryptocurrency life-cycles.",
    ],
  },
  {
    id: 2,
    role: "NLP Research Engineer – Ph.D. Project",
    company: "Université Côte d'Azur",
    location: "Sophia Antipolis, France",
    period: "Sep 2021 – Dec 2024",
    current: false,
    bullets: [
      "Designed end-to-end NLP pipelines for argument mining and fallacy detection.",
      "Built scalable text classification systems using transformer-based architectures.",
      "Published research at top-tier conferences (EMNLP, AAAI, IJCAI).",
    ],
  },
  {
    id: 3,
    role: "Laboratory Teacher",
    company: "Université Côte d'Azur",
    location: "Sophia Antipolis, France",
    period: "Oct 2021 – June 2024",
    current: false,
    bullets: [
      "Delivered hands-on ML/Deep Learning courses.",
      "Mentored students in building production-ready NLP applications.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Ph.D. in Computer Science",
    institution: "Université Côte d'Azur",
    location: "Sophia Antipolis, France",
    period: "Sep 2021 – Dec 2024",
    thesis: "Analysing and Unveiling Argumentative Fallacies in Political Debates. A use case on the U.S. Presidential Debates from 1960 to 2020",
    grade: "Successfully defended",
  },
  {
    id: 2,
    degree: "Master's Degree in AI and Information Systems",
    institution: "Università degli Studi di Torino",
    location: "Torino, Italy",
    period: "Oct 2018 – Apr 2021",
    thesis: "Counter-TWIT: A Corpus for the Automatic Detection of Counterspeech in Italian Twitter",
    grade: "110/110 cum laude — Recommendation for Publication",
  },
  {
    id: 3,
    degree: "Bachelor's Degree in Information and Knowledge",
    institution: "Università degli Studi di Torino",
    location: "Torino, Italy",
    period: "Sep 2015 – Oct 2018",
    thesis: "Design and development of cross platform components for donations with cryptocurrencies",
    grade: "110/110 cum laude",
  },
];

// Le skill sono raggruppate per categoria — ogni categoria diventa
// un gruppo visivo nel componente Skills.
export const skills = [
  {
    category: "NLP & AI",
    items: ["NLP", "Argument Mining", "Fallacy Detection", "NER", "Text Classification", "LLMs", "Generative AI", "RAG", "Recommender Systems"],
  },
  {
    category: "ML Engineering",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "LangChain", "Ollama"],
  },
  {
    category: "Infrastructure & Dev",
    items: ["Python", "Java", "SQL", "REST APIs", "Docker", "Graph DB"],
  },
  {
    category: "Languages",
    items: ["Italian (native)", "English B2", "French B2"],
  },
];

// venue è la conferenza — usato per il badge colorato sulla card.
// url punta al paper online (Google Scholar o sito ufficiale).
export const publications = [
  {
    id: 1,
    title: "DISPUTool 3.0: Fallacy Detection and Repairing in Argumentative Political Debates",
    venue: "ACL 2025",
    year: 2025,
    location: "Vienna, Austria",
    url: "https://doi.org/10.18653/v1/2025.acl-demo.45",   // aggiorna con il link reale
    highlights: [
      "Integrated NLP framework for multi-layer analysis of political debates.",
      "Automated fallacy detection and repair using state-of-the-art LLMs.",
    ],
  },
  {
    id: 2,
    title: "Argument-based Detection and Classification of Fallacies in Political Debates",
    venue: "EMNLP 2023",
    year: 2023,
    location: "Singapore",
    url: "https://doi.org/10.18653/v1/2023.emnlp-main.684",
    highlights: [
      "Scalable NLP system for real-time argument analysis.",
    ],
  },
  {
    id: 3,
    title: "DISPUTool 2.0: A Modular Architecture for Multi-Layer Argumentative Analysis of Political Debates",
    venue: "AAAI 2023",
    year: 2023,
    location: "Washington, DC, USA",
    url: "https://doi.org/10.1609/aaai.v37i13.27069",
    highlights: [
      "Modular ML architecture for production deployment.",
    ],
  },
  {
    id: 4,
    title: "Fallacious Argument Classification in Political Debates",
    venue: "IJCAI-ECAI 2022",
    year: 2022,
    location: "Wien, Austria",
    url: "https://doi.org/10.24963/ijcai.2022/575",
    highlights: [
      "Novel classification system for real-time argument analysis.",
    ],
  },
  {
    id: 5,
    title: "Counter-TWIT: An Italian Corpus for Online Counterspeech in Ecological Contexts",
    venue: "WOAH 2022",
    year: 2022,
    location: "Seattle, Washington, USA",
    url: "https://doi.org/10.18653/v1/2022.woah-1.6",
    highlights: [
      "Large-scale dataset for counterspeech pattern detection in Italian Twitter.",
    ],
  },
];