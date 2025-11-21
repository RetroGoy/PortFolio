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
    return (
      <div className="space-y-6">
        <div className="space-y-3">
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
      </div>
    );
  }

  const featuredProjects = devProjects.filter(p => p.title === 'Kaarbon Komplite' || p.title === 'ForkJam');
  const galleryImages = devProjects.flatMap(p => p.screenshots).slice(0, 3);

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
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
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
