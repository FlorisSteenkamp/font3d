
/**
 * WebGL program information.
 */
interface ShaderInfo {
    program: WebGLProgram;
    attribLocations: {
        aVertexPosition: number;
        // aVertexColor: number;
        aVertexNormal: number;
        aTextureCoord: number;
        aWireframeCoord: number;
    },
    uniformLocations: {
        uProjectionMatrix: WebGLUniformLocation;
        uModelViewMatrix: WebGLUniformLocation;
        uNormalMatrix: WebGLUniformLocation;

        uAmbientColor: WebGLUniformLocation;
        uDirectionalColor: WebGLUniformLocation;
        uDirectionalDirection: WebGLUniformLocation;
        uTextureWidth: WebGLUniformLocation;
        uSampler: WebGLUniformLocation;
        uWireframe: WebGLUniformLocation;
        uXOffset: WebGLUniformLocation;
        uVertexColor: WebGLUniformLocation;
        uTextureRepeatCountX: WebGLUniformLocation;
        uTextureRepeatCountY: WebGLUniformLocation;
    },
}


export { ShaderInfo }
