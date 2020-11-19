import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { AnswersContext } from '../../Context/AnswersContext';
import {
  processAnswers,
  determineTemperamentType,
} from '../../Helpers/Helpers';

const ResultsMainPage = () => {
  const [loading, setLoading] = useState(true);
  const [personalityType, setPersonalityType] = useState('');
  const { userAnswers } = useContext(AnswersContext);

  useEffect(() => {
    const processed = processAnswers(userAnswers);
    const type = determineTemperamentType(processed);
    console.log(userAnswers);
    console.log(processed);
    console.log(type);
    setPersonalityType(type);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [userAnswers]);

  if (loading) {
    return (
      <StyledResultsPage>
        <Spinner />
      </StyledResultsPage>
    );
  } else {
    return (
      <StyledResultsPage>
        <h1>Thank You</h1>
        <p>
          Your answers have been processed and saved. In the next few days you
          will have a one to one meeting with{' '}
          <a
            href="http://www.dannymcguigan.com/"
            target="_blank"
            rel="noreferrer"
          >
            Danny McGuigan
          </a>
          , an expert in Personality Types and Leadership training, to discuss
          your results clarify any questions you have.
        </p>
        {/* {personalityType === 'Error!' ? <Redirect to="/" /> : null} */}
      </StyledResultsPage>
    );
  }
};

const StyledResultsPage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  p {
    width: 90%;
    margin: 0 auto;
    line-height: 2.2rem;
    font-size: 2rem;
    color: ${(props) => props.theme.mediumgrey};
    text-align: center;

    a {
      color: ${(props) => props.theme.orange};
      transition: opactity 0.2s ease-in-out;

      :hover {
        opacity: 0.7;
        transition: opactity 0.2s ease-in-out;
      }
    }
  }
`;

export default ResultsMainPage;
