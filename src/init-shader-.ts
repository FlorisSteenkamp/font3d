import { initShader } from "./gl/init-shader";
import { fsStr } from "./gl/shaders/blinn-phong/fs";
import { vsStr } from "./gl/shaders/blinn-phong/vs";
import { GlInfo } from "./gl/gl-info";


function initShader_(
        glInfo: GlInfo) {

    const shaderInfo = initShader(glInfo.gl!, vsStr, fsStr)!;
    glInfo.shaderInfo = shaderInfo;
}


export { initShader_ }
