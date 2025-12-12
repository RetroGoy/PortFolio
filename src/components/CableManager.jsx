import { useState, useEffect, useRef } from 'react';
import Xarrow from 'react-xarrows';
import { useWindowStore } from '../state/useWindowStore';

export default function CableManager() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tempEndId, setTempEndId] = useState(null);
  const connection = useWindowStore((state) => state.connection);
  const setConnection = useWindowStore((state) => state.setConnection);
  const windows = useWindowStore((state) => state.windows);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const target = e.target.closest('[id^="port-"]');
      if (target) {
        const windowId = target.id.replace('port-', '');
        setDragStart(windowId);
        setIsDragging(true);
        setMousePos({ x: e.clientX, y: e.clientY });
        e.preventDefault();
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        setMousePos({ x: e.clientX, y: e.clientY });

        const target = document.elementFromPoint(e.clientX, e.clientY);
        const portElement = target?.closest('[id^="port-"]');

        if (portElement) {
          const windowId = portElement.id.replace('port-', '');
          if (windowId !== dragStart) {
            setTempEndId(windowId);
          } else {
            setTempEndId(null);
          }
        } else {
          setTempEndId(null);
        }
      }
    };

    const handleMouseUp = (e) => {
      if (isDragging && dragStart) {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        const portElement = target?.closest('[id^="port-"]');

        if (portElement) {
          const endWindowId = portElement.id.replace('port-', '');
          if (endWindowId !== dragStart) {
            setConnection(dragStart, endWindowId);
          }
        }
      }
      setIsDragging(false);
      setDragStart(null);
      setTempEndId(null);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, setConnection]);

  const cursorRef = useRef(null);

  useEffect(() => {
    if (isDragging && cursorRef.current) {
      cursorRef.current.style.left = `${mousePos.x}px`;
      cursorRef.current.style.top = `${mousePos.y}px`;
    }
  }, [mousePos, isDragging]);

  const activeWindows = windows.map(w => w.id);
  const isConnectionValid = connection &&
    activeWindows.includes(connection.from) &&
    activeWindows.includes(connection.to);

  return (
    <>
      {isConnectionValid && (
        <Xarrow
          start={`port-${connection.from}`}
          end={`port-${connection.to}`}
          color="rgba(34, 211, 238, 0.5)"
          strokeWidth={2}
          headSize={0}
          curveness={0.6}
          path="smooth"
          showHead={false}
          dashness={{ strokeLen: 8, nonStrokeLen: 4, animation: 2 }}
          style={{
            filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.4))',
          }}
        />
      )}

      {isDragging && dragStart && (
        <>
          <div
            ref={cursorRef}
            id="drag-cursor"
            className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999]"
            style={{
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
            }}
          />
          <Xarrow
            start={`port-${dragStart}`}
            end="drag-cursor"
            color="rgba(34, 211, 238, 0.3)"
            strokeWidth={2}
            headSize={0}
            curveness={0.6}
            path="smooth"
            showHead={false}
            dashness={tempEndId ? false : { strokeLen: 4, nonStrokeLen: 4 }}
            style={{
              filter: 'drop-shadow(0 0 2px rgba(34, 211, 238, 0.3))',
            }}
          />
        </>
      )}
    </>
  );
}
