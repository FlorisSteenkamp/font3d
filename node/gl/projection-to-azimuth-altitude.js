"use strict";
/**
 * Transforms the 2d direction into 3d.
 * @param p The 2d point representing the direction vector.
 * @param d The distance of the light source to [0,0,0].
 */
function directionTo3d(p = [0, 0], d = 1) {
    let [x, y] = p;
    // Ensure point is within unit circle - the interface gave us a unit square.
    let d2 = x ** 2 + y ** 2;
    if (d2 > 1) {
        let d_ = Math.sqrt(d2);
        x = x / d_;
        y = y / d_;
        d2 = 1;
    }
    // First let's calculate the 3d position of the point on the hemisphere with
    // radius 1.
    // x**2 + y**2 + z**2 must = 1 => z = sqrt(1-x**2-y**2) = sqrt(1-d2)
    let z = Math.sqrt(1 - d2);
    // Now lets scale the 3d vector 
    x = x * d;
    y = y * d;
    z = z * d;
    return { x, y, z };
}
//# sourceMappingURL=projection-to-azimuth-altitude.js.map