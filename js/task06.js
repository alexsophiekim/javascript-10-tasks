// Create an script that lists everyone in the class from a prompt, 1 prompt per name

var numberOfStudent = parseInt(prompt("How many students are there in the class?"));
console.log(numberOfStudent);

var list = document.getElementById('studentsName');

for (var i = 0; i < numberOfStudent; i++) {
  var name = prompt("What is student #"+(i+1)+" name");
  list.innerHTML += '<li>'+name+'</li>';
}
