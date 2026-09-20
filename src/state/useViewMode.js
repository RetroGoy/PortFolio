import { create } from 'zustand';

// 'desktop' = l'OS phosphore avec ses fenêtres ; 'page' = lecture linéaire.
const STORAGE_KEY = 'portfolio-view-mode';

// En dessous de cette largeur, les fenêtres déplaçables n'ont plus de place :
// on ouvre directement la version page.
const DESKTOP_MIN_WIDTH = 900;

const readInitialMode = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'desktop' || saved === 'page') return saved;
  } catch {
    // stockage indisponible (navigation privée, cookies bloqués)
  }
  return window.innerWidth < DESKTOP_MIN_WIDTH ? 'page' : 'desktop';
};

const persist = (mode) => {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // on se contente du mode en mémoire
  }
};

export const useViewMode = create((set) => ({
  mode: readInitialMode(),

  setMode: (mode) => {
    persist(mode);
    set({ mode });
  },

  toggleMode: () => set((state) => {
    const mode = state.mode === 'desktop' ? 'page' : 'desktop';
    persist(mode);
    return { mode };
  })
}));
