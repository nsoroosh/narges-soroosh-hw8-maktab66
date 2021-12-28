
var text = "going Ping, king sHrink dOing"
var myRe = /[a-zA-Z]{2,}ing/g;
var myArray = text.match(myRe);
console.log(myArray)