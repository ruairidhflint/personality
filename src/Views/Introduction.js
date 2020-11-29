import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Introduction = () => {
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
    <StyledIntroductionContainer>
      <StyledIntroTitle style={title}>Introduction</StyledIntroTitle>
      <StyledIntroContent style={content}>{introText}</StyledIntroContent>
      <StyledIntroButton style={button}>
        <Link to="/instructions">next</Link>
      </StyledIntroButton>
    </StyledIntroductionContainer>
  );
};

const StyledIntroductionContainer = styled(animated.div)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    padding: 1.5rem;
  }
`;

const StyledIntroTitle = styled(animated.h1)`
  font-size: 4rem;
  margin: 2rem;
`;

const StyledIntroContent = styled(animated.p)`
  font-size: 1.9rem;
  color: ${(props) => props.theme.mediumgrey};
  white-space: pre-wrap;
  width: 95%;
  text-align: center;
  line-height: 2.1rem;
`;

const StyledIntroButton = styled(animated.span)`
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

export default Introduction;

const introText =
  'Temperament can be thought of as a person’s nature, their way of interacting with the world and the people in it. Whilst everybody has a unique personality, we all have certain characteristics and traits. How much of one and little of another, in culmination, is what makes us different. \n\n In the following questionnaire you will be asked 70 questions with a simple a or b answer. It is absolutely paramount to understand that there are no right or wrong answers. We are not looking for positives and negatives, simply where certain areas of your temperament lie on a scale. As an example, take extroversion and introversion. There is categorically no better choice; extrovert made thrive in a party atmosphere whereas an introvert may be far better in a one to one situation. \n\n Understanding your temperament is extremely helpful in both our personal and professional lives. If you are an introvert, knowing how to deal with extroverts or situations that ask for more extroversion can dramatically improve results. Likewise, knowing what kind of temperament you have allows us to pair you with an Athlete has a complementary temperament. \n\n Temperament profiling is not an exact science but this process allows us to hone in on certain key areas and tailor the CP+R experience to an even greater level. Once again, it is important to remember that we have athlete’s of every type so no matter your answers, there will always be good matches. The key to the process is both attention and honesty.';
