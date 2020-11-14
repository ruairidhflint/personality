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
      <StyledIntroContent style={content}>{testText}</StyledIntroContent>
      <StyledIntroButton style={button}>
        <Link to="/instructions">Next</Link>
      </StyledIntroButton>
    </StyledIntroductionContainer>
  );
};

const StyledIntroductionContainer = styled(animated.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  a {
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export default Introduction;

const testText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Mattis nunc sed blandit libero volutpat sed cras ornare. Libero enim sed faucibus turpis in eu mi bibendum. Eget sit amet tellus cras adipiscing enim. Netus et malesuada fames ac turpis egestas integer. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Posuere ac ut consequat semper viverra nam libero justo laoreet. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Blandit aliquam etiam erat velit scelerisque in \n\n dictum non consectetur. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Semper auctor neque vitae tempus quam. Adipiscing elit ut aliquam purus sit. Porta non pulvinar neque laoreet. Amet nisl purus in mollis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Posuere lorem ipsum dolor sit amet. Tempor id eu nisl nunc mi. Ipsum consequat nisl vel pretium lectus. \n\n Id velit ut tortor pretium viverra suspendisse potenti. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vel elit scelerisque mauris pellentesque pulvinar. Pellentesque massa placerat duis ultricies. Malesuada fames ac turpis egestas. Morbi enim nunc faucibus a. Pharetra vel turpis nunc eget lorem dolor sed. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.';
