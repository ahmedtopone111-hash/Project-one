let title = document.getElementById("title");
let taskInput = document.getElementById("taskInput");
let btn11 = document.getElementById("btn11");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count = 0;

btn11.addEventListener("click" , function() {
let taskText = taskInput.Value;
if(taskText === "") {
    message.textContent = "please enter a task";
    return;
}

let li =document.createElement("li");

let taskSpan=document.createElement("span")
taskSpan.textContent = taskText;
let noteInput = document.createElement("input");
noteInput.type="text";
noteInput.placeholder = "Add a note";

let deleteBtn =document.createElement("button")
deleteBtn.textContent="Delete";


li.appendChild(taskSpan);
li.appendChild(noteInput);
li.appendChild(deleteBtn);
taskList.appendChild(li);
message.textContent = "task added"
count++
taskCount.textContent = count;
taskInput.Value = "";

deleteBtn.addEventListener("click" , function() {
    li.remove();
    count--
    taskCount.textContent = count;
    message.textContent = " task deleted"
});
});