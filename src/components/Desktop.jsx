import { useState } from 'react';
import { useWindowStore } from '../state/useWindowStore';
import { Window } from './Window';
import { Dock } from './Dock';
import { Background } from './Background';
import { Scanlines } from './Scanlines';
import { FilmGrain } from './FilmGrain';
import { AboutWindow } from '../windows/AboutWindow';
import { CVWindow } from '../windows/CVWindow';
import { VideoWindow } from '../windows/VideoWindow';
import { ThreeDWindow } from '../windows/ThreeDWindow';
import { ProjectsWindow } from '../windows/ProjectsWindow';
import { DevWindow } from '../windows/DevWindow';
import { LabWindow } from '../windows/LabWindow';

const windowComponents = {
  'about': AboutWindow,
  'cv': CVWindow,
  'videos': VideoWindow,
  'three-d': ThreeDWindow,
  'touchdesigner': ThreeDWindow,
  'projects': ProjectsWindow,
  'dev': DevWindow,
  'lab': LabWindow
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
        <Background />
        <Scanlines />
        <FilmGrain />

        <Dock />

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
