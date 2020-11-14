import styled from 'styled-components';

const QuestionContainer = () => {
  return (
    <StyledQuestionContainer>
      <StyledQuestion>{testText.question}</StyledQuestion>
      <StyledAnswerContainer>
        <button>{testText.answers[0]}</button>
        <span>or</span>
        <button>{testText.answers[1]}</button>
      </StyledAnswerContainer>
    </StyledQuestionContainer>
  );
};

const StyledQuestionContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledQuestion = styled.h3`
  font-size: 3rem;
  margin: 2rem;
`;

const StyledAnswerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5rem;

  span {
    color: ${(props) => props.theme.darkgrey};
    font-size: 1.5rem;
    width: 7%;
    text-align: center;
  }

  button {
    background-color: white;
    border: none;
    font-size: 2.2rem;
    color: ${(props) => props.theme.mediumgrey};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.orange};
    }

    :focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

export default QuestionContainer;

const testText = {
  question: 'At a party do you...',
  answers: [
    'interact with many, including strangers?',
    'interact with a few, known to you?',
  ],
};
