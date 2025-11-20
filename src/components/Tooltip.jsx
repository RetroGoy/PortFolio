import { useState, useEffect } from 'react';

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
    <div className="fixed top-[120px] left-1/2 -translate-x-1/2 z-[190] pointer-events-none px-4 max-w-[90vw] md:max-w-none">
      <div className="animate-float">
        <div className="bg-[#051810] border border-white px-3 py-2 md:px-4 text-white text-xs md:text-sm uppercase tracking-wider text-center">
          <span className="hidden md:inline">Cliquez sur les icônes pour ouvrir les fenêtres</span>
          <span className="md:hidden">Glissez pour voir les options</span>
        </div>
      </div>
    </div>
  );
};
