import { useContext, useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import { AnswersContext } from '../Context/AnswersContext';
import { processAnswers } from '../Helpers/Helpers';

const ResultsMainPage = () => {
  const [loading, setLoading] = useState(true);
  const { userAnswers } = useContext(AnswersContext);
  const megaTest = processAnswers(userAnswers);
  console.log(userAnswers);
  console.log(megaTest);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return <h1>Loaded!</h1>;
  }
};

export default ResultsMainPage;
