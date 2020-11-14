import styled from 'styled-components';

const TitlePage = () => {
  return (
    <StyledTitlePage>
      <h1>Temperament Profiler</h1>
      <a>Start</a>
    </StyledTitlePage>
  );
};

const StyledTitlePage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
  }
    a {
        font-size: 2.5rem;
        color: ${(props) => props.theme.orange};
    }
`;

export default TitlePage;
