const defaultModelFile = require('../data/model.json');

class Model {
    probabilities = [];
    charMap = {};
    constructor() {
        this.probabilities = [];
        this.charMap = {}
    }

    loadModel(modelFile = defaultModelFile) {
        console.log("Loading model...");

        let i = 0;
        for (const ch of modelFile.chars) {
            this.charMap[ch] = i;
            this.probabilities.push(modelFile.data[ch]);

            i++;
        }
    }
}
module.exports = new Model;
