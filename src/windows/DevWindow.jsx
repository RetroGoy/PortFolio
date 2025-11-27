import { useState, useEffect, useRef } from 'react';
import { devProjects } from '../data/projects';
import { Code, ExternalLink, Maximize2, X } from 'lucide-react';

export const DevWindow = ({ onNavigate, currentView }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const iframeContainerRef = useRef(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (onNavigate) {
      onNavigate(project.title);
    }
  };

  const handleFullscreen = () => {
    if (iframeContainerRef.current) {
      if (iframeContainerRef.current.requestFullscreen) {
        iframeContainerRef.current.requestFullscreen();
      } else if (iframeContainerRef.current.webkitRequestFullscreen) {
        iframeContainerRef.current.webkitRequestFullscreen();
      } else if (iframeContainerRef.current.mozRequestFullScreen) {
        iframeContainerRef.current.mozRequestFullScreen();
      }
    }
  };

  useEffect(() => {
    if (currentView === null && selectedProject) {
      setSelectedProject(null);
    }
  }, [currentView]);

  if (selectedProject) {
    const isGlobalExamBot = selectedProject.id === 'dev-1';

    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-light tracking-wide">
              {selectedProject.title}
            </h2>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1 transition-colors"
              >
                <ExternalLink size={14} />
                Voir le projet
              </a>
            )}
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            {selectedProject.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedProject.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs border border-white/30 px-3 py-1 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {isGlobalExamBot ? (
          <>
            {selectedProject.videoUrl && (
              <div className="aspect-video bg-black border border-white/20 overflow-hidden">
                <video
                  src={selectedProject.videoUrl}
                  controls
                  className="w-full h-full"
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            )}

            <div className="border-t border-white/20 pt-4">
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Description</h3>
              <div className="text-sm text-white/80 leading-relaxed whitespace-pre-line">
                {selectedProject.fullDescription}
              </div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Code JavaScript</h3>
              <div className="bg-[#1e1e1e] border border-white/20 p-4 overflow-x-auto">
                <pre className="text-xs text-white/80 font-mono">
                  <code>{selectedProject.codeSnippet || '
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
'}</code>
                </pre>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <button
                onClick={handleFullscreen}
                className="absolute top-2 right-2 z-10 bg-black/80 border border-white/40 p-2 hover:bg-white/10 transition-colors"
                title="Plein écran"
              >
                <Maximize2 size={16} className="text-white/70" />
              </button>
              <div
                ref={iframeContainerRef}
                className="aspect-video bg-black border border-white/20 overflow-hidden"
              >
                <iframe
                  src={selectedProject.iframeUrl}
                  title={selectedProject.title}
                  className="w-full h-full"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Captures d'écran</h3>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.screenshots.map((screenshot, idx) => (
                  <div key={idx} className="aspect-video border border-white/20 overflow-hidden">
                    <img
                      src={screenshot.src}
                      alt={screenshot.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/20 pt-4 space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Architecture</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Stack Technique</h3>
                <div className="space-y-3">
                  {Object.entries(selectedProject.stack).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-xs text-white/50 mb-2 capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="text-xs bg-white/5 border border-white/20 px-2 py-1 text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  const featuredProjects = devProjects.filter(p => p.title === 'Kaarbon Komplite' || p.title === 'ForkJam');
  const galleryProjects = devProjects.filter(p => p.id === 'dev-1');
  const galleryImages = devProjects.filter(p => p.screenshots).flatMap(p => p.screenshots).slice(0, 2);

  return (
    <>
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setEnlargedImage(null)}
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          <img
            src={enlargedImage.src}
            alt={enlargedImage.title}
            className="max-w-full max-h-[70vh] object-contain mb-4"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="text-center max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-light mb-2">{enlargedImage.title}</h3>
            <p className="text-sm text-white/70">{enlargedImage.description}</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
            DÉVELOPPEMENT
          </h2>

          <p className="text-xs text-white/40 leading-relaxed">
            Projets de développement web incluant des applications interactives, des sites vitrines et des expériences numériques. Spécialisé dans les technologies modernes comme React, Three.js et Node.js pour créer des interfaces performantes et engageantes.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-white/60 mb-3">Projets Principaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-white/20 hover:border-white/40 transition-colors cursor-pointer overflow-hidden group"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-video relative overflow-hidden bg-black">
                  <img
                    src={project.thumbnail || project.screenshots[0].src}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-sm font-medium mb-1">{project.title}</h4>
                    <p className="text-xs text-white/60">{project.description}</p>
                  </div>
                </div>
                <div className="p-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] border border-white/20 px-2 py-0.5 text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-white/60 mb-3">Divers</h3>
          <div className="grid grid-cols-3 gap-3">
            {galleryProjects.map((project) => (
              <div
                key={project.id}
                className="aspect-square border border-white/20 overflow-hidden cursor-pointer group relative"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <p className="text-xs text-white text-center">{project.title}</p>
                </div>
              </div>
            ))}
            {galleryImages.map((image, idx) => (
              <div
                key={`img-${idx}`}
                className="aspect-square border border-white/20 overflow-hidden cursor-pointer group relative"
                onClick={() => setEnlargedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <p className="text-xs text-white text-center">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
