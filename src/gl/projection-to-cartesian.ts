
/**
 * Transforms a point in 3d defined by its xy projection onto a half-sphere with
 * radius `distance` centered at the origin
 * @param p The 2d point representing the direction vector.
 * @param distance The distance of the light source to [0,0,0].
 */
function projectionToCartesian(p = [0,0], distance = 1) {
    let [x,y] = p;

    // Ensure point is within unit circle - the interface gave us a unit square.
    let d2 = x**2 + y**2;
    if (d2 > 1) {
        let d_ = Math.sqrt(d2);
        x = x / d_;
        y = y / d_;
        d2 = 1;
    }
    

    // First let's calculate the 3d position of the point on the hemisphere with
    // radius 1.

    // x**2 + y**2 + z**2 must = 1 => z = sqrt(1-x**2-y**2) = sqrt(1-d2)
    let z = Math.sqrt(1-d2);

    // Now lets scale the 3d vector 
    x = x * distance;
    y = y * distance;
    z = z * distance;

    return [x,y,z];
}


export { projectionToCartesian }
