"use strict";
var index_1 = require('./index');
describe('Profile Matching should work', function () {
    it('computeDifference', function () {
        var input = [
            [3, 1, 0],
            [1, 3, 2],
            [3, 1, 2]
        ];
        var expected = [
            [2, 2, 2],
            [4, 0, 0],
            [2, 2, 0]
        ];
        var result = index_1.computeDifference(input, [5, 3, 2]);
        return expect(result).toEqual(expected);
    });
    it('applyGap', function () {
        var input = [
            [2, 2, 2],
            [4, 0, 0],
            [2, 2, 0]
        ];
        var expected = [
            [9, 9, 9],
            [8, 10, 10],
            [9, 9, 10]
        ];
        var result = index_1.applyGap(input);
        return expect(result).toEqual(expected);
    });
});
