import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AnswersContext } from '../Context/AnswersContext';
import { processAnswers, determineTemperamentType } from '../Helpers/Helpers';

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
    return <Spinner />;
  } else {
    return (
      <>
        <h1 style={{ fontSize: '5rem' }}>{personalityType}</h1>
        {personalityType === 'Error!' ? <Redirect to="/" /> : null}
      </>
    );
  }
};

export default ResultsMainPage;
