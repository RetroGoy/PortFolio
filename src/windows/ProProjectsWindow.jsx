import { useState, useEffect } from 'react';
import { proProjects } from '../data/proProjects';

export const ProProjectsWindow = ({ onNavigate, currentView }) => {
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

        <div className="flex flex-wrap gap-2 mb-4">
          {selectedProject.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-white/30 px-3 py-1 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

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

        <div className="grid grid-cols-3 gap-3">
          {selectedProject.images.map((img, idx) => (
            <div key={idx} className="aspect-video border border-white/20 overflow-hidden relative group">
              <img
                src={img.src}
                alt={`${selectedProject.title} - image ${idx + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                <p className="text-white text-xs text-center">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-4">
          <p className="text-sm text-white/80 leading-relaxed">
            {selectedProject.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        PROJETS PROFESSIONNELS
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {proProjects.map((project) => (
          <div
            key={project.slug}
            className="border border-white/20 hover:border-white/40 transition-colors cursor-pointer group"
            onClick={() => handleProjectClick(project)}
          >
            <div className="aspect-video overflow-hidden bg-white/5">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-light">{project.title}</h3>
                <span className="text-[10px] text-white/40 whitespace-nowrap">{project.date}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-1 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] border border-white/30 px-2 py-0.5 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
