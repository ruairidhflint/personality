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
      <h1>Temperament Profiler</h1>
      <Link to="/introduction">start</Link>
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
  }
  a {
    font-size: 2rem;
    color: ${(props) => props.theme.orange};
    margin-top: 1rem;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export default TitlePage;
