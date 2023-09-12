/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/* more elegant, with f-expression */
const reverseWords = (str) => str.split('').reverse().join('').split(' ').reverse().join(' ');


/* more readable, with f-declaration */
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => reverseString(word));
  return reversedWords.join(' ');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}