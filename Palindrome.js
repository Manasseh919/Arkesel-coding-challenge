function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  let s = "level";
  console.log(isPalindrome(s)); // Output: true
  
  s = "hello";
  console.log(isPalindrome(s)); // Output: false


// //   this code defines a function called isPalindrome. The function only accepts one parameter, s, 
// //   which is the string to be checked for palindromes.

// // Within the function, two variables, left and right, are set to 0 
// and the length of the string minus one, respectively. These variables are
//  used as pointers to compare characters from the string's opposite ends.

// // To compare the characters at the two pointers, a while loop is used. 
// The loop continues indefinitely as long as left is less than right,
//  indicating that there are still characters to compare. 
//  If the left and right characters don't match, the function returns false, indicating that the string isn't a palindrome.
  