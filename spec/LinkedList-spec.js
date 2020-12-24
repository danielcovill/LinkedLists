const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
    let testList;

    beforeEach(() => {
        testList = new LinkedList(); 
    });
    it('should push and peek a string successfully when empty', () => {
        testList.push('1');
        expect(testList.peek()).toBe('1');
        expect(testList.peek()).not.toBe(1);
    });
    it('should push and peek a number successfully when empty', () => {
        testList.push(1);
        expect(testList.peek()).toBe(1);
        expect(testList.peek()).not.toBe('1');
    });
    it('should push and pop the appropriate value when empty', () => {
        testList.push(1);
        const temp = testList.pop();
        expect(temp).toBe(1);
        expect(temp).not.toBe('1');
    });
    it('should push multiple items and pop them all back out in the right order', () => {
        let input = [1, '2', 3, '4', 'five'];
        input.forEach(element => {
            testList.push(element);
        });
        let output = [];
        for (let i = 0; i < input.length; i++) {
            output.push(testList.pop());
        }
        expect(output.reverse()).toEqual(input);
    });
    it('should toString() an empty string when empty', () => {
        expect(testList.toString()).toBe('');
    });
    it('should be able to toString() the appropriate values with just integers', () => {
        let input = [1, 2, 3, 4];
        input.forEach(element => {
            testList.push(element);
        });
        expect(testList.toString()).toBe('4, 3, 2, 1');
    });
    it('should be able to toString() the appropriate values with a comination of types', () => {
        let input = [1, '2', 3, '4', 'five', ['arr', 'brr']];
        input.forEach(element => {
            testList.push(element);
        });
        expect(testList.toString()).toBe('arr,brr, five, 4, 3, 2, 1');
    });
    it('should be able insertAt a specific point in the list', () => {
        let input = [1, 2, 3, 4];
        input.forEach(element => {
            testList.push(element);
        });
        testList.insertAt(['alpha', 'bravo', 'charlie'], 2)
        expect(testList.toString()).toBe('4, 3, alpha,bravo,charlie, 2, 1');
    });
    it('should be able removeFrom a specific point, return the right value, and leave the list in a good state', () => {
        let input = ['a', 'b', 'c', 'd'];
        input.forEach(element => {
            testList.push(element);
        });
        let result = testList.removeFrom(2);
        expect(result).toBe('b');
        expect(testList.toString()).toBe('d, c, a');
    });
    it('should be able remove a specific element, return the right value, and leave the list in a good state', () => {
        let input = ['a', 'b', 'c', 'd'];
        input.forEach(element => {
            testList.push(element);
        });
        let result = testList.removeElement('c');
        expect(result).toBe('c');
        expect(testList.toString()).toBe('d, b, a');
    });
    it('should remove the first instance of a specific element and leave the list in a good state, even if there are multiples', () => {
        let input = ['a', 'b', 'b', 'b'];
        input.forEach(element => {
            testList.push(element);
        });
        let result = testList.removeElement('b');
        expect(result).toBe('b');
        expect(testList.toString()).toBe('b, b, a');
    });
});