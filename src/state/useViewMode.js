import { create } from 'zustand';

// 'desktop' = l'OS phosphore avec ses fenêtres ; 'page' = lecture linéaire.
const STORAGE_KEY = 'portfolio-view-mode';

const readStoredMode = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'desktop' || saved === 'page') return saved;
  } catch {
    // stockage indisponible (navigation privée, cookies bloqués)
  }
  return 'desktop';
};

const persist = (mode) => {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // on se contente du mode en mémoire
  }
};

export const useViewMode = create((set) => ({
  mode: readStoredMode(),

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
