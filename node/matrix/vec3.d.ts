type Vec = number[];
type Vec2 = [number, number];
type Vec3 = [number, number, number];
declare function xyz(v: Vec): Vec3;
/** Component-wise multiplication */
declare function mult(a: Vec3, b: Vec3): Vec3;
/**
 * Returns the dot (inner) product between two 3-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
declare function dot(a: Vec3, b: Vec3): number;
/**
* Returns the second 3-vector minus the first.
* @param p1 - The first vector
* @param p2 - The second vector
*/
declare function fromTo(p1: Vec3, p2: Vec3): Vec3;
/**
* Returns a scaled version of the given 3-vector.
* @param p - A vector
* @param c - A scale factor
*/
declare function scale(p: Vec3, c: number): Vec3;
/**
* Returns the given 3-vector scaled to the given length.
* @param p - A vector
* @param len - The length to scale to
*/
declare function toLength(p: Vec3, len: number): number[];
/**
* Returns the length of the given 3-vector.
* @param p - A vector
*/
declare function length(p: Vec3): number;
/**
* Returns the result of adding two 3-vectors. This function is curried.
* @param a - A vector
* @param b - Another vector
*/
declare function add(a: Vec3, b: Vec3): Vec3;
/**
* Returns the given 3-vector scaled to a length of one.
* @param p - A vector
*/
declare function normalize(p: Vec3): Vec3;
/**
 * Returns the cross product between two 3-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
declare function cross(a: Vec3, b: Vec3): Vec3;
/**
* Returns the result of subtracting the first 3-vector from the second.
*
* This function is curried.
* @param a - A vector
* @param b - Another vector
*/
declare function subtract(a: Vec3, b: Vec3): Vec3;
/**
* Returns true if two 3-vectors are identical by value, false otherwise.
* @param a - A vector
* @param b - Another vector
*/
declare function equal(a: Vec3, b: Vec3): boolean;
export { dot, fromTo, scale, toLength, length, add, normalize, cross, subtract, equal, xyz, mult, type Vec2, type Vec3, };
