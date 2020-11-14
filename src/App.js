import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './Styles/cssReset';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/AppContainer';

import TitlePage from './Views/TitlePage';
import Introduction from './Views/Introduction';
import Instructions from './Views/Instructions';
import QuestionContainer from './Views/QuestionContainer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppContainer>
        <Route exact path="/" component={TitlePage} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/questions" component={QuestionContainer} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
