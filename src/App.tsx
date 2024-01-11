import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, GlobalStyle } from './styles';
import { Home, Work } from './pages';
import { BodyLines, BodyLineFade } from './pages/components';
import { Navbar } from './pages/components/Navbar';
import ScrollSpy from 'react-ui-scrollspy';

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    darkModeQuery.matches ? 'dark' : 'light'
  );

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <ScrollSpy useBoxMethod={true}>
        <Home />
        <Navbar />
        <Work />
      </ScrollSpy>
      <BodyLineFade id='bodyLineMask' />
      <BodyLines id='bodyLines' />
    </ThemeProvider>
  );
}

export default App;
