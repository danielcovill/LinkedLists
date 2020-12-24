const LinkedList = require('./LinkedList');

let testList = new LinkedList();
let result;

testList.push(1);
report('Check pushing a single item into the list works',
    () => { return testList.toString() === '1'; });

result = testList.peek();
report('Check peek returns the right item of the right type when using a single element',
    () => { return result === 1;} );

testList.pop();
report('Check popping a single item from a list with one element works',
    () => { return testList.toString() === ''; });

for (let index = 0; index < 10; index++) {
    testList.push(index);
}
report('Check pushing multiple items into the list and toString work', 
    () => { return testList.toString() === '9, 8, 7, 6, 5, 4, 3, 2, 1, 0';} );

result = testList.pop();
report('Check popping leaves the list with multiple elements in a good state', 
    () => { return testList.toString() === '8, 7, 6, 5, 4, 3, 2, 1, 0';} );
report('Check popping returns the right item of the right type',
    () => { return result === 9; } );

result = testList.peek();
report('Check peek returns the right item of the right type',
    () => { return result === 8;} );

result = testList.removeFrom(5);
report('Check removing element by index leaves the list in a good state', 
    () => { return testList.toString() === '8, 7, 6, 5, 4, 2, 1, 0';} );
report('Check removing by index returns the right item of the right type',
    () => { return result === 3;} );

testList.insertAt(99, 4); 
report('Check insertAt leaves the list in a good state', 
    () => { return testList.toString() === '8, 7, 6, 5, 99, 4, 2, 1, 0';} );

let arr = ['alpha', 'bravo', 'charlie'];
testList.insertAt(arr, 0);
report('Check insertAt 0 leaves the list in a good state and that we can put arrays in', 
    () => { return testList.toString() === 'alpha,bravo,charlie, 8, 7, 6, 5, 99, 4, 2, 1, 0';} );

result = testList.removeElement(99);
report('Check removing a specific element leaves the list in a good state', 
    () => { return testList.toString() === 'alpha,bravo,charlie, 8, 7, 6, 5, 4, 2, 1, 0';} );
report('Check removing a specific element returns the right item of the right type',
    () => { return result === 99;} );

function report(testTitle, testFunc) {
    if(!testFunc()) {
        debugger;
    }
    console.log(`${testFunc() ? 'PASS' : 'FAIL'} | ${testTitle}`);
} 