const fib = (n, memo = {}) => {
    // Write a function `fib(n)` that takes in a number as an argument.
    // The function should return the n-th number of the Fibonacci sequence.
    //  the 0th number of the sequence is 0.
    //  the 1st number of the sequence is 1.
    // To generate the next number of the sequence, we sum the previous two numbers.
    if(n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n -2, memo);
    return memo[n];
}

console.log(fib(50))
console.log(fib(9))
console.log(fib(3))
console.log(fib(18))