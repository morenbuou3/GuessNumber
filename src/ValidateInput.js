const commandResolve = require('../src/commandResolve.js');

const validate = (input) => {
    return commandResolve(input).length === 4;
}

module.exports = validate;