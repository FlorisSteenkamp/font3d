"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTexturePromise = void 0;
const load_texture_1 = require("./load-texture");
async function initTexturePromise(glInfo, textureUrl) {
    const gl = glInfo.gl;
    const textureInfo = await (0, load_texture_1.loadTexture)(gl, textureUrl);
    const { texture, width, height } = textureInfo;
    const textureMetrics = { width, height };
    glInfo.texture = texture;
    glInfo.textureMetrics = textureMetrics;
}
exports.initTexturePromise = initTexturePromise;
//# sourceMappingURL=init-texture-promise.js.map