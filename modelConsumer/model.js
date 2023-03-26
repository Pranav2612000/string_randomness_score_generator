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

    score(word) {
        const wordLength = word.length;
        word = word.toLowerCase();

        const wordArray = [ '<.>', ...word.split(''), '<.>' ];

        let logLikelihood = 0;
        for (let i = 1; i < wordLength; i++ ) {
            const ix1 = this.charMap[wordArray[i-1]];
            const ix2 = this.charMap[wordArray[i]];

            const prob = this.probabilities[ix1][ix2];
            const logProb = Math.log(prob);
            logLikelihood += logProb;
        }

        const nll = -logLikelihood;
        return ( nll / wordLength );
    }
}
module.exports = new Model;
