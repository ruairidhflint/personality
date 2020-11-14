import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './Styles/cssReset';
import { useState } from 'react';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/AppContainer';

import { AnswersContext } from './Context/AnswersContext';

import TitlePage from './Views/TitlePage';
import Introduction from './Views/Introduction';
import Instructions from './Views/Instructions';
import QuestionContainer from './Views/QuestionContainer';
import TestFile from './Views/TestFile';

function App() {
  const [userAnswers, setUserAnswers] = useState({});
  return (
    <ThemeProvider theme={Theme}>
      <AnswersContext.Provider value={{ userAnswers, setUserAnswers }}>
        <GlobalStyle />
        <AppContainer>
          <Route exact path="/" component={TitlePage} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/questions" component={QuestionContainer} />
          <Route path="/test" component={TestFile} />
        </AppContainer>
      </AnswersContext.Provider>
    </ThemeProvider>
  );
}

export default App;
