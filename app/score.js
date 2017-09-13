function init()
{    
    canvas = document.getElementById("musicScore");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = window.innerHeight * 0.4; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;
}
init();
var cnvs = document.getElementById("musicScore");
var c = cnvs.getContext("2d");
var spacing = cnvs.height / 28;

drawPentagram();

 
function drawMatrix(){
    for(var i = 0; i < cnvs.width/10;i++){
        for(var j = 0; j < cnvs.height/10;j++){        
            c.beginPath();
            c.lineWidth="1";
            c.strokeStyle="grey";
            c.rect(i * spacing, j * spacing, spacing, spacing)
            c.stroke();
        }
    }
}

function drawPentagram(){
    var scoreLeft = spacing * 7;
    var scoreRigth = cnvs.width - (spacing * 7);
    for(var i = 0; i < 11;i++){
        if (i != 5) {
            c.beginPath();
            c.lineWidth = "2";
            c.strokeStyle = "black";
            c.moveTo(scoreLeft, spacing * (7 + i));
            c.lineTo(scoreRigth, spacing * (7 +i));
            c.stroke();
        }
    }
}