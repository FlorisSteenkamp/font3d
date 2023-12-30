const frag = (x: any) => x;

const fsStr = frag`
    precision highp float;

    varying vec4 vColor;   
    varying vec3 vLighting;

    void main() {
        gl_FragColor = vec4(vColor.rgb * vLighting, vColor.a);
    }
`;


export { fsStr }