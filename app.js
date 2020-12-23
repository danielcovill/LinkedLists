const LinkedList = require('./LinkedList.js');

let testList = new LinkedList();
let result;

testList.push(1);
report('Check pushing a single item into the list works',
    () => { return testList.toString() === '1'; });

function report(testTitle, testFunc) {
    if(!testFunc()) {
        debugger;
    }
    console.log(`${testFunc() ? 'PASS' : 'FAIL'} | ${testTitle}`);
} 