
*Author: Saul Garza\
*Description:Simple code that takes a string\
*and returns the reverse of that string.\
*/

function reverseString(str){
  var new_string= "";
  for(var i= str.length-1; i>= 0; i){//iterates through string from last letter to first\
    new_string+= str[i]\
  \}\
  return new_string;\
\}\
\
//test code\
reverseString("hello world!");\
reverseString(\'93Saul Garza\'94);\
reverseString(\'93
\f1\i\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Today you are you! That is truer than true! There is no one alive who is you-er than you!
\f0\i0\fs24 \cf0 \cb1 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 \'94);}
