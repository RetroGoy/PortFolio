import { useState, useEffect } from 'react';
import { videos } from '../data/videos';
import { Play } from 'lucide-react';

export const VideoWindow = ({ onNavigate, currentView }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

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
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-light tracking-wide pb-2">
          {selectedVideo.title}
        </h2>

        <div className="aspect-video bg-black border border-white/20">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {selectedVideo.images.map((img, idx) => (
            <div key={idx} className="aspect-video border border-white/20 overflow-hidden">
              <img
                src={img}
                alt={`${selectedVideo.title} - image ${idx + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
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
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        VIDÉOS & COURTS-MÉTRAGES
      </h2>

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
            <div className="p-3">
              <p className="text-sm text-white/90">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
