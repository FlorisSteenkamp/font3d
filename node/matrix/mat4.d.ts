type Mat4 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
/**
 * Inverts a mat4
 *
 * @param a the source matrix
 */
declare function invert(a: Mat4): Mat4 | undefined;
/**
 * Returns an orthogonal projection matrix with the given bounds.
 *
 * The near/far clip planes correspond to a normalized device coordinate Z
 * range of [-1, 1], which matches WebGL/OpenGL's clip volume.
 *
 * @param left Left bound of the frustum
 * @param right Right bound of the frustum
 * @param bottom Bottom bound of the frustum
 * @param top Top bound of the frustum
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 */
declare function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4;
declare function perspective(fovy: number, aspect: number, near: number, far: number): Mat4;
declare function createUnitMat4(): Mat4;
declare function translate(a: Mat4, v: number[]): Mat4;
declare function rotate(a: Mat4, rad: number, axis: [number, number, number]): Mat4;
declare function transpose(a: Mat4): Mat4;
export { createUnitMat4, invert, ortho, perspective, translate, rotate, transpose };
