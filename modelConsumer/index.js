const Model = require('./Model');
const main = () => {
    console.log('Running');
    Model.loadModel();

    const inputs = [
        "HelloWorldThisIsALongStringAlthoughItShoudln'tbeclassifedasecretalthoithsspelngmistakes",
        "AKIAYVP4CIPPERUVIFXG",
        "authorizationToken",
        "12345",
        "qwertyuiop",
        "qazwsxedcrfvtgbyhn",
        "key-Axkljh408834j7",
        "Key-^jkfah^_(_()_)(*)"
    ];
    const outputs = inputs.map(x => ({ word: x, score: Model.score(x)}));
    console.log(outputs);
}

main();
