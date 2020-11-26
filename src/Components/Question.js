import { useContext } from 'react';
import { AnswersContext } from '../Context/AnswersContext';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Question = ({ number, question, answers, setPosition, history }) => {
  const { setUserAnswers } = useContext(AnswersContext);
  const props = useSpring({
    config: { duration: 500 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const logAnswer = (e, val) => {
    e.currentTarget.blur();
    setUserAnswers((prev) => ({ ...prev, [number]: val }));
    if (number === 70) {
      history.push('/selfperception-intro');
    } else {
      setPosition((prev) => prev + 1);
    }
  };

  return (
    <StyledQuestionContainer style={props}>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledAnswerContainer>
        <button onClick={(e) => logAnswer(e, 'a')}>{answers[0]}</button>
        <span>or</span>
        <button onClick={(e) => logAnswer(e, 'b')}>{answers[1]}</button>
      </StyledAnswerContainer>
    </StyledQuestionContainer>
  );
};

export default Question;

const StyledQuestionContainer = styled(animated.div)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    padding: 2rem;
    height: 75vh
  }
`;

const StyledQuestion = styled.h3`
  font-size: 3rem;
  margin: 2rem;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 2.6rem;
  }


  @media (max-width: 450px) {
    font-size: 2rem;
  }
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
    width: 8%;
    text-align: center;
  }

  button {
    width: 46%;
    background-color: white;
    border: none;
    font-size: 2.2rem;
    color: ${(props) => props.theme.mediumgrey};
    cursor: pointer;

    @media (max-width: 650px) {
    font-size: 1.8rem;
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }

    :hover {
      color: ${(props) => props.theme.blue};
    }

    :focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;
