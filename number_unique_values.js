//count unique values for an ordered array

let countUniqueValues = (array) => {
  if (array.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] != array[j]) {
      i++;
      array[i] = array[j];
    }
  }

  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 2, 2, 2, 3, 4, 5, 4, 3]));
