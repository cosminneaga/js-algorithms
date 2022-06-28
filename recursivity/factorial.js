var factorial = function (n) {
    var result = 1;

    for (var i = n; i > 0; i--) {
        result *= i;
    }

    return result;
};

console.log("The value of 5! should be " + 5 * 4 * 3 * 2 * 1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));

var calls = 0;
var factorial = function (n) {
    // base case: 
    if (n === 0) {
        return 1
    }

    // recursive case:
    calls += 1;
    return factorial(n - 1) * n
};

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");

console.log('Factorial of', 2, 'is', factorial(2), 'having', calls, 'calls');
console.log('Factorial of', 5, 'is', factorial(5), 'having', calls, 'calls');
console.log('Factorial of', 10, 'is', factorial(10), 'having', calls, 'calls');
