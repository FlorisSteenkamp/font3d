import { ShaderInfo } from "./shader-info.js";
/**
 * Info required to draw the scene.
 */
interface GlInfo {
    gl?: WebGL2RenderingContext;
    shaderInfo?: ShaderInfo;
    texture?: WebGLTexture;
    textureMetrics?: {
        width: number;
        height: number;
    };
    triangleCounts?: number[];
}
export { GlInfo };
