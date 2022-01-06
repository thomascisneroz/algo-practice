const gridTraveler = (r, c, memo = {}) => {
    // are the arguements in the memo 
    const key = r + ',' + c;
    if( key in memo) return memo[key];
    if( r === 1 && c === 1 ) return 1;
    if( r === 0 || c === 0 ) return 0;


    memo[key] = gridTraveler(r - 1, c, memo) + gridTraveler(r, c - 1, memo);
    return memo[key];
}


// memoization recipe 
// step 1 make it work.
// visualize the problem as a tree .
// implement the tree using recursion.
// test it.
// 
// step 2 make it efficient. 
// add a memo object into the mix
// add a base case to return memo values.
// store return values into the memo object before returning.

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(2, 4)) // 4
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(13, 16)) // 17383860
console.log(gridTraveler(20, 20)) // 35345263800