import { EffectsState } from '../state/effects';
import { GlDrawInfo } from './gl-draw-info';
/**
 *
 * @param glInfo
 * @param projection
 * @param effectsState
 */
declare function drawScene(glInfo: Required<GlDrawInfo>, projection: 'orthogonal' | 'perspective', effectsState: EffectsState): void;
export { drawScene };
