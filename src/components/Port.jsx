import { useState } from 'react';
import { useWindowStore } from '../state/useWindowStore';

export default function Port({ windowId }) {
  const [isHovered, setIsHovered] = useState(false);
  const connection = useWindowStore((state) => state.connection);

  const isConnected = connection && (connection.from === windowId || connection.to === windowId);

  return (
    <div
      id={`port-${windowId}`}
      className="relative z-50 cursor-pointer group mr-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        pointerEvents: 'auto'
      }}
    >
      <div
        className={`w-3 h-3 border-2 transition-all duration-200 ${
          isConnected
            ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
            : 'bg-gray-700 border-gray-500'
        }`}
        style={{
          boxShadow: isHovered && !isConnected
            ? '0 0 12px rgba(156, 163, 175, 0.5)'
            : isConnected
            ? '0 0 8px rgba(34, 211, 238, 0.6)'
            : 'none',
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
        }}
      />
      {isHovered && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs whitespace-nowrap rounded pointer-events-none">
          {isConnected ? 'Connected' : 'Connect'}
        </div>
      )}
    </div>
  );
}
