import { create } from 'zustand';

const getInitialWindows = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return [{
      id: 'cv',
      title: 'PROFIL',
      x: 10,
      y: 100,
      width: window.innerWidth - 20,
      height: window.innerHeight - 120,
      zIndex: 2
    }];
  }

  return [
    {
      id: 'dev',
      title: 'DÉVELOPPEMENT',
      x: 80,
      y: 130,
      width: 550,
      height: 550,
      zIndex: 1
    },
    {
      id: 'cv',
      title: 'PROFIL',
      x: window.innerWidth - 650,
      y: 110,
      width: 550,
      height: 550,
      zIndex: 2
    }
  ];
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
      y: isMobile ? 100 : Math.random() * 50 + 100,
      width: isMobile ? window.innerWidth - 20 : (windowData.width || 550),
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
