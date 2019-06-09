
var there = prompt("Are we there yet?");
var counter = 0;
while (there.indexOf("yes") === -1){
  var there = prompt("Are we there now?");
  counter ++;
  if (counter === 10) {
    console.log("Long journey...")
    var there = prompt("Its sooo long are we there now?!!?!")
  }
  else if (counter === 20) {
    console.log("Come on hurry up put your foot on it....")
    var there = prompt("I need to pee are we there yet?")
  }
}

alert("Yeah!!    you said " + there)
