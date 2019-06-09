
function isEven(x) {
  if(x % 2 === 0){
    return "True"
  }
  else {
    return "False"
  }
}

function isEvenBetter(x) {
  return x % 2 ===0;
  // This returns a boolean true or false cleaner than the first one..
}

function factorial(x) {
  var result = 1;
  for(var i = 1; i <= x; i ++){
    result = result * i;
  }
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
