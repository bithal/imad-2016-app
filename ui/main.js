console.log('Loaded!');
//change element in main-text

var element = document.getElementById("main-text");
element.innerHTML="New Value";

//make image move
var img = document.getElementById("madi");
var marginleft = 0;
img.onclick=function () {
 var interval = setInterval(moveRight,100);
 //img.style.marginLeft='100px';
};


function moveRight(){
    marginleft = marginleft+10;
     img.style.marginLeft=marginLeft+'px';
}

