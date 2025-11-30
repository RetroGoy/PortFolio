import { useState } from 'react';
import { useWindowStore } from '../state/useWindowStore';
import { Window } from './Window';
import { Dock } from './Dock';
import { Background } from './Background';
import { Scanlines } from './Scanlines';
import { FilmGrain } from './FilmGrain';
import { CRTEffects } from './CRTEffects';
import { Tooltip } from './Tooltip';
import { Footer } from './Footer';
import { CVWindow } from '../windows/CVWindow';
import { VideoWindow } from '../windows/VideoWindow';
import { ThreeDWindow } from '../windows/ThreeDWindow';
import { DevWindow } from '../windows/DevWindow';

const windowComponents = {
  'cv': CVWindow,
  'videos': VideoWindow,
  'three-d': ThreeDWindow,
  'dev': DevWindow
};

export const Desktop = () => {
  const { windows } = useWindowStore();
  const [windowBreadcrumbs, setWindowBreadcrumbs] = useState({});

  const handleNavigate = (windowId, breadcrumb) => {
    setWindowBreadcrumbs(prev => ({
      ...prev,
      [windowId]: breadcrumb
    }));
  };

  const handleBreadcrumbClick = (windowId) => {
    setWindowBreadcrumbs(prev => ({
      ...prev,
      [windowId]: null
    }));
  };

  return (
    <div className="fixed inset-0 overflow-auto">
      <div className="min-h-screen relative">
        <CRTEffects />
        <Background />
        <Scanlines />
        <FilmGrain />

        <Dock />
        <Tooltip />
        <Footer />

        {windows.map((window) => {
          const WindowContent = windowComponents[window.id];
          const breadcrumb = windowBreadcrumbs[window.id];

          return (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              x={window.x}
              y={window.y}
              width={window.width}
              height={window.height}
              zIndex={window.zIndex}
              breadcrumb={breadcrumb}
              onBreadcrumbClick={() => handleBreadcrumbClick(window.id)}
            >
              {WindowContent ? (
                <WindowContent
                  onNavigate={(crumb) => handleNavigate(window.id, crumb)}
                  currentView={breadcrumb}
                />
              ) : (
                <div>Contenu non trouvé</div>
              )}
            </Window>
          );
        })}
      </div>
    </div>
  );
};
