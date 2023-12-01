  // Write your algorithm here
  function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }

/* 
  Add your pseudocode here
  Okay at first I tried to iterate using a for of loop with no success.
  I then realized, since the word is spelled the same
  forward and backwards, that if I could just reverse the string.
  I then would be able to see if the reverse string was equal to the input.

  assign a variable to the word reversed
    return the input with === and see if it is equl to the reversed word.

  
*/

/*
  This function takes an argument of a word which is a string with no spaces, special characters etc.
  First I declare a variable of reversedWord to the value of the word. I then add the split string method,
  which splits the characters in the string by the characters. The reversed method is then applied to reverse the order of the
  string. The join method then takes the split reversed characters and joins them back into a new string that is reversed.
  The last step is comparing the word that was inputted to the newly reversed word. Using the === sign results in a boolean result of 
  either true or false. Here we test words that are palindromes and words that are not to verify if this function provides the correct
  results.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("kayak"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("horse"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
