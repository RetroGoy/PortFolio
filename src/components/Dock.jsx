import { useState } from 'react';
import { Calculator, Scale, TrendingUp, Briefcase, Droplets, MapPin, FileText } from 'lucide-react';
import { useWindowStore } from '../state/useWindowStore';

const DockIcon = ({ icon, title, windowId, onIconClick, isOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => onIconClick(windowId)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`text-white hover:opacity-70 transition-opacity relative ${isOpen ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-white' : ''}`}
      >
        {icon}
      </button>
      {showTooltip && (
        <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-[#051810] border-2 border-white px-4 py-2 text-white text-xs uppercase tracking-wider whitespace-nowrap pointer-events-none z-20">
          {title}
        </div>
      )}
    </div>
  );
};

const DockGroup = ({ label, icons, onIconClick, openWindows }) => {
  return (
    <div className="relative border-[3px] border-white px-12 py-8 flex items-center gap-12 flex-shrink-0">
      <span className="absolute -top-4 left-8 bg-[#0a2f1f] px-4 text-white text-sm uppercase tracking-widest font-bold z-10">
        {label}
      </span>
      {icons.map((icon, idx) => (
        <DockIcon
          key={idx}
          icon={icon.icon}
          title={icon.title}
          windowId={icon.windowId}
          onIconClick={onIconClick}
          isOpen={openWindows.includes(icon.windowId)}
        />
      ))}
    </div>
  );
};

export const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  const handleIconClick = (windowId) => {
    const isOpen = windows.some(w => w.id === windowId);
    if (isOpen) {
      closeWindow(windowId);
    } else {
      openWindow({
        id: windowId,
        title: windowId.replace(/-/g, ' ').toUpperCase()
      });
    }
  };

  const openWindowIds = windows.map(w => w.id);

  const projetsIcons = [
    { icon: <Calculator size={72} strokeWidth={2.5} />, title: 'Projets', windowId: 'projects' },
    { icon: <Scale size={72} strokeWidth={2.5} />, title: 'CV', windowId: 'cv' },
    { icon: <TrendingUp size={72} strokeWidth={2.5} />, title: 'Vidéos', windowId: 'videos' },
    { icon: <Briefcase size={72} strokeWidth={2.5} />, title: 'Dev', windowId: 'dev' },
    { icon: <Droplets size={72} strokeWidth={2.5} />, title: '3D / Motion', windowId: 'three-d' }
  ];

  const infosIcons = [
    { icon: <MapPin size={72} strokeWidth={2.5} />, title: 'Contact', windowId: 'contact' },
    { icon: <FileText size={72} strokeWidth={2.5} />, title: 'À propos', windowId: 'about' }
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] w-full max-w-[100vw] md:w-auto">
      <div className="overflow-x-auto overflow-y-visible md:overflow-visible px-4 scrollbar-hide">
        <div className="flex items-center gap-10 w-max">
          <DockGroup label="PROJETS" icons={projetsIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="INFOS" icons={infosIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
        </div>
      </div>
    </div>
  );
};
