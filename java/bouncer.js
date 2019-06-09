var underNum = -10

var maxNum = 20
console.log("Print all numbers between - 10 and 19....")
while (underNum < maxNum) {
  console.log(underNum);
  underNum ++;
}

var underEven = 10

console.log("all even numbers between 10 and 40")
while (underEven < 40) {
  if (underEven % 2 === 0){
    console.log(underEven);
  }
  underEven ++;
}

console.log("All odd numbers between 300 and 333")

var underOdd = 300

while (underOdd < 334) {
  if (underOdd % 2 === 0){
    underOdd++;
  }
  else {
    console.log(underOdd);
    underOdd++;
  }
}

console.log("All numbers divisible by 5 AND 3 between 5 and 50!")

var itsComplicated = 5

while (itsComplicated < 50) {
  if (itsComplicated % 5 === 0 && itsComplicated % 3 == 0) {
    console.log(itsComplicated);
    itsComplicated++;
  }
  else {
    itsComplicated++;
  }
}
