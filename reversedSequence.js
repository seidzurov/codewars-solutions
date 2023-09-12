/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  if ( n <= 0 ){
    return [];                    // if n is less then 0, return an empty array
  };
  
  const result = [];              // array where we will store our integers from n to 1
  
  for(let i = n; i >= 1; i--) {
    result.push(i);               // simply iterating and pushing values to the array
  }
  return result;
};