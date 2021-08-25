import readlineSync from 'readline-sync';

const roundsCount = 3;

const play = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const rules = game.description;
  console.log(rules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = game.newGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toString().toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
