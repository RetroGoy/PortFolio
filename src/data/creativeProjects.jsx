export const videos = [
  {
    id: 'video-0',
    title: 'Avorted 3rd',
    date: '2024',
    thumbnail: '/video/avort3.jpeg',
    summary: "Sélection d'extraits d'un projet de fiction avorté",
    description: `Compilation de plans issus d'un long projet de film de zombies abandonné
pour des raisons logistiques. Tourné avec plusieurs acteurs et une petite équipe,
ce troisième épisode inachevé est devenu un terrain d'expérimentation visuelle et narrative.
Cette sélection rassemble les images les plus abouties, vestiges d'un projet d'enfance ambitieux.`,
    isInstagram: true,
    instagramUrl: 'https://www.instagram.com/p/DNrAs4m2t5B/',
    images: [
      { src: '/video/avort1.jpeg', caption: "Aperçu visuel 1" },
      { src: '/video/avort2.jpeg', caption: "Aperçu visuel 2" },
      { src: '/video/avort3.jpeg', caption: "Aperçu visuel 3" }
    ]
  },

  {
    id: 'video-1',
    youtubeId: 'RQWhuwgD9EU',
    title: 'Regdumatum',
    date: '2022',
    thumbnail: 'https://img.youtube.com/vi/RQWhuwgD9EU/mqdefault.jpg',
    summary: "Film collaboratif façon western rural",
    description: `Projet tourné avec une petite équipe, centré moins sur un scénario
que sur l'expérience du tournage collectif. Entre western rural et délire entre amis,
Regdumatum mélange jeu d'acteur amateur, mise en scène improvisée et un travail
de montage/étalonnage axé sur le rythme et la cohérence visuelle.`,
    images: []
  },

  {
    id: 'video-3',
    youtubeId: 'uMsgumidgy8',
    title: 'Génocide de poulets',
    date: '2024',
    thumbnail: 'https://img.youtube.com/vi/uMsgumidgy8/mqdefault.jpg',
    summary: "Court-métrage sombre et atmosphérique",
    description: `Court-métrage expérimental qui interroge la violence industrialisée
à travers une approche visuelle inspirée par le cinéma de Lynch.
Plutôt qu'un discours frontal, le film joue sur l'ambiance, les symboles et
une narration volontairement floue pour laisser le spectateur interpréter ce qu'il voit.`,
    images: [
      { src: '/video/genoc1.jpeg', caption: "Ambiance visuelle" },
      { src: '/video/genoc2.jpeg', caption: "Travail sur la lumière" },
      { src: '/video/genoc3.jpeg', caption: "Composition d'image" }
    ]
  },

  {
    id: 'video-5',
    title: 'Chic Chicken',
    date: '2025',
    thumbnail: '/video/chchicThumb.jpeg',
    summary: "Projet en cours de réalisation",
    description: `Nouveau projet en développement. Plus d'informations bientôt.`,
    comingSoon: true,
    images: []
  }
];

export const threeDProjects = [
  {
    id: '3d-1',
    youtubeId: 'kMJhW7gnmFw',
    title: 'Branle-bas',
    date: '2024',
    thumbnail: 'https://img.youtube.com/vi/kMJhW7gnmFw/mqdefault.jpg',
    summary: "Clip expérimental en 3D mêlant animation, modélisation et composition musicale.",
    description:
      "Projet réalisé entièrement sous Blender. J'ai modélisé l'environnement, scanné des visages d'amis pour les intégrer à la scène, puis animé les éléments afin de créer une narration abstraite. J'ai composé la musique originale et synchronisé l'ensemble pour obtenir un rendu cohérent entre rythme, mouvement et ambiance visuelle. Ce projet m'a permis d'explorer les bases des systèmes de particules, des cheveux, et de la gestion de matériaux complexes.",
    images: [],
    tools: ['Blender', 'Cycles', 'Sculpting', 'Hair System']
  },

  {
    id: '3d-2',
    title: 'Visualiseur 3D Interactif',
    date: '2025',
    summary: "Exploration interactive d'un modèle 3D en temps réel.",
    description:
      "Petit projet d'expérimentation en WebGL. L'objectif était de charger un modèle 3D simple (OBJ/GLTF) et de permettre une navigation libre : rotation, zoom, déplacement. Ce prototype servira de base pour intégrer mes propres modèles Blender dans le navigateur via React Three Fiber.",
    images: [],
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
        src: '/3D/3Dgal11.jpeg',
        description: "Collection de modèles sculptés (Nomad Sculpt)"
      },
      {
        src: '/3D/3Dgal12.jpeg',
        description: "Collection de modèles sculptés (Nomad Sculpt)"
      },
      {
        src: '/3D/3Dgal13.jpeg',
        description: "Collection de modèles sculptés (Nomad Sculpt)"
      },
      {
        src: '/3D/3Dgal14.jpeg',
        description: "Collection de modèles sculptés (Nomad Sculpt)"
      }
    ]
  }
];
