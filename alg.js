var Edge = /** @class */ (function () {
    function Edge(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
    return Edge;
}());
var Graph = /** @class */ (function () {
    function Graph(numVertices, edges) {
        this.numVertices = numVertices;
        this.edges = edges;
    }
    // Реализация алгоритма Беллмана-Форда
    Graph.prototype.bellmanFord = function (startVertex) {
        var distances = [];
        for (var i = 0; i < this.numVertices; i++) {
            distances.push(Number.MAX_VALUE);
        }
        distances[startVertex] = 0;
        // Проходимся по всем рёбрам |V| - 1 раз
        for (var i = 0; i < this.numVertices - 1; i++) {
            for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
                var edge = _a[_i];
                if (distances[edge.source] !== Number.MAX_VALUE && distances[edge.source] + edge.weight < distances[edge.destination]) {
                    distances[edge.destination] = distances[edge.source] + edge.weight;
                }
            }
        }
        // Проверка на наличие отрицательных циклов
        for (var _b = 0, _c = this.edges; _b < _c.length; _b++) {
            var edge = _c[_b];
            if (distances[edge.source] !== Number.MAX_VALUE && distances[edge.source] + edge.weight < distances[edge.destination]) {
                throw new Error('Граф содержит отрицательный цикл');
            }
        }
        return distances;
    };
    return Graph;
}());
// Пример использования
var numVertices = 5;
var edges = [
    new Edge(0, 1, -1),
    new Edge(0, 2, 4),
    new Edge(1, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 4, 2),
    new Edge(3, 2, 5),
    new Edge(3, 1, 1),
    new Edge(4, 3, -3)
];
var graph = new Graph(numVertices, edges);
var startVertex = 0;
var distances = graph.bellmanFord(startVertex);
console.log('Минимальные расстояния от вершины', startVertex, 'до всех остальных вершин:', distances);
