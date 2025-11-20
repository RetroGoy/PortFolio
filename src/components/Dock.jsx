import { useState } from 'react';
import { Calculator, Scale, Image, Briefcase, Hand, Plus, Square, Pen, Layers, Instagram, Youtube, Github, Linkedin } from 'lucide-react';
import { useWindowStore } from '../state/useWindowStore';

const DockIcon = ({ icon, title, windowId, onIconClick, isOpen, href }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    } else {
      onIconClick(windowId);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`text-white hover:opacity-70 transition-opacity relative ${isOpen ? 'after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:bg-white' : ''}`}
      >
        {icon}
      </button>
      {showTooltip && (
        <div className="hidden md:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#051810] border border-white px-3 py-1 text-white text-[10px] uppercase tracking-wider whitespace-nowrap pointer-events-none z-20">
          {title}
        </div>
      )}
    </div>
  );
};

const DockGroup = ({ label, icons, onIconClick, openWindows }) => {
  return (
    <div className="relative border-[1.5px] border-white px-5 py-3 flex items-center gap-6 flex-shrink-0">
      <span className="absolute -top-1.5 left-4 bg-[#0a2f1f] px-2 text-white text-[10px] uppercase tracking-widest font-medium z-10">
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
          href={icon.href}
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

  const reseauxIcons = [
    { icon: <Instagram size={36} strokeWidth={2} />, title: 'Instagram', href: 'https://www.instagram.com/retro.goy/?hl=fr' },
    { icon: <Youtube size={36} strokeWidth={2} />, title: 'YouTube', href: 'https://www.youtube.com/@retrogoy/videos' },
    { icon: <Github size={36} strokeWidth={2} />, title: 'GitHub', href: 'https://github.com/RetroGoy' },
    { icon: <Linkedin size={36} strokeWidth={2} />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/nathana%C3%ABl-naveau-708478385/' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-full max-w-[100vw] md:w-auto">
      <div className="overflow-x-auto overflow-y-visible md:overflow-visible px-4 scrollbar-hide">
        <div className="flex items-center gap-6 w-max">
          <DockGroup label="INFOS" icons={infosIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="CRÉATION" icons={creationIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="TECHNIQUE" icons={techniqueIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="RÉSEAUX" icons={reseauxIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
        </div>
      </div>
    </div>
  );
};
