"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vsStr = void 0;
const vert = (x) => x;
const vsStr = vert `
    precision highp float;

    attribute vec3 aVertexPosition;
    // attribute vec4 aVertexColor;
    attribute vec3 aVertexNormal;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec4 aVertexColor;
    uniform vec3 uAmbientColor;
    uniform vec3 uDirectionalColor;
    uniform vec3 uDirectionalDirection;

    varying vec4 vColor;
    varying vec3 vLighting;

    void main() {
        gl_Position = 
            uProjectionMatrix * 
            uModelViewMatrix * 
            vec4(aVertexPosition, 1.0);

        vColor = aVertexColor;

        vec3 ambientLight = uAmbientColor;
        vec3 directionalLightColor = vec3(1, 1, 1);
        vec3 directionalLightVector = normalize(uDirectionalDirection);

        vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

        float directional = max(
            dot(transformedNormal.xyz, directionalLightVector), 
            0.0
        );
        
        vLighting = ambientLight + (directionalLightColor * directional);
    }
`;
exports.vsStr = vsStr;
//# sourceMappingURL=vs.js.map