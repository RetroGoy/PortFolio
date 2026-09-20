// Blocs de fiche projet partagés entre les fenêtres Développement et
// Créations Visuelles : galerie légendée et moodboard de références.

export const SectionTitle = ({ children }) => (
  <h3 className="text-sm uppercase tracking-wider text-white/60 mb-3">{children}</h3>
);

export const Gallery = ({ images, title = 'Images' }) => {
  if (!images?.length) return null;

  return (
    <div className="border-t border-white/20 pt-4">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {images.map((img, idx) => (
          <figure key={idx} className="space-y-2">
            <div className="aspect-video border border-white/20 overflow-hidden bg-black">
              <img
                src={img.src}
                alt={img.caption || `Image ${idx + 1}`}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
            {img.caption && (
              <figcaption className="text-xs text-white/60 leading-relaxed">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
};

export const Moodboard = ({ moodboard }) => {
  if (!moodboard?.items?.length) return null;

  return (
    <div className="border-t border-white/20 pt-4">
      <SectionTitle>Moodboard — références</SectionTitle>
      {moodboard.note && (
        <p className="text-xs text-white/40 leading-relaxed mb-3 italic">
          {moodboard.note}
        </p>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {moodboard.items.map((item, idx) => (
          <figure key={idx} className="space-y-2">
            <div className="aspect-video border border-dashed border-white/25 overflow-hidden bg-black">
              <img
                src={item.src}
                alt={item.caption}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <figcaption className="text-xs text-white/60 leading-relaxed">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
