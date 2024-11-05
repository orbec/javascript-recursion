const merge = (arr1, arr2) => {
  const result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return [...result, ...arr1, ...arr2];
};

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
