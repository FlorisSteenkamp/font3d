/**
 * Transforms a point in 3d defined by its xy projection onto a half-sphere with
 * radius `distance` centered at the origin
 * @param p The 2d point representing the direction vector.
 * @param distance The distance of the light source to [0,0,0].
 */
declare function projectionToCartesian(p?: number[], distance?: number): number[];
export { projectionToCartesian };
