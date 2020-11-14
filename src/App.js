import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './Styles/cssReset';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/AppContainer';

import TitlePage from './Views/TitlePage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppContainer>
        <Route exact path="/" component={TitlePage} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
