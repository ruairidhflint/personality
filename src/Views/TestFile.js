import { useContext } from 'react';
import { AnswersContext } from '../Context/AnswersContext';
import { questionGroups } from '../Helpers/Helpers';
const TestFile = () => {
  const { userAnswers } = useContext(AnswersContext);
  const megaTest = processAnswers(userAnswers);
  console.log(userAnswers);
  console.log(megaTest);
  return <h1 style={{ fontSize: '5rem' }}>TEST PAGE</h1>;
};

export default TestFile;

const processAnswers = (suppliedAnswers) => {
  const results = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  questionGroups.EI.forEach((answer) => {
    if (suppliedAnswers[answer] === 'a') {
      results.E += 1;
    } else {
      results.I += 1;
    }
  });

  questionGroups.SN.forEach((answer) => {
    if (suppliedAnswers[answer] === 'a') {
      results.S += 1;
    } else {
      results.N += 1;
    }
  });

  questionGroups.TF.forEach((answer) => {
    if (suppliedAnswers[answer] === 'a') {
      results.T += 1;
    } else {
      results.F += 1;
    }
  });

  questionGroups.JP.forEach((answer) => {
    if (suppliedAnswers[answer] === 'a') {
      results.J += 1;
    } else {
      results.P += 1;
    }
  });

  return results;
};
