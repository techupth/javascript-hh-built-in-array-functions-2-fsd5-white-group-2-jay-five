function isPalindrome(string) {
  // Start coding here
  let reverse = string.split("").reverse().join("")
  return reverse === string
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false