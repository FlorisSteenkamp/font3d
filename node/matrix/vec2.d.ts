type Vec = Array<number>;
/**
 * Returns the dot (inner) product between two 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
declare function dot(a: Vec, b: Vec): number;
/**
* Returns the second 2-vector minus the first.
* @param p1 - The first vector
* @param p2 - The second vector
*/
declare function fromTo(p1: Vec, p2: Vec): number[];
/**
* Returns a scaled version of the given 2-vector.
* @param p - A vector
* @param c - A scale factor
*/
declare function scale(p: Vec, c: number): number[];
/**
* Returns the given 2-vector scaled to the given length.
* @param p - A vector
* @param len - The length to scale to
*/
declare function toLength(p: Vec, len: number): number[];
/**
* Returns the length of the given 2-vector.
* @param p - A vector
*/
declare function length(p: Vec): number;
/**
* Returns the result of adding two 2-vectors. This function is curried.
* @param a - A vector
* @param b - Another vector
*/
declare function add(a: Vec): ((b: Vec) => Vec);
declare function add(a: Vec, b: Vec): Vec;
/**
* Returns the given 2-vector scaled to a length of one.
* @param p - A vector
*/
declare function normalize(p: Vec): number[];
/**
 * Returns the cross product signed magnitude (i.e z-coordinate) between two
 * 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
declare function crossZ(a: Vec, b: Vec): number;
/**
 * Returns the cross product (a 3-vector) between two 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
declare function cross(a: Vec, b: Vec): number[];
/**
* Returns the result of subtracting the first 2-vector from the second.
*
* This function is curried.
* @param a - A vector
* @param b - Another vector
*/
declare function subtract(a: Vec): ((b: Vec) => Vec);
declare function subtract(a: Vec, b: Vec): Vec;
/**
* Returns true if two 2-vectors are identical by value, false otherwise.
* @param a - A vector
* @param b - Another vector
*/
declare function equal(a: Vec, b: Vec): boolean;
export { dot, fromTo, scale, toLength, length, add, normalize, crossZ, cross, subtract, equal };
