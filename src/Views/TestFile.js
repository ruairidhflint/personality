import { useContext } from 'react';
import Spinner from '../Components/Spinner';
import { AnswersContext } from '../Context/AnswersContext';
import { processAnswers } from '../Helpers/Helpers';

const TestFile = () => {
  const { userAnswers } = useContext(AnswersContext);
  const megaTest = processAnswers(userAnswers);
  console.log(userAnswers);
  console.log(megaTest);
  return (
    <>
      <h1 style={{ fontSize: '5rem' }}>TEST PAGE</h1>
      <Spinner />
    </>
  );
};

export default TestFile;
