var addbutton = document.getElementById("push");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength(){
    return input.value.length;
}

function createListElement(){
    ul.innerHTML += `
            <li>
                <div class="task">
                    <span id="taskname">
                        ${input.value}
                    </span>
                    <button class="delete">Done</button>      
                </div>
            
            </li>
        `;
    //var li = document.createElement("li");
    //li.appendChild(document.createTextNode(input.value));
    //ul.appendChild(li);
    input.value = "";
    deleteToDoListItem();
}


function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }       
    else {
        alert("Please Enter a Task");        
    }    
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();        
    } 
}


function expurge(){
    this.parentNode.remove();
}

function deleteToDoListItem(){
    var current_tasks = document.querySelectorAll(".delete");
    for(var i = 0; i < current_tasks.length; i++){
        if (current_tasks.length > 0){
            current_tasks[i].onclick = expurge;
        }
    }
}

deleteToDoListItem();
addbutton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);
