// Create a script that asks for x amount of people.
// And then asks for their ages and finds the oldest and youngest age. As well as the average age

var x = parseInt(prompt("How many people?"));
var oldest = 0;

for (var i = 0; i < x.length; i++) {
  var age = parseInt(prompt("How old are you?"));
  console.log(age);
  if (oldest<age) {
    oldest = age;
  }
}
console.log(age);
