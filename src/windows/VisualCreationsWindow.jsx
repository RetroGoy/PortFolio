import { useState, useEffect, useRef } from 'react';
import { videos } from '../data/videos';
import { threeDProjects, galleryImages } from '../data/threeDProjects';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export const VisualCreationsWindow = ({ onNavigate, currentView }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const expandedImageRef = useRef(null);

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
    if (selectedItem?.isInstagram) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
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
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={selectedItem.instagramUrl}
              data-instgrm-version="14"
              style={{
                background: '#000',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0',
                margin: '0',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '100%'
              }}
            >
            </blockquote>
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
        ) : selectedItem.isInteractive ? (
          <div className="aspect-video bg-white/5 border border-white/20 flex items-center justify-center">
            <div className="text-center text-white/60">
              <div className="text-sm mb-2">Visualiseur 3D Interactif</div>
              <div className="text-xs">Modèle 3D à venir</div>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-3 gap-3">
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
          Mes projets visuels combinent courts-métrages, animations 3D et expérimentations créatives. Entre fiction narrative et exploration visuelle, je cherche à créer des univers qui mêlent techniques traditionnelles et outils numériques.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
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
              <div className="flex flex-wrap gap-1 pt-2">
                {item.tags.map((tag) => (
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

      <div className="border-t border-white/20 pt-4">
        <h3 className="text-sm font-light tracking-wide text-white/70 uppercase mb-3">Galerie</h3>
        <div className="grid grid-cols-3 gap-3">
          {galleryImages.map((item) => {
            const isExpanded = expandedImage === item.id;
            const isCarousel = item.isCarousel;
            const currentImage = isCarousel ? item.images[carouselIndex] : { src: item.src, description: item.description };
            const totalImages = isCarousel ? item.images.length : 1;

            const handlePrevious = (e) => {
              e.stopPropagation();
              if (carouselIndex > 0) {
                setCarouselIndex(carouselIndex - 1);
              }
            };

            const handleNext = (e) => {
              e.stopPropagation();
              if (carouselIndex < totalImages - 1) {
                setCarouselIndex(carouselIndex + 1);
              }
            };

            const handleClick = () => {
              if (expandedImage === item.id) {
                setExpandedImage(null);
                setCarouselIndex(0);
              } else {
                setExpandedImage(item.id);
                setCarouselIndex(0);
                setTimeout(() => {
                  if (expandedImageRef.current) {
                    expandedImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }, 100);
              }
            };

            return (
              <div
                key={item.id}
                ref={isExpanded ? expandedImageRef : null}
                className={`border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer bg-white/5 overflow-hidden relative group ${
                  isExpanded ? 'col-span-3 aspect-video' : 'aspect-square'
                }`}
                onClick={handleClick}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.description}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                {!isExpanded && (
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                    <p className="text-white text-xs text-center">{currentImage.description}</p>
                  </div>
                )}

                {isExpanded && isCarousel && (
                  <>
                    <button
                      onClick={handlePrevious}
                      disabled={carouselIndex === 0}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 border border-white/40 p-2 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={carouselIndex === totalImages - 1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 border border-white/40 p-2 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {item.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === carouselIndex
                              ? 'bg-white w-6'
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
