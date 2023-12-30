import { Orientation } from '../state/orientation';
declare function initializeRender(gl: WebGL2RenderingContext, projection: 'orthogonal' | 'perspective', orientation: Orientation, fontSize: number): {
    projectionMatrix: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
    modelViewMatrix: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
    normalMatrix: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
};
export { initializeRender };
