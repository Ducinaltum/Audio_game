function startIntervals(){            
    intervals = new simpleIntervals(0);
    intervals.selectInterval();    
}

function responseIntervals(e) {
    if (e == Math.abs(intervals.getInterval())) {
        intervals.selectInterval();
    }
}

function startChords(){
    chords = new Chords(3);
    chords.selectChord();    
}

function responseChords(e){
    console.log(e)
    console.log(chords)
    console.log(chords.getChord())
    if (e === chords.getChord()){
        chords.selectChord()
    }
}