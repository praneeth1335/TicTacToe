let inp=document.getElementById("inp");
let btnAdd=document.getElementById("btn");
let incomp_list=document.getElementById("list1");
let comp_list=document.getElementById("list2");
btnAdd.addEventListener("click",()=>{
    inp.focus()
    let text=inp.value;
    if(text){
        let myDiv=document.createElement("div");
        let edit=document.createElement("button")
        let inp_display=document.createElement("input")
        inp_display.type="text";
        inp_display.value=text;
        inp_display.classList.add("result-input")
        inp_display.readOnly=true;
        edit.type="button";
        edit.classList.add("buttonsGreen")
        edit.textContent="Edit";
        let Completed=document.createElement("button")
        Completed.type="button";
        Completed.classList.add("buttonsGreen")
        Completed.textContent="Completed?";
        let lis=document.createElement("li");
        lis.classList.add("liss")
        myDiv.classList.add("taskDiv")
        myDiv.appendChild(inp_display);
        myDiv.appendChild(edit)
        myDiv.appendChild(Completed)
        lis.appendChild(myDiv);
        incomp_list.appendChild(lis)
         incomp_list.style.display="block";
    comp_list.style.display="none"
        inp.value=""
        inp.placeholder="Enter Your Task"
    }else{
        inp.placeholder="Enter a task first"
    }
})


let drop1=document.getElementById("incom")
let drop2=document.getElementById("com")

drop1.addEventListener("click",()=>{
    incomp_list.style.display="block";
    comp_list.style.display="none"
})
drop2.addEventListener("click",()=>{
    incomp_list.style.display="none";
    comp_list.style.display="block"
})



incomp_list.addEventListener("click",(event)=>{
    if(event.target.tagName==="BUTTON" && event.target.textContent==="Completed?"){
        let listItem=event.target.parentElement.parentElement;
        incomp_list.removeChild(listItem);
        comp_list.appendChild(listItem);
        event.target.textContent="Incomplete?"
        event.target.classList.remove("buttonsGreen")
        event.target.classList.add("buttonsRed")

    }
})


comp_list.addEventListener("click",(event)=>{
    if(event.target.tagName==="BUTTON" && event.target.textContent==="Incomplete?"){
        let listItem=event.target.parentElement.parentElement;
        comp_list.removeChild(listItem);
        incomp_list.appendChild(listItem);
        event.target.textContent="Completed?"
        event.target.classList.add("buttonsGreen")
        event.target.classList.remove("buttonsRed")
   
    }
})


document.addEventListener("click",(event)=>{
    if(event.target.tagName==="BUTTON" && (  (event.target.textContent==="Edit")|| (event.target.textContent==="Save") ) ){
        let myDiv=event.target.parentElement;
        let inp_display=myDiv.querySelector("input");
        if(event.target.textContent==="Edit"){
            inp_display.readOnly=false;
            inp_display.focus();
            event.target.textContent="Save";
        }
        else if(event.target.textContent==="Save"){
            inp_display.readOnly=true;
            event.target.textContent="Edit";
        }
    }
})