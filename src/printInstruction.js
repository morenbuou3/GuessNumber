const printResult = (input, result) => {
    if (result.A === 0 && result.B === 0) {console.log('all wrong');}
    else if (result.A === 4) {console.log('win, all correct');}
    else if (result.B === 4) {console.log('4 numbers position wrong');}
    if (result.A !== 0){
        console.log(input.correct.join(' and ') + ' correct, ');
    }
    if (result.B !== 0) {
        console.log(input.wrong.join(' and ') + ' wrong position');
    }
}

module.exports = printResult;