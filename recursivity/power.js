/*
1. The base case is when n = 0, and x^0 = 1
2. If `n` is positive and even, recursively compute `y = x^n/2`, and then `x^n = y * y`
3. If `n` is positive and odd, recursively compute `x^n-1` so that the exponent is either 0 or positive, and then `x^n = x^n-1 * x`
4. If `n` is negative, recursively compute `x^-n`, so that the exponent becomes positive. Then, `x^n = 1 / x^-n` 
*/

var isEven = function (n) {
    return n % 2 === 0;
};

var isOdd = function (n) {
    return !isEven(n);
};

var power = function (x, n) {
    console.log("Computing " + x + " raised to power " + n + ".");
    // base case
    if (n === 0) {
        return 1;
    }
    // recursive case: n is negative 
    if (n < 0) {
        return 1 / power(x, -n);
    }
    // recursive case: n is odd
    if (isOdd(n)) {
        return power(x, n - 1) * x;
    }
    // recursive case: n is even
    if (isEven(n)) {
        var y = power(x, n / 2);
        return y * y;
    }
};

var displayPower = function (x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
displayPower(3, 1);
displayPower(3, 2);
displayPower(3, -1);
// displayPower(20, 2);
// displayPower(60, 3);
// displayPower(25364, 456);