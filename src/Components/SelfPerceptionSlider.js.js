import { useState, useContext } from 'react';
import { AnswersContext } from '../Context/AnswersContext';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const SelfPerceptionSlider = ({ quadrant, history, setPosition }) => {
  const [value, setValue] = useState(3);
  const { setUserAnswers } = useContext(AnswersContext);
  const { choices, details } = quadrant;

  const title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitAnswer = () => {
    setUserAnswers((prev) => ({ ...prev, [quadrant.name]: value }));
    if (quadrant.name === 'selfJP') {
      history.push('/results');
    } else {
      setValue(3);
      setPosition((prev) => (prev += 1));
    }
  };
  return (
    <StyledIntroductionContainer style={title}>
      <StyledIntroTitle>
        {choices[0]} - {choices[1]}
      </StyledIntroTitle>
      <StyledIntroContent>
        <p>
          <span>{choices[0]}</span> - {details[0]}
        </p>
        <p>
          <span>{choices[1]}</span> - {details[1]}
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
        <h3>{choices[0]}</h3>
        <h3>{choices[1]}</h3>
      </div>

      <StyledIntroButton>
        <button onClick={submitAnswer}>Next</button>
      </StyledIntroButton>
    </StyledIntroductionContainer>
  );
};

export const StyledRangeSlider = styled.div`
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

const StyledIntroContent = styled(animated.div)`
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

  button {
    width: 46%;
    background-color: white;
    margin-top: 5rem;
    border: none;
    font-size: 2.2rem;
    color: ${(props) => props.theme.blue};
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;

    :hover {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }

    :focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

export default SelfPerceptionSlider;
