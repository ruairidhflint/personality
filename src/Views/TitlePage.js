import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Spinner from '../Components/Spinner';
import { AnswersContext } from '../Context/AnswersContext';
import { backendURL } from '../Config/endpoint';

const TitlePage = (props) => {
  const [loading, setLoading] = useState(true);
  const { setUserAnswers } = useContext(AnswersContext);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { id } = props.match.params;

  useEffect(() => {
    if (id === 'test') {
      setUserAnswers({ user_id: 'test' });
      setName('Danny');
      setLoading(false);
      return;
    }
    axios
      .get(`${backendURL}/api/personality/identify/` + id)
      .then((res) => {
        if (res.data.message === 'Proceed') {
          setUserAnswers({ user_id: res.data.user._id });
          setName(res.data.user.field_data.first_name);
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        setError(
          err.response
            ? err.response.data.message
            : 'There was a server error. Please try again',
        );
        setName(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setUserAnswers, id]);

  if (loading) {
    return (
      <StyledTitlePage>
        <Spinner />
      </StyledTitlePage>
    );
  } else {
    return (
      <>
        {name ? <IntroSuccess name={name} /> : <IntroFailure error={error} />}
      </>
    );
  }
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
    width: 85%;
    text-align: center;
    line-height: 2.1rem;
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

const IntroSuccess = ({ name }) => {
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <StyledTitlePage style={props}>
      <h1>Hi {name.trim()}!</h1>
      <p>
        The following temperament profile will take no more than 20 minutes but
        will require your undivided attention. Please close any distracting tabs
        and make sure you will remain undisturbed for the duration .
      </p>
      <Link to="/introduction">start</Link>
    </StyledTitlePage>
  );
};

const IntroFailure = ({ error }) => {
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <StyledTitlePage style={props}>
      <h1>Error</h1>
      <p>{error}</p>
    </StyledTitlePage>
  );
};
