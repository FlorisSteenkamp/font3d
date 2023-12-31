import { initShader } from "./gl/init-shader.js";
import { fsStr } from "./gl/shaders/blinn-phong/fs.js";
import { vsStr } from "./gl/shaders/blinn-phong/vs.js";
import { GlInfo } from "./gl/gl-info.js";


function initShader_(
        glInfo: GlInfo) {

    const shaderInfo = initShader(glInfo.gl!, vsStr, fsStr)!;
    glInfo.shaderInfo = shaderInfo;
}


export { initShader_ }
