import { useState, useEffect } from 'react';
import { labExperiments } from '../data/projects';
import { Beaker, ExternalLink } from 'lucide-react';

export const LabWindow = ({ onNavigate, currentView }) => {
  const [selectedExperiment, setSelectedExperiment] = useState(null);

  const handleExperimentClick = (experiment) => {
    setSelectedExperiment(experiment);
    if (onNavigate) {
      onNavigate(experiment.title);
    }
  };

  useEffect(() => {
    if (currentView === null && selectedExperiment) {
      setSelectedExperiment(null);
    }
  }, [currentView]);

  if (selectedExperiment) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-wide">
            {selectedExperiment.title}
          </h2>
          <a
            href={selectedExperiment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1 transition-colors"
          >
            <ExternalLink size={14} />
            Voir l'expérience
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedExperiment.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs border border-white/30 px-3 py-1 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="aspect-video bg-black border border-white/20 overflow-hidden">
          <iframe
            src={selectedExperiment.iframeUrl}
            title={selectedExperiment.title}
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Captures d'écran</h3>
          <div className="grid grid-cols-3 gap-3">
            {selectedExperiment.screenshots.map((screenshot, idx) => (
              <div key={idx} className="aspect-video border border-white/20 overflow-hidden">
                <img
                  src={screenshot}
                  alt={`${selectedExperiment.title} - screenshot ${idx + 1}`}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 space-y-4">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Description</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {selectedExperiment.detailedDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">Fonctionnalités</h3>
            <ul className="space-y-2">
              {selectedExperiment.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 bg-white/50"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-white/20 pb-2">
        <Beaker size={24} strokeWidth={1} />
        <h2 className="text-xl font-light tracking-wide">LAB / SANDBOX</h2>
      </div>

      <p className="text-sm text-white/70">
        Expérimentations et prototypes créatifs
      </p>

      <div className="grid grid-cols-2 gap-4">
        {labExperiments.map((exp) => (
          <div
            key={exp.id}
            className="border border-white/20 hover:border-white/40 transition-colors cursor-pointer group"
            onClick={() => handleExperimentClick(exp)}
          >
            <div className="aspect-square overflow-hidden bg-white/5">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm mb-1">{exp.title}</h3>
              <p className="text-xs text-white/60">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
