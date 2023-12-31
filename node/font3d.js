import * as React from 'react';
import { initBuffers } from './gl/init-buffers.js';
import { drawScene } from './gl/draw-scene.js';
import { initShader_ } from './init-shader-.js';
import { initTexturePromise } from './gl/init-texture-promise.js';
const Font3d = React.memo(function (props) {
    const { fontSize, effectsState, height, models, triangleCounts, positionedGlyphs } = props;
    const { textureUrl } = effectsState.material;
    const $div = React.useRef(null);
    const $canvas = React.useRef(null);
    const $glInfo = React.useRef({});
    const $glState = React.useRef({
        initialized: false,
        buffersMap: new Map()
    });
    const $prevRenderInfo = React.useRef({});
    function changeCanvasWidth(entries) {
        if (!entries.length) {
            return;
        }
        const entry = entries[0];
        const canvas = $canvas.current;
        if (canvas === null) {
            return;
        }
        canvas.width = entry.contentRect.width;
        drawScene_();
    }
    React.useEffect(() => {
        const div = $div.current;
        const canvas = $canvas.current;
        const glInfo = $glInfo.current;
        const glState = $glState.current;
        if (glInfo.gl === undefined) {
            glInfo.gl = canvas.getContext('webgl2');
        }
        const renderInfo = $prevRenderInfo.current;
        renderInfo.textureUrl = textureUrl;
        initShader_(glInfo);
        initTexturePromise(glInfo, renderInfo.textureUrl)
            .then(() => {
            glState.initialized = true;
            const observer = new window.ResizeObserver(changeCanvasWidth);
            observer.observe(div); // Will also draw scene initially.
        });
    }, []);
    async function drawScene_() {
        const glInfo = $glInfo.current;
        const glState = $glState.current;
        if (!glState.initialized) {
            return;
        }
        const prevRenderInfo = $prevRenderInfo.current;
        const { textureUrl: textureUrl_ } = prevRenderInfo;
        if (textureUrl !== textureUrl_) {
            prevRenderInfo.textureUrl = textureUrl;
            await initTexturePromise(glInfo, prevRenderInfo.textureUrl);
        }
        const gl = glInfo.gl;
        glInfo.triangleCounts = triangleCounts;
        const { shaderInfo, texture, textureMetrics, } = glInfo;
        // const languageTags = getLanguageTagsFromBrowser();
        // const positionedGlyphs = textToGlyphsLayout(
        //     font, text, fontSize, languageTags, {
        //         smcp: true,  // always a required feature
        //     }// features TODO2
        // );
        const scale = 1 / fontSize;
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        const { buffersMap /*, textModels*/ } = glState;
        const len = positionedGlyphs.length;
        const bufferss = [];
        for (let i = 0; i < len; i++) {
            const model = models[i];
            let buffers = glState.buffersMap.get(model);
            if (buffers === undefined) {
                buffers = initBuffers(gl, model);
                buffersMap.set(model, buffers);
            }
            bufferss.push(buffers);
        }
        for (let i = 0; i < len; i++) {
            const positionedGlyph = positionedGlyphs[i];
            const glInfo = {
                fontSize,
                gl, shaderInfo, texture, textureMetrics,
                buffers: bufferss[i],
                triangleCount: triangleCounts[i],
                xOffset: scale * positionedGlyph.x
            };
            glInfo.gl = gl;
            drawScene(glInfo, "orthogonal", effectsState);
        }
    }
    drawScene_();
    return (React.createElement("div", { ref: $div, style: { display: 'block', margin: 'auto', border: '1px solid #ddd' } },
        React.createElement("canvas", { ref: $canvas, height: height })));
});
export { Font3d };
//# sourceMappingURL=font3d.js.map