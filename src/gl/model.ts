
interface Model {
    vertices: number[];
    vertexIndices: number[];
    vertexColors: number[];
    vertexNormals: number[];
    textureCoords: number[];
    wireframeVertices: number[];
    triangleCount: number;
}


const emptyModel: Model = {
    vertices: [],
    vertexIndices: [],
    vertexColors: [],
    vertexNormals: [],
    textureCoords: [],
    wireframeVertices: [],
    triangleCount: 0
}


export { Model, emptyModel }
