function start()
{
    can = document.getElementById("keyboard");
    can.width = document.body.clientWidth; //document.width is obsolete
    can.height = window.innerHeight * 0.15; //document.height is obsolete
    canW = can.width;
    canH = can.height;
}
start();
var can = document.getElementById("keyboard");
var ctx = can.getContext("2d");
var range = 127
var whiteKeys = new WhiteKeys(range)
var spacing = 10;

drawMatrix();
function WhiteKeys(rng){
    this.width = can.width / rng;
    this.heigth = can.heigth;    
}

function drawKeys(){
    
}

function drawMatrix(){
    for(var i = 0; i < can.width/10;i++){
        for(var j = 0; j < can.height/10;j++){        
            ctx.beginPath();
            ctx.lineWidth="1";
            ctx.strokeStyle="grey";
            ctx.rect(i * spacing, j * spacing, spacing, spacing)
            ctx.stroke();
        }
    }
}