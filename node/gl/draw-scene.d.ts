import { EffectsState } from '../state/effects.js';
import { GlDrawInfo } from './gl-draw-info.js';
/**
 *
 * @param glInfo
 * @param projection
 * @param effectsState
 */
declare function drawScene(glInfo: Required<GlDrawInfo>, projection: 'orthogonal' | 'perspective', effectsState: EffectsState): void;
export { drawScene };
