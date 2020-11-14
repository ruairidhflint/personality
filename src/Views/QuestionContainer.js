import { useState } from 'react';
import Question from '../Components/Question';
import Progress from '../Components/Progress';

const QuestionContainer = () => {
  const [position, setPosition] = useState(1);
  return (
    <>
      <Question
        number={questions[position - 1].number}
        question={questions[position - 1].question}
        answers={questions[position - 1].answers}
        setPosition={setPosition}
      />
      <Progress position={questions[position - 1].number} />
    </>
  );
};

export default QuestionContainer;

const testText = {
  number: 9,
  question: 'Are you more attracted to...',
  answers: ['sensible people?', 'imaginative people?'],
};

const questions = [
  {
    number: 1,
    question: 'At a party do you...',
    answers: [
      'interact with many, including strangers?',
      'interact with a few, known to you?',
    ],
  },
  {
    number: 2,
    question: 'Are you more...',
    answers: ['realistic than speculative?', 'speculative than realistic?'],
  },
  {
    number: 3,
    question: 'Is it worse to...',
    answers: ['have your "head in the clouds"?', 'be "in a rut"?'],
  },
  {
    number: 4,
    question: 'Are you more impressed by...',
    answers: ['principles?', 'gut emotions?'],
  },
  {
    number: 5,
    question: 'Are you more drawn toward the...',
    answers: ['convincing?', 'touching?'],
  },
  {
    number: 6,
    question: 'Do you prefer to work...',
    answers: ['to deadlines?', 'just "whenever"?'],
  },
  {
    number: 7,
    question: 'Do you tend to choose...',
    answers: ['rather carefully?', 'somewhat impulsively?'],
  },
  {
    number: 8,
    question: 'At parties do you...',
    answers: [
      'stay late, with increasing energy?',
      'leave early, with decreased energy?',
    ],
  },
  {
    number: 9,
    question: 'Are you more attracted to...',
    answers: ['sensible people?', 'imaginative people?'],
  },
  {
    number: 10,
    question: 'Are you more interested in...',
    answers: ['what is actual?', 'what is possible?'],
  },
];
