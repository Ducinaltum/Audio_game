var bpm;
var quarter = 60/bpm;
var sequence = [];


MIDI.loadPlugin({
    soundfontUrl: "../MIDI.js/soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
        console.log(state, progress);
    },
    onsuccess: function() {
        //Mostrar UI
    }
});

function loadOnBuffer(stream){
    MIDI.stopAllNotes();
    sequence.length = 0;
    sequence.push(stream);
    playSequence();
}

function stop(){
    MIDI.stopAllNotes();
}

function playSequence(){
    MIDI.setVolume(0, 127);
    for(var inst = 0; inst < sequence.length; inst++){
        for(var i = 0; i < sequence[inst].length; i++){
            MIDI.noteOn(sequence[inst][i].channel,
                sequence[inst][i].note,
                sequence[inst][i].dynamic,
                sequence[inst][i].timeInPulse);
            MIDI.noteOff(sequence[inst][i].channel,
                sequence[inst][i].note,
                sequence[inst][i].noteOff);      
        }
    }   
}