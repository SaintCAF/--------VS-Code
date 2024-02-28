class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Метод для вставки нового элемента в дерево
    insert(value: T): void {
        this.root = this._insertRec(this.root, value);
    }

    private _insertRec(node: TreeNode<T> | null, value: T): TreeNode<T> {
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
    search(value: T): TreeNode<T> | null {
        return this._searchRec(this.root, value);
    }

    private _searchRec(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
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
    height(): number {
        return this._heightRec(this.root);
    }

    private _heightRec(node: TreeNode<T> | null): number {
        if (!node) return 0;

        const leftHeight = this._heightRec(node.left);
        const rightHeight = this._heightRec(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    print(): void {
        this._printRec(this.root, 0);
    }

    private _printRec(node: TreeNode<T> | null, level: number): void {
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


// Тесты

// Создаем дерево
const tree = new Tree<number>();

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
