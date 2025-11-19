import { useWindowStore } from '../state/useWindowStore';

export const AboutWindow = () => {
  const { openWindow } = useWindowStore();

  const skills = [
    { name: 'TouchDesigner', windowId: 'projects' },
    { name: 'Three.js', windowId: 'dev' },
    { name: 'React', windowId: 'dev' },
    { name: 'WebGL', windowId: 'dev' },
    { name: 'DaVinci Resolve', windowId: 'videos' },
    { name: 'Blender', windowId: 'three-d' },
    { name: 'After Effects', windowId: 'videos' },
    { name: 'Motion Design', windowId: 'three-d' },
    { name: 'Node.js', windowId: 'dev' },
    { name: 'WebRTC', windowId: 'dev' }
  ];

  const handleSkillClick = (windowId) => {
    openWindow({
      id: windowId,
      title: windowId.replace(/-/g, ' ').toUpperCase()
    });
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        À PROPOS DE MOI
      </h2>

      <div className="space-y-3 text-sm leading-relaxed text-white/90">
        <p>
          Créatif numérique passionné par l'intersection entre art, technologie et interaction.
        </p>

        <p>
          Mon travail explore les possibilités offertes par les outils de création en temps réel,
          la visualisation de données, et les installations interactives.
        </p>

        <p>
          Spécialisé dans TouchDesigner, Three.js, et les technologies web créatives,
          je crée des expériences visuelles immersives pour des événements, performances live,
          et installations artistiques.
        </p>

        <div className="pt-4 mt-4 border-t border-white/20">
          <p className="text-xs text-white/60 mb-4">
            Développeur • Artiste Visuel • Creative Coder
          </p>
        </div>

        <div className="pt-2">
          <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider">Compétences</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <button
                key={skill.name}
                onClick={() => handleSkillClick(skill.windowId)}
                className="border border-white/30 px-3 py-1 text-xs hover:bg-white/10 hover:border-white/50 transition-colors cursor-pointer"
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
