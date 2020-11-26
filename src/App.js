import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './Styles/cssReset';
import { useState } from 'react';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/AppContainer';
import { AnswersContext } from './Context/AnswersContext';
import {
  TitlePage,
  Introduction,
  Instructions,
  QuestionContainer,
  ResultsMainPage,
  SliderContainer,
  SelfPerceptionIntroduction,
  ErrorPage,
} from './Views/index';

function App() {
  const [userAnswers, setUserAnswers] = useState({});

  return (
    <ThemeProvider theme={Theme}>
      <AnswersContext.Provider value={{ userAnswers, setUserAnswers }}>
        <GlobalStyle />
        <AppContainer>
          <Switch>
            <Route exact path="/home/:id" component={TitlePage} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/instructions" component={Instructions} />
            <Route path="/questions" component={QuestionContainer} />
            <Route
              path="/selfperception-intro"
              component={SelfPerceptionIntroduction}
            />
            <Route path="/selfperception" component={SliderContainer} />
            <Route path="/results" component={ResultsMainPage} />
            <Route component={ErrorPage} />
          </Switch>
        </AppContainer>
      </AnswersContext.Provider>
    </ThemeProvider>
  );
}

export default App;
