
type Vec = number[];
type Vec2 = [number,number];
type Vec3 = [number,number,number];


function xyz(v: Vec) {
    return [v[0], v[1], v[2]] as Vec3;
}


/** Component-wise multiplication */
function mult(a: Vec3, b: Vec3): Vec3 {
    return [a[0]*b[0], a[1]*b[1], a[2]*b[2]];
}


/** 
 * Returns the dot (inner) product between two 3-vectors. 
 * @param a - The first vector
 * @param b - The second vector
 */
function dot(a: Vec3, b: Vec3): number {
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
}


/** 
* Returns the second 3-vector minus the first.
* @param p1 - The first vector
* @param p2 - The second vector
*/
function fromTo(p1: Vec3, p2: Vec3): Vec3 {
    return [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
}


/**
* Returns a scaled version of the given 3-vector.
* @param p - A vector
* @param c - A scale factor
*/
function scale(p: Vec3, c: number): Vec3 {
    return [p[0]*c, p[1]*c, p[2]*c];
}


/**
* Returns the given 3-vector scaled to the given length.
* @param p - A vector
* @param len - The length to scale to
*/
function toLength(p: Vec3, len: number) {
    let scaleFactor = len / length(p);

    return [p[0]*scaleFactor, p[1]*scaleFactor, p[2]*scaleFactor];
}


/** 
* Returns the length of the given 3-vector.
* @param p - A vector
*/
function length(p: Vec3) {
    return Math.sqrt((p[0]*p[0]) + (p[1]*p[1]) + (p[2]*p[2]));
}


/**
* Returns the result of adding two 3-vectors. This function is curried.
* @param a - A vector
* @param b - Another vector
*/
function add(a: Vec3, b: Vec3): Vec3 {
    return [a[0]+b[0], a[1]+b[1], a[2]+b[2]];
}


/**
* Returns the given 3-vector scaled to a length of one.
* @param p - A vector
*/
function normalize(p: Vec3): Vec3 {
    let c = 1/length(p);

    return [p[0]*c, p[1]*c, p[2]*c];
}


/** 
 * Returns the cross product between two 3-vectors.
 * @param a - The first vector
 * @param b - The second vector
 */
function cross(a: Vec3, b: Vec3): Vec3 {
    let [ax, ay, az] = a;
    let [bx, by, bz] = b;

    return [
        ay*bz - az*by, 
        az*bx - ax*bz,
        ax*by - ay*bx
    ];
}


/**
* Returns the result of subtracting the first 3-vector from the second. 
*
* This function is curried.
* @param a - A vector
* @param b - Another vector
*/
function subtract(a: Vec3, b: Vec3): Vec3 {
    return [-a[0]+b[0], -a[1]+b[1], -a[2]+b[2]];
}


/**
* Returns true if two 3-vectors are identical by value, false otherwise.
* @param a - A vector
* @param b - Another vector
*/
function equal(a: Vec3, b: Vec3): boolean {
    return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
}


export { 
    dot,
    fromTo,
    scale,
    toLength,
    length,
    add,
    normalize,
    cross,
    subtract,
    equal,
    xyz,
    mult,
    type Vec2,
    type Vec3,
}
