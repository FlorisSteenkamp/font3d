/**
 * Initialize a texture and load an image.
 * When the image finished loading copy it into the texture.
 *
 * @param gl
 * @param url
 */
async function loadTexture(gl, url) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // Because images have to be downloaded over the internet they might take
    // a moment until they are ready. Until then put a single pixel in the
    // texture so we can use it immediately. When the image has finished
    // downloading we'll update the texture with the contents of the image.
    const level = 0;
    const internalFormat = gl.RGBA;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const img = new Image();
    img.src = url;
    await img.decode();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, img);
    // WebGL1 has different requirements for power of 2 images
    // vs. non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(img.width) && isPowerOf2(img.height)) {
        // Yes, it's a power of 2. Generate mips.
        gl.generateMipmap(gl.TEXTURE_2D);
    }
    else {
        // No, it's not a power of 2. Turn off mips and set
        // wrapping to clamp to edge
        // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    }
    return {
        texture: texture,
        width: img.width,
        height: img.height
    };
}
function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}
export { loadTexture };
//# sourceMappingURL=load-texture.js.map