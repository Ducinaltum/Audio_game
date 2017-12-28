var activeScreen =null;
var loadingScreen = null;
var intervals;

function startIntervals(){            
    intervals = new simpleIntervals();
    intervals.createInterval();
}

function responseIntervals(e) {
    intervals.checkResponse(e);
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
    progresion = new Progresion(0)
}

function responseProgresion(e){

}

function startMelody(){
    melody = new Melody(0);
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
            startProgresion()
            break;
        case "goMelody":
            startMelody();
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