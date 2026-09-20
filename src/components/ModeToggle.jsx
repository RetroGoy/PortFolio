import { AppWindow, AlignLeft } from 'lucide-react';
import { useViewMode } from '../state/useViewMode';

const Segment = ({ active, onClick, icon, label, title }) => (
  <button
    onClick={onClick}
    title={title}
    aria-pressed={active}
    className={`flex items-center gap-1.5 px-2 py-1 text-[9px] uppercase tracking-widest transition-colors ${
      active ? 'text-white bg-white/10' : 'text-white/35 hover:text-white/70'
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

export const ModeToggle = () => {
  const { mode, setMode } = useViewMode();

  return (
    <div className="fixed top-5 right-3 md:right-5 z-[300]">
      <div className="flex items-stretch border border-white/20 bg-black/40 backdrop-blur-sm">
        <Segment
          active={mode === 'desktop'}
          onClick={() => setMode('desktop')}
          icon={<AppWindow size={12} strokeWidth={1.5} />}
          label="Bureau"
          title="Mode bureau : fenêtres déplaçables"
        />
        <Segment
          active={mode === 'page'}
          onClick={() => setMode('page')}
          icon={<AlignLeft size={12} strokeWidth={1.5} />}
          label="Page"
          title="Mode page : lecture classique, de haut en bas"
        />
      </div>
    </div>
  );
};
