import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './Styles/cssReset';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/AppContainer';

import TitlePage from './Views/TitlePage';
import Introduction from './Views/Introduction';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppContainer>
        <Route exact path="/" component={TitlePage} />
        <Route path="/introduction" component={Introduction} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
