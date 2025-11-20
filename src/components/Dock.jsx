import { useState } from 'react';
import { Calculator, Scale, Image, Briefcase, Hand, Plus, Square, Pen, Layers } from 'lucide-react';
import { useWindowStore } from '../state/useWindowStore';

const DockIcon = ({ icon, title, windowId, onIconClick, isOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => onIconClick(windowId)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`text-white hover:opacity-70 transition-opacity relative ${isOpen ? 'after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:bg-white' : ''}`}
      >
        {icon}
      </button>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#051810] border border-white px-3 py-1 text-white text-[10px] uppercase tracking-wider whitespace-nowrap pointer-events-none z-20">
          {title}
        </div>
      )}
    </div>
  );
};

const DockGroup = ({ label, icons, onIconClick, openWindows }) => {
  return (
    <div className="relative border-[1.5px] border-white px-5 py-3 flex items-center gap-6 flex-shrink-0">
      <span className="absolute -top-2.5 left-4 bg-[#0a2f1f] px-2 text-white text-[10px] uppercase tracking-widest font-medium z-10">
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

  const infosIcons = [
    { icon: <Calculator size={36} strokeWidth={2} />, title: 'À propos', windowId: 'about' },
    { icon: <Scale size={36} strokeWidth={2} />, title: 'CV', windowId: 'cv' }
  ];

  const creationIcons = [
    { icon: <Image size={36} strokeWidth={2} />, title: 'Vidéos', windowId: 'videos' },
    { icon: <Briefcase size={36} strokeWidth={2} />, title: 'Projets Créatifs', windowId: 'projects' },
    { icon: <Hand size={36} strokeWidth={2} />, title: '3D / Motion', windowId: 'three-d' }
  ];

  const techniqueIcons = [
    { icon: <Plus size={36} strokeWidth={2} />, title: 'Contact', windowId: 'contact' },
    { icon: <Square size={36} strokeWidth={2} />, title: 'Développement', windowId: 'dev' },
    { icon: <Pen size={36} strokeWidth={2} />, title: 'Lab', windowId: 'lab' },
    { icon: <Layers size={36} strokeWidth={2} />, title: 'TouchDesigner', windowId: 'touchdesigner' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-full max-w-[100vw] md:w-auto">
      <div className="overflow-x-auto overflow-y-visible md:overflow-visible px-4 scrollbar-hide">
        <div className="flex items-center gap-6 w-max">
          <DockGroup label="INFOS" icons={infosIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="CRÉATION" icons={creationIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="TECHNIQUE" icons={techniqueIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
        </div>
      </div>
    </div>
  );
};
