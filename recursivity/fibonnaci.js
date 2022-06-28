var calls = 0;
var fibonnaci = function (n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        calls += 1;
        return fibonnaci(n - 1) + fibonnaci(n - 2)
    }
}

console.log('Fibonnaci sequence to', 2, 'is', fibonnaci(2), 'having', calls, 'calls');
console.log('Fibonnaci sequence to', 5, 'is', fibonnaci(5), 'having', calls, 'calls');
console.log('Fibonnaci sequence to', 10, 'is', fibonnaci(10), 'having', calls, 'calls');