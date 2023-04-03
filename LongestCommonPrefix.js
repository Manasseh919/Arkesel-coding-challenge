var longestCommonPrefix = function (strs) {
  //prefix = ''
  let prefix = "";

  if (strs.length === 0) return prefix;
  //loop through characters(char,nidex)
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
  //loop thorugh strs(str)
  //if str[index] !=char
  //return prefix
  //prefix = prefix + char
  //return prefix
};


// The function begins by creating an empty string variable called prefix to hold the common prefix. 
// The function simply returns the empty prefix if the input array strs is empty.

// The function then loops through each character in the strs array's first string.
// It then loops through all the other strings in the array for each character, 
// checking if the character at the current index is the same in each string. 
// If the character is not the same, it indicates that the common prefix has come to an end, 
// and the function returns the prefix as it is now. If the character appears in all strings, it is added to the prefix variable.
// Finally, the function returns the prefix variable, which contains the string 
// with the longest common prefix among all of the strings in the input array.

// the function compares each character of the first string to the corresponding
//  characters of all the other strings to find and return the longest common prefix.