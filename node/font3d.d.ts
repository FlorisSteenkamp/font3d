import * as React from 'react';
import { EffectsState } from './state/effects';
import { Model } from './gl/model';
interface Props {
    x: number;
    y: number;
    height: number;
    fontSize: number;
    effectsState: EffectsState;
    models: Model[];
    triangleCounts: number[];
    positionedGlyphs: {
        x: number;
    }[];
}
declare const Font3d: React.NamedExoticComponent<Props>;
export { Font3d };
