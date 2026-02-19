let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //playex,playerO
//let count=0; to track draw

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turnO=true;   //+count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}
 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
            box.style.color = "#00E0FF"; 
            turnO=false;
        }
        else{
            box.innerText="x";
            box.style.color = "#FF5C5C";
            turnO=true;
        }
        box.disabled=true; //count++
        checkwinner(); //let iswinner=checkwinner(); if(count===9 && !iswinner){gamedraw();}
    });
});
// const gamedraw=()=>{msg.innertext=`game was draw`; msgcontainer.classlist.remove("hide"); disableboxes();};
const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val); // return true;
                showwinner(pos1val);

            }
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);