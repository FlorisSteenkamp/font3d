
interface Material {
    color: [number,number,number];
    /** 
     * Number of brightness divisions - 1 -> prefer a power of 2, e.g. 32 
     * will result in 32+1 = 33 divisions given by [0, 1/32, 2/32, ..., 1]
     */
    paletteRange: number;
    /** Filename of .jpg or .png */
    textureUrl: string;
    textureRepeatCountX: number;
    textureRepeatCountY: number;
}


export { Material }
