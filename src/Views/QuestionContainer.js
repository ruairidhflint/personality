import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const QuestionContainer = () => {
  const title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledQuestionContainer>
      <StyledQuestion>{testText.question}</StyledQuestion>
      <StyledAnswerContainer>
        <button>{testText.answers[0]}</button>
        <button>{testText.answers[1]}</button>
      </StyledAnswerContainer>
    </StyledQuestionContainer>
  );
};

const StyledQuestionContainer = styled(animated.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledQuestion = styled(animated.h3)`
  font-size: 3rem;
  margin: 2rem;
`;

const StyledAnswerContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5rem;

  button {
    background-color: white;
    border: none;
    font-size: 2.2rem;
    color: ${(props) => props.theme.mediumgrey};
  }
`;

export default QuestionContainer;

const testText = {
  question: 'At a party you...',
  answers: [
    'Interact with many, including strangers',
    'interact with a few, known to you',
  ],
};
