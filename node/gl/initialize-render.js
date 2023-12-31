import { createUnitMat4, invert, ortho, perspective, rotate, translate, transpose } from '../matrix/mat4.js';
function initializeRender(gl, projection, orientation, fontSize) {
    const canvas = gl.canvas;
    const { clientWidth, clientHeight } = canvas;
    const aspectRatio = clientWidth / clientHeight;
    gl.viewport(0, 0, aspectRatio * fontSize, fontSize);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    // gl.enable(gl.CULL_FACE);
    // gl.cullFace(gl.BACK);
    const fieldOfView = 45 * (Math.PI / 180); // in radians
    const zNear = 0.1;
    const zFar = 10.0;
    const projectionMatrix = projection === 'orthogonal'
        ? ortho(0, aspectRatio, -1, 0, zNear, zFar)
        : perspective(fieldOfView, aspectRatio, zNear, zFar);
    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    let modelViewMatrix = createUnitMat4();
    modelViewMatrix = translate(modelViewMatrix, [0.0, 0.0, -1.0]);
    modelViewMatrix = rotate(modelViewMatrix, orientation.z, [0, 0, 1]);
    modelViewMatrix = rotate(modelViewMatrix, orientation.x, [0, 1, 0]);
    modelViewMatrix = rotate(modelViewMatrix, orientation.y, [1, 0, 0]);
    let normalMatrix = transpose(invert(modelViewMatrix));
    return { projectionMatrix, modelViewMatrix, normalMatrix };
}
export { initializeRender };
//# sourceMappingURL=initialize-render.js.map