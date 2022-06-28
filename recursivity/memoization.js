/* -------------------------------------------------------------------------- */
/*                                  FACTORIAL                                 */
/* -------------------------------------------------------------------------- */

/*
#### NORMAL RECURSIVITY
factorial(2):
factorial(1) -> factorial(0) === 3 calls

factorial(5):
factorial(4) -> factorial(3) -> factorial(2) -> factorial(1) -> factorial(0) === 6 calls

factorial(10):
factorial(9) -> factorial(8) -> factorial(7) -> factorial(6) -> factorial(5) -> factorial(4) -> factorial(3) -> factorial(2) -> factorial(1) -> factorial(0) === 11 calls

#### AFTER MEMOIZATION:
factorial(2):
factorial(1) -> factorial(0) === 3 calls

factorial(5):
factorial(4) -> factorial(3) -> get value previously stored from factorial(2) === 3 calls

factorial(10):
factorial(9) -> factorial(8) -> factorial(7) -> factorial(6) -> get value previously stored from factorial(5) === 6 calls

PSEUDOCODE
1. If n = 0, return 1
2. Otherwise if nnn is in the memo, return the memo's value for nnn
3. Otherwise,
    1. Calculate (n - 1)! \times n(n−1)!×nleft parenthesis, n, minus, 1, right parenthesis, !, times, n
    2. Store result in the memo
    3. Return result
*/

console.log('####### FACTORIAL #######');
var calls = 0;
var memo = {};
var factorial = function (n) {

    if (n === 0) {
        return 1;
    } else if (memo.hasOwnProperty(n)) {
        return memo[n];
    } else {
        var result = factorial(n - 1) * n;
        calls += 1;
        memo[n] = result;
        return result;
    }

}

console.log('Factorial of', 2, 'is', factorial(2), 'having', calls, 'calls');
console.log('Factorial of', 5, 'is', factorial(5), 'having', calls, 'calls');
console.log('Factorial of', 10, 'is', factorial(10), 'having', calls, 'calls');



/* -------------------------------------------------------------------------- */
/*                                  FIBONNACI                                 */
/* -------------------------------------------------------------------------- */
/*
n = 5 computer makes 15 calls https://youtu.be/214lD7tWkz8

A call for `fibonnaci(30)` results in the computer calling `fibonnaci(2)` over a half a million times

PSEUDOCODE

1. If n is 0 or 1, return n
2. Otherwise, if n is in the memo, return the memo's value for n
3. Otherwise,
    1. Calculate `fibonnaci(n - 1) + fibonnaci(n - 2)`
    2. Store result in memo
    3. Return result
*/

console.log('####### FIBONNACI #######');
var calls = 0;
var memo = {}
const fibonnaci = function (n) {
    if (n === 0 || n === 1) {
        return n;
    } else if (memo.hasOwnProperty(n)) {
        return memo[n];
    } else {
        var result = fibonnaci(n - 1) + fibonnaci(n - 2);
        calls += 1;
        memo[n] = result;
        return result;
    }
}

console.log('Fibonnaci sequence to', 2, 'is', fibonnaci(2), 'having', calls, 'calls');
console.log('Fibonnaci sequence to', 5, 'is', fibonnaci(5), 'having', calls, 'calls');
console.log('Fibonnaci sequence to', 10, 'is', fibonnaci(10), 'having', calls, 'calls');