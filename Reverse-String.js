/*
*Author: Saul Garza\
*Description:Simple code that takes a string\
*and returns the reverse of that string.\
*/

function reverseString(str){
  var new_string= "";
  for(var i= str.length-1; i>= 0; i){//iterates through string from last letter to first
    new_string+= str[i]
  }
  return new_string;\
}

//test code
reverseString("hello world!");
reverseString("Saul Garza");
reverseString("Today you are you! That is truer than true! There is no one alive who is you-er than you!");
