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
    id: '3d-4',
    youtubeId: '1ypWno5iIqE',
    title: 'Kaarbon Komplite',
    date: '2026-2027',
    thumbnail: 'https://img.youtube.com/vi/1ypWno5iIqE/mqdefault.jpg',
    summary: "Visualiseur 3D pour le premier album de Kaarbon Komplite, groupe de rock psychédélique lyonnais",
    description: `Visualiseur destiné à accompagner le premier album de Kaarbon Komplite, groupe de
rock psychédélique lyonnais, dont la sortie est prévue avant l'été 2027. Le personnage principal du film,
c'est la ville : une cité industrielle fictive montée sous Blender en kit-bashing, filmée sous toutes
ses faces — avenues, toundra, carrière, salle souterraine — pour faire tenir ensemble le mystique et
l'industriel. Le gros du travail se joue dans l'ambiance : lumière, brume, densité du décor,
présence des machines.`,
    images: [
      { src: '/3D/kk-titre.jpeg', caption: "Carton-titre du clip" }
    ],
    moodboard: {
      note: "Les images ci-dessous ne sont pas de moi : ce sont les références sur lesquelles la direction artistique s'est construite.",
      items: [
        {
          src: '/3D/kk-ref-1.jpeg',
          caption: "Tarik Azzouz — « Big Body » ft. Hamza & La Fève (visualizer) : la ville réduite à deux valeurs, rouge saturé et noir, les fenêtres comme seule respiration."
        },
        {
          src: '/3D/kk-ref-2.jpeg',
          caption: "Même visualizer : la voiture filmée de très près, éclairée par ses seuls feux — le décor passe au second plan sans disparaître."
        },
        {
          src: '/3D/kk-ref-3.jpeg',
          caption: "Need for Speed Most Wanted (2012), cinématique : ciel orange plein cadre, tout le reste en silhouette. C'est de là que viennent les contre-jours du projet."
        }
      ]
    },
    howItWorks: [
      {
        title: "La ville est écrite avant d'être modélisée",
        text: `Un script Python génère la trame complète : le canal qui coupe la ville, les districts, les
avenues, les voies ferrées, la carrière, la salle souterraine. Chaque zone se reconstruit à la demande,
donc déplacer un quartier ou changer la densité ne veut pas dire tout refaire à la main.`
      },
      {
        title: "Kit-bashing et instances",
        text: `Les bâtiments sont assemblés à partir d'un petit stock de modules recombinés, posés en
instances plutôt que dupliqués. C'est ce qui permet de tenir plusieurs milliers d'éléments à l'écran
sans faire exploser le fichier ni les temps de rendu.`
      },
      {
        title: "L'ambiance fait le travail que la modélisation ne fait pas",
        text: `Ciel orange, brume de profondeur calée sur les quatre kilomètres de la ville, fenêtres
allumées par paquets, balises rouges volontairement désynchronisées, néons de vitrine : de loin,
c'est la lumière qui donne l'échelle et la texture, pas le détail des façades.`
      },
      {
        title: "Le montage se cale sur le morceau",
        text: `Les plans sont découpés sur la grille du titre — quatre temps par plan — puis montés dans
DaVinci Resolve. La durée des séquences est décidée par la musique, pas l'inverse.`
      }
    ],
    tools: ['Blender', 'Kit-bashing', 'Génération procédurale (Python)', 'Compositing', 'DaVinci Resolve']
  },

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
    howItWorks: [
      {
        title: "Assemblage plutôt que modélisation",
        text: `Le décor est monté à partir de modules existants recombinés : peu de modélisation, mais un
long travail de composition pour que la rue tienne debout et se lise à l'image.`
      },
      {
        title: "Lumière et brouillard",
        text: `L'ambiance vient du volumétrique et de quelques sources bien placées — les câbles, les
enseignes et la voiture servent de repères de profondeur dans la brume.`
      },
      {
        title: "Compositing",
        text: `L'étalonnage final unifie des éléments qui viennent de sources très différentes : c'est lui
qui fait passer le kit-bashing pour un décor cohérent.`
      }
    ],
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
    howItWorks: [
      {
        title: "Des vrais visages dans un décor fabriqué",
        text: `Les visages ont été scannés par photogrammétrie, nettoyés, puis posés sur des personnages
modélisés — ce décalage entre traits réels et corps construits fait une bonne partie de l'étrangeté du
clip.`
      },
      {
        title: "Matériaux, particules et poils",
        text: `L'environnement est entièrement modélisé sous Blender, avec un rendu Cycles. C'est le
projet sur lequel j'ai appris les systèmes de particules et de cheveux, et les matériaux à plusieurs
couches.`
      },
      {
        title: "Musique composée, puis image calée dessus",
        text: `La bande-son a été écrite pour le clip, ce qui a permis de monter les plans directement sur
ses accents plutôt que de chercher après coup où couper.`
      }
    ],
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
    howItWorks: [
      {
        title: "Le corps est suivi en direct",
        text: `Une webcam alimente MediaPipe, qui renvoie la position des articulations image par image.
Ces points sont reconstruits dans TouchDesigner en une silhouette utilisable comme masque et comme
source d'émission.`
      },
      {
        title: "Le son est découpé en valeurs",
        text: `En parallèle, l'audio est analysé : détection des kicks d'un côté, découpage en bandes de
fréquences de l'autre. Chaque bande devient une valeur lissée, prête à piloter un paramètre visuel.`
      },
      {
        title: "Les deux flux se croisent",
        text: `Le corps donne la forme, le son donne l'énergie : la silhouette se colore, fume et se
disloque selon ce qui joue. Tout tourne en temps réel, ce qui permet de régler le rendu pendant que
quelqu'un bouge devant la caméra.`
      }
    ],
    tools: ['TouchDesigner', 'MediaPipe', 'Analyse audio temps réel']
  }
];
