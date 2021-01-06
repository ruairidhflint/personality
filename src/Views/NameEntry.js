import { useState, useContext } from 'react';
import axios from 'axios';
import { AnswersContext } from '../Context/AnswersContext';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { backendURL } from '../Config/endpoint';
import Spinner from '../Components/Spinner';

const NameEntry = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUserAnswers } = useContext(AnswersContext);

  const handleChange = (e) => {
    setError('');
    setNameInput(e.target.value);
  };

  const saveNameAndProgress = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${backendURL}/api/personality/check_name`, { name: nameInput })
      .then((res) => {
        setLoading(false);
        if (res.data === 'Proceed') {
          setUserAnswers((prev) => ({ ...prev, name: nameInput }));
          props.history.push('/introduction');
        } else {
          setNameInput('');
          setError('Sorry this name has been used before');
        }
      })
      .catch(() => {
        setLoading(false);
        setNameInput('');
        setError('Sorry this service is currently unavailabe');
      });
  };

  const effect = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  if (loading) {
    return (
      <StyledNameEntry>
        <Spinner />
      </StyledNameEntry>
    );
  }

  return (
    <StyledNameEntry error={error} style={effect}>
      <h2>First, what's your name?</h2>
      <form onSubmit={saveNameAndProgress}>
        <input
          type="text"
          autoFocus
          value={nameInput}
          onChange={handleChange}
          placeholder={error ? error : 'eg. John Smith'}
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
    @media(max-width: 450px) {
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
    border-bottom: 1px solid
      ${(props) => (props.error ? '#ff4d70' : props.theme.mediumgrey)};
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
      color: ${(props) => (props.error ? '#ff4d70' : '#e6e5e5')};
      font-size: 1.8rem;
    }
  }

  button {
    border: none;
    background-color: white;
    font-size: 2rem;
    color: ${(props) =>
      props.error ? props.theme.mediumgrey : props.theme.orange};
    cursor: ${(props) => (props.error ? 'not-allowed' : 'pointer')};
    margin-top: 1.5rem;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export default NameEntry;
