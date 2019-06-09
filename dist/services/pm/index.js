"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const GAP_LOOKUP = new Map(lodash_1.rangeRight(0, 20).map(i => [i, 10 - (i * 0.5)]));
function computeDifference(xs, ptarget) {
    return xs.map(row => lodash_1.zip(row, ptarget).map(([x, gap]) => gap - x));
}
exports.computeDifference = computeDifference;
function applyGap(matrix) {
    return matrix.map(row => row.map(x => GAP_LOOKUP.get(x)));
}
exports.applyGap = applyGap;
//# sourceMappingURL=index.js.map