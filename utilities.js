const aocLoader = require("aoc-loader");
const days = require("./days");
require("dotenv").config();
require("colors");

const session = process.env.SESSION;

// Advent of Code Loader to get my session inputs
const loadAOC = (year, day, ...part) => {
  if (part.length > 2)
    return console.log("[ERROR]: It seems you logged more than 2 parts.".red);
  else if (part.length === 2 && part[0] === part[1])
    return console.log("[ERROR]: It seems you logged twice the same part.".red);

  let dayNumber = "day" + day;

  return aocLoader(year, day, session).then(data => {
    if (part.length === 1) {
      const partNumber = "part" + part[0];
      console.log();
      console.log(("Day " + day + " - Part " + part[0]).cyan);
      console.log(("Answer: " + days[dayNumber][partNumber](data)).yellow);
    } else if (part.length === 2) {
      part.forEach(element => {
        const partNumber = "part" + element;
        console.log();
        console.log(("Day " + day + " - Part " + element).cyan);
        console.log(("Answer: " + days[dayNumber][partNumber](data)).yellow);
      });
    }
  });
};

module.exports = loadAOC;
