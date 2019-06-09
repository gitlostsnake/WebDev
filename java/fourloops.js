console.log("Printing all numbers between -10 and 20")

for(var i = -10; i < 20; i++){
  console.log(i);
}

console.log("Printing all even numbers 10 - 40")

for(var i = 10; i <= 40; i++){
  console.log(i);
}

console.log("Printing all odds 300 - 333")

for(var i = 300; i <= 333; i++){
  if(i % 2 !==0) {
    console.log(i);
  }
}

console.log("Printing all numbers divisible 5 + 3")

for(var i = 5; i <=50; i++){
  if(i % 5 === 0 && i % 3 === 0){
    console.log(i);
  }
}
