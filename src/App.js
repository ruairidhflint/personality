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
  NameEntry,
  Instructions,
  QuestionContainer,
  ResultsMainPage,
  SliderContainer,
  SelfPerceptionIntroduction,
  ErrorPage,
  DannyResults,
} from './Views/index';

function App() {
  const [userAnswers, setUserAnswers] = useState({});

  return (
    <ThemeProvider theme={Theme}>
      <AnswersContext.Provider value={{ userAnswers, setUserAnswers }}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/danny_results" component={DannyResults} />
          <AppContainer>
            <Route exact path="/" component={TitlePage} />
            <Route path="/name" component={NameEntry} />
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
          </AppContainer>
        </Switch>
      </AnswersContext.Provider>
    </ThemeProvider>
  );
}

export default App;
