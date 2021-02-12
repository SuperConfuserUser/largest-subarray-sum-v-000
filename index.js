// function largestSubarraySum(array) {
//   let max = 0;
//   let currentSum = 0;
  
//   array.forEach(n => {
//     currentSum += n;
//     if (max < currentSum) max = currentSum;
//     if (currentSum < 0) currentSum = 0;
//   })
  
//   return max;
// }

function largestSubarraySum(array) {
  let maxSum = 0;
  let currSum = 0;
  
  array.forEach(n => {
    currSum += n;
    if (currSum > maxSum) maxSum = currSum;
    if (currSum < 0) currSum = 0;
  })
  
  return maxSum;
}