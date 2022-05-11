var addbutton = document.getElementById("push");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var database = [];


function inputLength(){
    return input.value.length;
}

function createListElement(){
    ul.innerHTML = '';
    database.forEach((val,index) => {
        var content =  `<li>
                <div class="task">
                    <span id="taskname">
                        ${val}
                    </span>
                    <button class="delete" id=${index} onclick="removeElement(event)">Done</button>      
                </div>
            
            </li>
        `;
        ul.innerHTML += content;

    })
    
    //var li = document.createElement("li");
    //li.appendChild(document.createTextNode(input.value));
    //ul.appendChild(li);
    
}

function removeElement(event){
    var id = event.target.getAttribute('id');
    //remove array content
    database.splice(id, 1);
    event.target.parentNode.remove();
}

function updateDatabase(){
    var value = input.value;
    xx = database.toString();
    duplicate = xx.toLowerCase().includes(value.toLowerCase());
    if (database.length > 0 && duplicate === true){
        alert('No duplicate entry......');
        return;
    }
    else if(database.length > 0 && duplicate === false){
        database.push(value);
    }
    else{
        database.push(value);
    }
} 


function addListAfterClick(){
    if (inputLength() > 0){
        updateDatabase();
        createListElement();
        input.value = "";
        deleteToDoListItem();
    }       
    else {
        alert("Please Enter a Task");        
    }    
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13){
        updateDatabase();
        createListElement();
        input.value = "";
        deleteToDoListItem();       
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
