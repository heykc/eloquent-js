const minimum = () => {
  const min = (a, b) => a < b ? a : b;

  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
};

const recursion =  () => {
  const isEven = (num, abs = Math.abs(num)) => abs > 1 ? isEven(abs - 2) : !abs;
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false
  console.log(isEven(-4));
  // → true
};

const beanCounting = () => {
  const countBs = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      count += +(str[i] === 'B');
    }

    return count;
  };

  const countChar = (str, char) => {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      count += +(str[i] === char);
    }

    return count;
  };

  const countCharRegex = (str, char) => str.match(new RegExp(char, 'g')).length;

  console.log(countBs("BBCB"));
  // → 3
  console.log(countChar("kakkerlak", "k"));
  // → 4
  console.log(countCharRegex("kakkerlak", "k"));
  // → 4
};

const closure = () => {
  const player = (_name, _atk = 10, _def = 10) => {
    const name = _name;
    const def = _def;
    const atk = _atk;
    let hp = 100;
    
    const attack = (player) => {
      const totDamage = atk - player.def;
      player.damage(totDamage < 0 ? 0 : totDamage);
      console.log(`${name} attacks ${player.name} for ${totDamage}!`);
    };

    const status = () => {
      console.log(`${name}'s health is at ${hp}.`);
    };
    
    const damage = (dmg) => {
      hp -= dmg;
    }

    return {
      name,
      def,
      atk,
      hp,
      attack,
      status,
      damage,
    };
  };

  const p1 = player('sir hank');
  const p2 = player('lord farquad', 2, 2);

  p1.attack(p2);
  p2.attack(p1);
  p1.status();
  p2.status();
}
