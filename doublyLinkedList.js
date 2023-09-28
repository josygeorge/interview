function createNode(value) {
    return {
        value: value,
        next: null,
        previous: null,
    };
}

// main class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // inserting
    insert(value) {
        this.size++;
        let newNode = createNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            return newNode;
        }
        this.head = this.tail = newNode;
        return newNode;
    }
    print() {
        document.write("The Elements in the Doubly Linked List are :</br> ");
        let current = this.head;
        while (current) {
            document.write(
                `${current.previous?.value}   ${current.value}   ${current.next?.value}`
            );
            current = current.next;
        }
    }
}

let dLinkedList = new DoublyLinkedList();
dLinkedList.insert(7);
dLinkedList.insert(8);
dLinkedList.insert(9);
dLinkedList.print();