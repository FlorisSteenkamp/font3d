const frag = (x: any) => x;

let fsStr: string = frag`
    precision highp float;

    uniform highp int uWireframe;
    uniform highp int uTextureWidth;
    uniform sampler2D uSampler;
    uniform vec3 uAmbientColor;
    uniform vec3 uDirectionalColor;
    uniform vec3 uDirectionalDirection;
    uniform vec4 uVertexColor;
    uniform highp float uTextureRepeatCountX;
    uniform highp float uTextureRepeatCountY;

    varying vec3 normalInterp;
    varying vec3 vertPos;
    // varying vec4 vColor;
    varying highp vec2 vTextureCoord;

    const vec3 specColor = vec3(0.1, 0.1, 0.1);

    highp float textureWidth = float(uTextureWidth);

    void main() {
        highp vec3 fColor = uWireframe == 1
            ? uVertexColor.xyz
            : texture2D(
                uSampler,
                vec2(
                    vTextureCoord.x*textureWidth*uTextureRepeatCountX,
                    vTextureCoord.y*uTextureRepeatCountY
                )
            ).xyz;

        vec3 normal_ = normalize(normalInterp);
        vec3 lightDir = normalize(uDirectionalDirection - vertPos);

        float lambertian = max(dot(lightDir,normal_), 0.0);
        float specular = 0.0;

        if (lambertian > 0.0) {
            vec3 viewDir = normalize(-vertPos);

            // Blinn Phong
            // vec3 halfDir = normalize(lightDir + viewDir);
            // float specAngle = max(dot(halfDir, normal_), 0.0);
            // specular = pow(specAngle, 16.0);

            // Phong
            vec3 reflectDir = reflect(-lightDir, normal_);
            float specAngle = max(dot(reflectDir, viewDir), 0.0);
            specular = pow(specAngle, 16.0/4.0);
        }

        vec3 ambient_ = fColor * uAmbientColor;
        vec3 directional_ = fColor * uDirectionalColor * lambertian;
        vec3 specular_ = specular * specColor; 

        vec3 color = ambient_ + directional_ + specular_;
        vec3 color_ = vec3(color[0], color[1], color[2]);

        gl_FragColor = uWireframe == 1
            ? uVertexColor
            : vec4(color + specular_, 1.0);
    }
`;


export { fsStr }
