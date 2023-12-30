import { Buffers } from "./gl/buffers";
import { Model } from "./gl/model";


interface GlState {
    initialized: boolean;
    buffersMap: Map<Model,Buffers>;
}


export { GlState }
