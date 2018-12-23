const part1 = data => {
  // Returns an Array of boxIds
  const boxIds = data.split("\n");
  // Initialize the counts
  let [twos, threes] = [0, 0];
  boxIds.forEach(id => {
    // Object containing all the characters per boxId
    const seen = {};
    // For each character, insert it in the seen Object with the encounter's number ('a: 2', 'b: 1' and so on)
    for (const char of id) seen[char] = seen[char] ? seen[char] + 1 : 1;
    // Check if any of the seen Object values got a 2 & 3 and increments the counts
    Object.values(seen).some(c => c == 2) && ++twos;
    Object.values(seen).some(c => c == 3) && ++threes;
  });

  // Checksum is the multiplication of those two counts together (twos and threes)
  const checksum = twos * threes;
  return checksum;
};

const part2 = data => {};

module.exports = {
  part1: part1,
  part2: part2
};
