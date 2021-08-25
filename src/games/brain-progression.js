import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (first, step, progressionLength = 10) => {
  const result = [];

  for (let i = 0; result.length < progressionLength; i += 1) {
    const item = first + i * step;
    result.push(item);
  }
  return result;
};

const newGame = () => {
  const firstItem = getRandomInt(1, 100);
  const progressionStep = getRandomInt(1, 35);
  const progression = getProgression(firstItem, progressionStep);
  const hiddenNum = getRandomInt(1, progression.length - 1);
  const correctAnswer = String(progression[hiddenNum]);
  progression[hiddenNum] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default {description, newGame};
