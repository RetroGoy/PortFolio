import { Desktop } from './components/Desktop';
import { ClassicLayout } from './components/ClassicLayout';
import { ModeToggle } from './components/ModeToggle';
import { useViewMode } from './state/useViewMode';

function App() {
  const mode = useViewMode((state) => state.mode);

  return (
    <>
      {mode === 'desktop' ? <Desktop /> : <ClassicLayout />}
      <ModeToggle />
    </>
  );
}

export default App;
