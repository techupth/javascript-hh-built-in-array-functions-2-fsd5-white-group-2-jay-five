function isPalindrome(string) {
  // Start coding here

  const reverseStr = (string) => {
    let reversedStr = "";
    for (let letter of string) {
      reversedStr = letter + reversedStr;
    }
    return reversedStr;
  };

  if (string == reverseStr(string)) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
