import { Buffers } from "./buffers.js";
import { ShaderInfo } from "./shader-info.js";


interface GlDrawInfo {
    gl?: WebGL2RenderingContext;
    shaderInfo?: ShaderInfo;
    buffers?: Buffers;
    triangleCount?: number;
    texture?: WebGLTexture;
    textureMetrics?: { width: number; height: number; };
    xOffset?: number;
    fontSize: number;
}


export { GlDrawInfo }
