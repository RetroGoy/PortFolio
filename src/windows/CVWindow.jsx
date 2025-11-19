import { Download } from 'lucide-react';

export const CVWindow = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-white/20 pb-4">
        <h2 className="text-xl font-light tracking-wide">CURRICULUM VITAE</h2>
        <button className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white/10 transition-colors text-sm">
          <Download size={16} strokeWidth={1.5} />
          TÉLÉCHARGER PDF
        </button>
      </div>

      <div className="bg-white/5 border border-white/20 p-6 text-center text-white/60">
        <p className="text-sm">Prévisualisation du CV</p>
        <p className="text-xs mt-2">Format PDF disponible au téléchargement</p>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <h3 className="font-light text-white/80 mb-2 uppercase text-xs tracking-wider">Expérience</h3>
          <div className="space-y-2">
            <div className="border-l-2 border-white/20 pl-4">
              <h4 className="text-sm font-light">Développeur Créatif</h4>
              <p className="text-xs text-white/60">2020 - Présent</p>
              <p className="text-xs text-white/70 mt-2">
                Création d'expériences interactives et installations audiovisuelles pour événements et festivals.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-4">
              <h4 className="text-sm font-light">Motion Designer</h4>
              <p className="text-xs text-white/60">2018 - 2020</p>
              <p className="text-xs text-white/70 mt-2">
                Réalisation de vidéos et animations pour clients variés, de l'identité de marque aux clips musicaux.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-light text-white/80 mb-2 uppercase text-xs tracking-wider">Formation</h3>
          <div className="border-l-2 border-white/20 pl-4">
            <h4 className="text-sm font-light">Arts Numériques & Interaction</h4>
            <p className="text-xs text-white/60">École Supérieure d'Art - 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};
