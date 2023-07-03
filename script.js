const inputt = document.getElementById("input");
const listcont  = document.getElementById("list-container");
function addTask(){
    if(inputt.value === ''){
        alert("You must assign yourself a task");
    }
    else {
        let li= document.createElement("li");
        li.innerHTML = inputt.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputt.value = "";
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);