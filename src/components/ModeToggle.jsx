import { AppWindow, AlignLeft } from 'lucide-react';
import { useViewMode } from '../state/useViewMode';

const Segment = ({ active, onClick, icon, label, title }) => (
  <button
    onClick={onClick}
    title={title}
    aria-pressed={active}
    className={`flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-widest transition-colors ${
      active ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white/80'
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

export const ModeToggle = () => {
  const { mode, setMode } = useViewMode();

  return (
    <div className="fixed top-6 right-4 md:right-6 z-[300]">
      <div className="flex items-stretch border-[1.5px] border-white bg-[#051810]/90 backdrop-blur-sm">
        <Segment
          active={mode === 'desktop'}
          onClick={() => setMode('desktop')}
          icon={<AppWindow size={16} strokeWidth={1.5} />}
          label="Bureau"
          title="Mode bureau : fenêtres déplaçables"
        />
        <Segment
          active={mode === 'page'}
          onClick={() => setMode('page')}
          icon={<AlignLeft size={16} strokeWidth={1.5} />}
          label="Page"
          title="Mode page : lecture classique, de haut en bas"
        />
      </div>
    </div>
  );
};
