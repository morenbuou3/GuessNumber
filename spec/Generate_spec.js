const generate = require('../src/generate.js')

describe('', () => {
    describe('生成4位随机数', () => {
        it('should get array with length is 4', function () {
            expect(generate().length).toBe(4);
        });
    });
    describe('生成4位各不相同的随机数', () => {
        it('should get array different with each others', function () {
            expect(new Set(generate()).size).toBe(4);
        });
    });
});