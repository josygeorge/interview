function createNode(value) {
    return {
        value: value,
        next: null,
        previous: null,
    };
}

// main class
class DoublyLinkedList {
    // inserting 
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // inserting at the end of the list
    insertAtFront(value) {
        this.size++;
        let newNode = createNode(value);
        // If the list is empty link assign
        // new node to both head and tail
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        // else add item to the head and unshift head
        else {
            if (this.head) {
                newNode.next = this.head;
                this.head = this.head.previous = newNode;
            }
        }
        this.printList();
    }
    // inserting at the end of the list
    insertAtEnd(value) {
        this.size++;
        let newNode = createNode(value);
        // If the list is empty link assign
        // new node to both head and tail
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        // else add item to the tail and shift tail
        else {
            if (this.tail) {
                newNode.previous = this.tail;
                this.tail = this.tail.next = newNode;
            }

        }
        this.printList();
    }
    // Insert node at a given index
    insertAtIndex(index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.size + 1) {
            console.log(`Invalid index. Current size is ${this.size}.`);
            return this;
        }

        // If index is 0, prepend
        if (index === 0) {
            this.insertAtFront(value);
            return this;
        }

        // If index is equal to this.length, append
        if (index === this.size) {
            this.insertAtEnd(value);
            return this;
        }

        // Reach the node at that index
        let newNode = new createNode(value);
        let previousNode = this.head;
        this.size++;
        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;

        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        this.printList();
    }

    // Remove a node
    removeAtIndex(index) {
        if (!Number.isInteger(index) || index < 0 || index > this.size) {
            console.log(`Invalid index. Current length is ${this.size}.`);
            return this;
        }

        // Remove head
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.size--;
            this.printList();
            return this;
        }

        // Remove tail
        if (index === this.size - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.size--;
            this.printList();
            return this;
        }

        // Remove node at an index
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.size--;
        this.printList();
        return this;
    }

    printList() {
        document.write(`Doubly Linked List is now :  size:${this.size}</br> `);
        let current = this.head;
        while (current) {
            document.write(
                `${current.value}<br>`
            );
            current = current.next;
        }
    }


}
document.write("DOUBLY LINKED LIST <br>");
let dLinkedList = new DoublyLinkedList();
dLinkedList.insertAtFront(22);
document.write("****** Insert at End; (7, 8, 9):<br>");
dLinkedList.insertAtEnd(7);
dLinkedList.insertAtEnd(8);
dLinkedList.insertAtEnd(9);

document.write("****** Insert at Front; (22, 33, 44):<br>");
dLinkedList.insertAtFront(22);
dLinkedList.insertAtFront(33);
dLinkedList.insertAtFront(44);
document.write("****** Remove at an index; eg.(2nd):<br>");
dLinkedList.removeAtIndex(2);
document.write("****** Insert at an index; eg.(3rd, 77):<br>");
dLinkedList.insertAtIndex(3, 77);
document.write("****** Insert at last index; eg.(7th, 69):<br>");
dLinkedList.insertAtIndex(7, 69);
document.write("****** Insert at first index; eg.(0th, 99):<br>");
dLinkedList.insertAtIndex(0, 99);
