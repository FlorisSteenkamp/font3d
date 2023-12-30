interface Model {
    vertices: number[];
    vertexIndices: number[];
    vertexColors: number[];
    vertexNormals: number[];
    textureCoords: number[];
    wireframeVertices: number[];
    triangleCount: number;
}
declare const emptyModel: Model;
export { Model, emptyModel };
