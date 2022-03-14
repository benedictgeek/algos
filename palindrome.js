//checks if a string is palindrome
//spaces are ignored

let ispalindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");
  let reversed = str.split("").reverse().join("");

  return str === reversed;
};

console.log(ispalindrome("Do geese see God"));
