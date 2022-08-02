const { prompt, choose_exercise } = require('./utils');

const exercises = {
  make_a_triangle: async () => {
    let max_len = await prompt("Enter a length for the triangle base: ");

    for (i = 1; i <= max_len; i++) {
      console.log(Array(i).fill('#').join(''))
    }
  },

  fizz_buzz: () => {
    const arr = Object.keys(Array(101).fill(1)); // 0-100
    arr.shift(); // 1-100


    const replaced_arr = arr.map((num) => {
      let replace = '';
      if (num % 3 === 0) replace += 'Fizz';
      if (num % 5 === 0) replace += 'Buzz'; // append "Buzz" to multiples of 3 and 5
      return replace ? replace : num;
    });

    console.log(replaced_arr.join('\n'));
  },

  build_checkerboard: async () => {
    const size = +(await prompt('enter a checkerboard size: '));

    const board = Array(size)
      .fill(1)
      .map((_, index) => Array(size)
          .fill(index % 2 ? '⬜️⬛️' : '⬛️⬜️')
            .join('')
            .substring(size) + '\n'
        )
      .join('');

    console.log(board);
  },
}

choose_exercise(exercises);