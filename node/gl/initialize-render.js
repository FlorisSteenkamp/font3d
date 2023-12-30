"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRender = void 0;
const mat4_1 = require("../matrix/mat4");
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
        ? (0, mat4_1.ortho)(0, aspectRatio, -1, 0, zNear, zFar)
        : (0, mat4_1.perspective)(fieldOfView, aspectRatio, zNear, zFar);
    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    let modelViewMatrix = (0, mat4_1.createUnitMat4)();
    modelViewMatrix = (0, mat4_1.translate)(modelViewMatrix, [0.0, 0.0, -1.0]);
    modelViewMatrix = (0, mat4_1.rotate)(modelViewMatrix, orientation.z, [0, 0, 1]);
    modelViewMatrix = (0, mat4_1.rotate)(modelViewMatrix, orientation.x, [0, 1, 0]);
    modelViewMatrix = (0, mat4_1.rotate)(modelViewMatrix, orientation.y, [1, 0, 0]);
    let normalMatrix = (0, mat4_1.transpose)((0, mat4_1.invert)(modelViewMatrix));
    return { projectionMatrix, modelViewMatrix, normalMatrix };
}
exports.initializeRender = initializeRender;
//# sourceMappingURL=initialize-render.js.map