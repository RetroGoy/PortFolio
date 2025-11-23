import { useBackgroundScrollProgress } from '../hooks/useBackgroundScrollProgress';
import { useWindowStore } from '../state/useWindowStore';
import {
  WireframeLiquid,
  WireframeSoft,
  WireframeFractal,
  Dataflow,
  DataflowFast,
  Showreel,
  ShowreelSoft,
  ShowreelMuted,
} from './BackgroundModes';

export const Background = () => {
  const scrollProgress = useBackgroundScrollProgress();
  const backgroundMode = useWindowStore((state) => state.backgroundMode);

  const renderBackgroundMode = () => {
    switch (backgroundMode) {
      case 'wireframe-liquid':
        return <WireframeLiquid />;
      case 'wireframe-soft':
        return <WireframeSoft />;
      case 'wireframe-fractal':
        return <WireframeFractal />;
      case 'dataflow':
        return <Dataflow />;
      case 'dataflow-fast':
        return <DataflowFast />;
      case 'showreel':
        return <Showreel />;
      case 'showreel-soft':
        return <ShowreelSoft />;
      case 'showreel-muted':
        return <ShowreelMuted />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 -z-10 bg-[#0a2f1f]">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {renderBackgroundMode()}

      <div
        id="custom-animation-canvas"
        className="absolute inset-0"
        data-scroll-progress={scrollProgress}
      >
      </div>
    </div>
  );
};
