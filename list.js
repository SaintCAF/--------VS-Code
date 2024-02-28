class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Метод для вставки элемента в конец списка
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // Метод для поиска элемента по значению
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Метод для вставки элемента после заданного узла
    insertAfter(value, data) {
        const newNode = new Node(data);
        const targetNode = this.find(value);
        if (!targetNode) {
            return false; // Элемент, после которого нужно вставить, не найден
        }
        newNode.next = targetNode.next;
        targetNode.next = newNode;
        this.length++;
        return true;
    }

    // Метод для удаления элемента из списка
    remove(data) {
        if (!this.head) {
            return false; // Список пуст
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false; // Элемент не найден
    }

    // Метод для изменения значения узла
    update(oldData, newData) {
        const nodeToUpdate = this.find(oldData);
        if (!nodeToUpdate) {
            return false; // Узел для обновления не найден
        }
        nodeToUpdate.data = newData;
        return true;
    }

    // Метод для определения длины списка
    size() {
        return this.length;
    }
}

// test:

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.size()); // 4

console.log(list.find(3)); // Node { data: 3, next: Node { data: 4, next: null } }

list.insertAfter(2, 5);
console.log(list.size()); // 5

console.log(list.find(5)); // Node { data: 5, next: Node { data: 3, next: Node { data: 4, next: null } } }

list.remove(3);
console.log(list.size()); // 4

list.update(2, 6);
console.log(list.find(6)); // Node { data: 6, next: Node { data: 5, next: Node { data: 3, next: Node { data: 4, next: null } } } }
