import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Spinner from '../../Components/Spinner';
import { AnswersContext } from '../../Context/AnswersContext';
import {
  processAnswers,
  determineTemperamentType,
} from '../../Helpers/Helpers';
import { dummyData } from '../../Constants/Questions';

const ResultsMainPage = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState('');
  const { userAnswers } = useContext(AnswersContext);

  useEffect(() => {
    const processed = processAnswers(dummyData);
    const type = determineTemperamentType(processed);
    const data = {
      temperament_answers: dummyData,
      temperament_type: type,
      temperament_results: processed,
    };

    if (processed === 'error' || type === 'error') {
      setResult('Not all answers were supplied!');
      setLoading(false);
      return;
    }

    axios
      .post(
        `http://localhost:5000/api/personality/save_results/${dummyData.user_id}`,
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
