function IntervalsExercise(actualLevel = user.intervalsLevel) {
    var typeOfExercise = 'Intervals'
    var state = 'idle';
    var level = clamp(actualLevel, info.intervalsMaxLevel);
    var exercise = intervalsLevels[level]()
    var intervalManager = new LevelManager(exercise.iterations);
    var saver = new saveManager(typeOfExercise);
    showScreen(typeOfExercise)
    function hi() {
        var ints = exercise.intervals != undefined ? exercise.intervals : exercise.notes
        return ints
    }
    deactivateIntervalsButtons(typeOfExercise, ints = exercise.intervals != undefined ? exercise.intervals : exercise.notes)
    var interval = createInterval();

    //Publicas
    this.getKindOfExercise = function () { return typeOfExercise }
    this.getLevel = function () { return level }
    this.createNextQuestion = function () { interval = createInterval(); }
    this.checkResponse = function (response) {
        if (state == 'playing') {
            state = 'answer'
            currentInterval = interval.interval;
            hit = 0;
            if (response == currentInterval) {
                updateFeedback("¡Correcto!", 'success', intervalsInHalfStep[interval.interval])
                hit++;
            }
            else {
                failIntervalButtonAnswer(typeOfExercise, response)
                updateFeedback("¡Incorrecto!", 'danger', intervalsInHalfStep[interval.interval])
            }
            correctIntervalButtonAnswer(typeOfExercise, currentInterval)
            saveObject = {};
            saveObject[currentInterval] = {
                correct: hit,
                times: 1
            }
            saver.storeValues(saveObject);
            intervalManager.trackScore(hit)
        }
    }

    function createInterval() {
        resetElements(typeOfExercise)
        if (!intervalManager.hasFinishedLevel(level, typeOfExercise)) {
            state = 'playing';
            int = new Interval(exercise)
            loadOnBuffer(int.notes);
            return int;
        }
    }
}

function Interval(exercise) {
    note = setNote()
    fundamental = exercise.fundamental != undefined ? exercise.fundamental : 0;    
    direction = exercise.direction;
    if(fundamental == note) fundamental -=12;
    if(fundamental > note ^ direction == -1){
        var aux = fundamental;
        fundamental = note;
        note = aux;
    }
    this.interval = Math.abs(fundamental - note)
    pitch = exercise.pitch != undefined ? exercise.pitch : setPitch(this.interval);
    this.notes = buildStream();

    function setNote() {
        var index = Math.floor(Math.random() * exercise.notes.length)
        note = exercise.notes[index];
        return note;
    }

    function setPitch(interval) {
        scope = limits.max - limits.min - interval;
        pitchNote = Math.floor(Math.random() * scope) + limits.min;
        return pitchNote;
    }

    function buildStream() {
        console.log(fundamental)
        console.log(note)
        fundamental += pitch
        note += pitch
        var stream = [];
        stream[0] = new Note(fundamental,
            0,
            1);
        stream[1] = new Note(note,
            0 + exercise.timing,
            1);
        return stream;
    }
}

