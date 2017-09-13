function Chords(initLevel) {
    const safeZone = 20;

    var perfectTriads = [
        ["major", [0, 4, 7]],
        ["minor", [0, 3, 7]]
    ]

    var imperfectTriads = [
        ["dim", [0, 3, 6]],
        ["aug", [0, 4, 8]]
    ]
    

    var maxLevel = 33
    var level = initLevel;
    var chord;
    var fundamental;
    var exercise = setChordLevel(level);
    var direction;
    

    this.selectChord = function() {
        direction = setDirection(level);
        chord = exercise[Math.floor(Math.random() * exercise.length)];
        fundamental = setFundamental(chord[0][chord.length - 1]);
        loadOnBuffer(buildStream(fundamental));
    }

    this.getChord = function() {
        return chord[1];
    }

    function buildStream(f) {
        //Habría que pensar en un build para acordes abiertos
        var structure = chord[0];
        var stream = [];
        var lastTime;
        (direction == -1)? lastTime = structure.length - 1: lastTime = 0; 
        for(var i = 0; i < structure.length; i++) {
            note = structure[i] + f;
            time = lastTime;
            stream[i] = new Note(note, time);
            lastTime += direction;
        }
        return stream;
    }

    function setDirection(lvl){
        switch(lvl%4){
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

    function setFundamental(higherPitch){
        var scope = limits.max - limits.min - higherPitch - safeZone;
        return Math.floor(Math.random() * scope) + limits.min + safeZone;
    }

    function setChordLevel(lvl){
        var levelStructure = []
        switch(Math.floor(lvl/4)){
            case 0:
                return levelStructure.concat(perfectTriads)
        }
    }
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