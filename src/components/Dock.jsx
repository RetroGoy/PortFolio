import { useState } from 'react';
import { User, Box, Terminal, Hand, Camera } from 'lucide-react';
import { useWindowStore } from '../state/useWindowStore';

const DockIcon = ({ icon, title, windowId, onIconClick, isOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => onIconClick(windowId)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`hover:opacity-70 transition-opacity relative text-white ${isOpen ? 'after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:bg-white' : ''}`}
      >
        {icon}
      </button>
      {showTooltip && (
        <div className="hidden md:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#051810] px-3 py-1 text-white text-[10px] uppercase tracking-wider whitespace-nowrap pointer-events-none z-20">
          {title}
        </div>
      )}
    </div>
  );
};

const DockGroup = ({ label, icons, onIconClick, openWindows }) => {
  return (
    <div className="relative border-[1.5px] px-5 py-3 flex items-center gap-6 flex-shrink-0 border-white">
      <span className="absolute -top-1.5 left-4 bg-[#0a2f1f] px-2 text-[10px] uppercase tracking-widest font-medium z-10 text-white">
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
      const titleMap = {
        'cv': 'PROFIL'
      };
      openWindow({
        id: windowId,
        title: titleMap[windowId] || windowId.replace(/-/g, ' ').toUpperCase()
      });
    }
  };

  const openWindowIds = windows.map(w => w.id);

  const techniqueIcons = [
    { icon: <User size={36} strokeWidth={1.5} />, title: 'Profil', windowId: 'cv' },
    { icon: <Terminal size={36} strokeWidth={1.5} />, title: 'Développement', windowId: 'dev' },
    { icon: <Camera size={36} strokeWidth={1.5} />, title: 'Vidéos', windowId: 'videos' },
    { icon: <Hand size={36} strokeWidth={1.5} />, title: 'Projets Créatifs', windowId: 'projects' },
    { icon: <Box size={36} strokeWidth={1.5} />, title: '3D', windowId: 'three-d' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-full max-w-[100vw] md:w-auto">
      <div className="overflow-x-auto overflow-y-visible md:overflow-visible px-4 scrollbar-hide">
        <div className="flex items-center gap-6 w-max">
          <DockGroup label="TECHNIQUE" icons={techniqueIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
        </div>
      </div>
    </div>
  );
};
