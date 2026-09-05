import { useState, useEffect, useRef } from 'react';
import { devProjects } from '../data/devProjects.jsx';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';

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

        {selectedProject.heroImage && (
          <div className="bg-black border border-white/20 overflow-hidden">
            <img
              src={selectedProject.heroImage}
              alt={selectedProject.title}
              className="w-full max-h-[360px] object-contain"
            />
          </div>
        )}

        {selectedProject.videoUrl && (
          <div className="aspect-video bg-black border border-white/20 overflow-hidden">
            <video src={selectedProject.videoUrl} controls className="w-full h-full">
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        )}

        {selectedProject.youtubeId && (
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Trailer</h3>
            <div className="aspect-video bg-black border border-white/20 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                title={`${selectedProject.title} — trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {selectedProject.iframeUrl && (
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Version en ligne</h3>
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
          </div>
        )}

        {selectedProject.screenshots?.length > 0 && (
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Captures d'écran</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
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
        )}

        {selectedProject.fullDescription && (
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Description</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {selectedProject.fullDescription}
            </p>
          </div>
        )}

        {selectedProject.architecture && (
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Architecture</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {selectedProject.architecture}
            </p>
          </div>
        )}

        {selectedProject.components?.length > 0 && (
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Le matériel</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
              {selectedProject.components.map((part) => (
                <div key={part.name} className="border border-white/20 bg-white/5">
                  <div className="aspect-square flex items-center justify-center p-4 bg-black/40">
                    <img
                      src={part.image}
                      alt={part.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-3 space-y-1">
                    <p className="text-xs font-medium text-white">{part.name}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{part.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedProject.stack && (
          <div className="border-t border-white/20 pt-4">
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
        )}

        {selectedProject.codeExcerpt && (
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">
              {selectedProject.codeLang ? `Extrait de code — ${selectedProject.codeLang}` : 'Extrait de code'}
            </h3>
            <CodeBlock code={selectedProject.codeExcerpt} />
          </div>
        )}
      </div>
    );
  }

  const featuredProjects = devProjects.filter(p => p.featured);
  const otherProjects = devProjects.filter(p => !p.featured);

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
            DÉVELOPPEMENT
          </h2>

          <p className="text-xs text-white/40 leading-relaxed">
            Applications web menées de bout en bout, outils en ligne de commande et bricolages autour du matériel. Un mélange de gros projets et de petits utilitaires du quotidien.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-white/60">
              {featuredProjects.length > 1 ? 'Projets Principaux' : 'Projet Principal'}
            </h3>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-white/20 hover:border-white/40 transition-colors cursor-pointer overflow-hidden group"
                onClick={() => handleProjectClick(project)}
              >
                <div className={`${project.mediaAspect || 'aspect-video'} relative overflow-hidden bg-black`}>
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-medium mb-1">{project.title}</h4>
                    <p className="text-sm text-white/70">{project.description}</p>
                  </div>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs border border-white/20 px-2 py-1 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/60 mb-3">Divers</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="aspect-square border border-white/20 overflow-hidden cursor-pointer group relative bg-white/5"
                  onClick={() => handleProjectClick(project)}
                >
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  )}
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-3 text-center transition-opacity ${
                      project.thumbnail
                        ? 'bg-black/70 opacity-0 group-hover:opacity-100'
                        : 'opacity-100'
                    }`}
                  >
                    <p className="text-xs text-white leading-snug">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
