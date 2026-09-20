import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Background } from './Background';
import { Scanlines } from './Scanlines';
import { FilmGrain } from './FilmGrain';
import { CRTEffects } from './CRTEffects';
import { Footer } from './Footer';
import { CVWindow } from '../windows/CVWindow';
import { DevWindow } from '../windows/DevWindow';
import { VisualCreationsWindow } from '../windows/VisualCreationsWindow';

// Mode « page » : le même contenu que le bureau, mais empilé et lu de haut en
// bas. Les fenêtres gardent leur navigation interne (liste -> fiche projet) ;
// c'est cette page qui stocke le fil d'Ariane de chaque section.
const sections = [
  { id: 'cv', title: 'Profil', Component: CVWindow },
  { id: 'visual-creations', title: 'Créations visuelles', Component: VisualCreationsWindow },
  { id: 'dev', title: 'Développement', Component: DevWindow }
];

export const ClassicLayout = () => {
  const [views, setViews] = useState({});
  const [activeId, setActiveId] = useState(sections[0].id);
  const [marker, setMarker] = useState(null);

  const scrollRef = useRef(null);
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const sectionRefs = useRef({});

  const handleNavigate = (sectionId, crumb) => {
    setViews((prev) => ({ ...prev, [sectionId]: crumb }));
  };

  const handleBack = (sectionId) => {
    setViews((prev) => ({ ...prev, [sectionId]: null }));
  };

  // Section courante = la dernière dont le haut est déjà passé sous la barre.
  const updateActive = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const atBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight - 4;

    if (atBottom) {
      setActiveId(sections[sections.length - 1].id);
      return;
    }

    let current = sections[0].id;
    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el && el.getBoundingClientRect().top - containerTop <= 140) {
        current = id;
      }
    });
    setActiveId(current);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateActive();
    container.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      container.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [updateActive]);

  // Position du curseur sous le lien actif (offsetTop géré aussi : sur mobile
  // la nav passe sur deux lignes).
  useEffect(() => {
    const placeMarker = () => {
      const link = linkRefs.current[activeId];
      if (!link || !navRef.current) return;
      setMarker({
        left: link.offsetLeft,
        top: link.offsetTop + link.offsetHeight + 3,
        width: link.offsetWidth
      });
    };

    placeMarker();
    window.addEventListener('resize', placeMarker);
    return () => window.removeEventListener('resize', placeMarker);
  }, [activeId, views]);

  return (
    <div ref={scrollRef} className="fixed inset-0 overflow-auto">
      <div className="min-h-screen relative">
        <CRTEffects />
        <Background />
        <Scanlines />
        <FilmGrain />

        <header className="sticky top-0 z-[150] bg-[#041810]/90 backdrop-blur-sm border-b border-white/20">
          <div className="mx-auto max-w-4xl px-4 py-3 flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <span className="text-green-400 text-sm tracking-wide">Nathanaël Naveau</span>
            <span className="hidden md:inline text-white/40 text-xs">
              Développeur créatif / interactif
            </span>

            <nav ref={navRef} className="relative flex gap-5 ml-auto">
              {sections.map((section) => (
                <a
                  key={section.id}
                  ref={(el) => { linkRefs.current[section.id] = el; }}
                  href={`#section-${section.id}`}
                  className={`text-[10px] uppercase tracking-widest transition-colors ${
                    activeId === section.id ? 'text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {section.title}
                </a>
              ))}

              {marker && (
                <span
                  aria-hidden
                  className="absolute h-px bg-green-400 transition-all duration-300 ease-out"
                  style={{ left: marker.left, top: marker.top, width: marker.width }}
                />
              )}
            </nav>
          </div>
        </header>

        <main className="relative mx-auto max-w-4xl px-4 pt-8 pb-24 space-y-8">
          {sections.map(({ id, title, Component }) => {
            const crumb = views[id];

            return (
              <section
                key={id}
                id={`section-${id}`}
                ref={(el) => { sectionRefs.current[id] = el; }}
                className="scroll-mt-20"
              >
                <div className="border border-white/20 bg-[#062318]/70 backdrop-blur-sm window-flicker">
                  <div className="flex items-center gap-2 bg-[#041810]/90 px-4 py-2">
                    {crumb && (
                      <button
                        className="text-white hover:bg-white/10 p-1 transition-colors"
                        onClick={() => handleBack(id)}
                      >
                        <ChevronLeft size={16} />
                      </button>
                    )}
                    <span className="text-white text-xs uppercase tracking-wider font-medium">
                      {crumb ? `${title} / ${crumb}` : title}
                    </span>
                  </div>

                  <div className="p-4 md:p-6 text-white">
                    <Component
                      onNavigate={(next) => handleNavigate(id, next)}
                      currentView={crumb}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </main>

        <Footer />
      </div>
    </div>
  );
};
