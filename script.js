
document.getElementById("red");
document.getElementById("yellow");
document.getElementById("green");


function changeColor(){

  if(document.getElementById("yellow").className ==="light lightYellow"){

    document.getElementById("yellow").className  = "light lightOff";
    document.getElementById("red").className  = "light lightRed";

  }else 
        if(document.getElementById("red").className ==="light lightRed"){
           
            document.getElementById("green").className  = "light lightGreen";
            document.getElementById("red").className  = "light lightOff";

        }else {
            
            document.getElementById("green").className  = "light lightOff";
            document.getElementById("yellow").className  = "light lightYellow";

             }
  
    

}