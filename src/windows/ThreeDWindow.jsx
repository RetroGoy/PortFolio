import { useState, useEffect } from 'react';
import { threeDProjects, galleryImages } from '../data/threeDProjects';
import { Play } from 'lucide-react';

export const ThreeDWindow = ({ onNavigate, currentView }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (onNavigate) {
      onNavigate(project.title);
    }
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    if (onNavigate) {
      onNavigate(null);
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
        <h2 className="text-2xl font-light tracking-wide pb-2">
          {selectedProject.title}
        </h2>

        {selectedProject.youtubeId ? (
          <div className="aspect-video bg-black border border-white/20">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
              title={selectedProject.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : selectedProject.isInteractive ? (
          <div className="aspect-video bg-white/5 border border-white/20 flex items-center justify-center">
            <div className="text-center text-white/60">
              <div className="text-sm mb-2">Visualiseur 3D Interactif</div>
              <div className="text-xs">Modèle 3D à venir</div>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-3 gap-3">
          {selectedProject.images.map((img, idx) => (
            <div key={idx} className="aspect-video border border-white/20 overflow-hidden">
              <img
                src={img}
                alt={`${selectedProject.title} - image ${idx + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-4 space-y-3">
          <p className="text-sm text-white/80 leading-relaxed">
            {selectedProject.description}
          </p>

          {selectedProject.tools && (
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Outils utilisés</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, idx) => (
                  <span key={idx} className="text-xs border border-white/20 px-2 py-1 text-white/70">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        3D
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {threeDProjects.map((project) => (
          <div
            key={project.id}
            className="border border-white/20 hover:border-white/40 transition-colors cursor-pointer group"
            onClick={() => handleProjectClick(project)}
          >
            <div className="aspect-video bg-white/5 relative overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              {project.youtubeId && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <Play size={32} className="text-white" strokeWidth={1} />
                </div>
              )}
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-white/90">{project.title}</p>
                <span className="text-[10px] text-white/40 whitespace-nowrap">{project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20 pt-4">
        <h3 className="text-sm font-light tracking-wide text-white/70 uppercase mb-3">Galerie</h3>
        <div className="grid grid-cols-3 gap-3">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="aspect-square border border-white/20 hover:border-white/40 transition-colors cursor-pointer bg-white/5 overflow-hidden relative group"
            >
              <img
                src={item.src}
                alt={item.description}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                <p className="text-white text-xs text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
