function hasTargetSum(array, target) {
  // Write your algorithm here
  for( let x = 0; x < array.length; x++){
    for( let y = x+1; y < array.length; x++){
      if( array[x] + array[y] === target){
        return true;
      }
    }
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
  Runtime = O(n^2)
  space = O(n)
*/

/* 
  Add your pseudocode here
  search through all an array of elements 
    reach the current value and sum up with rest of the elements 
      if summed up value is equal to target 
        return true
    otherwise return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

let seenNumbers = {}
seenNumbers[2] = true
console.log(seenNumbers[2], 'trying')