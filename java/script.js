
var firstName = prompt("Whats your first name?");
if (firstName == "MichAel") {
  console.log("For fuck sake stop being akward with your silly camelCase name..")
}

var lastName = prompt("Your last name is??");

var usrAge = prompt("Whats your age?");

var usrName = firstName + lastName

alert("Nice to meet you, " + usrName +"And your " + usrAge +" Years old!");
console.log("The log has your name + age ... |"+ usrName + usrAge)

var daysAlive = usrAge * 365.5;
console.log("You have been alive for a wopping " + daysAlive + " days!")

var averageLife = 78 * 365.5;

var daysLeft = averageLife - daysAlive

console.log("That means if your lucky you have "+ daysLeft+ " days left to live.. have a nice day")

if (daysLeft < 0) {
  console.log(usrName + " You should be dead.. consider yourself lucky")
}
