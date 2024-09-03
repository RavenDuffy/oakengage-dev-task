import { useEffect, useState } from 'react';
import { Container } from './components/Container';
import { ActivitySquare } from './components/ActivitySquare';

function App() {
  const [active, toggleActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (active) toggleActive(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <main style={{ height: '100vh', display: 'flex' }}>
      <Container
        active={active}
        onClick={() => {
          setClicked(true);
          toggleActive(!active);
        }}
      >
        <ActivitySquare active={active} ready={clicked} />
      </Container>
    </main>
  );
}

export default App;
