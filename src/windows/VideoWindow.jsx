import { useState, useEffect } from 'react';
import { videos } from '../data/videos';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export const VideoWindow = ({ onNavigate, currentView }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    if (onNavigate) {
      onNavigate(video.title);
    }
  };

  const handleBackClick = () => {
    setSelectedVideo(null);
    if (onNavigate) {
      onNavigate(null);
    }
  };

  useEffect(() => {
    if (currentView === null && selectedVideo) {
      setSelectedVideo(null);
    }
  }, [currentView]);

  if (selectedVideo) {
    const isCarousel = selectedVideo.isCarousel;
    const currentVideoId = isCarousel
      ? selectedVideo.carouselVideos[currentCarouselIndex].youtubeId
      : selectedVideo.youtubeId;
    const totalVideos = isCarousel ? selectedVideo.carouselVideos.length : 1;

    const handlePrevious = () => {
      if (currentCarouselIndex > 0) {
        setCurrentCarouselIndex(currentCarouselIndex - 1);
      }
    };

    const handleNext = () => {
      if (currentCarouselIndex < totalVideos - 1) {
        setCurrentCarouselIndex(currentCarouselIndex + 1);
      }
    };

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-light tracking-wide pb-2">
          {selectedVideo.title}
        </h2>

        <div className="relative">
          <div className="aspect-video bg-black border border-white/20">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {isCarousel && (
            <>
              <button
                onClick={handlePrevious}
                disabled={currentCarouselIndex === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 border border-white/40 p-2 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentCarouselIndex === totalVideos - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 border border-white/40 p-2 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {selectedVideo.carouselVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCarouselIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentCarouselIndex
                        ? 'bg-white w-6'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {selectedVideo.images.map((img, idx) => (
            <div key={idx} className="aspect-video border border-white/20 overflow-hidden relative group">
              <img
                src={img.src}
                alt={`${selectedVideo.title} - image ${idx + 1}`}
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
            {selectedVideo.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
         COURTS-MÉTRAGES
        </h2>

        <p className="text-xs text-white/40 leading-relaxed">
          Cette section présente mes réalisations en court-métrage, explorant différents styles narratifs et visuels. De la fiction expérimentale aux documentaires urbains, chaque projet raconte une histoire unique à travers l'image et le son.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border border-white/20 hover:border-white/40 transition-colors cursor-pointer group"
            onClick={() => handleVideoClick(video)}
          >
            <div className="aspect-video bg-white/5 relative overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                <Play size={32} className="text-white" strokeWidth={1} />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-light">{video.title}</h3>
                <span className="text-[10px] text-white/40 whitespace-nowrap">{video.date}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{video.summary}</p>
              <div className="flex flex-wrap gap-1 pt-2">
                {video.tags.map((tag) => (
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
