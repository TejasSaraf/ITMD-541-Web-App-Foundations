function sortNumbers(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  console.log(`Original Array: [${arr}]`);
  console.log(`Sorted Array: [${sortedArray}]`);
}

// Test cases
sortNumbers([10, 5, 8, 2, 9]);
sortNumbers([20, 15, 30, 25, 10]);
sortNumbers([7, 14, 3, 2, 9]);
