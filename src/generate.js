const generate = () => {
    let arr = [...Array(10).keys()];
    arr.sort(() => {
        return 0.5 - Math.random();
    }).length = 4;
    return arr;
}

module.exports = generate;