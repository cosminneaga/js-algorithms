var calls = 0;

var fibonnaci = function (n) {
    var twoBehind = 0;
    var oneBehind = 1;
    var result = 0;

    if (n === 0 || n === 1) {
        return n
    } else {
        for (var i = n - 1; i >= 1; i--) {
            result = twoBehind + oneBehind;
            twoBehind = oneBehind;
            oneBehind = result;

            calls += 1;
        }
        return result
    }

}

console.log('Fibonnaci sequence to', 2, 'is', fibonnaci(2), 'having', calls, 'calls');
console.log('Fibonnaci sequence to', 5, 'is', fibonnaci(5), 'having', calls, 'calls');
console.log('Fibonnaci sequence to', 10, 'is', fibonnaci(10), 'having', calls, 'calls');

