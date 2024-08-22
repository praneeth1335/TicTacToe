
let btnX=document.getElementById("X-button");
let btnO=document.getElementById("O-button");
let turn = null;
let game_completed = false;
let game_started=false;
btnX.addEventListener("click", () => {
    if(!game_started){
        turn = "X";
        btnX.style.backgroundColor = "lightblue";
        btnO.style.backgroundColor = "white";
        game_started=true;
    }
    
});

btnO.addEventListener("click", () => {
    if(!game_started){
        turn = "O";
        btnO.style.backgroundColor = "lightblue";
        btnX.style.backgroundColor = "white";
        game_started=true;
    }

});
let wins=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
   
];

function changeTurn(){
    if(turn!==null){
        return turn==="X"?"O":"X";
    }
    else{
        return "";
    }
    
}
const arr=document.getElementsByClassName("grid-item");
let xwins=false;;
let owins=false;
let draw=false;

function checkforwin(){
    const inner_arr=document.getElementsByClassName("grid-item");
    const array_form=Array.from(inner_arr);
    let temp_array_X=[];
    let temp_array_O=[];

   array_form.forEach((item,index)=>{
    if(item.textContent==="X"){
        temp_array_X.push(index+1)
    }
    else if(item.textContent==="O"){
        temp_array_O.push(index+1)
    }
   })

   for(let win of wins){
    if(win.every(val=>temp_array_X.includes(val))){
        for(let x of win){
            array_form[x-1].style.backgroundColor="lightgreen"
        }
        btnX.style.backgroundColor="lightgreen";
        btnO.style.backgroundColor="#f1807e";
        xwins=true;
        game_completed=true;
        break;
    }
   }

   for(let win of wins){
    if(win.every(val=>temp_array_O.includes(val))){
        for(let x of win){
            array_form[x-1].style.backgroundColor="lightgreen"
        }
        btnX.style.backgroundColor="#f1807e";
        btnO.style.backgroundColor="lightgreen";
        owins=true;
        game_completed=true;
        break;
    }
   }

   if(!game_completed && Array.from(inner_arr).every(item=>item.textContent!=="")){
    btnX.style.backgroundColor="grey";
    btnO.style.backgroundColor="grey";
    draw=true;
    game_completed=true;
   }
    

}

 
 Array.from(arr).forEach(element=>{
     element.addEventListener('click',()=>{
        if (element.textContent === "" && !game_completed && game_started) {
            element.textContent = turn;
            checkforwin();
            if (game_completed) {
                if (xwins) {
                    console.log("Player X wins!");
                } else if (owins) {
                    console.log("Player O wins!");
                } else if (draw) {
                    console.log("It's a draw!");
                }
                return;
            }
            turn = changeTurn();
        }
     })
 })


let reset=document.getElementById("mowa");
reset.addEventListener("click",()=>{
    Array.from(arr).forEach(item=>{
        item.textContent="";
        game_completed=false;
        game_started=false;
        item.style.backgroundColor="";
        btnX.style.backgroundColor="";
        btnO.style.backgroundColor="";
        turn=null;

    })
})