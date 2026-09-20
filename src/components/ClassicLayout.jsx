import { useState } from 'react';
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
  { id: 'dev', title: 'Développement', Component: DevWindow },
  { id: 'visual-creations', title: 'Créations visuelles', Component: VisualCreationsWindow }
];

export const ClassicLayout = () => {
  const [views, setViews] = useState({});

  const handleNavigate = (sectionId, crumb) => {
    setViews((prev) => ({ ...prev, [sectionId]: crumb }));
  };

  const handleBack = (sectionId) => {
    setViews((prev) => ({ ...prev, [sectionId]: null }));
  };

  return (
    <div className="fixed inset-0 overflow-auto">
      <div className="min-h-screen relative">
        <CRTEffects />
        <Background />
        <Scanlines />
        <FilmGrain />

        <header className="sticky top-0 z-[150] bg-[#041810]/90 backdrop-blur-sm border-b border-white/20">
          <div className="mx-auto max-w-4xl px-4 py-3 pr-28 sm:pr-40 flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <span className="text-green-400 text-sm tracking-wide">Nathanaël Naveau</span>
            <span className="hidden md:inline text-white/40 text-xs">
              Développeur créatif / interactif
            </span>
            <nav className="flex gap-4 ml-auto">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="relative mx-auto max-w-4xl px-4 pt-8 pb-24 space-y-8">
          {sections.map(({ id, title, Component }) => {
            const crumb = views[id];

            return (
              <section key={id} id={`section-${id}`} className="scroll-mt-20">
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
