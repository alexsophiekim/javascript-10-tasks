// Create a script which calculates how old someone is based on their birth year
// 2.a Redo task #1 but based on birth year

var birthYear = parseInt(prompt("What is your birth year?"));
var nowAge = 2019-birthYear;
  console.log(nowAge);

  if(nowAge >= 18){
    console.log("You can buy alcohol");
  } else {
    console.log("You can't buy alcohol");
  }
