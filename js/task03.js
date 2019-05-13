// Create a to do list from a prompt
var list = [];

// function toDoList(){
//     var tasks =prompt("What is your task?");
//     // console.log(tasks);
//     if(tasks.length >0){
//       document.getElementById("tasks").innerHTML +=("<li>"+tasks+"</li>");
//       list.push(tasks);
//       console.log(list);
//     } else{
//       console.log("Add To Do List");
//     }
//   }


/////////////// ------------- Simple way

  function toDoList(){
      var tasks =prompt("What is your task?");
      document.getElementById("tasks").innerHTML +="<li>"+tasks+"</li>";
  }
