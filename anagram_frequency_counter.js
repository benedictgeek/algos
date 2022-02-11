//O(N) || O(N+M)
let validAnagram = (string1, string2) => {
  if (string1.length != string2.length) {
    return false;
  }

  let counter = {};

  for (let index = 0; index < string1.length; index++) {
    const element = string1[index];
    counter[element] = ++counter[element] || 1;
  }

  for (let index = 0; index < string2.length; index++) {
    const element = string2[index];

    if (!counter[element]) {
      //if null or 0
      return false;
    } else {
      counter[element] = --counter[element];
    }
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
