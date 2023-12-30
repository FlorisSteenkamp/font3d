import * as React from 'react';
// import { useRef, useEffect, memo } from 'react';
import { EffectsState } from './state/effects';
import { initBuffers } from './gl/init-buffers';
import { drawScene } from './gl/draw-scene';
import { GlDrawInfo } from './gl/gl-draw-info';
import { GlInfo } from './gl/gl-info';
import { RenderInfo } from './render-info';
import { initShader_ } from './init-shader-';
import { initTexturePromise } from './gl/init-texture-promise';
import { Buffers } from './gl/buffers';
import { GlState } from './gl-state';
import { Model } from './gl/model';


interface Props {
    x: number;
    y: number;
    height: number;
    fontSize: number;
    effectsState: EffectsState;
    models: Model[];
    triangleCounts: number[];
    positionedGlyphs: { x: number; }[];
}


const Font3d = React.memo(function(props: Props) {
    const {
        fontSize, effectsState, height, models, triangleCounts,
        positionedGlyphs
    } = props;
    const { textureUrl } = effectsState.material;

    const $div = React.useRef<HTMLDivElement>(null);
    const $canvas = React.useRef<HTMLCanvasElement>(null);

    const $glInfo = React.useRef<GlInfo>({});
    const $glState = React.useRef<GlState>({
        initialized: false,
        buffersMap: new Map()
    });
    const $prevRenderInfo = React.useRef<RenderInfo>({});


    function changeCanvasWidth(entries: ResizeObserverEntry[]) {
        if (!entries.length) { return; }
        const entry = entries[0];

        const canvas = $canvas.current!;
        if (canvas === null) { return; }
        canvas.width = entry.contentRect.width;

        drawScene_();
    }

    React.useEffect(() => {
        const div = $div.current!;
        const canvas = $canvas.current!;
        const glInfo = $glInfo.current!;
        const glState = $glState.current!;

        if (glInfo.gl === undefined) {
            glInfo.gl = canvas.getContext('webgl2')!;
        }

        const renderInfo = $prevRenderInfo.current!;
        renderInfo.textureUrl = textureUrl;

        initShader_(glInfo);
        initTexturePromise(glInfo, renderInfo.textureUrl)
        .then(() => {
            glState.initialized = true;
            const observer = new window.ResizeObserver(changeCanvasWidth);
            observer.observe(div);  // Will also draw scene initially.
        });
    },[]);


    async function drawScene_() {
        const glInfo = $glInfo.current;
        const glState = $glState.current;
        if (!glState.initialized) { return; }

        const prevRenderInfo = $prevRenderInfo.current;
        const { textureUrl: textureUrl_ } = prevRenderInfo;

        if (textureUrl !== textureUrl_) {
            prevRenderInfo.textureUrl = textureUrl;
            await initTexturePromise(glInfo, prevRenderInfo.textureUrl);
        }

        const gl = glInfo.gl!;

        glInfo.triangleCounts = triangleCounts;

        const {
            shaderInfo, texture, textureMetrics,
        } = glInfo as Required<GlInfo>;

        // const languageTags = getLanguageTagsFromBrowser();
        // const positionedGlyphs = textToGlyphsLayout(
        //     font, text, fontSize, languageTags, {
        //         smcp: true,  // always a required feature
        //     }// features TODO2
        // );

        const scale = 1/fontSize;
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        const { buffersMap/*, textModels*/ } = glState as Required<GlState>;
        const len = positionedGlyphs.length;
        const bufferss: Buffers[] = [];
        for (let i=0; i<len; i++) {
            const model = models[i];
            let buffers = glState.buffersMap.get(model);
            if (buffers === undefined) {
                buffers = initBuffers(gl, model);
                buffersMap.set(model, buffers)
            }
            bufferss.push(buffers);
        }

        for (let i=0; i<len; i++) {
            const positionedGlyph = positionedGlyphs[i];
            const glInfo: Required<GlDrawInfo> = {
                fontSize,
                gl, shaderInfo, texture, textureMetrics,
                buffers: bufferss[i],
                triangleCount: triangleCounts![i],
                xOffset: scale*positionedGlyph.x
            };
            glInfo.gl = gl;

            drawScene(glInfo, "orthogonal", effectsState);
        }
    }

    drawScene_();

    return (
        <div 
            ref={$div}
            style={{ display: 'block', margin: 'auto',  border: '1px solid #ddd' }}
        >
            <canvas 
                ref={$canvas}
                height={height}
            />
        </div>
    );
});


export { Font3d }
