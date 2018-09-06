const regex = /[0-9]/g;

const resolve = (input) => {
    return input.match(regex);
}

module.exports = resolve;