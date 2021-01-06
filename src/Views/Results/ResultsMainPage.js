import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Spinner from '../../Components/Spinner';
import { AnswersContext } from '../../Context/AnswersContext';
import {
  processAnswers,
  determineTemperamentType,
} from '../../Helpers/Helpers';
import { backendURL } from '../../Config/endpoint';

const ResultsMainPage = () => {
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState('');
  const [result, setResult] = useState('');
  const { userAnswers } = useContext(AnswersContext);

  useEffect(() => {
    const processed = processAnswers(userAnswers);
    const type = determineTemperamentType(processed);
    setUserType(type);
    const data = {
      name: userAnswers.user_name,
      temperament_type: type,
      temperament_results: processed,
    };

    if (processed === 'error' || type === 'error') {
      setResult('Not all answers were supplied');
      setLoading(false);
      return;
    }

    axios
      .post(
        `${backendURL}/api/personality/save_recruitment_results/`,
        data,
      )
      .then(() => {
        setResult('success');
      })
      .catch((err) => {
        setResult(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
        <h1>{result === 'success' ? 'Thank You' : 'Error'}</h1>
        {result === 'success' ? (
          <>
            <h1>{userType}</h1>
            <p>
              Your answers have been processed and saved. Below is an overview
              of of your results based on the questionnaire. How does it compare
              to your self-assessment?{' '}
            </p>{' '}
            <p>
              Thank you for your time and energy completing this questionnaire.
              We will be in touch shortly with your analysed results.
            </p>
          </>
        ) : (
          <p>{result}</p>
        )}
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
