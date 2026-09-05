export const videos = [
  {
    id: 'video-9',
    youtubeId: 'qDdqR1Dty4A',
    title: 'Signal Dum',
    date: '2026',
    thumbnail: '/video/signaldum.jpeg',
    summary: "Tourné près de Vichy, actuellement en montage",
    description: `Six jours de tournage quasi non-stop près de Vichy, avec une dizaine de personnes
sur le plateau. J'y ai occupé les postes de réalisateur, chef opérateur et cameraman, du plan de
travail jusqu'à la direction technique le jour J. Le montage est encore en cours.`,
    images: []
  },

  {
    id: 'video-5',
    youtubeId: 'NBUCeJj3_70',
    title: 'La dernière volaille',
    date: '2025',
    thumbnail: 'https://img.youtube.com/vi/NBUCeJj3_70/mqdefault.jpg',
    summary: "Comédie burlesque tournée pour progresser sur la direction d'équipe",
    description: `Un registre plus burlesque que mes films précédents, pensé autour d'un montage
nerveux et de quelques effets visuels discrets. Le vrai objectif du tournage était ailleurs :
mieux encadrer une équipe et resserrer ma mise en scène — découpage plus carré, rythme travaillé
au montage, coordination plus fluide sur le plateau.`,
    images: []
  },

  {
    id: 'video-0',
    title: 'Avorted 3rd',
    date: '2024',
    thumbnail: '/video/avort3.jpeg',
    summary: "Le 3e épisode d'une saga tournée entre amis (2010-2013)",
    description: `Une saga de courts-métrages qu'on tournait entre amis, à plusieurs mains, entre
2010 et 2013 — j'y étais monteur et cameraman. Ce troisième épisode a été relancé six ans plus tard,
puis abandonné en cours de route. Voici les plans les plus aboutis de ce tournage jamais terminé.`,
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
    summary: "Western amateur — mon premier vrai apprentissage de la direction d'équipe",
    description: `Tourné à plusieurs, dans une ambiance de western improvisé. Le scénario comptait
moins que l'organisation : répartir les rôles techniques, diriger des acteurs non professionnels,
tenir un plateau du début à la fin. Au montage, j'ai cherché à donner du rythme et une cohérence
visuelle à des rushes tournés dans des conditions assez inégales.`,
    images: []
  },

  {
    id: 'video-3',
    youtubeId: 'uMsgumidgy8',
    title: 'Génocide de poulets',
    date: '2024',
    thumbnail: 'https://img.youtube.com/vi/uMsgumidgy8/mqdefault.jpg',
    summary: "Exercice de style visuel, sans dialogue appuyé",
    description: `Pensé comme une ambiance plus qu'un récit, avec une approche inspirée du cinéma
de David Lynch. La lumière, le cadrage et quelques symboles portent une narration volontairement
floue. L'idée était d'apprendre à raconter par l'image et le montage plutôt que par le texte.`,
    images: [
      { src: '/video/genoc1.jpeg', caption: "Ambiance visuelle" },
      { src: '/video/genoc2.jpeg', caption: "Travail sur la lumière" },
      { src: '/video/genoc3.jpeg', caption: "Composition d'image" }
    ]
  }
];

export const threeDProjects = [
  {
    id: '3d-3',
    isInstagram: true,
    instagramUrl: 'https://www.instagram.com/p/DY2PuGtTfVz/',
    title: 'Mon cousin ambient',
    date: '2026',
    thumbnail: '/3D/kitbash1.jpeg',
    summary: "Décor de rue par kit-bashing, tout dans l'ambiance",
    description: `Un décor de rue industrielle assemblé sous Blender par kit-bashing — récupération
et recombinaison de modules existants, une voiture posée au centre du plan. Peu de modélisation ici :
l'essentiel du travail est dans la lumière, le brouillard volumétrique, les câbles et le décor, puis
dans l'étalonnage pour unifier le rendu.`,
    images: [],
    tools: ['Blender', 'Kit-bashing', 'Compositing', 'Eevee']
  },

  {
    id: '3d-1',
    youtubeId: 'kMJhW7gnmFw',
    title: 'Mes bons voisins',
    date: '2024',
    thumbnail: 'https://img.youtube.com/vi/kMJhW7gnmFw/mqdefault.jpg',
    summary: "Clip Blender mené de bout en bout, musique comprise",
    description:
      "Un clip mené intégralement sous Blender : modélisation de l'environnement, intégration de visages scannés par photogrammétrie, puis animation portée par une narration abstraite. J'ai aussi composé et synchronisé la musique. L'occasion de me former aux systèmes de particules et de cheveux, et à des matériaux plus complexes.",
    images: [],
    tools: ['Blender', 'Cycles', 'Sculpting', 'Hair System']
  },

  {
    id: '3d-2',
    youtubeId: 'jCcVtgSzRcc',
    title: 'Corps Sonore',
    date: '2026',
    thumbnail: 'https://img.youtube.com/vi/jCcVtgSzRcc/mqdefault.jpg',
    summary: "Visualiseur TouchDesigner piloté par le corps et le son",
    description: `Un visualiseur audio-réactif sous TouchDesigner : le corps est suivi en direct via
MediaPipe pendant qu'une analyse audio (kick, bandes de fréquences) tourne en parallèle. Les deux
flux se combinent pour faire naître une forme colorée — silhouette, fumée, particules — qui bouge
avec le mouvement et le son.`,
    images: [
      {
        src: '/3D/corpssonore-network.jpeg',
        caption: "Réseau TouchDesigner : analyse audio, suivi de pose et rendu"
      }
    ],
    tools: ['TouchDesigner', 'MediaPipe', 'Analyse audio temps réel']
  }
];
