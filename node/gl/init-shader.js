"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initShader = void 0;
/*
 * Initialize a shader program, so WebGL knows how to draw our data
 */
function initShader(gl, vs, fs) {
    let vertexShader = loadShader(gl, gl.VERTEX_SHADER, vs);
    let fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fs);
    // Create the shader program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return {
        program: shaderProgram,
        attribLocations: {
            aVertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            aVertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
            // aVertexColor    : gl.getAttribLocation(shaderProgram, 'aVertexColor'),
            aTextureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
            aWireframeCoord: gl.getAttribLocation(shaderProgram, "aWireframeCoord"),
        },
        uniformLocations: {
            uProjectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            uModelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            uNormalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
            uAmbientColor: gl.getUniformLocation(shaderProgram, 'uAmbientColor'),
            uDirectionalColor: gl.getUniformLocation(shaderProgram, 'uDirectionalColor'),
            uDirectionalDirection: gl.getUniformLocation(shaderProgram, 'uDirectionalDirection'),
            uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
            uWireframe: gl.getUniformLocation(shaderProgram, "uWireframe"),
            uTextureWidth: gl.getUniformLocation(shaderProgram, "uTextureWidth"),
            uXOffset: gl.getUniformLocation(shaderProgram, "uXOffset"),
            uVertexColor: gl.getUniformLocation(shaderProgram, "uVertexColor"),
            uTextureRepeatCountX: gl.getUniformLocation(shaderProgram, "uTextureRepeatCountX"),
            uTextureRepeatCountY: gl.getUniformLocation(shaderProgram, "uTextureRepeatCountY"),
        },
    };
}
exports.initShader = initShader;
/*
 * creates a shader of the given type, uploads the source and
 * compiles it.
 */
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    // Send the source to the shader object
    gl.shaderSource(shader, source);
    // Compile the shader program
    gl.compileShader(shader);
    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
//# sourceMappingURL=init-shader.js.map