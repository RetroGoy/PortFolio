// ==========================
// PROJETS CRÉATIFS (2 GROS)
// ==========================
export const projects = [
  {
    slug: "reactive-motion-wall",
    title: "Reactive Motion Wall",
    cover:
      "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["TouchDesigner", "Body Tracking", "Interactive"],
    date: "2023",
    summary: "Mur visuel interactif réagissant aux mouvements du public",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "Projet TouchDesigner centré sur l’interaction corps-image. Les mouvements du public sont captés (tracking simple type MediaPipe/Kinect-like) puis traduits en déformations, particules et effets de lumière en temps réel. L’objectif était d’explorer un rendu immersif minimaliste, où le geste devient le moteur de la composition visuelle.",
    images: [
      {
        src: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Patch TouchDesigner (tracking + rendu)",
      },
      {
        src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Rendu en action / variations visuelles",
      },
      {
        src: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Tests de feedback et déformations",
      },
    ],
  },

  {
    slug: "procedural-fluids-playground",
    title: "Procedural Fluids Playground",
    cover:
      "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["TouchDesigner", "GLSL", "Generative"],
    date: "2023",
    summary: "Études de fluides génératifs en temps réel",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "Exploration de champs de fluides et de matières procédurales en temps réel dans TouchDesigner. Le projet joue sur des forces simples (noise, champs vectoriels, advection) pour générer des mouvements organiques. Interaction au clavier/souris ou contrôleurs MIDI pour moduler la vitesse, la densité et la direction.",
    images: [
      {
        src: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Premiers tests de champs de fluides",
      },
      {
        src: "https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800",
        caption: "Variations mémoire / couleurs / densité",
      },
      {
        src: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Rendu final temps réel",
      },
    ],
  },
];

// ======================================
// MINI-GALERIE (3 PETITS PROJETS)
// 2 TouchDesigner + 1 autre outil (AE)
// ======================================
export const projectGalleryImages = [
  {
    id: "project-gallery-1",
    src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Edge Scanner — scan visuel en lignes (TouchDesigner)",
  },
  {
    id: "project-gallery-2",
    src: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Audio Particles Burst — particules audio-réactives (TouchDesigner)",
  },
  {
    id: "project-gallery-3",
    src: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Motion Typography Study — essai After Effects",
  },
];

// ======================================
// PROJETS DEV (stack réaliste + propre)
// ======================================
export const devProjects = [
  {
    id: "dev-2",
    title: "ForkJam",
    date: "2024 - en cours",
    tech: ["Next.js", "React", "Tailwind", "Supabase", "Web Audio API", "Zustand"],
    description:
      "Plateforme collaborative musicale basée sur des graphes de riffs et de pistes audio.",
    link: "https://forkjam.dumatus.fr",
    iframeUrl: "https://forkjam.dumatus.fr",
    screenshots: [
      {
        src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Interface de collaboration",
        description:
          "Exploration et création de branches musicales sous forme de nœuds.",
      },
      {
        src: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Lecteur audio",
        description:
          "Lecture synchronisée des pistes le long d’une branche.",
      },
      {
        src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Visualisation des nodes",
        description:
          "Graphe interactif reliant riffs, instruments et variantes.",
      },
    ],
    architecture:
      "ForkJam est un forum musical où chaque contribution audio devient un nœud dans un graphe. Les utilisateurs peuvent créer, écouter et “forker” des branches de riffs synchronisées sur un BPM commun. L’app gère la lecture multipiste via Web Audio API et stocke les audios / données dans Supabase.",
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
    date: "2025 - en cours",
    tech: ["React", "Vite", "Phaser.js", "Supabase", "Zustand"],
    description:
      "Jeu narratif point-and-click hybride présenté comme un bureau interactif.",
    link: "https://kaarbon.yourdomain.com",
    iframeUrl: "https://kaarbon.yourdomain.com",
    thumbnail: "/dev/kaarbkomp.png",
    screenshots: [
      {
        src: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Scène du jeu",
        description:
          "Univers rétro-futuriste avec narration fragmentée.",
      },
      {
        src: "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Interface d'inventaire",
        description:
          "Système de puzzles et objets interactifs.",
      },
      {
        src: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Dialogues",
        description:
          "Choix narratifs influençant l'état global de la ville.",
      },
    ],
    architecture:
      "Kaarbon Komplite est un jeu d’aventure narratif construit autour d’un OS fictif : le joueur incarne chaque jour un personnage différent, et ses actions influencent une conscience collective. L’expérience mélange exploration, point-and-click, mini-jeux et gestion d’état global via Zustand, avec sauvegarde Supabase.",
    stack: {
      frontend: ["React", "Vite", "Phaser.js", "TailwindCSS"],
      backend: ["Supabase (DB, Auth, Storage)"],
      state: ["Zustand"],
      tools: ["Capacitor (build desktop/mobile)", "Vercel"],
    },
  },
];