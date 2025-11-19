import { Mail, Github, Linkedin } from 'lucide-react';

export const ContactWindow = () => {
  const contacts = [
    {
      icon: <Mail size={24} strokeWidth={1.5} />,
      label: 'Email',
      value: 'votre.email@example.com',
      link: 'mailto:votre.email@example.com'
    },
    {
      icon: <Github size={24} strokeWidth={1.5} />,
      label: 'GitHub',
      value: 'github.com/votre-username',
      link: 'https://github.com/votre-username'
    },
    {
      icon: <Linkedin size={24} strokeWidth={1.5} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/votre-profil',
      link: 'https://linkedin.com/in/votre-profil'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        CONTACT
      </h2>

      <div className="space-y-3">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-white/20 p-4 hover:bg-white/5 transition-colors group"
          >
            <div className="text-white/60 group-hover:text-white transition-colors">
              {contact.icon}
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                {contact.label}
              </div>
              <div className="text-sm text-white/90">
                {contact.value}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-white/20 text-xs text-white/60">
        N'hésitez pas à me contacter pour toute collaboration ou projet créatif.
      </div>
    </div>
  );
};
