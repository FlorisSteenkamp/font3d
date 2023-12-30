"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initShader_ = void 0;
const init_shader_1 = require("./gl/init-shader");
const fs_1 = require("./gl/shaders/blinn-phong/fs");
const vs_1 = require("./gl/shaders/blinn-phong/vs");
function initShader_(glInfo) {
    const shaderInfo = (0, init_shader_1.initShader)(glInfo.gl, vs_1.vsStr, fs_1.fsStr);
    glInfo.shaderInfo = shaderInfo;
}
exports.initShader_ = initShader_;
//# sourceMappingURL=init-shader-.js.map