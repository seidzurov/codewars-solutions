/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

/* w Set constructor(it returns an array with unique values) */
const isIsogram = (str) => new Set(str.toLowerCase()).size == str.length;

/* w Set, but another variant */
const isIsogram = (str) => {
  const strToLower = str.toLowerCase();
  const set = new Set(); 

  for (let char of strToLower) { 
    if(set.has(char)) {   
      return false;
    }
    set.add(char);        
  }
  return true;   
}