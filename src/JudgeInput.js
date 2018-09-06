const commandResolve = require('../src/commandResolve.js');

const Judge = (input) => {
    return commandResolve(input).length === 4;
}

module.exports = Judge;