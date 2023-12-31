import { initShader } from "./gl/init-shader.js";
import { fsStr } from "./gl/shaders/blinn-phong/fs.js";
import { vsStr } from "./gl/shaders/blinn-phong/vs.js";
function initShader_(glInfo) {
    const shaderInfo = initShader(glInfo.gl, vsStr, fsStr);
    glInfo.shaderInfo = shaderInfo;
}
export { initShader_ };
//# sourceMappingURL=init-shader-.js.map