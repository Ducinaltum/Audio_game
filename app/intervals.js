function IntervalsExercise(actualLevel = user.intervalsLevel) {
    typeOfExercise = 'Intervals'
    state = 'idle';
    level = clamp(actualLevel, info.intervalsMaxLevel);
    console.log(level)
    exercise = intervalsLevels[level]()
    intervalManager = new LevelManager(level);
    showScreen(typeOfExercise)
    console.log(intervalsLevels[0]())
    console.log(exercise)
    deactivateIntervalsButtons(typeOfExercise, exercise.intervals)
    interval = createInterval();

    //Publicas
    this.getKindOfExercise = function () { return typeOfExercise }
    this.getLevel = function () { return level }
    this.createNextQuestion = function(){ interval = createInterval(); }
    this.checkResponse = function (response) {
        if (state == 'playing') {
            state = 'answer'
            currentInterval = interval.interval;
            score = 0;
            if(response == currentInterval){
                score++;
            }
            else failIntervalButtonAnswer(typeOfExercise, response)

            correctIntervalButtonAnswer(typeOfExercise, currentInterval)
            intervalManager.addScore(score)
            if (score == 1) updateFeedback("¡Correcto!", 'success')
            else updateFeedback("¡Incorrecto!", 'danger')
        }
    }

    function createInterval() {
        resetElements(typeOfExercise)
        if (!intervalManager.hasFinishedLevel(level, typeOfExercise)) {
            state = 'playing';
            //Esto se realiza para duplicar el array y no mandar el original por que se modifica
            var sendExercise = exercise.intervals.slice(0)
            int = new Interval(sendExercise, exercise.timing, exercise.direction, exercise.fundamental, exercise.isInverted)
            loadOnBuffer(int.notes);
            return int;
        }
    }
}

function Interval(ex, timing, dir, fund, isInverted) {
    intervalExercise = ex;
    time = timing;
    direction = dir;    
    this.interval = setInterval()
    fundamental = fund != undefined? fund: setFundamental(this.interval);
    this.notes = buildStream(this.interval, isInverted);

    function setInterval() {
        var index = Math.floor(Math.random() * intervalExercise.length)
        int = intervalExercise[index];
        return int;
    }
    
    function setFundamental(interval) {
        scope = limits.max - limits.min - interval;
        //Este algoritmo se sale de los límite por que no tiene en cuanta los valores negativos CORREGIR
        note = Math.floor(Math.random() * scope) + limits.min;
        return note;
    }

    function buildStream(interval, isInverted) {
        var intervalNote = isInverted != null? fundamental - interval: interval + fundamental
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
}

