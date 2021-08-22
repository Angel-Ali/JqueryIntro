function createTodo(){
let text = $("#txtToDo").val(); //read the text/val from control

let syntax = `
<div class='todo-item'>
    <h5>${text}</h5>
    <button class='btn btn-sm btn-danger'>Remove</button> 
    </div>`; //remover button html
$("#todoContainer").append(syntax); //make what was entered pop up

//clear input field
$("#txtToDo").val('');//just turn text into an empty string
$("#txtToDo").focus();//set ous back to input field so you can type again
}

function deleteToDo(){
$(this).parent().remove();//remove button and text
}

function init(){
console.log("Todo app");
//load previous data 





//hook events

// plain js way
//document.getElementById("btnSave".click=save);

// jquery way
$("#btnSave").click(createTodo);//when id gets clicked...call function. that you made above


$("#todoContainer").on('click',".btn-danger", deleteToDo);//remover button too

//when they press a button...do this function
$("#txtTodo").keypress(function(args){
    if(args.key === "Enter"){//if they press enter...create a todo
        createTodo();
    }
}); 
}

window.onload = init;  
//means when it loads do...