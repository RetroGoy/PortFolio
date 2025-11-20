import { useState, useEffect, useRef } from 'react';
import { devProjects } from '../data/projects';
import { Code, ExternalLink, Maximize2 } from 'lucide-react';

export const DevWindow = ({ onNavigate, currentView }) => {
  const [selectedProject, setSelectedProject] = useState(null);
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
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-wide">
            {selectedProject.title}
          </h2>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1 transition-colors"
          >
            <ExternalLink size={14} />
            Voir le projet
          </a>
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
                  src={screenshot}
                  alt={`${selectedProject.title} - screenshot ${idx + 1}`}
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
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        DÉVELOPPEMENT
      </h2>

      <p className="text-xs text-white/40 leading-relaxed">
        Projets de développement web incluant des applications interactives, des sites vitrines et des expériences numériques. Spécialisé dans les technologies modernes comme React, Three.js et Node.js pour créer des interfaces performantes et engageantes.
      </p>

      <div className="space-y-4">

        <div className="pt-4">
          <h3 className="text-xs uppercase tracking-wider text-white/60 mb-3">Projets</h3>
          <div className="space-y-3">
            {devProjects.map((project) => (
              <div
                key={project.id}
                className="border border-white/20 p-4 hover:border-white/40 transition-colors cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="flex items-start gap-3">
                  <Code size={20} className="text-white/60 mt-0.5" strokeWidth={1} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm">{project.title}</h4>
                      <span className="text-[10px] text-white/40 whitespace-nowrap">{project.date}</span>
                    </div>
                    <p className="text-xs text-white/60 mb-2">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] text-white/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
