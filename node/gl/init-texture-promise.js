import { loadTexture } from "./load-texture.js";
async function initTexturePromise(glInfo, textureUrl) {
    const gl = glInfo.gl;
    const textureInfo = await loadTexture(gl, textureUrl);
    const { texture, width, height } = textureInfo;
    const textureMetrics = { width, height };
    glInfo.texture = texture;
    glInfo.textureMetrics = textureMetrics;
}
export { initTexturePromise };
//# sourceMappingURL=init-texture-promise.js.map