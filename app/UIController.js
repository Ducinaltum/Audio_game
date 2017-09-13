var activeScreen =null;
var loadingScreen = null;
var feedback = document.getElementById("feedbackText");


function startIntervals(){            
    intervals = new simpleIntervals(0);
    intervals.selectInterval();    
}

function responseIntervals(e) {
    var usrResponse = (e == Math.abs(intervals.getInterval()));
    response(usrResponse);
    if (usrResponse) {
        intervals.selectInterval();
    }

}

function startChords(){
    chords = new Chords(3);
    chords.selectChord();    
}

function responseChords(e){
    var usrResponse = (e === chords.getChord());
    response(usrResponse);
    if (usrResponse){
        chords.selectChord()
    }
}

function startProgresion(){

}

function responseProgresion(e){

}

function startMelody(){
  
}

function responseMelody(e){

}

function transition(e){
    var from;
    if(activeScreen != null){
    from = activeScreen;
    from.style.display = "none";
    }
    activeScreen = document.getElementById(e.slice(2))
    //Animar la salida de la pantalla de carga
    //Animate()
    activeScreen.style.display = "flex";
    switch(e){
        case "goIntervals":
            startIntervals()
            break;
        case "goChords":
            startChords()
            break;
        case "goProgresion":
            break;
        case "goMelody":
            break;
    }
}

function response(r){
    if(r) feedback.innerHTML = "¡Correcto!";
    else feedback.innerHTML = "¡Incorrecto!";
    //Mostrar respuesta correcta
    setTimeout(function(){ 
        feedback.innerHTML = "&nbsp"; }, 
        1000);

}