import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/cssReset';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/AppContainer';

import TitlePage from './Views/TitlePage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppContainer>
        <TitlePage />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
