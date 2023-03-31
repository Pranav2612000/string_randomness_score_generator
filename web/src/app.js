'use strict'
let Alpine = require('alpinejs');
const stringRandomnessScoreGenerator = require("randomness-score-generator");

Alpine.default.start();
stringRandomnessScoreGenerator.loadModel();

window.Alpine = Alpine;
window.getScore = (x) => {
  return stringRandomnessScoreGenerator.score(x);
}
