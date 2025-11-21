export const projects = [
  {
    slug: 'interactive-installation',
    title: 'Installation Interactive',
    cover: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TouchDesigner', 'Interactive', 'Installation'],
    date: 'Mars 2023 - Juin 2023',
    summary: 'Installation interactive réagissant aux mouvements du public',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Installation interactive créée pour un festival d\'art numérique. Le système réagit en temps réel aux mouvements du public grâce à des capteurs de profondeur, créant une expérience immersive unique. Développée avec TouchDesigner et Processing.',
    images: [
      { src: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Interface de contrôle TouchDesigner' },
      { src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Installation en action au festival' },
      { src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Système de capteurs de profondeur' }
    ]
  },
  {
    slug: 'generative-art',
    title: 'Art Génératif',
    cover: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['3D', 'Generative', 'Motion'],
    date: 'Janvier 2023 - Mars 2023',
    summary: 'Exploration de formes génératives et organiques',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Série d\'explorations visuelles générées algorithmiquement. Chaque forme est le résultat de règles mathématiques simples créant des structures complexes et organiques. Le processus combine code créatif et rendu 3D haute qualité.',
    images: [
      { src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Structure organique générée' },
      { src: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800', caption: 'Variation de formes abstraites' },
      { src: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Rendu final haute qualité' }
    ]
  }
];

export const projectGalleryImages = [
  {
    id: 'project-gallery-1',
    src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Performance VJ en temps réel'
  },
  {
    id: 'project-gallery-2',
    src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Visualisation de données 3D'
  },
  {
    id: 'project-gallery-3',
    src: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Installation interactive lumineuse'
  },
  {
    id: 'project-gallery-4',
    src: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Projection mapping architectural'
  },
  {
    id: 'project-gallery-5',
    src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sculpture numérique générative'
  },
  {
    id: 'project-gallery-6',
    src: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800',
    description: 'Étude de formes organiques'
  }
];

export const devProjects = [
  {
  {
    id: 'dev-2',
    title: 'ForkJam',
    date: 'Mai 2022 - Février 2023',
    tech: ['React', 'Node.js', 'Web Audio API'],
    description: 'Plateforme collaborative sous forme de forum musical avec noeuds de pistes',
    link: 'https://forkjam.dumatus.fr',
    iframeUrl: 'https://forkjam.dumatus.fr',
    screenshots: [
      {
        src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Interface de collaboration',
        description: 'Vue des threads musicaux et de l\'arborescence des forks'
      },
      {
        src: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Lecteur audio',
        description: 'Système de lecture multipiste avec synchronisation en temps réel'
      },
      {
        src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Visualisation des pistes',
        description: 'Graphique de nœuds montrant les relations entre les contributions musicales'
      }
    ],
    architecture: 'Plateforme collaborative permettant aux musiciens de créer des threads musicaux. Chaque contribution peut être "forkée" sous forme de nœud, créant une arborescence de variations musicales. Système de pistes audio intégré avec Web Audio API pour la lecture synchronisée.',
    stack: {
      backend: ['Node.js', 'Express', 'PostgreSQL'],
      frontend: ['React', 'Web Audio API', 'D3.js'],
      tools: ['WebSockets', 'FFmpeg', 'Redis', 'Docker']
    }
  },
  {
    id: 'dev-3',
    title: 'Kaarbon Komplite',
    date: 'Mars 2023 - Juin 2023',
    tech: ['JavaScript', 'Canvas', 'Game Engine'],
    description: 'Jeu vidéo point and click narratif',
    link: 'https://kaarbon.yourdomain.com',
    iframeUrl: 'https://kaarbon.yourdomain.com',
    screenshots: [
      {
        src: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Scène du jeu',
        description: 'Environnement narratif avec système de point-and-click'
      },
      {
        src: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Interface d\'inventaire',
        description: 'Système de gestion des objets et puzzles interactifs'
      },
      {
        src: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Dialogues',
        description: 'Système de conversation avec choix multiples et conséquences'
      }
    ],
    architecture: 'Jeu d\'aventure point-and-click développé en JavaScript vanilla. Moteur de jeu custom avec système d\'inventaire, dialogues interactifs et puzzles. Rendu Canvas 2D avec animations frame-by-frame. Système de sauvegarde local et gestion d\'états complexes.',
    stack: {
      frontend: ['JavaScript', 'Canvas API', 'HTML5'],
      features: ['Moteur de jeu custom', 'Système de dialogues', 'Inventaire'],
      tools: ['Webpack', 'Howler.js', 'Local Storage']
    }
  }
];