var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    // Метод для вставки нового элемента в дерево
    Tree.prototype.insert = function (value) {
        this.root = this._insertRec(this.root, value);
    };
    Tree.prototype._insertRec = function (node, value) {
        if (!node) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this._insertRec(node.left, value);
        }
        else if (value > node.value) {
            node.right = this._insertRec(node.right, value);
        }
        return node;
    };
    // Метод для поиска элемента в дереве
    Tree.prototype.search = function (value) {
        return this._searchRec(this.root, value);
    };
    Tree.prototype._searchRec = function (node, value) {
        if (!node)
            return null;
        if (value === node.value) {
            return node;
        }
        else if (value < node.value) {
            return this._searchRec(node.left, value);
        }
        else {
            return this._searchRec(node.right, value);
        }
    };
    // Метод для определения высоты дерева
    Tree.prototype.height = function () {
        return this._heightRec(this.root);
    };
    Tree.prototype._heightRec = function (node) {
        if (!node)
            return 0;
        var leftHeight = this._heightRec(node.left);
        var rightHeight = this._heightRec(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    Tree.prototype.print = function () {
        this._printRec(this.root, 0);
    };
    Tree.prototype._printRec = function (node, level) {
        if (!node)
            return;
        this._printRec(node.right, level + 1);
        var result = "";
        for (var i = 0; i < level; i++) {
            result += "    ";
        }
        result += node.value;
        console.log(result);
        this._printRec(node.left, level + 1);
    };
    return Tree;
}());
// Тесты
// Создаем дерево
var tree = new Tree();
// Вставляем элементы в дерево
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);
// Примеры поиска элементов
console.log(tree.search(10)); // Сам смотри на нарисованное дерево
console.log(tree.search(12)); // Сам смотри на нарисованное дерево
console.log(tree.search(8)); // null
// Определение высоты дерева
console.log(tree.height()); // 3 
tree.print();
