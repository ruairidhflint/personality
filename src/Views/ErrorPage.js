import styled from "styled-components";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AnswersContext } from "../Context/AnswersContext";

const ErrorPage = () => {
  const { setUserAnswers } = useContext(AnswersContext);
  const history = useHistory();

  const handleReset = () => {
    // Clear the context
    setUserAnswers({});

    // Redirect to homepage
    history.push("/");
  };

  return (
    <StyledErrorContainer>
      <h1>Uh oh!</h1>
      <p className="first">Looks like you've taken a wrong turn.</p>
      <ResetButton onClick={handleReset}>Reset & Start Over</ResetButton>
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

const ResetButton = styled.button`
  background-color: ${(props) => props.theme.orange};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.darkgrey};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default ErrorPage;
