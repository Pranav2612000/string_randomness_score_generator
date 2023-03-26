const defaultModelFile = require('../data/model.json');

class Model {
    probabilities = [];
    constructor() {
        this.probabilities = [];
    }

    loadModel(modelFile = defaultModelFile) {
        console.log("Loading model...");
        for (const ch of modelFile.chars) {
            this.probabilities.push(modelFile.data[ch]);
        }
    }
}
module.exports = new Model;
