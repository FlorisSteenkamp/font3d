"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equal = exports.subtract = exports.cross = exports.crossZ = exports.normalize = exports.add = exports.length = exports.toLength = exports.scale = exports.fromTo = exports.dot = void 0;
/**
 * Returns the dot (inner) product between two 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
exports.dot = dot;
/**
* Returns the second 2-vector minus the first.
* @param p1 - The first vector
* @param p2 - The second vector
*/
function fromTo(p1, p2) {
    return [p2[0] - p1[0], p2[1] - p1[1]];
}
exports.fromTo = fromTo;
/**
* Returns a scaled version of the given 2-vector.
* @param p - A vector
* @param c - A scale factor
*/
function scale(p, c) {
    return [p[0] * c, p[1] * c];
}
exports.scale = scale;
/**
* Returns the given 2-vector scaled to the given length.
* @param p - A vector
* @param len - The length to scale to
*/
function toLength(p, len) {
    let scaleFactor = len / length(p);
    return [p[0] * scaleFactor, p[1] * scaleFactor];
}
exports.toLength = toLength;
/**
* Returns the length of the given 2-vector.
* @param p - A vector
*/
function length(p) {
    return Math.sqrt((p[0] * p[0]) + (p[1] * p[1]));
}
exports.length = length;
function add(a, b) {
    function f(b) {
        return [a[0] + b[0], a[1] + b[1]];
    }
    // Curry the function
    return b === undefined ? f : f(b);
}
exports.add = add;
/**
* Returns the given 2-vector scaled to a length of one.
* @param p - A vector
*/
function normalize(p) {
    let c = 1 / length(p);
    return [p[0] * c, p[1] * c, p[2] * c];
}
exports.normalize = normalize;
/**
 * Returns the cross product signed magnitude (i.e z-coordinate) between two
 * 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function crossZ(a, b) {
    return a[0] * b[1] - a[1] * b[0];
}
exports.crossZ = crossZ;
/**
 * Returns the cross product (a 3-vector) between two 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function cross(a, b) {
    return [0, 0, a[0] * b[1] - a[1] * b[0]];
}
exports.cross = cross;
function subtract(a, b) {
    function f(b) {
        return [-a[0] + b[0], -a[1] + b[1]];
    }
    // Curry the function
    return b === undefined ? f : f(b);
}
exports.subtract = subtract;
/**
* Returns true if two 2-vectors are identical by value, false otherwise.
* @param a - A vector
* @param b - Another vector
*/
function equal(a, b) {
    return (a[0] === b[0] && a[1] === b[1]);
}
exports.equal = equal;
//# sourceMappingURL=vec2.js.map