'use strict';

exports.timesTable = function(){
  let result = "";
  for(let i=1; i<=9; i++){
    for(let j=2; j<9; j=j+2){
      result += `${j}*${i}=${i*j}\t`;
    }
    result += "\n";
  }
  result += "\n";
  for(let i=1; i<=9; i++){
    for(let j=3; j<=9; j=j+2){
      result += `${j}*${i}=${i*j}\t`;
    }
    result += "\n";
  }
  return result;
};