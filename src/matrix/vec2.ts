
type Vec = Array<number>


/** 
 * Returns the dot (inner) product between two 2-vectors. 
 * @param a - The first vector
 * @param b - The second vector
 */
function dot(a: Vec, b: Vec) {
    return a[0]*b[0] + a[1]*b[1];
}


/** 
* Returns the second 2-vector minus the first.
* @param p1 - The first vector
* @param p2 - The second vector
*/
function fromTo(p1: Vec, p2: Vec) {
    return [p2[0] - p1[0], p2[1] - p1[1]];
}


/**
* Returns a scaled version of the given 2-vector.
* @param p - A vector
* @param c - A scale factor
*/
function scale(p: Vec, c: number) {
    return [p[0]*c, p[1]*c];
}


/**
* Returns the given 2-vector scaled to the given length.
* @param p - A vector
* @param len - The length to scale to
*/
function toLength(p: Vec, len: number) {
    let scaleFactor = len / length(p);

    return [p[0]*scaleFactor, p[1]*scaleFactor];
}


/** 
* Returns the length of the given 2-vector.
* @param p - A vector
*/
function length(p: Vec) {
    return Math.sqrt((p[0]*p[0]) + (p[1]*p[1]));
}


/**
* Returns the result of adding two 2-vectors. This function is curried.
* @param a - A vector
* @param b - Another vector
*/
function add(a: Vec): ((b: Vec) => Vec);
function add(a: Vec, b: Vec): Vec;
function add(a: Vec, b?: Vec) {

    function f(b: Vec): Vec {
        return [a[0]+b[0], a[1]+b[1]];
    }

    // Curry the function
    return b === undefined ? f : f(b); 
}


/**
* Returns the given 2-vector scaled to a length of one.
* @param p - A vector
*/
function normalize(p: Vec) {
    let c = 1/length(p);

    return [p[0]*c, p[1]*c, p[2]*c];
}


/** 
 * Returns the cross product signed magnitude (i.e z-coordinate) between two 
 * 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function crossZ(a: Vec, b: Vec) {
    return a[0]*b[1] - a[1]*b[0]; 
}


/** 
 * Returns the cross product (a 3-vector) between two 2-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function cross(a: Vec, b: Vec) {
    return [0, 0, a[0]*b[1] - a[1]*b[0]];
}


/**
* Returns the result of subtracting the first 2-vector from the second. 
*
* This function is curried.
* @param a - A vector
* @param b - Another vector
*/
function subtract(a: Vec): ((b: Vec) => Vec);
function subtract(a: Vec, b: Vec): Vec;
function subtract(a: Vec, b?: Vec) {

    function f(b: Vec): Vec {
        return [-a[0]+b[0], -a[1]+b[1]];
    }

    // Curry the function
    return b === undefined ? f : f(b); 
}


/**
* Returns true if two 2-vectors are identical by value, false otherwise.
* @param a - A vector
* @param b - Another vector
*/
function equal(a: Vec, b: Vec): boolean {
    return (a[0] === b[0] && a[1] === b[1]);
}


export { 
    dot,
    fromTo,
    scale,
    toLength,
    length,
    add,
    normalize,
    crossZ,
    cross,
    subtract,
    equal
}
