const countConstruct = (target, wordBank, memo = {}) => {
    // Wrtie a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
    // The function should return the number of ways that the `target` can be constructed by concatenating elements of the `worfdBank` array.
    // You may reuse elements of `wordBank` as many times as needed.
    if(target in memo) return memo[target];
    if(target === '') return 1;

    let totalCount = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const numWays = countConstruct(suffix, wordBank, memo)
            totalCount += numWays;

        }
    }
    memo[target] = totalCount;
    return totalCount;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // -> 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('skateboard', ['ska', 'ate', 'rd', 't', 'boar']))
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))