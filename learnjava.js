 let boxes = document.querySelectorAll(".box");
 let resetbtn= document.querySelector("#reset");
 let newgamebtn = document.querySelector("#newbtn")
 let msgcontainer = document.querySelector(".msgcontainer")
  let  msg = document.querySelector("#msg")



 let turno= true;

   const winpatern =[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,8],
   [3,4,5],
   [6,7,8],
  ];

const resetGame=() =>{
  turno= true;
  inablebox()
  msgcontainer.classList.add("hide")
}







  boxes.forEach((box)  =>{
    box.addEventListener("click", ( ) => {
        console.log("box was clicked");
      if(turno){
        box.innerText="O";

        turno= false;
      } else{
        box.innerText="x";
        turno= true;
      }
      box.disabled=true

      checkwinner()
    })
  })

const disablebox =()=>{
  for (box of boxes) {
    box.disabled=true
  }
}

const inablebox =()=>{
  for (box of boxes) {
    box.disabled=false
    box.innerText=""
  }
}





const showwinner=(winner) => {
  msg.innerText= `congratulation, winner is ${winner}`;
  msgcontainer.classList.remove("hide")
  disablebox()
}

  const checkwinner=( ) =>{
    for(pattern of winpatern) {
       let pos1val= boxes[pattern[0]].innerText;
       let pos2val= boxes[pattern[1]].innerText;
       let pos3val= boxes[pattern[2]].innerText;

       if (pos1val != "" && pos2val != "" && pos3val !="") {
        if (pos1val===pos2val &&  pos2val===pos3val ){
          console.log("winner");

          showwinner( pos1val);

          }  }
    }
  }

  newgamebtn.addEventListener("click" , resetGame)
  resetbtn.addEventListener("click" , resetGame)