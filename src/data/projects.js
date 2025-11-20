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
    id: 'dev-1',
    title: 'Portfolio Desktop',
    date: 'Septembre 2023 - Novembre 2023',
    tech: ['React', 'Three.js', 'WebGL'],
    description: 'Portfolio interactif sous forme de desktop virtuel',
    link: 'https://example.com/portfolio',
    iframeUrl: 'https://example.com/portfolio',
    screenshots: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    architecture: 'Application React moderne utilisant Vite comme bundler. Architecture basée sur des composants réutilisables avec gestion d\'état via Zustand. Les animations 3D sont gérées par Three.js avec des shaders personnalisés pour les effets visuels.',
    stack: {
      frontend: ['React 18', 'Vite', 'Tailwind CSS', 'Three.js'],
      libraries: ['Zustand', 'Lucide React', 'React Three Fiber'],
      tools: ['ESLint', 'PostCSS', 'TypeScript']
    }
  },
  {
    id: 'dev-2',
    title: 'ForkJam',
    date: 'Mai 2022 - Février 2023',
    tech: ['React', 'Node.js', 'Web Audio API'],
    description: 'Plateforme collaborative sous forme de forum musical avec noeuds de pistes',
    link: 'https://forkjam.dumatus.fr',
    iframeUrl: 'https://forkjam.dumatus.fr',
    screenshots: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800'
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
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    architecture: 'Jeu d\'aventure point-and-click développé en JavaScript vanilla. Moteur de jeu custom avec système d\'inventaire, dialogues interactifs et puzzles. Rendu Canvas 2D avec animations frame-by-frame. Système de sauvegarde local et gestion d\'états complexes.',
    stack: {
      frontend: ['JavaScript', 'Canvas API', 'HTML5'],
      features: ['Moteur de jeu custom', 'Système de dialogues', 'Inventaire'],
      tools: ['Webpack', 'Howler.js', 'Local Storage']
    }
  },
  {
    id: 'dev-4',
    title: 'Translator 500',
    date: 'Janvier 2022 - Mars 2022',
    tech: ['JavaScript', 'Vanilla JS', 'CSS'],
    description: 'Outil de traduction entre instruments musicaux',
    link: '/translator500/index.html',
    iframeUrl: '/translator500/index.html',
    screenshots: [
      'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    architecture: 'Application web légère en JavaScript vanilla sans dépendances. Utilise des algorithmes de transposition MIDI pour convertir les notes entre différentes tessitures d\'instruments. Interface rétro inspirée des terminaux avec thème vert phosphorescent.',
    stack: {
      frontend: ['Vanilla JavaScript', 'CSS3', 'HTML5'],
      features: ['Conversion MIDI', 'Algorithmes de transposition', 'Interface terminal'],
      tools: ['Aucune dépendance externe']
    }
  }
];

export const labExperiments = [
  {
    id: 'lab-1',
    title: 'Shader Experiments',
    description: 'Explorations de shaders GLSL',
    image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://example.com/shader-lab',
    iframeUrl: 'https://example.com/shader-lab',
    screenshots: [
      'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    detailedDescription: 'Série d\'expérimentations avec les shaders GLSL, explorant les possibilités du GPU pour créer des effets visuels en temps réel. Utilisation de techniques comme le ray marching, les fractales, et les déformations procédurales. Chaque shader est optimisé pour fonctionner à 60fps.',
    tech: ['GLSL', 'WebGL', 'ShaderToy', 'Three.js'],
    features: [
      'Ray marching 3D',
      'Fractales en temps réel',
      'Post-processing effects',
      'Noise procédural'
    ]
  },
  {
    id: 'lab-2',
    title: 'Particle Systems',
    description: 'Systèmes de particules interactifs',
    image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=600',
    link: 'https://example.com/particles',
    iframeUrl: 'https://example.com/particles',
    screenshots: [
      'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    detailedDescription: 'Expérimentations avec des systèmes de particules GPU pour simuler des comportements complexes. Les particules réagissent à la position de la souris, créent des formes organiques et peuvent être influencées par des champs de force. Rendu optimisé avec instancing.',
    tech: ['Three.js', 'GPGPU', 'WebGL', 'Canvas'],
    features: [
      'GPU Particle System',
      'Forces attractives/répulsives',
      'Collision detection',
      'Trail effects'
    ]
  },
  {
    id: 'lab-3',
    title: 'Audio Reactive',
    description: 'Visualisations audio-réactives',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://example.com/audio-viz',
    iframeUrl: 'https://example.com/audio-viz',
    screenshots: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    detailedDescription: 'Visualisations qui réagissent en temps réel à l\'analyse audio. Utilisation de Web Audio API pour extraire les fréquences et l\'amplitude. Les visuels s\'adaptent dynamiquement à la musique avec des effets de morphing et de déformation synchronisés.',
    tech: ['Web Audio API', 'Canvas', 'FFT Analysis', 'Three.js'],
    features: [
      'Analyse FFT temps réel',
      'Visualisation spectrale',
      'Beat detection',
      'Waveform display'
    ]
  },
  {
    id: 'lab-4',
    title: 'Procedural Generation',
    description: 'Génération procédurale de formes',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://example.com/procedural',
    iframeUrl: 'https://example.com/procedural',
    screenshots: [
      'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    detailedDescription: 'Algorithmes de génération procédurale créant des formes organiques et géométriques. Utilisation de noise de Perlin, L-systems, et algorithmes génétiques. Chaque forme est unique et générée en temps réel avec des paramètres ajustables.',
    tech: ['JavaScript', 'Canvas', 'Perlin Noise', 'L-Systems'],
    features: [
      'Perlin noise 3D',
      'L-systems végétaux',
      'Voronoi diagrams',
      'Algorithmes génétiques'
    ]
  }
];
