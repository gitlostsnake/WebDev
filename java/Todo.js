window.setTimeout(function() {
  var todos = ["Buy New Turtle"];
  var input = prompt("What would you like to do?");


  while(input !== "quit") {

    if(input === "list") {
      listTodos();
    } else if(input === "new") {
      newTodo();
    } else if(input === "delete") {
      delTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("Quiting the todo app")

function listTodos() {
  console.log("#####");
  todos.forEach(function(todo, i){
    console.log(i + ":" + todo);
  });
}

function newTodo() {
  var addTodo = prompt("Enter new todo");
  todos.push(addTodo);
}

function delTodo() {
  var index = prompt("Enter index to delete");
  var deleted = todos.splice(index, 1);
  console.log("Deleting " + deleted + " forever...")
}


}, 500);
