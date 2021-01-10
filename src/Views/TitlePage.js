import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const TitlePage = () => {
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <StyledTitlePage style={props}>
      <h1>Hello!</h1>
      <p>
        The following temperament profile questionnaire should take no more than
        20 minutes, but will require your undivided attention. Please close any
        distracting tabs and make sure you will remain undisturbed for the
        duration. You won't have the ability to do this a second time.
      </p>
      <Link to="/name">start</Link>
    </StyledTitlePage>
  );
};

const StyledTitlePage = styled(animated.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.9rem;
    color: ${(props) => props.theme.mediumgrey};
    white-space: pre-wrap;
    width: 75%;
    text-align: center;
    line-height: 2.3rem;
  }
  a {
    font-size: 2rem;
    color: ${(props) => props.theme.orange};
    margin-top: 1.5rem;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export default TitlePage;
