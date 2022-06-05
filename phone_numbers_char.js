const getWordsFromNumber = (phoneNumber, wordList) => {
  const res = [];
  let numberBinding = {
    abc: 2,
    def: 3,
    ghi: 4,
    jkl: 5,
    mno: 6,
    pqrs: 7,
    tuv: 8,
    wxyz: 9,
  };

  Object.entries(numberBinding).map(([key, value]) => {
    for (let index = 0; index < key.length; index++) {
      const char = key[index];
      numberBinding[char] = value;
    }
  });

  wordList.forEach((word) => {
    let numbersRep = "";
    for (let index = 0; index < word.length; index++) {
      const char = word[index];
      numbersRep = numbersRep + numberBinding[char];
    }

    if (phoneNumber.includes(numbersRep)) {
      res.push(word);
    }
  });

  return res;
};

console.log(getWordsFromNumber("36622777", ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"]));
