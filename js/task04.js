// Find the biggest element in an array of numbers
// 4a. Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again.

// var numberList = [1,20,567,30,68,204];
// var inputN = parseInt(prompt("Input the number"));
//
// console.log(inputN);
//
// for(var i = 0; i < numberList.length; i++){
//     if (inputN > 567) {
//       console.log("Your number is the greater than 567");
//     } else if (inputN < 567){
//       console.log("Your number is not the greatest number");
//     }
// }


/////////// --- class answer ---
var numberList = [1,20,567,30,68,204];
var largestN = 0;

for(var i = 0; i < numberList.length; i++){
    if (numberList[i] > largestN) {
      largestN = numberList[i]
    }
}
console.log(largestN);

function checkNewNumber (){
  var newNumber = parseInt(prompt("Please input a new number"));
  numberList.push(newNumber);
  if (newNumber > largestN) {
    largestN = newNumber;
  }
  console.log(largestN)
}
