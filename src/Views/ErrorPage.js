import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <StyledErrorContainer>
      <h1>Uh oh!</h1>
      <p>Looks like you've taken a wrong turn</p>
    </StyledErrorContainer>
  );
};

const StyledErrorContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2rem;
    color: ${(props) => props.theme.orange};
  }
`;

export default ErrorPage;
