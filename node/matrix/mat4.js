// TODO2 - fix
//const EPSILON = 0.000001
/**
 * Inverts a mat4
 *
 * @param a the source matrix
 */
function invert(a) {
    const a00 = a[0];
    const a01 = a[1];
    const a02 = a[2];
    const a03 = a[3];
    const a10 = a[4];
    const a11 = a[5];
    const a12 = a[6];
    const a13 = a[7];
    const a20 = a[8];
    const a21 = a[9];
    const a22 = a[10];
    const a23 = a[11];
    const a30 = a[12];
    const a31 = a[13];
    const a32 = a[14];
    const a33 = a[15];
    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return undefined;
    }
    det = 1 / det;
    return [
        (a11 * b11 - a12 * b10 + a13 * b09) * det,
        (a02 * b10 - a01 * b11 - a03 * b09) * det,
        (a31 * b05 - a32 * b04 + a33 * b03) * det,
        (a22 * b04 - a21 * b05 - a23 * b03) * det,
        (a12 * b08 - a10 * b11 - a13 * b07) * det,
        (a00 * b11 - a02 * b08 + a03 * b07) * det,
        (a32 * b02 - a30 * b05 - a33 * b01) * det,
        (a20 * b05 - a22 * b02 + a23 * b01) * det,
        (a10 * b10 - a11 * b08 + a13 * b06) * det,
        (a01 * b08 - a00 * b10 - a03 * b06) * det,
        (a30 * b04 - a31 * b02 + a33 * b00) * det,
        (a21 * b02 - a20 * b04 - a23 * b00) * det,
        (a11 * b07 - a10 * b09 - a12 * b06) * det,
        (a00 * b09 - a01 * b07 + a02 * b06) * det,
        (a31 * b01 - a30 * b03 - a32 * b00) * det,
        (a20 * b03 - a21 * b01 + a22 * b00) * det
    ];
}
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
function ortho(left, right, bottom, top, near, far) {
    const m = [];
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);
    m.push(-2 * lr);
    m.push(0, 0, 0, 0);
    m.push(-2 * bt);
    m.push(0, 0, 0, 0);
    m.push(2 * nf);
    m.push(0);
    m.push((left + right) * lr);
    m.push((top + bottom) * bt);
    m.push((far + near) * nf);
    m.push(1);
    return m;
}
function perspective(fovy, aspect, near, far) {
    const m = [];
    const f = 1.0 / Math.tan(fovy / 2);
    m.push(f / aspect);
    m.push(0, 0, 0, 0);
    m.push(f);
    m.push(0, 0, 0, 0);
    const nf = 1 / (near - far);
    m.push(far === Number.POSITIVE_INFINITY ? -1 : (far + near) * nf);
    m.push(-1);
    m.push(0, 0);
    m.push(far === Number.POSITIVE_INFINITY ? 2 * far * near * nf : -2 * near);
    m.push(0);
    return m;
}
function createUnitMat4() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function translate(a, v) {
    const m = a.slice();
    const x = v[0];
    const y = v[1];
    const z = v[2];
    m[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    m[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    m[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    m[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    return m;
}
function rotate(a, rad, axis) {
    let x = axis[0];
    let y = axis[1];
    let z = axis[2];
    let len = Math.sqrt(x * x + y * y + z * z);
    // if (len < EPSILON) { return undefined; }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(rad);
    const c = Math.cos(rad);
    const t = 1 - c;
    const a00 = a[0];
    const a01 = a[1];
    const a02 = a[2];
    const a03 = a[3];
    const a10 = a[4];
    const a11 = a[5];
    const a12 = a[6];
    const a13 = a[7];
    const a20 = a[8];
    const a21 = a[9];
    const a22 = a[10];
    const a23 = a[11];
    const b00 = x * x * t + c;
    const b01 = y * x * t + z * s;
    const b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s;
    const b11 = y * y * t + c;
    const b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s;
    const b21 = y * z * t - x * s;
    const b22 = z * z * t + c;
    return [
        a00 * b00 + a10 * b01 + a20 * b02,
        a01 * b00 + a11 * b01 + a21 * b02,
        a02 * b00 + a12 * b01 + a22 * b02,
        a03 * b00 + a13 * b01 + a23 * b02,
        a00 * b10 + a10 * b11 + a20 * b12,
        a01 * b10 + a11 * b11 + a21 * b12,
        a02 * b10 + a12 * b11 + a22 * b12,
        a03 * b10 + a13 * b11 + a23 * b12,
        a00 * b20 + a10 * b21 + a20 * b22,
        a01 * b20 + a11 * b21 + a21 * b22,
        a02 * b20 + a12 * b21 + a22 * b22,
        a03 * b20 + a13 * b21 + a23 * b22,
        a[12],
        a[13],
        a[14],
        a[15]
    ];
}
function transpose(a) {
    return [
        a[0], a[4], a[8], a[12],
        a[1], a[5], a[9], a[13],
        a[2], a[6], a[10], a[14],
        a[3], a[7], a[11], a[15]
    ];
}
export { createUnitMat4, invert, ortho, perspective, translate, rotate, transpose };
//# sourceMappingURL=mat4.js.map