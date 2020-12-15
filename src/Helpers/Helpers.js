import { questionGroups } from '../Constants/Questions';

export const processAnswers = (suppliedAnswers) => {
  const answersLength = Object.keys(suppliedAnswers).length;

  if (answersLength !== 75) {
    return 'error';
  }

  const { selfEI, selfSN, selfTF, selfJP } = suppliedAnswers;
  const results = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
    selfEI,
    selfSN,
    selfTF,
    selfJP,
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

export const determineTemperamentType = (answers) => {
  const answersLength = Object.keys(answers).length;
  if (answersLength !== 12) {
    return 'error';
  }

  const dominantQuadrants = [];

  if (answers.E === answers.I) {
    if (answers.selfEI <= 3) {
      dominantQuadrants.push('E');
    } else {
      dominantQuadrants.push('I');
    }
  } else if (answers.E > answers.I) {
    dominantQuadrants.push('E');
  } else {
    dominantQuadrants.push('I');
  }

  if (answers.S === answers.N) {
    if (answers.selfSN <= 3) {
      dominantQuadrants.push('S');
    } else {
      dominantQuadrants.push('N');
    }
  } else if (answers.S > answers.N) {
    dominantQuadrants.push('S');
  } else {
    dominantQuadrants.push('N');
  }

  if (answers.T === answers.F) {
    if (answers.selfTF <= 3) {
      dominantQuadrants.push('T');
    } else {
      dominantQuadrants.push('F');
    }
  } else if (answers.T > answers.F) {
    dominantQuadrants.push('T');
  } else {
    dominantQuadrants.push('F');
  }

  if (answers.J === answers.P) {
    if (answers.selfJP <= 3) {
      dominantQuadrants.push('J');
    } else {
      dominantQuadrants.push('P');
    }
  } else if (answers.J > answers.P) {
    dominantQuadrants.push('J');
  } else {
    dominantQuadrants.push('P');
  }

  return dominantQuadrants.join('');
};
