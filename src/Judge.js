const print = require('../src/printInstruction.js')

const Judge = (input, answer) => {
    var result = {A: 0, B: 0}
    var instruction = {correct : [], wrong: []}

    input.forEach((n, indexN) => {
        answer.forEach((e, indexE) => {
            if (n === e && indexE === indexN) {
                result.A += 1;
                instruction.correct.push(n);
            } else if (n === e) {
                result.B += 1;
                instruction.wrong.push(n);
            }
        })
    })
    print(instruction, result);
    return result;
}

Judge([1,3,2,4], [8,2,3,4])

module.exports = Judge;