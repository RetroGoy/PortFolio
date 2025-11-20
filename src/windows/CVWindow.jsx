import { Download, MapPin, Phone, Mail } from 'lucide-react';

export const CVWindow = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CVmastereV4.pdf';
    link.download = 'CV_Nathanael_NAVEAU.pdf';
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/20 pb-4">
        <div>
          <h2 className="text-2xl font-light tracking-wide text-green-400">Nathanaël NAVEAU</h2>
          <p className="text-xs text-white/60 mt-1">Développeur full-stack en alternance</p>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white/10 transition-colors text-sm"
        >
          <Download size={16} strokeWidth={1.5} />
          TÉLÉCHARGER PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-white/60" />
          <span>69400, Permis B véhiculé</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-white/60" />
          <span>+33 6 01 82 60 94</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-white/60" />
          <span>n.naveau@icloud.com</span>
        </div>
      </div>

      <div className="bg-white/5 border border-white/20 p-4 rounded">
        <h3 className="font-light text-white/80 mb-2 uppercase text-xs tracking-wider">Profil</h3>
        <p className="text-sm text-white/80 leading-relaxed">
          Développeur full-stack en alternance (Mastère Architecture Logiciel) avec 3 ans d'expérience dans le développement d'applications et l'industrialisation logicielle (.NET, React, Docker).
          Je recherche une alternance de 24 mois pour contribuer à des projets innovants et approfondir mes compétences en cloud-native, qualité logicielle et développement web.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Expériences Professionnelles</h3>

        <div className="space-y-4">
          <div className="border-l-2 border-green-400 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-white">QUALI RETRAITE / Alternant Développeur</h4>
              <span className="text-xs text-white/60">Sept 2024 - Sept 2025</span>
            </div>
            <p className="text-xs text-white/60 mb-2">Lyon</p>
            <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
              <li>Conteneurisation des services applicatifs et automatisation CI/CD via GitHub Actions et Docker</li>
              <li>Refonte et création d'écrans WPF (MVVM) : harmonisation visuelle, amélioration UX et performance</li>
              <li>Intégration de la télémétrie Azure (Application Insights) et suivi des logs en production</li>
              <li>Collaboration inter-équipes sur un logiciel de simulation de retraite</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-white">FACTORIELLES / Alternant Développeur</h4>
              <span className="text-xs text-white/60">Sept 2022 - Août 2024</span>
            </div>
            <p className="text-xs text-white/60 mb-2">Lyon</p>
            <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
              <li>Re-design d'écrans WPF pour renforcer la cohérence UI/UX</li>
              <li>Développement d'un guide HTML/CSS hors-ligne intégré à l'application</li>
              <li>Participation à la migration vers le pattern MVVM</li>
              <li>Contribution à des modules de calculs financiers (retraite, fiscalité)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Formations</h3>

        <div className="space-y-3">
          <div className="border-l-2 border-green-400 pl-4">
            <h4 className="text-sm font-medium text-white">MASTÈRE ARCHITECTURE LOGICIEL</h4>
            <p className="text-xs text-white/60">ESGI Lyon - 2025 - 2027 (en cours)</p>
            <p className="text-xs text-white/80 mt-1">Architecte logiciel en alternance - 3 semaines d'entreprise sur 4</p>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <h4 className="text-sm font-medium text-white">BACHELOR ARCHITECTURE LOGICIEL</h4>
            <p className="text-xs text-white/60">ESGI Lyon - 2024 - 2025</p>
            <ul className="text-xs text-white/80 mt-1 space-y-1 list-disc list-inside">
              <li>Java (MVC + JUnit)</li>
              <li>API REST Node.js + front React</li>
              <li>Application Spring Boot : Pipeline CI GitHub Actions</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <h4 className="text-sm font-medium text-white">BTS SERVICE INFORMATIQUE</h4>
            <p className="text-xs text-white/60">Maestris BTS Lyon - 2015 - 2018</p>
            <p className="text-xs text-white/80 mt-1">Développement et systèmes</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Compétences</h3>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-white/60 mb-1">Langages :</p>
              <p className="text-white/80">C# · JavaScript · SQL</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">Frameworks :</p>
              <p className="text-white/80">.NET 7 · WPF / XAML · React / Next.js</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">Outils :</p>
              <p className="text-white/80">Git · Docker · GitHub Actions · Scrum</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Langues & Soft Skills</h3>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-white/60 mb-1">Langues :</p>
              <p className="text-white/80">Français natif</p>
              <p className="text-white/80">Anglais technique professionnel - B1</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">Soft Skills :</p>
              <p className="text-white/80">Adaptabilité · Autonomie · Créativité</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Centres d'Intérêt</h3>
        <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
          <li>Montage vidéo (courts-métrages, post-production, compositing)</li>
          <li>Création 3D (Blender, TouchDesigner, modélisation & rendu)</li>
          <li>Nouvelles technologies (IA, outils créatifs, cloud)</li>
        </ul>
      </div>
    </div>
  );
};
