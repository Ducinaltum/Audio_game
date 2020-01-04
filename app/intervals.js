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
                updateFeedback("¡Correcto!", 'success')
                hit++;
            }
            else {
                failIntervalButtonAnswer(typeOfExercise, response)
                updateFeedback("¡Incorrecto!", 'danger')
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
            //Esto se realiza para duplicar el array y no mandar el original por que se modifica
            /*
            var sendExercise = exercise.intervals.slice(0)
            int = new Interval(sendExercise, exercise.timing, exercise.direction, exercise.fundamental, exercise.isRelationInverted)
            */
            //var sendExercise = exercise.notes.slice(0)
            int = new Interval(exercise)
            loadOnBuffer(int.notes);
            return int;
        }
    }
}

//function Interval(ex, timing, dir, fund, isRelationInverted) {
/*
intervalExercise = ex;
time = timing;
direction = dir;
this.interval = setInterval()
fundamental = fund;
this.notes = buildStream(this.interval, isRelationInverted);

function setInterval() {
    var index = Math.floor(Math.random() * intervalExercise.length)
    int = intervalExercise[index];
    return int;
}
 
function setFundamental(interval) {
    //Este algoritmo se sale de los límite por que no tiene en cuenta los valores negativos CORREGIR
    //Falta también tenés en cuenta el valor isRelationInverted
    scope = limits.max - limits.min - interval;
    note = Math.floor(Math.random() * scope) + limits.min;
    return note;
}

function buildStream(interval, isRelationInverted) {
    var intervalNote;
    if(fundamental == undefined) fundamental = setFundamental(this.interval)
    else {
        intervalNote += fundamental
    }
    if(isRelationInverted != null){
        intervalNote = fundamental - interval
        direction *= -1
    }
    else{
        intervalNote = interval + fundamental
    }
    
    if(direction == -1){
        var aux = fundamental;
        fundamental = intervalNote;
        intervalNote = aux;
    }
    var stream = [];
    stream[0] = new Note(fundamental,
                0,
                1);
    stream[1] = new Note(intervalNote,
                0 + time,
                1);
    return stream;
}
*/
function Interval(exercise) {
    note = setNote()
    fundamental = exercise.fundamental != undefined ? exercise.fundamental : 0;
    pitch = exercise.pitch != undefined ? exercise.pitch : setPitch(note);
    direction = exercise.direction;
    if(fundamental > note || direction == -1){
        var aux = fundamental;
        fundamental = note;
        note = aux;
    }
    this.interval = setInterval(fundamental, note)
    this.notes = buildStream();

    function setNote() {
        var index = Math.floor(Math.random() * exercise.notes.length)
        note = exercise.notes[index];
        return note;
    }

    function setPitch(note) {
        scope = limits.max - limits.min - interval;
        note = Math.floor(Math.random() * scope) + limits.min;
        return note;
    }

    function setInterval(fundamental, note) {
        if (fundamental > note) return fundamental - note;
        else return note
    }

    function buildStream() {
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

