var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function (data) {
        var newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.find = function (data) {
        var current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.insertAfter = function (value, data) {
        var newNode = new ListNode(data);
        var targetNode = this.find(value);
        if (!targetNode) {
            return false;
        }
        newNode.next = targetNode.next;
        targetNode.next = newNode;
        this.length++;
        return true;
    };
    LinkedList.prototype.remove = function (data) {
        if (!this.head) {
            return false;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        var current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    };
    LinkedList.prototype.update = function (oldData, newData) {
        var nodeToUpdate = this.find(oldData);
        if (!nodeToUpdate) {
            return false;
        }
        nodeToUpdate.data = newData;
        return true;
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    return LinkedList;
}());
function printListInOneLine(linkedList) {
    var result = "";
    var current = linkedList.head;
    while (current) {
        result += current.data + " ";
        current = current.next;
    }
    console.log(result.trim());
}
// Тесты
var list = new LinkedList();
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
