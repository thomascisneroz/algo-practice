const canSum = (targetSum, numbers, memo={}) => {
    // write a funciton `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as args.
    // this funciton should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
    // you may use an element of the array as many times as needed.
    // you may assume that all input numbers are non-negative.
    // ex. canSum(7, [5,3,4,7]) -> true
    // ex. canSum(7, [2,4]) -> false
    if( targetSum === 0 ) return true; 
    if(targetSum < 0 ) return false;
    if(targetSum in memo) return memo[targetSum];
//  console.log(memo[targetSum]);

    for(let num of numbers){
        const remainder = targetSum - num;
       if(canSum(remainder, numbers, memo) === true){
           memo[targetSum] = true;
           return true;
       }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [2,3])); // true
console.log(canSum(7, [5,3,4,7])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(8, [2,3, 5])); // true
console.log(canSum(300, [7,14])); // false