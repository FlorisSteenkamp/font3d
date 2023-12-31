import { projectionToCartesian } from './projection-to-cartesian.js';
import { initializeRender } from './initialize-render.js';
/**
 *
 * @param glInfo
 * @param projection
 * @param effectsState
 */
function drawScene(glInfo, projection, effectsState) {
    const { gl, shaderInfo, buffers, triangleCount, texture, textureMetrics, xOffset, fontSize } = glInfo;
    const { width: textureWidth } = textureMetrics;
    const { orientation, lighting, options, material } = effectsState;
    const { wireframe } = options;
    const { color: materialColor, textureRepeatCountX, textureRepeatCountY } = material;
    const { modelViewMatrix, normalMatrix, projectionMatrix } = initializeRender(gl, projection, orientation, fontSize);
    const { attribLocations, uniformLocations } = shaderInfo;
    const { 
    /*aVertexColor, */ aVertexNormal, aVertexPosition, aWireframeCoord, aTextureCoord } = attribLocations;
    const { uTextureRepeatCountX, uTextureRepeatCountY, uAmbientColor, uDirectionalColor, uDirectionalDirection, uModelViewMatrix, uNormalMatrix, uProjectionMatrix, uSampler, uWireframe, uTextureWidth, uXOffset, uVertexColor } = uniformLocations;
    enableBuffer(gl, buffers.vertex, aVertexPosition, 3, gl.FLOAT);
    // enableBuffer(gl, buffers.color, aVertexColor, 4, gl.FLOAT);
    enableBuffer(gl, buffers.normal, aVertexNormal, 3, gl.FLOAT);
    enableBuffer(gl, buffers.wireframeVertices, aWireframeCoord, 3, gl.FLOAT);
    enableBuffer(gl, buffers.textureCoord, aTextureCoord, 2, gl.FLOAT);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexIndex);
    // Tell WebGL to use our program when drawing
    gl.useProgram(shaderInfo.program);
    // Set the shader uniforms
    gl.uniformMatrix4fv(uProjectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(uModelViewMatrix, false, modelViewMatrix);
    gl.uniformMatrix4fv(uNormalMatrix, false, normalMatrix);
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(uSampler, 0);
    const { ambient, directional } = lighting;
    gl.uniform4f(uVertexColor, ...materialColor, 1);
    gl.uniform1f(uTextureRepeatCountX, textureRepeatCountX);
    gl.uniform1f(uTextureRepeatCountY, textureRepeatCountY);
    const { brightness: b } = ambient;
    gl.uniform3f(uAmbientColor, b, b, b);
    gl.uniform1i(uWireframe, wireframe ? 1 : 0);
    gl.uniform1f(uXOffset, xOffset);
    const { brightness: db, direction, distance } = directional;
    gl.uniform3f(uDirectionalColor, db, db, db);
    const [x, y, z] = projectionToCartesian(direction, distance);
    gl.uniform3f(uDirectionalDirection, x, y, z);
    gl.uniform1i(uTextureWidth, textureWidth);
    if (wireframe) {
        gl.drawArrays(gl.LINES, 0, 6 * triangleCount);
    }
    else {
        gl.drawElements(gl.TRIANGLES, 3 * triangleCount, gl.UNSIGNED_SHORT, 0);
    }
}
function enableBuffer(gl, buffer, index, size, type) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(index, size, type, false, 0, 0);
    gl.enableVertexAttribArray(index);
}
export { drawScene };
//# sourceMappingURL=draw-scene.js.map