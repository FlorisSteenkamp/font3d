/**
 * Transforms the 2d direction into 3d.
 * @param p The 2d point representing the direction vector.
 * @param d The distance of the light source to [0,0,0].
 */
declare function directionTo3d(p?: number[], d?: number): {
    x: number;
    y: number;
    z: number;
};
