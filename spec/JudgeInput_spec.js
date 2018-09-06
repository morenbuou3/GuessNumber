const generate = require('../src/JudgeInput.js')

describe('', () => {
    describe('判断输入是否合法', () => {
        it('should return true when given 1234', function () {
            expect(generate('1234')).toBeTruthy();
        });
        it('should return false when given 12d4', function () {
            expect(generate('12d4')).toBeFalsy();
        });
        it('should return false when given 12345', function () {
            expect(generate('12345')).toBeFalsy();
        });
        it('should return false when given 123%', function () {
            expect(generate('123%')).toBeFalsy();
        });
    });
});