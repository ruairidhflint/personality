import { useState, useContext } from 'react';
import { AnswersContext } from '../Context/AnswersContext';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const NameEntry = (props) => {
  const [nameInput, setNameInput] = useState('');
  const { setUserAnswers } = useContext(AnswersContext);

  const handleChange = (e) => {
    setNameInput(e.target.value);
  };

  const saveNameAndProgress = (e) => {
    setUserAnswers((prev) => ({ ...prev, name: nameInput }));
    props.history.push('/introduction')
  };

  const effect = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledNameEntry style={effect}>
      <h2>First, what's your name?</h2>
      <form onSubmit={saveNameAndProgress}>
        <input
          type="text"
          autoFocus
          value={nameInput}
          onChange={handleChange}
          required
        />
        <button type="submit">Continue</button>
      </form>
    </StyledNameEntry>
  );
};

const StyledNameEntry = styled(animated.div)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 4.3rem;
    @media (max-width: 450px) {
      font-size: 2.5rem;
    }
  }
  form {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 70%;
    padding: 0.25rem 0;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.mediumgrey};
    outline: 0;
    font-family: 'Quicksand', sans-serif;

    background: transparent;
    color: ${(props) => props.theme.darkgrey};
    font-size: 2.7rem;
    line-height: 4rem;
    transition: all 0.5s cubic-bezier(0.4, 0.25, 0.8, 0.3);
    margin-bottom: 4.3rem;
    text-align: center;

    ::placeholder {
      color: '#e6e5e5';
      font-size: 1.8rem;
    }
  }

  button {
    border: none;
    background-color: white;
    font-size: 2rem;
    color: ${(props) => props.theme.orange};
    cursor: 'pointer';
    margin-top: 1.5rem;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export default NameEntry;
