// Create an script that calculates the average number from an array
// 7a. Numbers then can be added from prompt and new average given

// var number =[23,24,55,83,12];
//
// for (var i = 0; i < number.length; i++) {
//   number[i]
// }
//
//
// fuction average(){
//   var newNumber = parseInt(prompt("Please input a new number"));
//   number.push(newNumber);
//
// }
//

///////////------- class answer:::

var number =[23,24,55,83,12];
var total = 0;

for (var i = 0; i < number.length; i++) {
  total=total+number[i];
}
  console.log(total);

var average = total / number.length;
  console.log(average);

function newAverage() {
  var newNumber = parseInt(prompt("Please input a new number"));
  number.push(newNumber);
  total = total + newNumber;
  var newAverage = total / number.length;
  console.log(newAverage);
}
