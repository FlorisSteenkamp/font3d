"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mult = exports.xyz = exports.equal = exports.subtract = exports.cross = exports.normalize = exports.add = exports.length = exports.toLength = exports.scale = exports.fromTo = exports.dot = void 0;
function xyz(v) {
    return [v[0], v[1], v[2]];
}
exports.xyz = xyz;
/** Component-wise multiplication */
function mult(a, b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
}
exports.mult = mult;
/**
 * Returns the dot (inner) product between two 3-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
exports.dot = dot;
/**
* Returns the second 3-vector minus the first.
* @param p1 - The first vector
* @param p2 - The second vector
*/
function fromTo(p1, p2) {
    return [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
}
exports.fromTo = fromTo;
/**
* Returns a scaled version of the given 3-vector.
* @param p - A vector
* @param c - A scale factor
*/
function scale(p, c) {
    return [p[0] * c, p[1] * c, p[2] * c];
}
exports.scale = scale;
/**
* Returns the given 3-vector scaled to the given length.
* @param p - A vector
* @param len - The length to scale to
*/
function toLength(p, len) {
    let scaleFactor = len / length(p);
    return [p[0] * scaleFactor, p[1] * scaleFactor, p[2] * scaleFactor];
}
exports.toLength = toLength;
/**
* Returns the length of the given 3-vector.
* @param p - A vector
*/
function length(p) {
    return Math.sqrt((p[0] * p[0]) + (p[1] * p[1]) + (p[2] * p[2]));
}
exports.length = length;
/**
* Returns the result of adding two 3-vectors. This function is curried.
* @param a - A vector
* @param b - Another vector
*/
function add(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
exports.add = add;
/**
* Returns the given 3-vector scaled to a length of one.
* @param p - A vector
*/
function normalize(p) {
    let c = 1 / length(p);
    return [p[0] * c, p[1] * c, p[2] * c];
}
exports.normalize = normalize;
/**
 * Returns the cross product between two 3-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function cross(a, b) {
    let [ax, ay, az] = a;
    let [bx, by, bz] = b;
    return [
        ay * bz - az * by,
        az * bx - ax * bz,
        ax * by - ay * bx
    ];
}
exports.cross = cross;
/**
* Returns the result of subtracting the first 3-vector from the second.
*
* This function is curried.
* @param a - A vector
* @param b - Another vector
*/
function subtract(a, b) {
    return [-a[0] + b[0], -a[1] + b[1], -a[2] + b[2]];
}
exports.subtract = subtract;
/**
* Returns true if two 3-vectors are identical by value, false otherwise.
* @param a - A vector
* @param b - Another vector
*/
function equal(a, b) {
    return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
}
exports.equal = equal;
//# sourceMappingURL=vec3.js.map