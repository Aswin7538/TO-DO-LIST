function addtask(){
    let taskinput=document.getElementById("taskinput")
    let tasklist=document.getElementById("tasklist")
    
    if (taskinput.value==="") {
        alert("please enter task")
        return;
    }

    let li=document.createElement("li");
    li.appendChild(document.createTextNode(taskinput.value))

    let remove=document.createElement("span");
    remove.appendChild(document.createTextNode("x"))
    remove.className="remove";
    remove.onclick=function(){
        tasklist.removeChild(li);

    }

    li.appendChild(remove);
    tasklist.appendChild(li);
    taskinput.value="";
}