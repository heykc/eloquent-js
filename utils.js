const util = require('util');
const readline = require('readline');
const { assert } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = util.promisify(rl.question).bind(rl);

const choose_exercise = async (exercises) => {
  const options = Object.keys(exercises).map((exercise, index) => `\n${index + 1}: ${exercise}`);
  let choice;
  
  try {
    choice = await prompt(`Choose an exercise: ${options.join('')}\n`);

    if (!Number.isInteger(+choice) || !exercises[Object.keys(exercises)[choice - 1]]) {
      throw new Error('Invalid choice');
    }
  } catch (err) {
    console.error('Invalid choice');
    console.log('\n\n');
    return choose_exercise(exercises);
  }
  
  console.clear();

  await exercises[Object.keys(exercises)[choice - 1]]();
  console.log('\n\n\n');

  choose_exercise(exercises);
}

module.exports = {
  prompt,
  choose_exercise,
};