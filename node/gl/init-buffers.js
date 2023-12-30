"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBuffers = void 0;
function initBuffers(gl, model) {
    const { vertices, vertexColors, vertexNormals, vertexIndices, textureCoords, wireframeVertices } = model;
    const vertexBuffer = createAndLoadBuffer(gl, Float32Array, vertices);
    const colorBuffer = createAndLoadBuffer(gl, Float32Array, vertexColors);
    const textureCoordBuffer = createAndLoadBuffer(gl, Float32Array, textureCoords);
    const normalBuffer = createAndLoadBuffer(gl, Float32Array, vertexNormals);
    const wireframeVertexBuffer = createAndLoadBuffer(gl, Float32Array, wireframeVertices);
    // ----- VERTEX INDICES -----//
    const vertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndices), gl.STATIC_DRAW);
    return {
        vertex: vertexBuffer,
        normal: normalBuffer,
        color: colorBuffer,
        textureCoord: textureCoordBuffer,
        wireframeVertices: wireframeVertexBuffer,
        vertexIndex: vertexIndexBuffer
    };
}
exports.initBuffers = initBuffers;
function createAndLoadBuffer(gl, constructor, values) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new constructor(values), gl.STATIC_DRAW);
    return buffer;
}
//# sourceMappingURL=init-buffers.js.map