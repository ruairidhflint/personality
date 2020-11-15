import { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const RangeTest = () => {
  const [value, setValue] = useState(3);
  const title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const testClick = () => {
    console.log(value);
  };
  return (
    <StyledIntroductionContainer style={title}>
      <StyledIntroTitle>Extroversion - Introversion</StyledIntroTitle>
      <StyledIntroContent>
        <p>
          <span>Extroversion</span> - Like variety and action. Often impatient
          with long, slow tasks. Often act quickly, sometimes without thinking.
          Develop ideas by mutual discussion.
        </p>
        <p>
          <span>Introversion</span> - Like quiet forf concentration. Tend not to
          mind long, slow tasks. Like to think before they act. Develop ideas by
          reflection.
        </p>
      </StyledIntroContent>
      <StyledRangeSlider>
        <input
          type="range"
          min="1"
          max="6"
          step="1"
          value={value}
          onChange={changeHandler}
        />
        <div id="range-marks">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </StyledRangeSlider>
      <div id="tags">
        <h3>Extroversion</h3>
        <h3>Introversion</h3>
      </div>

      <StyledIntroButton>
        <button onClick={testClick}>Next</button>
      </StyledIntroButton>
    </StyledIntroductionContainer>
  );
};

const StyledRangeSlider = styled.div`
  width: 92%;
  margin-top: 5rem;
  input[type='range'] {
    height: 40px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #edebeb;
    border-radius: 25px;
    border: 0px solid #8a8a8a;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #828282;
    border: 0px solid #8a8a8a;
    height: 34px;
    width: 34px;
    border-radius: 50px;
    background: #ff9900;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -9.5px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #edebeb;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 15px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #edebeb;
    border-radius: 25px;
    border: 0px solid #8a8a8a;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px #828282;
    border: 0px solid #8a8a8a;
    height: 34px;
    width: 34px;
    border-radius: 50px;
    background: #ff9900;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 15px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #edebeb;
    border: 0px solid #8a8a8a;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type='range']::-ms-fill-upper {
    background: #edebeb;
    border: 0px solid #8a8a8a;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type='range']::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #828282;
    border: 0px solid #8a8a8a;
    height: 34px;
    width: 34px;
    border-radius: 50px;
    background: #ff9900;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #edebeb;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #edebeb;
  }

  #range-marks {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      width: 2px;
      height: 8px;
      background-color: ${(props) => props.theme.lightgrey};
      opacity: 0.6;
    }
  }
`;

const StyledIntroductionContainer = styled(animated.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #tags {
    margin-top: 3rem;
    font-size: 1.5rem;
    ${'' /* color: ${props => props.theme.mediumgrey}; */}
    color: grey;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
  text-align: left;
  line-height: 2.1rem;

  span {
    color: ${(props) => props.theme.darkgrey};
  }

  p {
    margin-bottom: 1rem;
  }
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

export default RangeTest;
