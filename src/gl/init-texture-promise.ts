import { loadTexture } from "./load-texture.js";
import { GlInfo } from "./gl-info.js";


async function initTexturePromise(
        glInfo: GlInfo,
        textureUrl: string) {

    const gl = glInfo.gl!;

    const textureInfo = await loadTexture(gl, textureUrl);

    const { texture, width, height } = textureInfo;
    const textureMetrics = { width, height };
    
    glInfo.texture = texture;
    glInfo.textureMetrics = textureMetrics;
}


export { initTexturePromise }
