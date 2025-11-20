import { create } from 'zustand';

const getInitialWindows = () => {
  const isMobile = window.innerWidth <= 768;

  const cvWindow = {
    id: 'cv',
    title: 'CV',
    x: isMobile ? 10 : 100,
    y: isMobile ? 100 : 150,
    width: isMobile ? window.innerWidth - 20 : 650,
    height: isMobile ? window.innerHeight - 120 : 550,
    zIndex: 1
  };

  const aboutWindow = {
    id: 'about',
    title: 'À PROPOS',
    x: isMobile ? 10 : window.innerWidth - 750,
    y: isMobile ? 100 : 150,
    width: isMobile ? window.innerWidth - 20 : 650,
    height: isMobile ? window.innerHeight - 120 : 550,
    zIndex: 2
  };

  return [cvWindow, aboutWindow];
};

export const useWindowStore = create((set) => ({
  windows: getInitialWindows(),
  maxZIndex: 2,
  closedWindowsPositions: {},

  openWindow: (windowData) => set((state) => {
    const existing = state.windows.find(w => w.id === windowData.id);
    if (existing) {
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
      y: isMobile ? 100 : Math.random() * 100 + 150,
      width: isMobile ? window.innerWidth - 20 : (windowData.width || 650),
      height: isMobile ? window.innerHeight - 120 : (windowData.height || 550)
    };

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
  }))
}));
