
/**
 * Ambient light.
 */
interface Ambient {
    /** The brightness of the ambient light - from 0 to 1 */
    brightness : number,
}


/**
 * Directional light.
 */
interface Directional {
    /** Directional light brightness - from 0 to 1 */
    brightness : number,
    /**
     * 2 degrees of freedom, imagine point on half-sphere (of any radius).
     * Represented as point on unit circle where distance to center 
     * represents 'frontness' of light.
     */
    direction : number[],
    /** Distance of the light from the 2d center of the scene at z = 0ish*/
    distance  : number
}


interface Lighting {
    ambient: Ambient,
    directional: Directional,
}


export { Lighting, Ambient, Directional }
