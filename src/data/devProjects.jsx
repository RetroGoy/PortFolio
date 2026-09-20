export const devProjects = [
  {
    id: "dev-2",
    title: "ForkJam",
    date: "en cours",
    featured: true,
    tech: ["Next.js", "React", "Tailwind", "Supabase", "Web Audio API", "Zustand"],
    description:
      "Plateforme collaborative musicale basée sur des graphes de pistes audio.",
    link: "https://forkjam.app",
    iframeUrl: "https://forkjam.app",
    youtubeId: "VYShGC3p55Y",
    thumbnail: "/dev/ForkJam.jpeg",
    architecture:
      "ForkJam est un forum musical où chaque contribution audio devient un nœud dans un graphe. Les utilisateurs peuvent créer, écouter et 'forker' des branches de riffs synchronisées sur un BPM commun. L'app gère la lecture multipiste via Web Audio API et stocke les audios / données dans Supabase.",
    howItWorks: [
      {
        title: "Chaque contribution est un nœud",
        text: `Une piste postée se rattache à celle dont elle part : le fil de discussion prend la forme
d'un graphe plutôt que d'une liste. « Forker » un riff, c'est ouvrir une branche à partir de
n'importe quel point du graphe.`
      },
      {
        title: "Tout le monde joue sur la même grille",
        text: `Un BPM commun est fixé à la racine d'un graphe. Les pistes ajoutées ensuite s'alignent
dessus, ce qui permet d'empiler des contributions enregistrées séparément sans qu'elles se décalent.`
      },
      {
        title: "La lecture se fait dans le navigateur",
        text: `La superposition des pistes est gérée par la Web Audio API : plusieurs sources jouées en
parallèle, synchronisées sur la même horloge, avec le mixage côté client.`
      },
      {
        title: "Stockage et comptes",
        text: `Supabase s'occupe des fichiers audio, de la base et de l'authentification, ce qui laisse
le front se concentrer sur le graphe et le lecteur.`
      }
    ],
    stack: {
      frontend: ["Next.js", "React", "TailwindCSS", "Zustand"],
      backend: ["Supabase (DB, Auth, Storage)"],
      audio: ["Web Audio API"],
      tools: ["Vercel", "GitHub Actions"],
    },
  },

  {
    id: "dev-3",
    title: "DeviceDeck",
    date: "2025",
    featured: true,
    mediaAspect: "aspect-[3/1]",
    tech: ["Python", "HID / MIDI", "CircuitPython", "launchd", "macOS"],
    description:
      "Gestionnaire de périphériques : rend utilisables hors de leur logiciel d'origine un clavier Blackmagic Speed Editor, un OP-Z et une manette DualShock 4, et les route vers différents contextes (bureau, Logic, DaVinci, TouchDesigner, gimbal DJI Ronin).",
    thumbnail: "/dev/devicedeck.png",
    heroImage: "/dev/devicedeck.png",
    architecture:
      "Le point de départ : le Speed Editor de DaVinci Resolve est un excellent clavier d'édition, mais bridé — il ne parle qu'à Resolve. DeviceDeck le débloque et en fait une surface de contrôle générique, qui pilote aussi bien le bureau que Logic, TouchDesigner ou un gimbal, avec un profil par logiciel et plusieurs couches par touche. Le même daemon lit aussi un OP-Z — décodé directement depuis son flux SysEx plutôt que via l'app officielle — et une manette DualShock 4, qui servent de commandes d'entrée supplémentaires. L'ensemble tourne en fond via launchd, avec un tableau de bord web et une petite app menu-barre.",
    components: [
      {
        image: "/dev/speededitor.png",
        name: "Blackmagic Speed Editor",
        description: "Le clavier d'édition DaVinci, débloqué hors de Resolve grâce au reverse de son protocole d'authentification HID."
      },
      {
        image: "/dev/pipico.png",
        name: "Raspberry Pi Pico",
        description: "Le pont matériel : il se fait passer pour une manette DualShock 4 afin que l'app DJI Ronin accepte des commandes qui viennent en réalité du Speed Editor, de l'OP-Z ou du DS4."
      },
      {
        image: "/dev/roninvideoproj.png",
        name: "DJI Ronin RS3 Mini + vidéoprojecteur",
        description: "Le gimbal piloté à distance comme n'importe quel autre périphérique de sortie, ici avec un vidéoprojecteur embarqué."
      }
    ],
    howItWorks: [
      {
        title: "Déverrouiller le clavier",
        text: `Le Speed Editor n'émet rien tant qu'un logiciel n'a pas répondu à son défi
d'authentification HID. Le daemon renvoie la bonne réponse, et le clavier se met à parler à autre
chose que DaVinci.`
      },
      {
        title: "Traduire selon l'application au premier plan",
        text: `Chaque touche a un profil par logiciel et plusieurs couches — clic, double-clic, maintien
combiné à la molette. Dès que Resolve passe devant, le daemon relâche le clavier pour lui rendre son
comportement d'origine.`
      },
      {
        title: "Faire passer la molette pour une surface de contrôle",
        text: `Un port MIDI virtuel expose la molette à Logic comme une vraie surface Mackie Control :
le scrub de la tête de lecture se comporte comme sur un contrôleur du commerce.`
      },
      {
        title: "Se faire passer pour une manette",
        text: `L'app du gimbal DJI Ronin n'a pas d'API, seulement un support natif des manettes
DualShock 4. Un Raspberry Pi Pico se présente donc au système comme une DS4 et retranscrit en trames
valides ce que lui envoie DeviceDeck — molette, gestes, encodeurs de l'OP-Z.`
      }
    ],
    stack: {
      daemon: ["Python", "HID", "python-rtmidi", "Mackie Control / MCU"],
      interface: ["HTML / JS", "app menu-barre WKWebView"],
      matériel: ["Raspberry Pi Pico", "CircuitPython"],
      système: ["launchd", "macOS (Accessibilité, HID)"],
    },
    codeLang: "Python",
    codeExcerpt: `# Réponse au défi d'authentification du Speed Editor (report HID 0x06).
# Sans ça, le clavier n'émet aucune touche tant qu'aucun logiciel n'a
# "prouvé" qu'il a le droit de l'écouter. Algo issu du reverse de smunaut.
def kbd_auth(challenge: int) -> int:
    EVEN = [0x3AE1206F97C10BC8, 0x2A9AB32BEBF244C6, ...]   # 8 constantes
    ODD  = [0x3E22B34F502E7FDE, 0x24656B981875AB1C, ...]
    MASK = 0xA79A63F585D37BF0

    n = challenge & 7
    v = rol8n(challenge, n)                # rotation de n octets
    if (v & 1) == ((0x78 >> n) & 1):
        k = EVEN[n]
    else:
        v ^= rol8(v)
        k = ODD[n]
    return v ^ (rol8(v) & MASK) ^ k

# échange : lire le défi (feature report) -> renvoyer kbd_auth(défi) ->
# le clavier confirme et se remet à parler. À ré-émettre avant 600 s.`,
  },

  {
    id: "dev-1",
    title: "GlobalExam Bot",
    date: "2024",
    tech: ["JavaScript", "OpenAI API", "Browser Automation"],
    description:
      "Script de console qui répond tout seul aux QCM d'entraînement GlobalExam via l'API OpenAI.",
    thumbnail: "",
    fullDescription: `Script lancé dans la console du navigateur sur une page GlobalExam, en mode
entraînement. Il lit le contexte de chaque question (énoncé, transcription), demande les réponses
à l'API OpenAI (gpt-4o-mini), coche les bonnes cases puis enchaîne les activités tout seul.
Quelques détails pour que ça tienne la longueur : fermeture des pop-ups, anti-idle, wake lock, et
une commande stopAutoQCM() pour couper. JavaScript pur, aucune dépendance.`,
    codeLang: "JavaScript",
    codeExcerpt: `// Anti-idle : micro-scroll + faux mouvement de souris toutes les 2,5 min,
// + wake lock pour empêcher l'écran de se verrouiller pendant un long QCM.
const keepAliveId = setInterval(() => {
  scrollBy(0, 6); scrollBy(0, -6);
  document.dispatchEvent(new MouseEvent('mousemove', {
    bubbles: true,
    clientX: Math.random() * innerWidth,
    clientY: Math.random() * innerHeight,
  }));
}, 150_000);

if (navigator.wakeLock?.request)
  try { await navigator.wakeLock.request('screen'); } catch {}

// commande d'arrêt exposée dans la console
window.stopAutoQCM = () => { run = false; clearInterval(keepAliveId); };`,
  },

  {
    id: "dev-4",
    title: "dl — téléchargeur audio",
    date: "2025",
    tech: ["Bash", "yt-dlp", "spotdl", "ffmpeg"],
    description:
      "Alias shell qui récupère le son de presque n'importe quel lien en MP3 rangé, avec pochette et métadonnées.",
    thumbnail: "",
    fullDescription: `Récupère le son de presque n'importe quel lien — YouTube, SoundCloud,
Bandcamp, Spotify, reels Instagram — en MP3 320 avec tags et pochette, rangé direct dans
~/Downloads. Construit autour de yt-dlp et spotdl, avec un peu de nettoyage de titres, la pochette
posée en icône Finder, un mode --cut pour ne garder qu'un extrait, et un repli automatique sur les
cookies du navigateur quand YouTube fait la difficile.`,
    codeLang: "Bash",
    codeExcerpt: `# Nettoie les titres : « Song (Official Video) [4K] »  ->  « Song »
CLEAN='(?i)\\s*[\\(\\[][^\\)\\]]*\\b(official|lyrics?|audio|video|hd|hq|4k|mv|clip officiel|full album)\\b[^\\)\\]]*[\\)\\]]'

yt-dlp -x --audio-format mp3 --audio-quality 0 \\
       --replace-in-metadata "title" "$CLEAN" "" \\
       --embed-metadata --embed-thumbnail \\
       --exec "dl-seticon %(filepath)q" -o "$OUTTPL" "$url" 2>&1 | tee "$log"

# YouTube réclame parfois une connexion / renvoie un 403 :
# on ne ressort les cookies du navigateur que dans ce cas précis.
if grep -qiE "sign in to confirm|HTTP Error 403" "$log"; then
  yt-dlp "\${YT_ARGS[@]}" --cookies-from-browser chrome -o "$OUTTPL" "$url"
fi`,
  },

  {
    id: "dev-5",
    title: "file-sorter",
    date: "2025",
    tech: ["Python", "launchd", "macOS"],
    description:
      "Démon de rangement qui trie ~/Downloads et le Bureau par catégorie, sans jamais toucher un dossier de projet.",
    thumbnail: "",
    fullDescription: `Un script Python, réveillé toutes les heures par launchd, qui déplace les
fichiers de ~/Downloads et du Bureau vers des sous-dossiers par catégorie (Images, Vidéos, 3D,
Documents…). Il ne touche qu'aux éléments stables depuis plus d'une heure, ne déplace jamais un
dossier de projet depuis le Bureau, ignore les téléchargements en cours, gère les collisions de
noms et écrit un journal lisible.`,
    codeLang: "Python",
    codeExcerpt: `def process_source(src_dir: Path, allow_folders: bool):
    for entry in src_dir.iterdir():
        if should_skip(entry):                    # cachés, système, .part/.crdownload…
            continue
        if entry.is_dir() and not allow_folders:  # sur le Bureau : jamais un dossier de projet
            continue
        if not is_old_enough(entry):              # rien qui a bougé depuis moins d'1 h
            continue

        category = categorize(entry)              # Images / Vidéos / 3D / Documents / Captures…
        dest = unique_destination(DEST_ROOT / category, entry.name)
        shutil.move(str(entry), str(dest))
        log(f"[{category}] {entry.name}  <-  {src_dir.name}")`,
  },
];
