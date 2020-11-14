import { useContext } from 'react';
import { AnswersContext } from '../Context/AnswersContext';
const TestFile = () => {
  const { userAnswers } = useContext(AnswersContext);
  console.log(userAnswers);
  return <h1 style={{ fontSize: '5rem' }}>TEST PAGE</h1>;
};

export default TestFile;
