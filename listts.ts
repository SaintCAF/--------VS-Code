class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data: T): void {
        const newNode = new ListNode(data);
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

    find(data: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    insertAfter(value: T, data: T): boolean {
        const newNode = new ListNode(data);
        const targetNode = this.find(value);
        if (!targetNode) {
            return false;
        }
        newNode.next = targetNode.next;
        targetNode.next = newNode;
        this.length++;
        return true;
    }

    remove(data: T): boolean {
        if (!this.head) {
            return false;
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
        return false;
    }

    update(oldData: T, newData: T): boolean {
        const nodeToUpdate = this.find(oldData);
        if (!nodeToUpdate) {
            return false;
        }
        nodeToUpdate.data = newData;
        return true;
    }

    size(): number {
        return this.length;
    }
}

function printListInOneLine<T>(linkedList: LinkedList<T>): void {
    let result = "";
    let current = linkedList.head;
    while (current) {
        result += current.data + " ";
        current = current.next;
    }
    console.log(result.trim());
}

// Тесты

const list = new LinkedList<number>();
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
