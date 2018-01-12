const safeZone = 20;

var perfectTriads = [
    ["major", [0, 4, 7]],
    ["minor", [0, 3, 7]]
]

var imperfectTriads = [
    ["dim", [0, 3, 6]],
    ["aug", [0, 4, 8]]
]

// 7°
var majorSeventhPerfectTriads = [
    ["majj7", [0, 4, 7, 11]],
    ["7", [0, 4, 7, 10]]
]

var minorSeventhPerfectTriads = [
    ["mmajj7", [0, 3, 7, 10]],
    ["m7", [0, 3, 7, 11]]
]

var diminishedSeventhTriads = [
    ["m7b5", [0, 3, 6, 10]],
    ["dim7", [0, 3, 6, 9]]
]

var augmentedSeventhTriads = [
    ["augmajj7", [0, 4, 8, 11]],
    ["aug7", [0, 4, 8, 10]]
]

// 9°
/*
var majorSeventhPerfectTriads = [
    ["majj7/9", [0, 4, 7, 11, 14]],
    ["7/9", [0, 4, 7, 10]]
]

var minorSeventhPerfectTriads = [
    ["m7/9", [0, 3, 7, 11]],
    ["mmajj7/9", [0, 3, 7, 10]]
]

var diminishedSeventhTriads = [
    ["m7b5", [0, 3, 6, 10]],
    ["dim7", [0, 3, 6, 9]]
]

var augmentedSeventhTriads = [
    ["augmajj7", [0, 4, 8, 11]],
    ["aug7", [0, 4, 8, 10]]
]
*/

function ChordsExercise( actualLevel = user.chordsLevel) {
    typeOfExercise = 'Chords'
    ready = true;
    level = clamp(actualLevel, info.chordsMaxLevel)
    exercise = setChordLevel(level);
    chordManager = new LevelManager(level);
    showScreen(typeOfExercise)
    deactivateButtons(typeOfExercise, splitKeys(exercise))

    createChord();

    this.getKindOfExercise = function(){return typeOfExercise}
    this.getLevel = function(){return level}

    function createChord(){
        ready = true;
        chord = new Chord(exercise, setDirection())
        loadOnBuffer(chord.notes)
    }

    this.checkResponse = function (response) {
        if (ready) {
            ready = false
            currentChord = chord.kind
            correctButtonAnswer(currentChord)
            if (response == chord.kind){
                chordManager.addScore(1)
                updateFeedback("¡Correcto!", 'success')
            }
            else {
                chordManager.addScore(-1);
                failButtonAnswer(response)
                updateFeedback("¡Incorrecto!", 'danger')
            }
            
            setTimeout(function () {
                resetElements(typeOfExercise)
                if(!chordManager.hasFinishedLevel()){
                    createChord()
                }
            }, 1000);
        }
    }

    function setChordLevel(level){
        var levelStructure = []
        switch(Math.floor(level/4)){
            case 0:
                return levelStructure.concat(perfectTriads);
                break;
            case 1:
                return levelStructure.concat(imperfectTriads);
                break;
            case 2:
                return levelStructure.concat(perfectTriads)
                .concat(imperfectTriads);;
                break;
            case 3:
                return levelStructure.concat(majorSeventhPerfectTriads);
                break;
            case 4:
                return levelStructure.concat(minorSeventhPerfectTriads);
                break;
            case 5:
            return levelStructure.concat(majorSeventhPerfectTriads)
                .concat(minorSeventhPerfectTriads);
                break;
            case 6:
                return levelStructure.concat(diminishedSeventhTriads);
                break;
            case 7:
                return levelStructure.concat(augmentedSeventhTriads);
                break;
            case 8:
                return levelStructure.concat(diminishedSeventhTriads)
                .concat(augmentedSeventhTriads);
                break;
            case 9:
                return levelStructure.concat(majorSeventhPerfectTriads)
                .concat(minorSeventhPerfectTriads)
                .concat(diminishedSeventhTriads)
                .concat(augmentedSeventhTriads);
                break;
            case 10:
                return levelStructure.concat(perfectTriads)
                .concat(imperfectTriads)
                .concat(majorSeventhPerfectTriads)
                .concat(minorSeventhPerfectTriads)
                .concat(diminishedSeventhTriads)
                .concat(augmentedSeventhTriads);
                break;
            case 11:
                return levelStructure.concat(perfectTriads);
                break;
            case 12:
                return levelStructure.concat(perfectTriads);
                break;

        }
    }

    function setDirection(){
        switch(level % 4){
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
    fundamental = setFundamental(chord);
    this.kind = chord[0];
    this.notes = buildStream(fundamental)

    function setFundamental(chord) {
        //Este algoritmo se sale de los límite CORREGIR
        scope = limits.max - limits.min - Math.abs(chord[1][chord[1].length - 1]);
        note = Math.floor(Math.random() * scope) + limits.min;
        return note;
    }

    function buildStream(fundamental){
        //Si dirección es 0, es armonico, si es 1 es ascendene si es -1 es descendente
        var stream = [];
        console.log(direction)
        if(direction == -1) chord[1].reverse()
        time = 0;
        for(var i = 0; i < chord[1].length; i++) {
            console.log(time)
            note = chord[1][i];
            stream[i] = new Note(note + fundamental, time);
            time += Math.abs(direction);

        }
        return stream;        
    }

    
}



/*
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