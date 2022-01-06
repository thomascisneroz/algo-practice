const canConstruct = (target, wordBank, memo={}) => {
    // Write function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
    // The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.
    // You may reuse elements of `wordBank` array.
    if(target in memo) return memo[target]
    // console.log(memo)
    if(target === '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            // console.log(suffix);
            if(canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true
            }
        }
    }
    memo[target] = false;
    return false;
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee', 'eee', 'eeeeeeee','eeeeeeeeee']))