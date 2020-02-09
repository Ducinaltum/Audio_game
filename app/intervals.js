function IntervalsExercise(actualLevel) {
    const typeOfExercise = 'Intervals'
    var state = 'idle';
    const exercise = actualLevel;
    const intervalManager = new LevelManager(exercise.iterations);
    var saver = new saveManager(typeOfExercise);

    showScreen(typeOfExercise)
    //Reacomodar para que solo marque los que se usan
    deactivateIntervalsButtons(typeOfExercise, buildIntervalsForUI())
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
        if (!intervalManager.hasFinishedLevel()) {
            state = 'playing';
            int = new Interval(exercise)
            loadOnBuffer(int.notes);
            return int;
        } //else saver.flushUser()
    }

    function buildIntervalsForUI() {
        console.log(exercise.isInverted)
        if (exercise.isInverted == false) {
            return exercise.structure
        }
        //El pivote es la mitad del scope del ejercicio
        var pivot = exercise.structure[exercise.structure.length - 1] > 12 ? pivot = 18 : 6;
        invertedIntervals = exercise.structure.map(function (e) {
            return pivot + (pivot - e)
        });
        if (exercise.isInverted == undefined) {
            return exercise.structure.concat(invertedIntervals)
        }
        else if (exercise.isInverted) {
            return invertedIntervals
        }
    }
}

function Interval(exercise) {
    /*
    structure
    isInverted
    pitch
    direction
    */
    var isInverted = exercise.isInverted == undefined ? [true, false][Math.floor(Math.random() * 2)] : exercise.isInverted;
    var fundamental = exercise.structure[exercise.structure.length - 1] > 12 ? 24 : 12;
    var direction = exercise.direction;
    var note = exercise.structure[Math.floor(Math.random() * exercise.structure.length)];
    note = !isInverted ? fundamental + note : fundamental == note ? note - fundamental : note;

    if (fundamental > note ^ direction == -1) {
        var aux = fundamental;
        fundamental = note;
        note = aux;
    }

    this.interval = Math.abs(fundamental - note)
    var pitch = exercise.pitch != undefined ? exercise.pitch : setPitch(this.interval);

    this.notes = buildStream();

    function setPitch(interval) {
        scope = limits.max - limits.min - interval;
        pitchNote = Math.floor(Math.random() * scope) + limits.min;
        return pitchNote;
    }

    function buildStream() {
        fundamental += pitch
        note += pitch
        var stream = [];
        var timing = 1
        if (direction == 0) {
            direction = 1
            timing = 0
        }
        stream[0] = new Note(fundamental,
            0,
            1);
        stream[1] = new Note(note,
            0 + timing,
            1);
        return stream;
    }
}

