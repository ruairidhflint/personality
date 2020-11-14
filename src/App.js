import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/cssReset';
import { Theme } from './Styles/themes';
import { AppContainer } from './Styles/appStyle';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppContainer></AppContainer>
    </ThemeProvider>
  );
}

export default App;
