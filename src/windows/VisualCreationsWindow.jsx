import { useState, useEffect } from 'react';
import { videos, threeDProjects } from '../data/creativeProjects.jsx';
import { Play } from 'lucide-react';

export const VisualCreationsWindow = ({ onNavigate, currentView }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (item.comingSoon) return;
    setSelectedItem(item);
    if (onNavigate) {
      onNavigate(item.title);
    }
  };

  useEffect(() => {
    if (currentView === null && selectedItem) {
      setSelectedItem(null);
    }
  }, [currentView]);

  useEffect(() => {
    if (!selectedItem?.isInstagram) return;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    if (document.getElementById('instagram-embed-script')) return;

    const script = document.createElement('script');
    script.id = 'instagram-embed-script';
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
    // Volontairement pas de removeChild ici : embed.js remplace le <blockquote>
    // par une iframe hors du contrôle de React, et le retirer ferait planter
    // le démontage du composant.
  }, [selectedItem]);

  if (selectedItem) {
    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-light tracking-wide">
            {selectedItem.title}
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            {selectedItem.summary}
          </p>
        </div>

        {selectedItem.isInstagram ? (
          <div className="flex justify-center">
            {/* innerHTML géré hors React : embed.js mute le DOM interne, on lui
                laisse un conteneur qu'il peut transformer sans casser React. */}
            <div
              key={selectedItem.instagramUrl}
              className="w-full max-w-[540px]"
              dangerouslySetInnerHTML={{
                __html: `<blockquote class="instagram-media" data-instgrm-permalink="${selectedItem.instagramUrl}" data-instgrm-version="14" style="background:#000;border:1px solid rgba(255,255,255,0.2);border-radius:0;margin:0;max-width:540px;min-width:326px;padding:0;width:100%"></blockquote>`
              }}
            />
          </div>
        ) : selectedItem.youtubeId ? (
          <div className="aspect-video bg-black border border-white/20">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedItem.youtubeId}`}
              title={selectedItem.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}

        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
          {selectedItem.images.map((img, idx) => (
            <div key={idx} className="aspect-video border border-white/20 overflow-hidden relative group">
              <img
                src={img.src}
                alt={`${selectedItem.title} - image ${idx + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                <p className="text-white text-xs text-center">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-4 space-y-3">
          <p className="text-sm text-white/80 leading-relaxed">
            {selectedItem.description}
          </p>

          {selectedItem.tools && (
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Outils utilisés</p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tools.map((tool, idx) => (
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

  const filteredVideos = videos.filter(v =>
    !['video-2', 'video-4', 'video-6', 'video-7', 'video-8'].includes(v.id)
  );

  const allProjects = [...filteredVideos, ...threeDProjects];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
          CRÉATIONS VISUELLES
        </h2>

        <p className="text-xs text-white/40 leading-relaxed">
          Courts-métrages, animations 3D et expérimentations diverses — je passe d'un médium à l'autre selon l'idée du moment, entre fiction et pure exploration visuelle.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {allProjects.map((item) => (
          <div
            key={item.id}
            className={`border border-white/20 transition-colors group ${
              item.comingSoon
                ? 'cursor-default opacity-70'
                : 'hover:border-white/40 cursor-pointer'
            }`}
            onClick={() => handleItemClick(item)}
          >
            <div className="aspect-video bg-white/5 relative overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className={`w-full h-full object-cover ${
                  item.comingSoon
                    ? 'opacity-50'
                    : 'opacity-70 group-hover:opacity-100'
                } transition-opacity`}
              />
              <div className={`absolute inset-0 flex items-center justify-center ${
                item.comingSoon
                  ? 'bg-black/50'
                  : item.youtubeId ? 'bg-black/30 group-hover:bg-black/20' : ''
              } transition-colors`}>
                {item.comingSoon ? (
                  <span className="text-white text-sm font-light tracking-wider">À VENIR</span>
                ) : item.youtubeId || item.isInstagram ? (
                  <Play size={32} className="text-white" strokeWidth={1} />
                ) : null}
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-light">{item.title}</h3>
                <span className="text-[10px] text-white/40 whitespace-nowrap">{item.date}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
