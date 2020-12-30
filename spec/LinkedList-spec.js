const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
    let testList;

    beforeEach(() => {
        testList = new LinkedList(); 
    });
    it('should push and peek a string successfully when starting empty', () => {
        testList.push('1');
        expect(testList.peek()).toBe('1');
        expect(testList.peek()).not.toBe(1);
    });
    it('should push and peek a number successfully when starting empty', () => {
        testList.push(1);
        expect(testList.peek()).toBe(1);
        expect(testList.peek()).not.toBe('1');
    });
    it('should throw exception when pop attempted while empty', () => {
        expect(() => testList.pop()).toThrow('No elements in the LinkedList');
    });
    it('should throw exception when peek attempted while empty', () => {
        expect(() => testList.pop()).toThrow('No elements in the LinkedList');
    });
    it('should push and pop the appropriate value when starting empty', () => {
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
    it('should return the proper size when empty', () => {
        expect(testList.length).toBe(0);
    });
    it('should return the proper size when multiple elements are pushed', () => {
        let input = ['a', 'b', 'b', 'b'];
        input.forEach(element => {
            testList.push(element);
        });
        expect(testList.length).toBe(4);
    });
    it('should return the proper size when multiple elements are inserted and pushed', () => {
        let input = ['a', 'b', 'b', 'b'];
        input.forEach(element => {
            testList.push(element);
        });
        testList.insertAt('blah', 3);
        testList.insertAt('zip', 2);
        testList.insertAt('zoom', 3);
        expect(testList.length).toBe(7);
    });
    it('should return the proper size when elements are removed by index', () => {
        let input = ['a', 'b', 'b', 'b', 'c', 4, 3, 8];
        input.forEach(element => {
            testList.push(element);
        });
        testList.removeFrom(5);
        expect(testList.length).toBe(7);
    });
    it('should return the proper size when elements are removed by value', () => {
        let input = ['a', 'b', 'b', 'b', 'c', 4, 3, 8];
        input.forEach(element => {
            testList.push(element);
        });
        testList.removeElement('c');
        expect(testList.length).toBe(7);
    });
});