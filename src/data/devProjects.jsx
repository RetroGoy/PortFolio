export const devProjects = [
  {
    id: "dev-1",
    title: "GlobalExam Bot",
    date: "2024",
    tech: ["JavaScript", "OpenAI API", "Browser Automation"],
    description:
      "Script d'automatisation qui analyse chaque question GlobalExam, extrait le contexte et utilise l'API OpenAI pour sélectionner automatiquement les meilleures réponses.",
    thumbnail: "/dev/ForkJam.jpeg",
    fullDescription: `GlobalExam Auto-Filler (GPT Automation)

Un script d'automatisation qui analyse chaque question GlobalExam, extrait le contexte (texte, transcription, images) et utilise l'API OpenAI pour sélectionner automatiquement les meilleures réponses.
Il gère aussi la navigation, ferme les pop-ups, maintient la page active et enchaîne les activités jusqu'à la fin.

À quoi ça sert ?
→ Accélérer les sessions d'entraînement et observer les choix d'un modèle GPT sur de longs QCM, sans passer son temps à cliquer.
(Uniquement pour le mode entraînement, respect des CGU.)

⸻

Fonctionnalités
	•	Extraction automatique du contenu des questions
	•	Appel GPT (4o / 4o-mini) pour générer les réponses
	•	Marquage et sélection des bonnes options
	•	Anti-idle (scroll + mouvements souris)
	•	Passage automatique aux pages/activités suivantes
	•	Commande d'arrêt : stopAutoQCM()`,
    codeUrl: "/code/globalexam-bot.js",
    videoUrl: "",
  },
  {
    id: "dev-2",
    title: "ForkJam",
    date: "en cours",
    tech: ["Next.js", "React", "Tailwind", "Supabase", "Web Audio API", "Zustand"],
    description:
      "Plateforme collaborative musicale basée sur des graphes de pistes audio.",
    link: "https://forkjam.app",
    iframeUrl: "https://forkjam.app",
    thumbnail: "/dev/ForkJam.jpeg",
    screenshots: [],
    architecture:
      "ForkJam est un forum musical où chaque contribution audio devient un nœud dans un graphe. Les utilisateurs peuvent créer, écouter et 'forker' des branches de riffs synchronisées sur un BPM commun. L'app gère la lecture multipiste via Web Audio API et stocke les audios / données dans Supabase.",
    stack: {
      frontend: ["Next.js", "React", "TailwindCSS", "Zustand"],
      backend: ["Supabase (DB, Auth, Storage)"],
      audio: ["Web Audio API"],
      tools: ["Vercel", "GitHub Actions"],
    },
  },

  {
    id: "dev-3",
    title: "Kaarbon Komplite",
    date: "en cours",
    tech: ["React", "Vite", "Phaser.js", "Supabase", "Zustand"],
    description:
      "Jeu narratif point-and-click hybride présenté comme un bureau interactif.",
    link: "https://kaarbon.yourdomain.com",
    iframeUrl: "https://kaarbon.yourdomain.com",
    thumbnail: "/dev/kaarbkomp.jpeg",
    screenshots: [],
    architecture:
      "Kaarbon Komplite est un jeu d'aventure narratif construit autour d'un OS fictif : le joueur incarne chaque jour un personnage différent, et ses actions influencent une conscience collective. L'expérience mélange exploration, point-and-click, mini-jeux et gestion d'état global via Zustand, avec sauvegarde Supabase.",
    stack: {
      frontend: ["React", "Vite", "Phaser.js", "TailwindCSS"],
      backend: ["Supabase (DB, Auth, Storage)"],
      state: ["Zustand"],
      tools: ["Capacitor (build desktop/mobile)", "Vercel"],
    },
  },
];

export const projects = [
  {
    slug: "reactive-motion-wall",
    title: "Reactive Motion Wall",
    tags: ["TouchDesigner", "Body Tracking", "Interactive"],
    date: "2023",
    summary: "Mur visuel interactif réagissant aux mouvements du public",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "Projet TouchDesigner centré sur l'interaction corps-image. Les mouvements du public sont captés (tracking simple type MediaPipe/Kinect-like) puis traduits en déformations, particules et effets de lumière en temps réel. L'objectif était d'explorer un rendu immersif minimaliste, où le geste devient le moteur de la composition visuelle.",
    images: [],
  },

  {
    slug: "procedural-fluids-playground",
    title: "Procedural Fluids Playground",
    tags: ["TouchDesigner", "GLSL", "Generative"],
    date: "2023",
    summary: "Études de fluides génératifs en temps réel",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "Exploration de champs de fluides et de matières procédurales en temps réel dans TouchDesigner. Le projet joue sur des forces simples (noise, champs vectoriels, advection) pour générer des mouvements organiques. Interaction au clavier/souris ou contrôleurs MIDI pour moduler la vitesse, la densité et la direction.",
    images: [],
  },
];

export const projectGalleryImages = [];
