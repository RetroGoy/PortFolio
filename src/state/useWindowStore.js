import { create } from 'zustand';
import { playOpenSound, playCloseSound } from '../utils/soundEffects';

const getInitialWindows = () => {
  const isMobile = window.innerWidth <= 768;

  const cvWindow = {
    id: 'cv',
    title: 'PROFIL',
    x: isMobile ? 10 : 100,
    y: isMobile ? 100 : 120,
    width: isMobile ? window.innerWidth - 20 : 550,
    height: isMobile ? window.innerHeight - 120 : 550,
    zIndex: 1
  };

  return [cvWindow];
};

export const useWindowStore = create((set) => ({
  windows: getInitialWindows(),
  maxZIndex: 2,
  closedWindowsPositions: {},
  connection: null,
  backgroundMode: 'none',

  openWindow: (windowData) => set((state) => {
    const existing = state.windows.find(w => w.id === windowData.id);
    if (existing) {
      playOpenSound();
      return {
        windows: state.windows.map(w =>
          w.id === windowData.id
            ? { ...w, zIndex: state.maxZIndex + 1 }
            : w
        ),
        maxZIndex: state.maxZIndex + 1
      };
    }

    const savedPosition = state.closedWindowsPositions[windowData.id];
    const isMobile = window.innerWidth <= 768;

    const defaultPosition = savedPosition || {
      x: isMobile ? 10 : Math.random() * 200 + 100,
      y: isMobile ? 100 : Math.random() * 50 + 100,
      width: isMobile ? window.innerWidth - 20 : (windowData.width || 550),
      height: isMobile ? window.innerHeight - 120 : (windowData.height || 550)
    };

    playOpenSound();

    return {
      windows: [
        ...state.windows,
        {
          ...windowData,
          ...defaultPosition,
          zIndex: state.maxZIndex + 1
        }
      ],
      maxZIndex: state.maxZIndex + 1
    };
  }),

  closeWindow: (id) => set((state) => {
    const windowToClose = state.windows.find(w => w.id === id);
    const newClosedPositions = { ...state.closedWindowsPositions };

    if (windowToClose) {
      newClosedPositions[id] = {
        x: windowToClose.x,
        y: windowToClose.y,
        width: windowToClose.width,
        height: windowToClose.height
      };
    }

    playCloseSound();

    return {
      windows: state.windows.filter(w => w.id !== id),
      closedWindowsPositions: newClosedPositions
    };
  }),

  focusWindow: (id) => set((state) => ({
    windows: state.windows.map(w =>
      w.id === id ? { ...w, zIndex: state.maxZIndex + 1 } : w
    ),
    maxZIndex: state.maxZIndex + 1
  })),

  updateWindow: (id, updates) => set((state) => ({
    windows: state.windows.map(w =>
      w.id === id ? { ...w, ...updates } : w
    )
  })),

  setConnection: (fromId, toId) => set((state) => {
    if (!fromId || !toId || fromId === toId) {
      return { connection: null, backgroundMode: 'none' };
    }

    const connectionKey = [fromId, toId].sort().join('-');
    const reverseKey = [toId, fromId].sort().join('-');

    const connectionMap = {
      '3d-creatif': 'wireframe-liquid',
      '3d-films': 'showreel',
      'cv-dev': 'dataflow',
      'creatif-dev': 'dataflow-fast',
      'creatif-cv': 'wireframe-soft',
      'creatif-films': 'showreel-soft',
      '3d-dev': 'wireframe-fractal',
      'cv-films': 'showreel-muted'
    };

    const backgroundMode = connectionMap[connectionKey] || connectionMap[reverseKey] || 'none';

    return {
      connection: { from: fromId, to: toId },
      backgroundMode
    };
  }),

  clearConnection: () => set({ connection: null, backgroundMode: 'none' })
}));
