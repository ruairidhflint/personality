import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Instructions = () => {
  const title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const content = useSpring({
    config: { duration: 1200 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const button = useSpring({
    config: { duration: 1200 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 2500,
  });
  return (
    <StyledInstructionsContainer>
      <StyledInstructionTitle style={title}>
        Instructions
      </StyledInstructionTitle>
      <StyledInstructionContent style={content}>
        <p style={{ marginBottom: '2.5rem' }}>{testText.intro}</p>
        {testText.intructions.map((item, i) => {
          return (
            <p key={i} className="list-item">
              - {item}
            </p>
          );
        })}
        <p style={{ marginTop: '2.5rem' }}>{testText.end}</p>
      </StyledInstructionContent>
      <StyledInstructionButton style={button}>
        <Link to="/questions">start</Link>
      </StyledInstructionButton>
    </StyledInstructionsContainer>
  );
};

const StyledInstructionsContainer = styled(animated.div)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    padding: 1rem;
  }
`;

const StyledInstructionTitle = styled(animated.h1)`
  font-size: 4rem;
  margin: 2rem;
`;

const StyledInstructionContent = styled(animated.div)`
  font-size: 1.9rem;
  color: ${(props) => props.theme.mediumgrey};
  white-space: pre-wrap;
  width: 95%;
  text-align: center;
  line-height: 2.1rem;

  .list-item {
    margin-bottom: 0.5rem;
    margin-left: 5rem;
    color: #424242;
    text-align: left;

    @media(max-width: 800px){
      margin-left: 2.5rem;
    }
  }
`;

const StyledInstructionButton = styled(animated.span)`
  font-size: 2rem;
  color: ${(props) => props.theme.orange};
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }

  a {
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export default Instructions;

const testText = {
  intro:
    'Following are 70 simple questions each with two possible choices. There is no time limit but the whole process should not take longer than 15 minutes. There are no wrong or right answers, just preferences.',
  intructions: [
    'Answer spontaeneously without giving too much thought or consideration',
    "Answer honestly - not what you think is the 'right' answer",
    'Do not go back and try to change previous answers',
    'Aim for less than 15 seconds per question',
  ],
  end:
    'When you are ready, click start and answer all 70 questions. Once you have started, you cannot refresh, go back or pause. Please ensure you have enough time, enough space and enough mental energy to accurately answer questions of a personal nature.',
};
