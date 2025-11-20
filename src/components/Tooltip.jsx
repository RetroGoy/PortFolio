import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Tooltip = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      setVisible(false);
    };

    if (visible) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-[120px] left-1/2 -translate-x-1/2 z-[190] pointer-events-none">
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <div className="bg-[#051810] border border-white px-4 py-2 text-white text-sm uppercase tracking-wider whitespace-nowrap">
          Essayez de cliquer sur les icônes pour ouvrir les fenêtres
        </div>
        <ArrowUp size={24} strokeWidth={2} className="text-white" />
      </div>
    </div>
  );
};
