//finds largest sum of any sub array of given length 

let solution = (array, subArrayLength) => {
  let sum = 0;
  //sum first subArray
  for (let index = 0; index < subArrayLength; index++) {
    sum = sum + array[index];
  }

  for (let index = subArrayLength; index < array.length; index++) {
    let newSum = sum - array[index - subArrayLength] + array[index];
    sum = Math.max(sum, newSum);
  }

  return sum;
};

console.log(solution([1,2,5,2,8,1,5], 4));
