/**
 * Initialize a texture and load an image.
 * When the image finished loading copy it into the texture.
 *
 * @param gl
 * @param url
 */
declare function loadTexture(gl: WebGLRenderingContext, url: string): Promise<{
    texture: WebGLTexture;
    width: number;
    height: number;
}>;
export { loadTexture };
