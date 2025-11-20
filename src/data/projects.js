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
      'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800'
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
      'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    slug: 'vj-set',
    title: 'VJ Set',
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['VJ', 'Live', 'Music'],
    date: 'Octobre 2022 - Décembre 2022',
    summary: 'Performance audiovisuelle en temps réel',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Performance VJ créée pour un concert électro. Les visuels réagissent en temps réel à la musique et peuvent être manipulés live pendant la performance. Utilisation de Resolume Arena et contenu généré avec TouchDesigner.',
    images: [
      'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    slug: 'data-viz',
    title: 'Data Visualization',
    cover: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Data', 'WebGL', '3D'],
    date: 'Juillet 2022 - Septembre 2022',
    summary: 'Visualisation de données complexes en 3D',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Visualisation interactive de données complexes en trois dimensions. Le projet transforme des datasets abstraits en formes visuelles compréhensibles et esthétiques. Développé avec Three.js et D3.js.',
    images: [
      'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
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
    title: 'Creative Platform',
    date: 'Mai 2022 - Février 2023',
    tech: ['Node.js', 'Express', 'MongoDB'],
    description: 'Plateforme de partage de créations audiovisuelles',
    link: 'https://example.com/platform',
    iframeUrl: 'https://example.com/platform',
    screenshots: [
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    architecture: 'API REST développée avec Node.js et Express, suivant une architecture MVC. Base de données MongoDB pour la flexibilité des schémas. Authentification JWT et upload de médias via Cloudinary. Système de real-time avec WebSockets.',
    stack: {
      backend: ['Node.js', 'Express', 'MongoDB'],
      frontend: ['React', 'Redux', 'Material-UI'],
      tools: ['JWT', 'Cloudinary', 'Socket.io', 'Docker']
    }
  },
  {
    id: 'dev-3',
    title: 'Real-time Viz',
    date: 'Mars 2023 - Juin 2023',
    tech: ['Socket.io', 'Canvas', 'WebRTC'],
    description: 'Outil de visualisation en temps réel',
    link: 'https://example.com/realtime',
    iframeUrl: 'https://example.com/realtime',
    screenshots: [
      'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    architecture: 'Application full-stack temps réel utilisant WebSocket pour la communication bidirectionnelle. Canvas API pour le rendu graphique haute performance. WebRTC pour le streaming vidéo peer-to-peer. Architecture événementielle côté serveur.',
    stack: {
      backend: ['Node.js', 'Socket.io', 'Redis'],
      frontend: ['Vanilla JS', 'Canvas API', 'WebRTC'],
      tools: ['Webpack', 'PM2', 'Nginx']
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
