{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf830
{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fswiss\fcharset0 ArialMT;}
{\colortbl;\red255\green255\blue255;\red26\green26\blue26;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c13333\c13333\c13333;\cssrgb\c100000\c100000\c100000;}
\margl1440\margr1440\vieww28600\viewh15160\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*\
*Author: Saul Garza\
*Description:Simple code that takes a string\
*and returns the reverse of that string.\
*/\
\
function reverseString(str)\{\
  var new_string= "";\
  for(var i= str.length-1; i>= 0; i\'97)\{//iterates through string from last letter to first\
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
Today you are you! That is truer than true! There is no one alive who is you-er than you!
\f0\i0\fs24 \cf0 \cb1 \kerning1\expnd0\expndtw0 \'94);}