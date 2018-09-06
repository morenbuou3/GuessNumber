const Judge = (input, answer) => {
    var result = {A: 0, B: 0}
    input.forEach((n, indexN) => {
        answer.forEach((e, indexE) => {
            if (n === e && indexE === indexN) {
                result.A += 1;
            } else if (n === e) {
                result.B += 1;
            }
        })
    })
    return result;
}

module.exports = Judge;