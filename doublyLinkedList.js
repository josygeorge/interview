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
document.write("DOUBLY LINKED LIST <br>");
let dLinkedList = new DoublyLinkedList(6);
document.write("****** Insert at End:<br>");
dLinkedList.insertAtEnd(7);
dLinkedList.insertAtEnd(8);
dLinkedList.insertAtEnd(9);

document.write("****** Insert at Front:<br>");
dLinkedList.insertAtFront(22);
dLinkedList.insertAtFront(33);
dLinkedList.insertAtFront(44);
dLinkedList.printList();