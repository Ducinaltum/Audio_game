const safeZone = 20;

var perfectTriads = [
    ["major", [0, 4, 7]],
    ["minor", [0, 3, 7]]
]

var imperfectTriads = [
    ["dim", [0, 3, 6]],
    ["aug", [0, 4, 8]]
]

var majorSeventhPerfectTriads = [
    ["majj7", [0, 4, 7, 11]],
    ["7", [0, 4, 7, 10]]
]

var minorSeventhPerfectTriads = [
    ["m7", [0, 3, 7, 11]],
    ["mmajj7", [0, 3, 7, 10]]
]

var diminishedSeventhTriads = [
    ["m7b5", [0, 3, 6, 10]],
    ["dim7", [0, 3, 6, 9]]
]

var augmentedSeventhTriads = [
    ["augmajj7", [0, 4, 8, 11]],
    ["aug7", [0, 4, 8, 10]]
]

function Chords() {
    chordManager = new LevelManager(info.chordsMaxLevel, user.chordsLevel);
    exercise = setChordLevel(chordManager.level);
    UImanager = new ButtonBasedUIManager("Chords");
    UImanager.deactivateButtons(splitKeys(exercise));

    this.createChord = function(){
        chord = new Chord(exercise, setDirection())
        loadOnBuffer(chord.notes)
    }

    this.checkResponse = function(r){
        response = r;
        score = 0;
        if(response == chord.chord) score = 1;
        else score = -1;
        chordManager.addScore(score);
        UImanager.setFeedback(response, chord.kind);
        setTimeout(function(){ 
            UImanager.restoreUIElements();
        }, 500);
        this.checkLevel();
    }

    this.checkLevel = function(){
        switch(chordManager.controlNextLevel()){
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.createChord()
                break;
        }
    }

    function setDirection(){
        switch(chordManager.level % 4){
            case 0:
                return 0;
                break;
            case 1:
                return 1;
                break;
            case 2:
                return -1;
                break;
            case 3:
                return Math.floor(Math.random() * 3) - 1
        }
    }

    function setChordLevel(lvl){
        var levelStructure = []
        switch(Math.floor(lvl/4)){
            case 0:
                return levelStructure.concat(perfectTriads)
        }
    }

    function splitKeys(arr){
        keysOnly = []
        arr.forEach(element => {
            keysOnly.push(element[0])
        });
        return keysOnly;
    }
}

function Chord(ex, dir){
    exercise = ex;
    direction = dir;
    chord = exercise[Math.floor(Math.random() * exercise.length)];
    this.kind = chord[0];

    setFundamental = function(chord) {
        //Este algoritmo se sale de los límite CORREGIR
        scope = limits.max - limits.min - Math.abs(chord[1][chord[1].length - 1]);
        note = Math.floor(Math.random() * scope) + limits.min;
        return note;
    }

    buildStream = function(fundamental){
        //Si dirección es 0, es armonico, si es 1 es ascendene si es -1 es descendente
        var stream = [];
        if(direction == -1) chord[1].reverse()
        time = 0;
        for(var i = 0; i < chord[1].length; i++) {
            note = chord[1][i];
            stream[i] = new Note(note + fundamental, time);
            time += Math.abs(direction);
        }
        return stream;
        
    }
    fundamental = setFundamental(chord);
    this.notes = buildStream(fundamental)
}

/*
majj: [0, 4, 7, 11],
dominant: [0, 4, 7, 10],
minor7: [0, 3, 7, 10],
minormajj: [0, 3, 7, 11],

/*

minor7b5
dim7

augmajj
aug7

sus
frigian

minor6
major6

majj9
dominant9
minor79
minormajj9
dominant9b

majj4
dominant4
majj4A
dominant4A
minor74
minormajj4
minor74A
minormajj4A
*/