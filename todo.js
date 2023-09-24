const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value=='')
    {
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        //creating an li element and storing it in variable li
        li.innerHTML=inputBox.value;
        //adding value to li
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        //cross icon
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();