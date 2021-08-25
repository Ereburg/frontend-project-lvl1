import { getRandomInt, isEven } from "../utils.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const newGame = () => {
  const question = getRandomInt(1, 100);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default { description, newGame };
