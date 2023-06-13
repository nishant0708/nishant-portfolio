var navLinks=document.getElementById('list');
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}


//about me

var img = document.getElementById("images");

var slides=['IMG_20221213_180306_702_860x1076.jpg','IMG_20220916_181702_052_860x1075.jpg','IMG_20221101_042215_467_2_860x1075.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    
    document.getElementById("images").innerHTML="<img src="+slides[Start-1]+">";
  
   
}
setInterval(slider,2000);