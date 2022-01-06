const bestSum = (targetSum, numbers, memo={}) => {
    // write a function `bestSum(targetSum, numbers)` that takes ina targetSum and an array of numbers as arguements
    // The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
    // If there is a tie for the shortest combination, you may return any one of the shortest.
    if( targetSum in memo) return memo[targetSum];
    if(targetSum === 0 ) return [];
    if(targetSum < 0 ) return null;
    

    let shortCombo = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo); 
        if(remainderCombo !== null){
           const combo = [...remainderCombo, num];
           // if the combo is short than the current shortest
           if(shortCombo === null || combo.length < shortCombo.length){
               shortCombo = combo;
           }
        }
    }

    memo[targetSum] = shortCombo;
    return shortCombo;
}

console.log(bestSum(8, [2,3,5])) // [5,3]
console.log(bestSum(7, [5,3,4,7])) // [4,3]
console.log(bestSum(7, [5,3,4,7])); // [4,3]
console.log(bestSum(7, [2,4])); // null
console.log(bestSum(8, [2,3, 5])); // [2,2,2,2]
console.log(bestSum(300, [7,14])); // null
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]