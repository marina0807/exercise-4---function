function addImg(x) {
    if (x===italy){
        document.getElementById("p1").innerHTML = "italy";
    }
   else if (x===israel){
        document.getElementById("p1").innerHTML = "israel";
    }
   else if (x===holland){
        document.getElementById("p1").innerHTML = "holland";
    }
}
function removeImg(y){
    if(y===italy){
        document.getElementById("p1").innerHTML ="" ; 
    }
  else  if(y===israel){
        document.getElementById("p1").innerHTML ="" ; 
    }
  else if(y===holland) {
        document.getElementById("p1").innerHTML ="" ; 
    }
}
