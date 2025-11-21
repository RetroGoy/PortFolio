export const threeDProjects = [
  {
    id: '3d-1',
    youtubeId: 'kMJhW7gnmFw',
    title: 'Branle-bas',
    date: 'Mars 2024',
    thumbnail: 'https://img.youtube.com/vi/kMJhW7gnmFw/mqdefault.jpg',
    summary: 'Clip expérimental en 3D mêlant animation, modélisation et composition musicale.',
    description:
      "Projet réalisé entièrement sous Blender. J’ai modélisé l’environnement, scanné des visages d’amis pour les intégrer à la scène, puis animé les éléments afin de créer une narration abstraite. J’ai composé la musique originale et synchronisé l’ensemble pour obtenir un rendu cohérent entre rythme, mouvement et ambiance visuelle. Ce projet m’a permis d’explorer les bases des systèmes de particules, des cheveux, et de la gestion de matériaux complexes.",
    tags: ['Blender', '3D', 'Animation', 'Music'],
    images: [
      {
        src: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Animation d’éléments 3D synchronisés au rythme'
      },
      {
        src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Modélisation de la scène et travail sur l’éclairage'
      },
      {
        src: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800',
        caption: 'Tests de matériaux et textures'
      }
    ],
    tools: ['Blender', 'Cycles', 'Sculpting', 'Hair System']
  },

  {
    id: '3d-2',
    title: 'Visualiseur 3D Interactif',
    date: 'Décembre 2024',
    thumbnail:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Exploration interactive d’un modèle 3D en temps réel.',
    description:
      "Petit projet d’expérimentation en WebGL. L’objectif était de charger un modèle 3D simple (OBJ/GLTF) et de permettre une navigation libre : rotation, zoom, déplacement. Ce prototype servira de base pour intégrer mes propres modèles Blender dans le navigateur via React Three Fiber.",
    tags: ['Three.js', 'WebGL', 'Interactive'],
    images: [
      {
        src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Prototype du visualiseur en WebGL'
      },
      {
        src: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Navigation orbitale intuitive'
      },
      {
        src: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Rendu temps réel avec éclairages simples'
      }
    ],
    tools: ['Three.js', 'React Three Fiber', 'GLTF Loader'],
    isInteractive: true
  }
];

export const galleryImages = [
  {
    id: 'gallery-1',
    isCarousel: true,
    images: [
      {
        src: '/3D/00FD4966-C17B-4261-88F4-7C1797D56721_1_105_c.jpeg',
        description: 'Collection de modèles sculptés (Nomad Sculpt)'
      },
      {
        src: '/3D/258D0963-2B4A-454A-A6E1-D7B0D8E4F24A_1_105_c.jpeg',
        description: 'Collection de modèles sculptés (Nomad Sculpt)'
      },
      {
        src: '/3D/83166112-5AB0-4C77-A7AD-D75FCBB04404_1_201_a.jpeg',
        description: 'Collection de modèles sculptés (Nomad Sculpt) - Image 3'
      },
      {
        src: '/3D/BA4C282E-D0D3-49F7-9012-5CB50EC67635.jpeg',
        description: 'Collection de modèles sculptés (Nomad Sculpt) - Image 4'
      }
    ]
  },
  {
    id: 'gallery-2',
    src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Exploration de textures procédurales'
  },
  {
    id: 'gallery-3',
    src: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vêtement simulé dans Marvelous Designer sur un modèle sculpté (Nomad Sculpt)'
  }
];