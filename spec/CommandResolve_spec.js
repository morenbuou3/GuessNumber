const resolve = require('../src/commandResolve.js')

describe('', () => {
    describe('根据输入的指令解析得到数组', () => {
        it('should get array with input', function () {
            expect(resolve("1234")).toEqual(['1', '2', '3', '4']);
        });

        it('should get array with input', function () {
            expect(resolve("12$Aa")).toEqual(['1', '2']);
        });
    });
});