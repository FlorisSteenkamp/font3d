import { Buffers } from "./gl/buffers.js";
import { Model } from "./gl/model.js";


interface GlState {
    initialized: boolean;
    buffersMap: Map<Model,Buffers>;
}


export { GlState }
