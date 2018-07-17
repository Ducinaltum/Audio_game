function IntervalsExercise(actualLevel = user.intervalsLevel) {
    typeOfExercise = 'Intervals'
    state = 'idle';
    level = clamp(actualLevel, info.intervalsMaxLevel);
    simultaneousIntervals = 1;
    exercise = setIntervalLevel()
    intervalManager = new LevelManager(this.level);
    showScreen(typeOfExercise)
    deactivateIntervalsButtons(typeOfExercise, exercise.intervals)

    createInterval();

    this.getKindOfExercise = function () { return typeOfExercise }
    this.getLevel = function () { return level }
    this.getNumberOfIntervals = function () { return exercise.numberOfIntervals }
    this.createNextQuestion = function(){
        createInterval();
    }

    function createInterval() {
        resetElements(typeOfExercise)
        if (!intervalManager.hasFinishedLevel(level, typeOfExercise)) {
            state = 'playing';
            //Esto se realiza para duplicar el array y no mandar el original por que se modifica
            var sendExercise = exercise.intervals.slice(0)
            interval = new Interval(sendExercise, exercise.timing(), exercise.direction(), exercise.numberOfIntervals)
            loadOnBuffer(interval.notes);
        }
    }

    this.checkResponse = function (response) {
        if (state == 'playing') {
            state = 'answer'
            currentIntervals = interval.getIntervals()
            score = 0
            for (var i = 0; i < currentIntervals.length; i++) {
                var hit = false;
                for (var n = 0; n < response.length; n++) {
                    if (response[n] == currentIntervals[i]) {
                        hit = true;
                        response.splice(n, 1)
                        score++;
                    }
                }
                correctIntervalButtonAnswer(typeOfExercise, currentIntervals[i])
            }
            for (var fail in response) {
                failIntervalButtonAnswer(typeOfExercise, response[fail])
            }
            score /= currentIntervals.length
            intervalManager.addScore(score)
            if (score == 1) updateFeedback("¡Correcto!", 'success')
            else if (score > 0) updateFeedback("¡Medianamente correcto!", 'warning')
            else updateFeedback("¡Incorrecto!", 'danger')
        }
    }

    function setIntervalLevel() {
        var procesedLevel = {
            exerciseLevel:null,
            intervals:[],
            kind: null,
            timing:null,            
            direction:null,
            numberOfIntervals:null,
            name:''
        };
        procesedLevel.exerciseLevel = Math.floor(level / 4)        
        procesedLevel.intervals = intervalsLevels[procesedLevel.exerciseLevel]()
        procesedLevel.kind = level % 4
        procesedLevel.timing = setTiming(procesedLevel.kind);
        procesedLevel.direction = setDirection(procesedLevel.kind);
        if(level < 40) procesedLevel.numberOfIntervals = 1;
        else procesedLevel.numberOfIntervals = 2;
        procesedLevel.name = $('#int' + procesedLevel.exerciseLevel).text();
        return procesedLevel;
    }

    function setTiming(kind) {
        if (kind == 3) {
            return function(){
                return Math.floor(Math.random() * 2);
            }
        }
        if (kind < 2){
            return function(){
                return 1;
            };
        }
        return function(){
            return 0;
        };
    }

    function setDirection(kind) {
        if (kind == 0) return function(){
            return 1;
        }
        else if (kind == 1) return function(){
            return -1;
        }
        return function(){
            return (Math.floor(Math.random() * 2) - 0.5) * 2;
        }
    }

}

function Interval(ex, timing, dir, numberOfIntervals) {
    //si tomo un enfoque similar a chords capaz que no necesite el timing
    intervalExercise = ex;
    direction = dir;
    time = timing;
    intervals = setIntervals(numberOfIntervals);
    this.interval = intervals[intervals.length - 1];
    fundamental = setFundamental();
    this.notes = buildStream();
    this.getIntervals = function () {
        return intervals;
    }

    function setIntervals() {
        arr = []
        for (let i = 0; i < numberOfIntervals; i++) {
            index = Math.floor(Math.random() * intervalExercise.length)
            arr[i] = intervalExercise[index];
            intervalExercise.splice(index, 1);
        }
        arr.sort(function (a, b) { return a - b })
        return arr;
    }
    
    function setFundamental() {
        scope = limits.max - limits.min - intervals[intervals.length - 1];
        //Este algoritmo se sale de los límite por que no tiene en cuanta los valores negativos CORREGIR
        note = Math.floor(Math.random() * scope) + limits.min;
        return note;
    }

    function buildStream() {
        var stream = [];
        elapsedTime = time;
        stream[0] = new Note(fundamental,
            0,
            1);
        for (let i = 0; i < numberOfIntervals; i++) {
            stream[i + 1] = new Note(fundamental + intervals[i] * direction,
                0 + elapsedTime,
                1);
            elapsedTime += time;
        }
        return stream;
    }
}

