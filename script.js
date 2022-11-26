function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('menu-bar');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "180px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
} 


let count = 1;
document.getElementById("radio1").checked = true

setInterval( function(){
}, 2000)


function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}