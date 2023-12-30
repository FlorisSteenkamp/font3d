"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsStr = void 0;
const frag = (x) => x;
const fsStr = frag `
    precision highp float;

    varying vec4 vColor;   
    varying vec3 vLighting;

    void main() {
        gl_FragColor = vec4(vColor.rgb * vLighting, vColor.a);
    }
`;
exports.fsStr = fsStr;
//# sourceMappingURL=fs.js.map