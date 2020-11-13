import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/cssReset';
import { theme } from './Styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
