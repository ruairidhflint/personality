import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { StyledRangeSlider } from '../Components/SelfPerceptionSlider.js';

const SelfPerceptionIntroduction = () => {
  const title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledInstructionsContainer style={title}>
      <StyledInstructionTitle>Self-Perception</StyledInstructionTitle>
      <StyledInstructionContent>
        {testText.main.map((item, i) => {
          return (
            <p
              key={i}
              style={{
                marginBottom: '1.5rem',
              }}
            >
              {item}
            </p>
          );
        })}
      </StyledInstructionContent>
      <StyledRangeSlider>
        <input
          type="range"
          min="1"
          max="6"
          step="1"
          value={3}
          disabled={true}
        />
        <div id="range-marks">
          {Array(6)
            .fill(null)
            .map(() => {
              return <span></span>;
            })}
        </div>
      </StyledRangeSlider>
      <div id="tags">
        <h3>Thinking</h3>
        <h3>Feeling</h3>
      </div>
      <StyledInstructionContent>
        <p style={{ marginTop: '5rem', marginBottom: '3rem' }}>
          {testText.outro}
        </p>
      </StyledInstructionContent>

      <StyledInstructionButton>
        <Link to="/selfperception">start</Link>
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
    padding: 3.5rem;
  }

  @media (max-width: 450px) {
    padding: 2.2rem;
  }

  #tags {
    margin-top: 3rem;
    font-size: 1.5rem;
    color: grey;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledInstructionTitle = styled(animated.h1)`
  font-size: 4rem;
  margin: 2rem;

  @media (max-width: 450px) {
    font-size: 3.5rem;
    margin: 1.2rem;
    margin-bottom: 2.5rem;
  }
`;

const StyledInstructionContent = styled(animated.div)`
  font-size: 1.9rem;
  color: ${(props) => props.theme.mediumgrey};
  white-space: pre-wrap;
  width: 95%;
  text-align: center;
  line-height: 2.1rem;
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

export default SelfPerceptionIntroduction;

const testText = {
  main: [
    'Along with the previous questions, how we perceive our own personality and temperament is important to understanding our potential. All of us display the 8 characteristics in our daily lives, at one time or another. However, on each continuum, you will find two opposing extremes, one of which will be your Natural Dominant Tendency.',
    'This simply means that, for example, whilst being a naturally dominant extrovert, the same person may sometimes tend to interior reflection, thereby showing a tendency to be introverted as well. However, extroversion is the natural dominant tendency. The same is true and just as valid, vice versa.',
    'Following are eight temperament characteristics in four pairs. There will be a short explanation of each characteristic and then a sliding scale like this:',
  ],
  outro:
    'Please note you can choose the various points from extreme to moderate but you cannot select the middle. You must think hard to decide which is your naturally dominant tendency.',
};
