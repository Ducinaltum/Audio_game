const safeZone = 20;

baseChords = [
    ['major',
        [   
            ['7', [['b9'], ['9'], ['#9'], ['#11'], ['13']]],
            ['majj7', [['9'], ['#11'], ['13']]]
        ]
    ],
    ['minor',
        [
            ['6'],
            ['7', [['9'], ['11'], ['13']]],
            ['majj7', [['9'], ['11'], ['13']]]
            //11 b13
        ]
    ],
    ['dim',
        [
            ['b7'],
            ['7', [['11'], ['b13']]]
        ]
    ],
    ['aug',
        [
            ['7', [['b9'], ['9'], ['#9'], ['#11'], ['13']]],
            ['majj7', [['9'], ['#11'], ['13']]]
        ]
    ],
    ['sus'],
    ['4'],
    ['2'],
    ['6'],
]

function ChordsExercise( actualLevel = user.chordsLevel) {
    typeOfExercise = 'Chords'
    ready = true;
    level = clamp(actualLevel, info.chordsMaxLevel)
    exercise = setChordLevel(level);
    chordManager = new LevelManager(level);
    showScreen(typeOfExercise)
    deactivateChordsButtons(typeOfExercise, exercise)

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
            var score = 0;
            var failedAnswers = [];
            var correctAnswer = chord.buildedChord
            var strResponse = buildFeedbackAnswer(correctAnswer)
            var posibilities = 0;
            var index = 0;
            if (exercise.base.length == 1) index = 1
            for (let i = index; i < correctAnswer.length; i++) {
                if (correctAnswer[i] != response[i]) {
                    failedAnswers[i] = response[i]
                }
                else score++;
                posibilities++;
            }
            score = score / posibilities;
            chordManager.addScore(score);
            chordsButtonAnswer(typeOfExercise, correctAnswer, failedAnswers)
            if (score == 1){
                updateFeedback("¡Correcto!", 'success', strResponse)
            }
            else {
                //failChordsButtonAnswer(typeOfExercise, failedAnswers)
                if (score > 0) {
                    updateFeedback("¡Medianamente correcto!", 'warning', strResponse)
                }
                else {
                    updateFeedback("¡Incorrecto!", 'danger', strResponse)
                }
            }
            
            setTimeout(function () {
                resetElements(typeOfExercise)
                //La línea de abajo es innecesaria, solo sirve para pintar de azul la base del acorde si solo se está trabajando con una
                deactivateChordsButtons(typeOfExercise, exercise)
                if(!chordManager.hasFinishedLevel(level, typeOfExercise)){
                    createChord()
                }
            }, 2000);
        }
    }
   
    function setChordLevel(level){
        var levelStructure = {};
        levelStructure.base = []
        var kind = Math.floor(level/4)
        if(kind < 3) {
            levelStructure.depth = 1
        }
        else if(kind >= 3 && kind < 10){
            levelStructure.depth = 2
        }
        else if(kind >= 10 && kind < 17){
            levelStructure.depth = 3
            kind -= 7
        }
        else if(kind >= 17){
            levelStructure.depth = 3;
        }
        switch(kind){
            case 0:
                levelStructure.base[0] = baseChords[0];
                levelStructure.base[1] = baseChords[1];
                break;
            case 1:
                levelStructure.base[0] = baseChords[2];
                levelStructure.base[1] = baseChords[3];
                break;
            case 2:
                levelStructure.base[0] = baseChords[0];
                levelStructure.base[1] = baseChords[1];
                levelStructure.base[2] = baseChords[2];
                levelStructure.base[3] = baseChords[3];
                break;
                
            //Séptimas = Depth = 2
            case 3:
                levelStructure.base[0] = baseChords[0];
                break;
            case 4:
                levelStructure.base[0] = baseChords[1];
                break;
            case 5:
                levelStructure.base[0] = baseChords[0];
                levelStructure.base[1] = baseChords[1];
                break;
            case 6:
                levelStructure.base[0] = baseChords[2];
                break;
            case 7:
                levelStructure.base[0] = baseChords[3];
                break;
            case 8:
                levelStructure.base[0] = baseChords[2];
                levelStructure.base[1] = baseChords[3];
                break;
            case 9:
                levelStructure.base[0] = baseChords[0];
                levelStructure.base[1] = baseChords[1];
                levelStructure.base[2] = baseChords[2];
                levelStructure.base[3] = baseChords[3];
                break;
            case 17:

                break;
        }
        return levelStructure;
    }

    function setDirection(){
        switch(level % 4){
            case 0:
                return 1;
                break;
            case 1:
                return -1;
                break;
            case 2:
                return 0;
                break;
            case 3:
                return Math.floor(Math.random() * 3) - 1
        }
    }

    function buildFeedbackAnswer(correctChord){
        answer = [];
        if(correctChord[1] != undefined){
            switch(correctChord[0]){
                case 'minor':
                    answer[0] = 'm'
                    break;
                case 'aug':
                    answer[0] = '+'
                    break;
                default:
                    answer[0] = ''
                    break;
            }          
            if(correctChord[0] == 'dim'){ 
                if(correctChord[1] == 'b7') answer[0] = '°'
                else{
                    answer[0] = 'm'
                    answer[1] = correctChord[1]
                    answer[3] = 'b5'
                }
            }
            else answer[1] = correctChord[1];
            if(correctChord[2] != undefined) answer[2] = '/' + correctChord[2]
        }
        else {
            switch(correctChord[0]){
                case 'major':
                    answer[0] = 'Mayor'
                    break;
                case 'minor':
                    answer[0] = 'menor'
                    break;
                case 'dim':
                    answer[0] = 'disminuido'
                    break;
                case 'aug':
                    answer[0] = 'aumentado'
                    break;
            }   
        }
        return answer.join('')        
    }
}

function Chord(ex, dir){
    exercise = ex;
    direction = dir;
    chord = buildChord();
    fundamental = setFundamental(chord);
    this.kind = chord[0];
    this.notes = buildStream(fundamental)
    this.buildedChord = chord;

    function setFundamental(chord) {
        //Este algoritmo se sale de los límite CORREGIR
        var chordScope = 0;
        if(chord.length <= 1) chordsKeys[chord[chord.length -1][2]]
        else chordScope = chordScope = chordsKeys[chord[chord.length - 1]];
        scope = limits.max - limits.min - chordScope;
        note = Math.floor(Math.random() * scope) + limits.min;
        return note;
    }

    function buildStream(fundamental){
        //Si dirección es 0, es armonico, si es 1 es ascendene si es -1 es descendente
        var stream = [];
        notes = []        
        for(n in chord){
            notes = notes.concat(chordsKeys[chord[n]])
        }
        if(direction == -1) notes.reverse()
        time = 0;
        for(i in notes) {
            note = notes[i];
            stream[i] = new Note(note + fundamental, time);
            time += Math.abs(direction);
        }
        return stream;        
    }

    function buildChord(){
        chord = []
        pointer = exercise.base;
        for(var i = 0; i < exercise.depth; i++){
            pointerIndex = Math.floor(Math.random() * pointer.length)
            chord[i] = pointer[pointerIndex][0]
            pointer = pointer[pointerIndex][1]
            if(pointer === undefined) break;
        }
        return chord;
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