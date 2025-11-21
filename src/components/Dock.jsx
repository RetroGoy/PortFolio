import { useState } from 'react';
import { User, Palette, Box, Terminal, Hand, Instagram, Youtube, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useWindowStore } from '../state/useWindowStore';

const DockIcon = ({ icon, title, windowId, onIconClick, isOpen, href, isReseaux }) => {
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
        className={`hover:opacity-70 transition-opacity relative ${
          isReseaux ? 'text-white/80' : 'text-white'
        } ${isOpen ? 'after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:bg-white' : ''}`}
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

const DockGroup = ({ label, icons, onIconClick, openWindows, showExternalIndicator }) => {
  const isReseaux = label === 'RÉSEAUX';
  return (
    <div className={`relative border-[1.5px] px-5 py-3 flex items-center gap-6 flex-shrink-0 ${
      isReseaux ? 'border-white/80' : 'border-white'
    }`}>
      <span className={`absolute -top-1.5 left-4 bg-[#0a2f1f] px-2 text-[10px] uppercase tracking-widest font-medium z-10 flex items-center gap-1 ${
        isReseaux ? 'text-white/80' : 'text-white'
      }`}>
        {label}
        {showExternalIndicator && <ExternalLink size={10} className="opacity-60" />}
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
          isReseaux={isReseaux}
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
    { icon: <Terminal size={36} strokeWidth={1.5} />, title: 'Développement', windowId: 'dev' }
  ];

  const creationIcons = [
    { icon: <Hand size={36} strokeWidth={1.5} />, title: 'Vidéos', windowId: 'videos' },
    { icon: <Palette size={36} strokeWidth={1.5} />, title: 'Projets Créatifs', windowId: 'projects' },
    { icon: <Box size={36} strokeWidth={1.5} />, title: '3D', windowId: 'three-d' }
  ];


  const reseauxIcons = [
    { icon: <Instagram size={36} strokeWidth={1.5} />, title: 'Instagram', href: 'https://www.instagram.com/retro.goy/?hl=fr' },
    { icon: <Youtube size={36} strokeWidth={1.5} />, title: 'YouTube', href: 'https://www.youtube.com/@retrogoy/videos' },
    { icon: <Github size={36} strokeWidth={1.5} />, title: 'GitHub', href: 'https://github.com/RetroGoy' },
    { icon: <Linkedin size={36} strokeWidth={1.5} />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/nathana%C3%ABl-naveau-708478385/' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-full max-w-[100vw] md:w-auto">
      <div className="overflow-x-auto overflow-y-visible md:overflow-visible px-4 scrollbar-hide">
        <div className="flex items-center gap-6 w-max">
          <DockGroup label="TECHNIQUE" icons={techniqueIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="CRÉATION" icons={creationIcons} onIconClick={handleIconClick} openWindows={openWindowIds} />
          <DockGroup label="RÉSEAUX" icons={reseauxIcons} onIconClick={handleIconClick} openWindows={openWindowIds} showExternalIndicator={true} />
        </div>
      </div>
    </div>
  );
};
