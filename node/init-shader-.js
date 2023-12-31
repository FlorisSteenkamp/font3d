import { initShader } from "./gl/init-shader";
import { fsStr } from "./gl/shaders/blinn-phong/fs";
import { vsStr } from "./gl/shaders/blinn-phong/vs";
function initShader_(glInfo) {
    const shaderInfo = initShader(glInfo.gl, vsStr, fsStr);
    glInfo.shaderInfo = shaderInfo;
}
export { initShader_ };
//# sourceMappingURL=init-shader-.js.map