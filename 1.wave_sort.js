function rearrange(A) {
  for (let i = 0; i < A.length - 1; i++) {
    // for even positioned items
    if (i % 2 === 0 && A[i] > A[i + 1]) {
      [A[i], A[i + 1]] = [A[i + 1], A[i]];
    }

    // for odd positioned items
    if (i % 2 === 1 && A[i] < A[i + 1]) {
      [A[i], A[i + 1]] = [A[i + 1], A[i]];
    }
  }
  return A;
}

console.log(rearrange([4, 1, 3, 2, 5])); // Output: true
// console.log(rearrange([1, 2, 3, 4, 5])); // Output: false
// console.log(rearrange([0, 4, 22, 4, 14, 4, 2])); // Output: true
// console.log(rearrange([0, 1, 2, 4, 1, 1, 1])); // Output: false

function isWaveSortedMine(A) {
  console.log('A AT THIS POINT', A);
  const temp = [...A];
  for (let i = 0; i < A.length - 1; i++) {
    // for even positioned items
    if (i % 2 === 0 && A[i] > A[i + 1]) {
      [A[i], A[i + 1]] = [A[i + 1], A[i]];
    }

    // for odd positioned items
    if (i % 2 === 1 && A[i] < A[i + 1]) {
      [A[i], A[i + 1]] = [A[i + 1], A[i]];
    }
  }
  console.log('A', A);
  console.log('temp', temp);
  return A === temp ? 'false' : 'true';
}

console.log(isWaveSortedMine([4, 1, 3, 2, 5])); // Output: true
// console.log(isWaveSortedMine([1, 2, 3, 4, 5])); // Output: false
// console.log(isWaveSortedMine([0, 4, 22, 4, 14, 4, 2])); // Output: true
// console.log(isWaveSortedMine([0, 1, 2, 4, 1, 1, 1])); // Output: false

function isWaveSorted(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (
      (i % 2 === 0 && arr[i] >= arr[i - 1]) ||
      (i % 2 !== 0 && arr[i] <= arr[i - 1])
    ) {
      return false;
    }
  }
  return true;
}

// console.log(isWaveSorted([4, 1, 3, 2, 5])); // Output: true
// console.log(isWaveSorted([1, 2, 3, 4, 5])); // Output: false
// console.log(isWaveSorted([0, 4, 22, 4, 14, 4, 2])); // Output: true
// console.log(isWaveSorted([0, 1, 2, 4, 1, 1, 1])); // Output: false

/*
1. console.log(isWaveSorted([4, 1, 3, 2, 5])); // Output: true
2. console.log(isWaveSorted([1, 2, 3, 4, 5])); // Output: false
3. console.log(isWaveSorted([0, 4, 22, 4, 14, 4, 2])); // Output: true
4. console.log(isWaveSorted([0, 1, 2, 4, 1, 1, 1])); // Output: false
*/
