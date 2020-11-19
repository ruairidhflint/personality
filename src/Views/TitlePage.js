import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Spinner from '../Components/Spinner';
import { AnswersContext } from '../Context/AnswersContext';

const TitlePage = (props) => {
  const [loading, setLoading] = useState(true);
  const { setUserAnswers } = useContext(AnswersContext);
  const [name, setName] = useState('');

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get('http://localhost:5000/api/personality/identify/' + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === 'Proceed') {
          setUserAnswers({ user_id: res.data.user._id });
          setName(res.data.user.field_data.first_name);
        }
      })
      .catch((err) => {
        console.log(err);
        setName(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <StyledTitlePage>
        <Spinner />
      </StyledTitlePage>
    );
  } else {
    return <>{name ? <IntroSuccess name={name} /> : <IntroFailure />}</>;
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

const IntroSuccess = ({ name }) => {
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <StyledTitlePage style={props}>
      <h1>Hi {name}!</h1>
      <Link to="/introduction">start</Link>
    </StyledTitlePage>
  );
};

const IntroFailure = () => {
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <StyledTitlePage style={props}>
      <h1>Failure</h1>
    </StyledTitlePage>
  );
};
