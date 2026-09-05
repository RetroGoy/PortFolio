import { Download, MapPin, Phone, Mail, Instagram, Github, Youtube } from 'lucide-react';

const creativeSkills = ['TouchDesigner', 'Blender', 'DaVinci Resolve', 'Photoshop'];

export const CVWindow = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV-Nathanael-Naveau.pdf';
    link.download = 'CV_Nathanael_Naveau.pdf';
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/20 pb-4">
        <div>
          <h2 className="text-2xl font-light tracking-wide text-green-400">Nathanaël Naveau</h2>
          <p className="text-[15px] text-white/80 mt-1.5">Développeur créatif / interactif</p>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white/10 transition-colors text-sm"
        >
          <Download size={16} strokeWidth={1.5} />
          TÉLÉCHARGER PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-white/60" />
            <span>Lyon · Permis B véhiculé</span>
          </div>
          <a
            href="tel:+33601826094"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Phone size={16} className="text-white/60" />
            <span>+33 6 01 82 60 94</span>
          </a>
          <a
            href="mailto:n.naveau@icloud.com"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Mail size={16} className="text-white/60" />
            <span>n.naveau@icloud.com</span>
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <a
            href="https://www.instagram.com/retro.goy/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Instagram size={16} className="text-white/60" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@retrogoy/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Youtube size={16} className="text-white/60" />
            <span>YouTube</span>
          </a>
          <a
            href="https://github.com/RetroGoy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Github size={16} className="text-white/60" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="bg-white/5 border border-white/20 p-4 rounded">
        <h3 className="font-light text-white/80 mb-2 uppercase text-xs tracking-wider">Profil</h3>
        <div className="space-y-3 text-sm text-white/80 leading-relaxed">
          <p>
            Développeur <span className="font-semibold">créatif</span> junior, avec 3 ans d'expérience en développement d'applications. Je combine <span className="font-semibold">développement web</span> et <span className="font-semibold">création visuelle</span>, avec des expérimentations autour de <span className="font-semibold">TouchDesigner</span> et <span className="font-semibold">Blender</span>.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Expériences Professionnelles</h3>

        <div className="space-y-4">
          <div className="border-l-2 border-white/20 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-white">QUALI RETRAITE / Alternant Développeur</h4>
              <span className="text-xs text-white/60">Sept 2024 - Sept 2025</span>
            </div>
            <p className="text-xs text-white/60 mb-2">Lyon</p>
            <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
              <li>Conteneurisation des services applicatifs et automatisation CI/CD via GitHub Actions et Docker</li>
              <li>Refonte et création d'écrans WPF (MVVM) : harmonisation visuelle, amélioration UX et performance</li>
              <li>Intégration de la télémétrie Azure (Application Insights) et suivi des logs en production</li>
              <li>Collaboration inter-équipes sur un logiciel de simulation de retraite (performance, maintenance, documentation)</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-white">FACTORIELLES / Alternant Développeur</h4>
              <span className="text-xs text-white/60">Sept 2022 - Août 2024</span>
            </div>
            <p className="text-xs text-white/60 mb-2">Lyon</p>
            <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
              <li>Re-design d'écrans WPF pour renforcer la cohérence UI/UX et la lisibilité métier</li>
              <li>Développement d'un guide HTML/CSS hors-ligne intégré à l'application</li>
              <li>Participation à la migration vers le pattern MVVM et intégration de nouveaux composants d'interface</li>
              <li>Contribution à des modules de calculs financiers (retraite, fiscalité) et documentation technique</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Formations</h3>

        <div className="space-y-3">
          <div className="border-l-2 border-green-400 pl-4">
            <h4 className="text-sm font-medium text-white">MASTÈRE ARCHITECTURE LOGICIEL</h4>
            <p className="text-xs text-white/60">ESGI Lyon · Sept. - Déc. 2025 (1 semestre)</p>
            <p className="text-xs text-white/80 mt-1">Spécialité Développeur créatif / interactif</p>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <h4 className="text-sm font-medium text-white">BACHELOR ARCHITECTURE LOGICIEL</h4>
            <p className="text-xs text-white/60">ESGI Lyon · 2024 - 2025</p>
            <ul className="text-xs text-white/80 mt-1 space-y-1 list-disc list-inside">
              <li>Java (MVC + JUnit)</li>
              <li>API REST Node.js + front React</li>
              <li>Application Spring Boot : Pipeline CI GitHub Actions</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <h4 className="text-sm font-medium text-white">BTS SERVICE INFORMATIQUE</h4>
            <p className="text-xs text-white/60">Maestris Lyon · 2022 - 2024</p>
            <p className="text-xs text-white/80 mt-1">Développement et systèmes</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Parcours Complémentaire</h3>

        <div className="space-y-3">
          <div className="border-l-2 border-white/20 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-medium text-white">Aide à la personne</h4>
              <span className="text-xs text-white/60">Déc. 2025 - Août 2026</span>
            </div>
            <p className="text-xs text-white/80">Accompagnement au quotidien : fiabilité, autonomie et sens des responsabilités.</p>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-medium text-white">Formation TouchDesigner — Neurotypique</h4>
              <span className="text-xs text-white/60">Août 2025</span>
            </div>
            <p className="text-xs text-white/80">Prise en main du temps réel : réseaux de nœuds, rendu et interaction.</p>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <h4 className="text-sm font-medium text-white">Option lourde cinéma-audiovisuel (lycée)</h4>
            <p className="text-xs text-white/80 mt-1">Pratique du montage et de l'étalonnage (DaVinci Resolve).</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Compétences</h3>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-white/60 mb-1">Langages :</p>
              <p className="text-white/80">JavaScript · TypeScript · HTML/CSS</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">Frameworks :</p>
              <p className="text-white/80">React / Next.js · Three.js</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">Outils :</p>
              <p className="text-white/80">TouchDesigner · Blender · Git</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Langues & Soft Skills</h3>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-white/60 mb-1">Langues :</p>
              <p className="text-white/80">Français natif</p>
              <p className="text-white/80">Anglais technique - B2</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">Soft Skills :</p>
              <p className="text-white/80">Adaptabilité · Autonomie · Créativité</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Compétences Créatives</h3>
        <div className="flex flex-wrap gap-2">
          {creativeSkills.map(skill => (
            <span
              key={skill}
              className="border border-white/30 px-3 py-1 text-xs text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-light text-white/80 mb-3 uppercase text-xs tracking-wider border-b border-white/20 pb-2">Centres d'Intérêt</h3>
        <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
          <li>Montage vidéo (courts-métrages, post-production, compositing)</li>
          <li>Création 3D (Blender, TouchDesigner, modélisation & rendu)</li>
          <li>Installations interactives et outils temps réel</li>
        </ul>
      </div>
    </div>
  );
};
