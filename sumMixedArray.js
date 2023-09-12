/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

const sumMix = (x) => x.map(n => parseInt(n)).reduce((acc, cur) => acc += cur);