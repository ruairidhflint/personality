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
  const [userScores, setUserScores] = useState({});
  const [result, setResult] = useState('');
  const { userAnswers } = useContext(AnswersContext);

  useEffect(() => {
    const processed = processAnswers(userAnswers);
    const type = determineTemperamentType(processed);
    setUserScores(processed);
    const data = {
      temperament_answers: userAnswers,
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
        `${backendURL}/api/personality/save_results/${userAnswers.user_id}`,
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
            <p>
              Your answers have been processed and saved. Below is an overview
              of of your results based on the questionnaire. How does it compare
              to your self-assessment?{' '}
            </p>{' '}
            <StyledResultsTable>
              <div className="result-row">
                <div className="category left">Extroversion</div>
                <div className="category-result">{userScores.E}</div>
                <div className="category-result">{userScores.I}</div>
                <div className="category">Introversion</div>
              </div>
              <div className="result-row">
                <div className="category left">Sensing</div>
                <div className="category-result">{userScores.S}</div>
                <div className="category-result">{userScores.N}</div>
                <div className="category">Intuition</div>
              </div>
              <div className="result-row">
                <div className="category left">Thinking</div>
                <div className="category-result">{userScores.T}</div>
                <div className="category-result">{userScores.F}</div>
                <div className="category">Feeling</div>
              </div>
              <div className="result-row">
                <div className="category left">Judging</div>
                <div className="category-result">{userScores.J}</div>
                <div className="category-result">{userScores.P}</div>
                <div className="category">Perceiving</div>
              </div>
            </StyledResultsTable>
            {userAnswers.user_id !== '5fe23026080a7400177bebb9' ? (
              <p>
                In the next few days you will have a one to one meeting with
                <a
                  href="http://www.dannymcguigan.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;Danny McGuigan
                </a>
                , an expert in Personality Types and Leadership training, to
                discuss your results and clarify any questions you may have.
              </p>
            ) : (
              <p>
                Thank you for your time and energy completing this
                questionnaire. We will be in touch shortly with your analysed
                results.
              </p>
            )}
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

const StyledResultsTable = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${(props) => props.theme.orange};
  @media (max-width: 630px) {
    font-size: 1.6rem;
  }

  .result-row {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .category {
    width: 30%;

    &.left {
      text-align: right;
    }
  }
  .category-result {
    width: 10%;
    font-size: 4rem;
    color: ${(props) => props.theme.darkgrey};
    text-align: center;

    @media (max-width: 630px) {
      font-size: 2.8rem;
    }
  }
`;

export default ResultsMainPage;
