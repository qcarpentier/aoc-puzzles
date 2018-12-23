const part1 = data => {
  // Returns an Array of Numbers (without operations '+' &  '-')
  const numbers = data.split("\n").map(Number);
  // Reduce each number of the array to get a single output value
  return numbers.reduce((acc, curr) => acc + curr);
};

const part2 = data => {
  const numbers = data.split("\n").map(Number);
  const frequencies = new Set([0]);
  var sum = 0;
  while (1) {
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      sum += number;
      if (frequencies.has(sum)) {
        return sum;
      }
      frequencies.add(sum);
    }
  }
};

module.exports = {
  part1: part1,
  part2: part2
};
