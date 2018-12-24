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

const part2 = data => {
  // Returns an Array of boxIds
  const boxIds = data.split("\n");
  // Iterate through each letter of the first boxId
  for (let i =  0; i < boxIds[0].length; i++) {
    // Set containing all checks
    const seen = new Set();
    // Iterate through all the boxIds
    for (let j = 0; j < boxIds.length; j++) {
      // Remove the current iterated letter
      const check = boxIds[j].substring(0, i) + boxIds[j].substring(i + 1);
      // Check if the boxId was already seen
      if (seen.has(check)) {
        return check;
      }
      // Add the boxId without the current iterated letter
      seen.add(check);
    }
  }
};

module.exports = {
  part1: part1,
  part2: part2
};
