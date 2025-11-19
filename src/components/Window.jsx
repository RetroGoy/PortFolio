import { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { useWindowStore } from '../state/useWindowStore';

export const Window = ({ id, title, children, x, y, width, height, zIndex, breadcrumb, onBreadcrumbClick }) => {
  const { closeWindow, focusWindow, updateWindow } = useWindowStore();
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-header') && !e.target.closest('.close-btn')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - x,
        y: e.clientY - y
      });
      focusWindow(id);
    }
  };

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      width,
      height
    });
    focusWindow(id);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        updateWindow(id, {
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      } else if (isResizing) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        updateWindow(id, {
          width: Math.max(300, dragStart.width + deltaX),
          height: Math.max(200, dragStart.height + deltaY)
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, id, updateWindow]);

  const isMobile = window.innerWidth <= 768;

  return (
    <div
      ref={windowRef}
      className="absolute bg-[#062318]/70 backdrop-blur-sm max-w-[95vw] window-flicker"
      style={{
        left: isMobile ? '10px' : `${Math.max(10, Math.min(x, window.innerWidth - 320))}px`,
        top: isMobile ? '100px' : `${Math.max(100, y)}px`,
        width: isMobile ? `${window.innerWidth - 20}px` : `${Math.min(width, window.innerWidth - 20)}px`,
        height: isMobile ? `${window.innerHeight - 120}px` : `${Math.min(height, window.innerHeight - 120)}px`,
        zIndex: zIndex + 10
      }}
      onMouseDown={() => focusWindow(id)}
    >
      <div
        className="window-header flex items-center justify-between bg-[#041810]/90 px-4 py-2 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 flex-1">
          {breadcrumb && onBreadcrumbClick && (
            <button
              className="text-white hover:bg-white/10 p-1 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onBreadcrumbClick();
              }}
            >
              <ChevronLeft size={16} />
            </button>
          )}
          <span className="text-white text-xs uppercase tracking-wider font-medium">
            {breadcrumb ? `${title} / ${breadcrumb}` : title}
          </span>
        </div>
        <button
          className="close-btn text-white hover:bg-white/10 p-1 transition-colors"
          onClick={() => closeWindow(id)}
        >
          <X size={16} />
        </button>
      </div>

      <div className="overflow-auto p-4 text-white" style={{ height: `calc(100% - 41px)` }}>
        {children}
      </div>

      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
        onMouseDown={handleResizeMouseDown}
      >
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-white/50" />
      </div>
    </div>
  );
};
