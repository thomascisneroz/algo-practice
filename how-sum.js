const howSum = (targetSum, numbers, memo={}) => {
    //write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
    //the function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
    //If there are multiple combinations possible, you may return any single one.
    if(targetSum === 0 ) return [];
    if(targetSum < 0 ) return null;
    if(targetSum in memo) return memo[targetSum];

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainResult = howSum(remainder, numbers, memo);
        if ( remainResult !== null) {
            memo[targetSum] = [... remainResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

// m = targetSum
// n = numbers.length
// 
// Brute Force
// time: O(n^m * m)
// space: O(m)
// 
// Memoized
// time: O(n*m^2)
// 
// space: O(m^2)

console.log(howSum(7, [5,3,4,7])) // [4,3]
console.log(howSum(7, [5,3,4,7])); // [4,3]
console.log(howSum(7, [2,4])); // null
console.log(howSum(8, [2,3, 5])); // [2,2,2,2]
console.log(howSum(300, [7,14])); // null