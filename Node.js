module.exports = class Node {
    #contents;
    #next;
    constructor(contents, next = null) {
        this.#next = next;
        this.#contents = contents;
    }
}