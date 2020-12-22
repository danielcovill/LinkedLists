const Node = require('./Node.js');
class LinkedList { 
    #head;
    #size;

    constructor() 
    { 
        this.#head = null; 
    } 
  
    // Adds an element to the head of the linked list and returns nothing
    push(element) {
        let newNode = new Node(element);
        if(this.#size !== 0) {
            newNode.next = this.#head;
        }
        this.#head = newNode;
    }

    // Removes and returns the element at the head of the linked list
    pop() {
        let result = this.#head.contents;
        this.#head = this.#head.next;
        return result;
    }

    // Returns the element at the head of the linked list without altering the list
    peek() {
        return this.#head.contents;
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
    }

    // Removes the element at the point in the linked list defined by the zero 
    // indexed location parameter
    removeFrom(location) {
        if(location === 0)
        {
            return this.pop();
        }

        let currentNode = this.#head;
        for (let i = 1; i < location; i++) {
            currentNode = currentNode.next;
        }
        return this.removeAndReturnNext(currentNode);
    }

    // Removes and returns the first element that matches the element parameter
    // If no element is found, throws exception
    removeElement(element) {
        let currentNode = this.#head;
        if(currentNode.contents === element) {
            return this.pop();
        }

        while(currentNode.next.contents !== null) {
            if(currentNode.next.contents === element) {
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
} 
module.exports = LinkedList;