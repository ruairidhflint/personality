import { useState } from 'react';
import Question from '../Components/Question';
import Progress from '../Components/Progress';

import { temperamentQuestions } from '../Constants/Questions';

const QuestionContainer = ({ history }) => {
  const [position, setPosition] = useState(1);
  return (
    <>
      <Question
        history={history}
        number={temperamentQuestions[position - 1].number}
        question={temperamentQuestions[position - 1].question}
        answers={temperamentQuestions[position - 1].answers}
        setPosition={setPosition}
      />
      <Progress position={temperamentQuestions[position - 1].number} />
    </>
  );
};

export default QuestionContainer;
