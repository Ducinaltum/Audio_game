var bpm;
var quarter = 60 / bpm;
var sequence = [];
var loadedSequence = [];
var player;
var isPlaying = false;

MIDI.loadPlugin({
    soundfontUrl: "MIDI.js/soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function (state, progress) {
        console.log(state, progress);
    },
    onsuccess: function () {
        MIDI.setVolume(0, 127);
    }
});

function loadOnBuffer(stream) {
    sequence.length = 0;
    sequence.push(stream)
    playSequence();
}

function stop() {
    MIDI.stopAllNotes();
    clearTimeout(player);
    isPlaying = false;
}

function playSequence() {
    var duration = 0;
    MIDI.stopAllNotes();
    MIDI.setVolume(0, 127);
    for (var inst = 0; inst < sequence.length; inst++) {
        for (var i = 0; i < sequence[inst].length; i++) {
            MIDI.noteOn(sequence[inst][i].channel,
                sequence[inst][i].note,
                sequence[inst][i].dynamic,
                sequence[inst][i].timeInPulse);
            MIDI.noteOff(sequence[inst][i].channel,
                sequence[inst][i].note,
                sequence[inst][i].noteOff);
            duration = sequence[inst][i].noteOff > duration ? sequence[inst][i].noteOff : duration;
        }
    }
    isPlaying = true;
    setPlaying();
    player = setTimeout(function () {
        isPlaying = false;
        setStop();
    }, (duration) * 1000);
}