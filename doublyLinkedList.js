function createNode(value) {
    return {
        value: value,
        next: null,
        previous: null,
    };
}

// main class
class DoublyLinkedList {
    constructor(value = null) {
        this.head = {
            value: value,
            next: null,
            previous: null,
        };
        this.tail = this.head;
        this.size = 0;
    }
    // inserting at the end of the list
    insertAtFront(value) {
        this.size++;
        let newNode = createNode(value);
        if (this.head) {
            newNode.next = this.head;
            this.head = this.head.previous = newNode;
        }
        this.printList();
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

    // Insert node at a given index
    insert(index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        // If index is 0, prepend
        if (index === 0) {
            this.prepend(value);
            return this;
        }

        // If index is equal to this.length, append
        if (index === this.length) {
            this.append(value);
            return this;
        }

        // Reach the node at that index
        let newNode = new Node(value);
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;

        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        this.length++;
        this.printList();
    }

    // Remove a node
    removeAtIndex(index) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        // Remove head
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            this.printList();
            return this;
        }

        // Remove tail
        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
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

        this.length--;
        this.printList();
        return this;
    }

    printList() {
        document.write("Doubly Linked List is now :</br> ");
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
let dLinkedList = new DoublyLinkedList(6);
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
document.write("****** Final Doubly Linked List ****** ");
dLinkedList.printList();