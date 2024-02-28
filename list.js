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

    // Метод для вставки элемента после заданного элемента
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

    // Метод для изменения значения элемента
    update(oldData, newData) {
        const nodeToUpdate = this.find(oldData);
        if (!nodeToUpdate) {
            return false; // Элемент для обновления не найден
        }
        nodeToUpdate.data = newData;
        return true;
    }

    // Метод для определения длины списка
    size() {
        return this.length;
    }
}

function printListInOneLine(linkedList) {
    let result = "";
    let current = linkedList.head;
    while (current) {
        result += current.data + " ";
        current = current.next;
    }
    console.log(result.trim()); // Вывод списка в одну строку без начальных и конечных пробелов
}

// test:

const list = new LinkedList();
list.append(3);
list.append(2);
list.append(8);
list.append(4);
list.append(1);
list.append(6);

console.log(list.size()); // 6

console.log(list.find(6)); // Node { data: 6, next: null }

list.insertAfter(2, 5);
console.log(list.size()); // 7

printListInOneLine(list);

console.log(list.find(5)); // Node { data: 5, next: Node { data: 8, next: Node { data: 4, next: [Node] } } }

list.remove(3);
console.log(list.size()); // 6 

printListInOneLine(list);

list.update(2, 228);
console.log(list.find(6)); // Node { data: 6, next: null }

printListInOneLine(list);