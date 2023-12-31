import { Orientation } from './orientation.js';
import { Lighting } from './lighting.js';
import { Material } from './material.js';
import { Profile } from './profile.js';
import { Texture } from './texture.js';
import { Options } from './options.js';
interface EffectsState {
    orientation: Orientation;
    lighting: Lighting;
    material: Material;
    profile: Profile;
    texture: Texture;
    options: Options;
}
export { EffectsState };
