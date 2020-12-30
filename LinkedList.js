const Node = require('./Node');
class LinkedList { 
    #head;
    #length;

    constructor() 
    { 
        this.#head = null; 
        this.#length = 0;
    } 
  
    // Adds an element to the head of the linked list and returns nothing
    push(element) {
        let newNode = new Node(element);
        if(this.#length !== 0) {
            newNode.next = this.#head;
        }
        this.#length++;
        this.#head = newNode;
    }

    // Removes and returns the element at the head of the linked list
    pop() {
        if(this.#length === 0) {
            throw 'No elements in the LinkedList';
        } else {
            let result = this.#head.contents;
            this.#head = this.#head.next;
            this.#length--;
            return result;
        }
    }

    // Returns the element at the head of the linked list without altering the list
    peek() {
        if(this.#length === 0) {
            throw 'No elements in the LinkedList';
        } else {
            return this.#head.contents;
        }
    }

    // Adds an element to the point in the linked list defined by the zero 
    // indexed location parameter and returns nothing
    insertAt(element, location) {
        if(location === 0)
        {
            return this.push(element);
        }

        let currentNode = this.#head;
        for (let i = 1; i < location; i++) {
            currentNode = currentNode.next;
        }
        let newNode = new Node(element);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.#length++;
    }

    // Removes the element at the point in the linked list defined by the zero 
    // indexed location parameter
    removeFrom(location) {
        if(location === 0 && this.#length > 0)
        {
            return this.pop();
        }

        if(this.#length > location) {
            let currentNode = this.#head;
            for (let i = 1; i < location; i++) {
                currentNode = currentNode.next;
            }
            this.#length--;
            return this.removeAndReturnNext(currentNode);
        } else {
            throw 'Location out of range';
        }
    }

    // Removes and returns the first element that matches the element parameter
    // If no element is found, throws exception
    removeElement(element) {
        if(this.#length === 0) {
            throw 'No elements in the LinkedList';
        }
        let currentNode = this.#head;

        if(currentNode.contents === element) {
            return this.pop();
        }

        while(currentNode.next.contents !== null) {
            if(currentNode.next.contents === element) {
                this.#length--;
                return this.removeAndReturnNext(currentNode);
            } else {
                currentNode = currentNode.next;
            }
        }
        throw 'No matching element found';
    }

    toString() {
        if(this.#head === null) {
            return ''; 
        }

        let result = '';
        let currentNode = this.#head;
        do {
            result = result.concat(currentNode.contents.toString());
            if(currentNode.next !== null) {
                result = result.concat(', ');
            }
            currentNode = currentNode.next;
        } 
        while(currentNode !== null);

        return result;
    }

    removeAndReturnNext(node) {
        if(node == null) {
            throw 'Attempted to remove null or undefined node';
        }
        let result = node.next.contents;
        node.next = node.next.next;
        return result;
    }

    get length() {
        return this.#length;
    }
} 
module.exports = LinkedList;