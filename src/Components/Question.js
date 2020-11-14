import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Question = ({ number, question, answers, setPosition }) => {
  const props = useSpring({
    config: { duration: 500 },
    opacity: 1,
    from: { opacity: 0 },
    reset: true
  });

  const logAnswer = (val) => {
    setPosition((prev) => prev + 1);
    console.log(val);
  };

  return (
    <StyledQuestionContainer style={props}>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledAnswerContainer>
        <button onClick={() => logAnswer('a')}>{answers[0]}</button>
        <span>or</span>
        <button onClick={() => logAnswer('b')}>{answers[1]}</button>
      </StyledAnswerContainer>
    </StyledQuestionContainer>
  );
};

export default Question;

const StyledQuestionContainer = styled(animated.div)`
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
