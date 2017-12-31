var activeScreen =null;
var loadingScreen = null;
var intervals;
var chords;

function startIntervals(){            
    intervals = new simpleIntervals();
    intervals.createInterval();
}

function responseIntervals(e) {
    intervals.checkResponse(e);
}

function startChords(){
    chords = new Chords();
    chords.createChord();    
}

function responseChords(e){
    chords.checkResponse(e)
}

function startProgresion(){
    progresion = new harmonicProgresion()
    progresion.createProgresion();
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