import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <StyledErrorContainer>
      <h1>Uh oh!</h1>
      <p className="first">Looks like you've taken a wrong turn.</p>
      <p>
        If you work for CP+R, please follow the link from The Hub to get your
        unique access token.
      </p>
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
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.orange};
    text-align: center;
    width: 76%;
    margin-bottom: 1.5rem;

    &.first {
      font-size: 2rem;

      color: ${(props) => props.theme.darkgrey};
    }
  }
`;

export default ErrorPage;
