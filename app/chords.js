//const safeZone = 20;
function ChordsExercise(actualLevel = user.chordsLevel) {
    typeOfExercise = 'Chords'
    state = 'idle';
    level = clamp(actualLevel, info.chordsMaxLevel)
    exercise = setChordLevel(level);
    chordManager = new LevelManager(level);
    showScreen(typeOfExercise)
    deactivateChordsButtons(typeOfExercise, exercise)

    createChord();

    this.getKindOfExercise = function(){return typeOfExercise}
    this.getLevel = function(){return level}
    this.getState = function(){return state}
    this.createNextQuestion = function(){
        createChord();
    }

    function createChord(){
        resetElements(typeOfExercise)
        //La línea de abajo es innecesaria, solo sirve para pintar de azul la base del acorde si solo se está trabajando con una
        deactivateChordsButtons(typeOfExercise, exercise)
        if(!chordManager.hasFinishedLevel(level, typeOfExercise)){
            state = 'playing';
            chord = new ChordBuilder(exercise, exercise.direction())
            loadOnBuffer(chord.notes)
        }
    }

    this.checkResponse = function (response) {
        if (state == 'playing') {
            state = 'answer'
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
                if (score > 0) {
                    updateFeedback("¡Medianamente correcto!", 'warning', strResponse)
                }
                else {
                    updateFeedback("¡Incorrecto!", 'danger', strResponse)
                }
            }
        }
    }
   
    function setChordLevel(level){
        var procesedLevel = {
            exerciseLevel:null,
            isOpen: true,
            base:[],
            kind:null,
            direction:null,
            depth:null,
            name:''
        };
        procesedLevel.exerciseLevel = Math.floor(level / 4)  
        procesedLevel.kind = level % 4
        procesedLevel.direction = setDirection(procesedLevel.kind);
        procesedLevel.name = $('#cho' + procesedLevel.exerciseLevel).text();
        if( procesedLevel.exerciseLevel < 3) {
            procesedLevel.depth = 1
        }
        else if( procesedLevel.exerciseLevel >= 3 &&  procesedLevel.exerciseLevel < 10){
            procesedLevel.depth = 2
        }
        else if( procesedLevel.exerciseLevel >= 10 &&  procesedLevel.exerciseLevel < 17){
            procesedLevel.depth = 3
            procesedLevel.exerciseLevel -= 7
        }
        else if( procesedLevel.exerciseLevel >= 17){
            procesedLevel.depth = 3;
        }
        console.log(procesedLevel)
        procesedLevel.base = chordsLevels[procesedLevel.exerciseLevel]();
        return procesedLevel;
    }

    function setDirection(kind){
        switch(kind){
            case 0:
                return function(){
                    return 1;
                };
                break;
            case 1:
            return function(){
                return -1;
                };
                break;
            case 2:
                return function(){
                    return 0;
                };
                break;
            case 3:
                return function(){
                    return Math.floor(Math.random() * 3) - 1
                };
        }
    }

    function buildFeedbackAnswer(correctChord){
        var answer = [];
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

function ChordBuilder(ex, dir){
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
        //Si dirección es 0, es armonico, si es 1 es ascendente si es -1 es descendente
        var stream = [];
        notes = []        
        for(n in chord){
            notes = notes.concat(chordsKeys[chord[n]])
        }
        if(exercise.isOpen){
            //Aislar el primer indice el BAJO
            var chordFundamental = notes.shift();
            //Mezclar los indices restantes
            notes.sort(function(a, b){return 0.5 - Math.random()});
            var higherNote = 0;
            for(var i=0; i<notes.length; i++){
                if(notes[i] < higherNote){
                    multiplier = Math.floor((higherNote - notes[i])/12) + 1
                    notes[i] += multiplier * 12;
                    higherNote = notes[i];
                }
                higherNote = notes[i];
            }
            notes.unshift(chordFundamental)
            if(higherNote + fundamental > limits.max){
                notes = notes.map(function(value){
                    console.log(value)
                    return value = octavate(value, -1)
                })
            }

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