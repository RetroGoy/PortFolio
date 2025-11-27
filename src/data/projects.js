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

// PROJETS DEV
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
    codeSnippet: "
(async () => {
    /* --------------------------- CONFIGURATION ------------------------------ */
    const OPENAI_API_KEY      = '';      // mettre la clé de l'api Open AI : https://platform.openai.com/
    const MODEL               = 'gpt-4o-mini'; // voir la liste des models (prix, qualité...) : https://platform.openai.com/docs/models
  const TEMPERATURE = 0;
  const SCROLL_PIXELS = 6;
  const ACTION_DELAY = 150 * 1000;

  /* ------------------------------ GLOBAUX --------------------------------- */
  let run = true;
  window.stopAutoQCM = () => { run = false; clearInterval(keepAliveId); };

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  /* ---------------------------- ANTI-IDLE --------------------------------- */
  const keepAliveId = setInterval(() => {
    window.scrollBy(0, SCROLL_PIXELS);
    window.scrollBy(0, -SCROLL_PIXELS);
    document.dispatchEvent(new MouseEvent('mousemove', {
      bubbles: true, clientX: Math.random() * innerWidth, clientY: Math.random() * innerHeight
    }));
  }, ACTION_DELAY);

  if (navigator.wakeLock?.request) try { await navigator.wakeLock.request('screen'); } catch { }

  /* ------------------------- NAVIGATION BOUTONS --------------------------- */
  const byRegex = rx => [...document.querySelectorAll('button,input,a')]
    .find(el => rx.test((el.innerText || el.value || '').trim()));
  const clickByRegex = rx => { const b = byRegex(rx); b?.click(); return !!b; };
  const clickChevron = () => { const b = document.querySelector('button svg.fa-chevron-right')?.closest('button'); b?.click(); return !!b; };
  const clickNext = () => clickByRegex(/suivant|continuer|valider|terminer/i) || clickChevron();
  const clickNextActivity = () => clickByRegex(/activité\s+suivante|exercice\s+suivant|examen\s+suivant/i);

  /* ------------------------- FERMETURE POP-UPS ---------------------------- */
  function closeXPopups() {
    const btn = [...document.querySelectorAll('button')].find(b => b.querySelector('svg.fa-times,[data-icon="times"]'));
    if (btn) { btn.click(); console.log('Popup fermée'); }
  }

  /* Remplace l’ancienne getContext() par celle-ci                              */
  function getContext() {

    const SELECTORS = [
      '.exercise-context',
      '.exercise-statement',
      '.exercise-body',
      '.wysiwyg',
      '[class*=wysiwyg]',
      'div[class*=bg-selection]',
      '.text-neutral-80.leading-tight'
    ];

    // 1) Premier sélecteur qui contient vraiment du texte
    for (const sel of SELECTORS) {
      const el = document.querySelector(sel);
      if (el) {
        const txt = el.innerText.trim();
        if (txt.length > 80) {                  // on évite les titres de 3 mots
          console.log(`📄 Contexte capturé (${sel}) : ${txt.length} caractères`);
          return txt;
        }
      }
    }

    // 2) Fallback : le paragraphe le plus long de la page (> 60 car.)
    const para = [...document.querySelectorAll('p')]
      .filter(p => p.offsetParent && p.innerText.trim().length > 60)
      .sort((a, b) => b.innerText.length - a.innerText.length)[0];

    if (para) {
      const txt = para.innerText.trim();
      console.log(`Contexte fallback : ${txt.length} caractères`);
      return txt;
    }

    console.log('Aucun contexte trouvé');
    return '';
  }

  async function getTranscription() {
    /* 1. Clique sur le bouton « Transcription » s’il existe ----------------- */
    const btn = [...document.querySelectorAll('button,a')]
      .find(b => /transcription/i.test(b.textContent));
    if (!btn) return '';

    btn.click();             

    /* 2. Attendre que le texte apparaisse (max 5 s) -------------------------- */
    let text = '';
    for (let i = 0; i < 25; i++) {    
      
      text = document.querySelector('.modal-content')?.innerText?.trim() || '';

      if (!text) text = document.querySelector('.wysiwyg, [class*=wysiwyg]')?.innerText?.trim() || '';

      if (!text) {
        const cand = [...document.querySelectorAll('div,p')]
          .find(el => /heatwave|refer to this talk|according to/i.test(el.innerText));
        text = cand?.innerText.trim() || '';
      }

      if (text) break;
      await sleep(200);
    }

    /* 3. Referme si c’était une modale (croix “X”) --------------------------- */
    document.querySelector('button svg.fa-times, button [data-icon="times"]')
      ?.closest('button')?.click();

    console.log(`📄 Transcription capturée : ${text.length} caractères`);
    return text;
  }

  function getQuestions() {

    /* --- 1. Regrouper les radios par name ---------------------------------- */
    const radios = [...document.querySelectorAll("input[type='radio']")];
    const groups = Object.values(
      radios.reduce((acc, r) => ((acc[r.name] ??= []).push(r), acc), {})
    );

    /* --- 2. Pour chaque groupe, trouver question + choix ------------------- */
    return groups.map((radios, qIdx) => {

      /* --- QUESTION -------------------------------------------------------- */
      let question = 'Question ' + (qIdx + 1);
      // on remonte 6 ancêtres max puis on regarde les éléments précédents
      let node = radios[0].closest('div, li, p');
      for (let i = 0; i < 6 && node; i++, node = node.parentElement) {
        const cand = node.previousElementSibling;
        if (cand && /\?$/.test(cand.innerText.trim()) && cand.innerText.length < 400) {
          question = cand.innerText.trim();
          break;
        }
      }

      /* --- CHOIX ----------------------------------------------------------- */
      const choices = radios.map((r, cIdx) => {
        /*  ▸ label = ancêtre le plus proche, pas de attribut [for="…"] */
        const label = r.closest('label');

        let text = 'Choice ' + (cIdx + 1);
        if (label) {
          const clone = label.cloneNode(true);
          clone.querySelectorAll('input, svg, i').forEach(x => x.remove());
          text = clone.innerText.trim().replace(/^\s*[A-D]\.\s*/, '') || text;
        }

        return {
          letter: String.fromCharCode(65 + cIdx),   // A / B / C / …
          radio: r,
          label: label,
          text: text
        };
      });

      return { question, choices };
    });
  }

  /** Prompt clair */
  function buildPrompt(context, transcript, questions) {
    let p = `You give the right answer for this English multiple-choice quiz.\n`;
    if (context) p += `\nCONTEXT:\n"""${context}"""\n`;
    if (transcript) p += `\nTRANSCRIPTION:\n"""${transcript}"""\n`;
    p += `\nQUESTIONS:\n`;
    questions.forEach((q, idx) => {
      p += `\n${idx + 1}. ${q.question}\n`;
      q.choices.forEach(c => p += `${c.letter}. ${c.text}\n`);
    });
    p += `\nReply with ONLY the chosen letters separated by spaces, e.g. "A C D B".`;
    return p;
  }

  /* ---------------------------- OPENAI CALL ------------------------------- */
  async function askGPT(prompt, count) {
    console.log(prompt);
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
        body: JSON.stringify({ model: MODEL, temperature: TEMPERATURE, max_tokens: 30, messages: [{ role: 'user', content: prompt }] })
      });
      const data = await res.json();
      const txt = data.choices?.[0]?.message?.content || '';
      const letters = (txt.match(/[A-Z]/gi) || []).slice(0, count).map(x => x.toUpperCase());
      console.log('GPT →', letters.join(' '), '| brut:', txt);
      return letters;
    } catch (e) { console.warn(e); return []; }
  }

  /* -------------------------- COCHER LES RADIOS --------------------------- */
  function applyAnswers(questions, letters) {
    questions.forEach((q, idx) => {
      const letter = letters[idx] || q.choices[Math.floor(Math.random() * q.choices.length)].letter;
      const choice = q.choices.find(c => c.letter === letter) || q.choices[0];
      (choice.label || choice.radio).click();
      (choice.label || choice.radio).style.outline = '2px solid limegreen';
    });
  }

  /* --------------------------- BOUCLE GLOBAL ------------------------------ */
  console.clear(); console.log('% GlobalSuper lancé', 'color:#2fa');

  let page = 1;
  while (run) {
    console.group(`=== Page ${page} ===`);

    const context = getContext();
    const transcript = await getTranscription();
    const questions = getQuestions();

    if (!questions.length) { clickNext(); console.groupEnd(); await sleep(ACTION_DELAY); page++; continue; }

    const prompt = buildPrompt(context, transcript, questions);
    const letters = await askGPT(prompt, questions.length);

    closeXPopups(); //Supprimer pour TOEIC
    applyAnswers(questions, letters);
    await sleep(ACTION_DELAY);

    clickNext();
    clickNextActivity();

    await sleep(ACTION_DELAY);
    console.groupEnd();
  }
})();
",
    videoUrl: "",
  },
  {
    id: "dev-2",
    title: "ForkJam",
    date: "en cours",
    tech: ["Next.js", "React", "Tailwind", "Supabase", "Web Audio API", "Zustand"],
    description:
      "Plateforme collaborative musicale basée sur des graphes de pistes audio.",
    link: "https://forkjam.dumatus.fr",
    iframeUrl: "https://forkjam.dumatus.fr",
    thumbnail: "/dev/ForkJam.jpeg",
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
    date: "en cours",
    tech: ["React", "Vite", "Phaser.js", "Supabase", "Zustand"],
    description:
      "Jeu narratif point-and-click hybride présenté comme un bureau interactif.",
    link: "https://kaarbon.yourdomain.com",
    iframeUrl: "https://kaarbon.yourdomain.com",
    thumbnail: "/dev/kaarbkomp.jpeg",
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