const vert = (x: any) => x;

const vsStr: string = vert`
    precision highp float;

    uniform highp int uWireframe;
    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform highp float uXOffset;

    attribute vec3 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;
    attribute vec3 aWireframeCoord;

    varying vec3 normalInterp;
    varying vec3 vertPos;
    varying highp vec2 vTextureCoord;

    void main() {
        highp vec3 vertexPosition = vec3(
            aVertexPosition.x + uXOffset,
            aVertexPosition.yz
        );

        highp vec3 wireframeCoord = vec3(
            aWireframeCoord.x + uXOffset,
            aWireframeCoord.yz
        );

        uWireframe == 1
            ? gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(wireframeCoord, 1.0)
            : gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(vertexPosition, 1.0);

        vec4 vertPos4 = uModelViewMatrix * vec4(aVertexPosition, 1.0);
        vertPos = vec3(vertPos4) / vertPos4.w;
        normalInterp = vec3(uNormalMatrix * vec4(aVertexNormal, 0.0));
        vTextureCoord = aTextureCoord;
    }
`;


export { vsStr }
