let count=0;

function increase(){
    count++;
     document.getElementById("count").innerHTML=count;
}

function decrease(){
    count--;
    if(count>=0){
    document.getElementById("count").innerHTML=count;
    }
}
