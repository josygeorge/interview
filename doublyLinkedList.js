function createNode(value) {
    return {
        value: value,
        next: null,
        previous: null,
    };
}

// main class
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null,
        };
        this.tail = this.head;
        this.size = 0;
    }
    // inserting at the end of the list
    insertAtEnd(value) {
        this.size++;
        let newNode = createNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.printList();
    }
    printList() {
        document.write("The Elements in the Doubly Linked List are :</br> ");
        let current = this.head;
        while (current) {
            document.write(
                `${current.value}<br>`
            );
            current = current.next;
        }
    }
}

let dLinkedList = new DoublyLinkedList(11);
dLinkedList.insertAtEnd(7);
dLinkedList.insertAtEnd(8);
dLinkedList.insertAtEnd(9);
dLinkedList.printList();