class Edge {
    constructor(public source: number, public destination: number, public weight: number) {}
}

class Graph {
    constructor(public numVertices: number, public edges: Edge[]) {}

    // Реализация алгоритма Беллмана-Форда
    bellmanFord(startVertex: number): number[] {
        const distances: number[] = [];
for (let i = 0; i < this.numVertices; i++) {
    distances.push(Number.MAX_VALUE);
}

        distances[startVertex] = 0;

        // Проходимся по всем рёбрам |V| - 1 раз
        for (let i = 0; i < this.numVertices - 1; i++) {
            for (const edge of this.edges) {
                if (distances[edge.source] !== Number.MAX_VALUE && distances[edge.source] + edge.weight < distances[edge.destination]) {
                    distances[edge.destination] = distances[edge.source] + edge.weight;
                }
            }
        }

        // Проверка на наличие отрицательных циклов
        for (const edge of this.edges) {
            if (distances[edge.source] !== Number.MAX_VALUE && distances[edge.source] + edge.weight < distances[edge.destination]) {
                throw new Error('Граф содержит отрицательный цикл');
            }
        }

        return distances;
    }
}

// Пример использования
const numVertices = 5;
const edges = [
    new Edge(0, 1, -1),
    new Edge(0, 2, 4),
    new Edge(1, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 4, 2),
    new Edge(3, 2, 5),
    new Edge(3, 1, 1),
    new Edge(4, 3, -3)
];

const graph = new Graph(numVertices, edges);
const startVertex = 0;
const distances = graph.bellmanFord(startVertex);
console.log('Минимальные расстояния от вершины', startVertex, 'до всех остальных вершин:', distances);
