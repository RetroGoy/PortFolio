export const ThreeDWindow = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-light tracking-wide border-b border-white/20 pb-2">
        3D / MOTION / TOUCHDESIGNER
      </h2>

      <div className="bg-white/5 border border-white/20 aspect-video flex items-center justify-center">
        <div className="text-center text-white/60">
          <div className="text-sm mb-2">Canvas 3D</div>
          <div className="text-xs">Espace réservé pour animation Three.js / WebGL</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-square border border-white/20 hover:border-white/40 transition-colors cursor-pointer bg-white/5"
          >
            <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">
              Projet {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
