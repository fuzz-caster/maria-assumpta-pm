"use strict";
var lodash_1 = require('lodash');
var GAP_LOOKUP = new Map(lodash_1.rangeRight(0, 20).map(function (i) { return [i, 10 - (i * 0.5)]; }));
function computeDifference(xs, ptarget) {
    return xs.map(function (row) {
        return lodash_1.zip(row, ptarget).map(function (_a) {
            var x = _a[0], gap = _a[1];
            return gap - x;
        });
    });
}
exports.computeDifference = computeDifference;
function applyGap(matrix) {
    return matrix.map(function (row) {
        return row.map(function (x) {
            return GAP_LOOKUP.get(x);
        });
    });
}
exports.applyGap = applyGap;
