function maxSubarraySum(arr, k) {
    if (k > arr.length) {
      return null; // Edge case: If k is greater than the array length, there's no valid subarray.
    }
  
    let maxSum = 0;
    let currentSum = 0;
  
    // Calculate the sum of the first k elements to initialize maxSum.
    for (let i = 0; i < k; i++) {
      maxSum += arr[i];
    }
  
    currentSum = maxSum;
  
    // Slide the window through the array.
    for (let i = k; i < arr.length; i++) {
      // Subtract the element that was removed from the window and add the new element.
      currentSum = currentSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  const arr = [2, 1, 5, 1, 3, 2];
  const k = 3;
  debugger
  const result = maxSubarraySum(arr, k);
  console.log("Maximum sum of subarray of size", k, ":", result); 