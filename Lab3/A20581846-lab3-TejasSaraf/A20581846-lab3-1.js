function minMaxAverage(arr) {
  const totalNumbers = arr.length;
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  const average = arr.reduce((sum, val) => sum + val, 0) / totalNumbers;

  console.log(
    `Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(
      2
    )}`
  );
}

// Test cases
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([10, 15, 3, 7, 9]);
