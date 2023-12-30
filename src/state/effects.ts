import { Orientation } from './orientation';
import { Lighting } from './lighting';
import { Material } from './material';
import { Profile } from './profile';
import { Texture } from './texture';
import { Options } from './options';


interface EffectsState {
    orientation: Orientation;
    lighting: Lighting; 
    material: Material; 
    profile: Profile;
    texture: Texture;
    options: Options;
}


export { EffectsState }
