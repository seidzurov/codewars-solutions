/* 
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/


/* solution with reduce */ 
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((acc, cur) => acc + cur) / classPoints.length;
}

/* solution with basic if-checks  */
function betterThanAverage(classPoints, myScores) {
  
  if(classPoints.length === 0) {                             // if array is empty, we return 0
    return 0;
  }
  
  const sum = classPoints.reduce((acc, cur) => acc + cur); // get the sum of all points
  const average = sum / classPoints.length;               // get the average
  
  if ( myScores > average) {                             // check if the average is greater than my scores
    return true;
  } else {
    return false;
  }
}