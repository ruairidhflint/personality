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
import { personalityTypes } from '../../Constants/personalityTypes';

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
      name: userAnswers.name,
      temperament_type: type,
      temperament_results: processed,
    };

    if (processed === 'error' || type === 'error') {
      setResult('Not all answers were supplied');
      setLoading(false);
      return;
    }

    setResult('success');
    setLoading(false);

    axios
      .post(`${backendURL}/api/personality/save_recruitment_results/`, data)
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
        {result === 'success' && (
          <p style={{ fontSize: '1.8rem' }}>
            Your answers have been processed and saved. The below is your
            result, please copy the four letters below and paste them in the
            field provided on the application form.
          </p>
        )}
        <h1>{result === 'success' ? userType : 'Error'}</h1>
        {result === 'success' ? (
          <p className="type-text">"{personalityTypes[userType]}"</p>
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
    font-size: 7rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.darkgrey};
  }

  p {
    width: 90%;
    margin: 0 auto;
    line-height: 2.2rem;
    font-size: 2rem;
    color: ${(props) => props.theme.mediumgrey};
    text-align: center;
    margin-bottom: 2rem;

    &.type-text {
      color: ${(props) => props.theme.orange};
      line-height: 2.8rem;
      width: 100%;
    }

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
