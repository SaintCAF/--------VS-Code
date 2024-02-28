class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Метод для вставки нового элемента в дерево
    insert(value) {
        this.root = this._insertRec(this.root, value);
    }

    _insertRec(node, value) {
        if (!node) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this._insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertRec(node.right, value);
        }

        return node;
    }

    // Метод для поиска элемента в дереве
    search(value) {
        return this._searchRec(this.root, value);
    }

    _searchRec(node, value) {
        if (!node) return null;

        if (value === node.value) {
            return node;
        } else if (value < node.value) {
            return this._searchRec(node.left, value);
        } else {
            return this._searchRec(node.right, value);
        }
    }

    // Метод для определения высоты дерева
    height() {
        return this._heightRec(this.root);
    }

    _heightRec(node) {
        if (!node) return 0;

        const leftHeight = this._heightRec(node.left);
        const rightHeight = this._heightRec(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    print() {
        this._printRec(this.root, 0);
    }

    _printRec(node, level) {
        if (!node) return;

        this._printRec(node.right, level + 1);

        let result = "";
        for (let i = 0; i < level; i++) {
            result += "    ";
        }
        result += node.value;
        console.log(result);

        this._printRec(node.left, level + 1);
    }

}


// test shit

// Создаем дерево
const tree = new Tree();

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
