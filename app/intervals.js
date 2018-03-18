const sonorities = {
    "PerfectConsonances": [5, 7, 12],
    "NearConsonances": [3, 4],
    "NearDisonances": [1, 2],
    "FarConsonances": [8, 9],
    "FarDisonances": [6, 10, 11],
}

function IntervalsExercise(actualLevel = user.intervalsLevel) {
    typeOfExercise = 'Intervals'
    ready = true;
    level = clamp(actualLevel, info.intervalsMaxLevel);
    simultaneousIntervals = 1;
    exercise = setIntervalLevel()
    intervalManager = new LevelManager(this.level);
    showScreen(typeOfExercise)
    deactivateIntervalsButtons(typeOfExercise, exercise)

    createInterval();

    this.getKindOfExercise = function () { return typeOfExercise }
    this.getLevel = function () { return level }
    this.getNumberOfIntervals = function () { return simultaneousIntervals }

    function createInterval() {
        ready = true;
        var sendExercise = exercise.slice(0)
        interval = new Interval(sendExercise, setTiming(), setDirection(), simultaneousIntervals)
        loadOnBuffer(interval.notes);
    }

    this.checkResponse = function (response) {
        if (ready) {
            ready = false;
            currentIntervals = interval.getIntervals()
            score = 0
            for (var i = 0; i < currentIntervals.length; i++) {
                var hit = false;
                correctIntervalButtonAnswer(typeOfExercise, currentIntervals[i])
                for (let n = 0; n < response.length; n++) {
                    if (response[n] == currentIntervals[i]) {
                        hit = true;
                        score++;
                        response.splice(n, 1)
                    }
                }
                if (!hit) {
                    intervalManager.addScore(0);
                }
            }
            for (var fail in response) failIntervalButtonAnswer(typeOfExercise, response[fail])
            score /= currentIntervals.length
            intervalManager.addScore(score)
            if (score == 1) updateFeedback("¡Correcto!", 'success')
            else if (score > 0) updateFeedback("¡Medianamente correcto!", 'warning')
            else updateFeedback("¡Incorrecto!", 'danger')
            setTimeout(function () {
                resetElements(typeOfExercise)
                if (!intervalManager.hasFinishedLevel(level, typeOfExercise)) {
                    createInterval()
                }
            }, 1000);
        }
    }

    function setIntervalLevel() {
        procesedLevel = Math.floor(level / 4)
        if(procesedLevel < 10) simultaneousIntervals = 1;
        else if(procesedLevel >= 10 && procesedLevel < 18) simultaneousIntervals = 2;
        else simultaneousIntervals = 3;
        levelStructure = [];
        switch (procesedLevel) {
            case 0:
                //Consonancias perfectas
                return levelStructure.concat(sonorities.PerfectConsonances);
                break;
            case 1:
                //Consonancias cercanas
                return levelStructure.concat(sonorities.NearConsonances);
                break;
            case 2:
                //Consonancias perfectas y //Consonancias cercanas
                return levelStructure.concat(sonorities.PerfectConsonances)
                    .concat(sonorities.NearConsonances)
                return levelStructure
                break;
            //Disonancias cercanas
            case 3:
                return levelStructure.concat(sonorities.NearDisonances);
                break;
            //Consonancias perfectas, consonancias cercanas y disonancias cercanas
            case 4:
                return levelStructure.concat(sonorities.PerfectConsonances)
                    .concat(sonorities.NearConsonances)
                    .concat(sonorities.NearDisonances);
                break;
            //Consonancias lejanas
            case 5:
                return levelStructure.concat(sonorities.FarConsonances);
                break;
            case 6:
                return levelStructure.concat(sonorities.PerfectConsonances)
                    .concat(sonorities.NearConsonances)
                    .concat(sonorities.NearDisonances)
                    .concat(sonorities.FarConsonances);
                break;
            //Disonancias lejanas
            case 7:
                return levelStructure.concat(sonorities.FarDisonances);
                break;
            //Todos los intervalos dentro de la octava
            case 8:
                for (var i = 1; i < 13; i++) {
                    levelStructure.push(i)
                }
                return levelStructure
                break;
            //Intervalos compuestos
            case 9:
                for (var i = 1; i < 25; i++) {
                    levelStructure.push(i)
                }
                return levelStructure;
                break;

            //Tres notas

            //Intervalos perfectos
            case 10:
                return levelStructure.concat(sonorities.PerfectConsonances);
                break;
            //Intervalos perfectos 2 octavas
            case 11:
                levelStructure = levelStructure.concat(sonorities.PerfectConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                return levelStructure
                break;
            case 12:
                //3ras y 6tas
                return levelStructure.concat(sonorities.NearConsonances)
                    .concat(sonorities.FarConsonances)
                break;
            //3ras y 6tas 2 octavas
            case 13:
                levelStructure = levelStructure.concat(sonorities.NearConsonances)
                    .concat(sonorities.FarConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                return levelStructure;
                break;
            //Perfectos 3ras y 6tas 2 octavas
            case 14:
                levelStructure = levelStructure.concat(sonorities.PerfectConsonances)
                    .concat(sonorities.NearConsonances)
                    .concat(sonorities.FarConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                return levelStructure;
                break;
            //2das y 7mas
            case 15:
                levelStructure = levelStructure.concat(sonorities.NearDisonances)
                    .concat(sonorities.FarDisonances)
                break;
            //2das y 7mas 2 octavas
            case 16:
                levelStructure = levelStructure.concat(sonorities.NearDisonances)
                    .concat(sonorities.FarDisonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                return levelStructure;
                return levelStructure
                break;
            //Todo 2 octavas
            case 17:
                intervals = [];
                for (var i = 1; i < 25; i++) {
                    intervals.push(i)
                }
                return intervals;
                break;

            //Cuatro notas

            //Intervalos perfectos
            case 10:
                return levelStructure.concat(sonorities.PerfectConsonances);
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                break;
            //Intervalos perfectos 3 octavas
            case 11:
                levelStructure = levelStructure.concat(sonorities.PerfectConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 2)
                }));
                return levelStructure
                break;
            case 12:
                //3ras y 6tas
                return levelStructure.concat(sonorities.NearConsonances)
                    .concat(sonorities.FarConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                break;
            //3ras y 6tas 3 octavas
            case 13:
                levelStructure = levelStructure.concat(sonorities.NearConsonances)
                    .concat(sonorities.FarConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 2)
                }));
                return levelStructure;
                break;
            //Perfectos 3ras y 6tas 3 octavas
            case 14:
                levelStructure = levelStructure.concat(sonorities.PerfectConsonances)
                    .concat(sonorities.NearConsonances)
                    .concat(sonorities.FarConsonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 2)
                }));
                return levelStructure;
                break;
            //2das y 7mas
            case 15:
                levelStructure = levelStructure.concat(sonorities.NearDisonances)
                    .concat(sonorities.FarDisonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                break;
            //2das y 7mas 3 octavas
            case 16:
                levelStructure = levelStructure.concat(sonorities.NearDisonances)
                    .concat(sonorities.FarDisonances)
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 1)
                }));
                levelStructure = levelStructure.concat(levelStructure.map(function (x) {
                    return octavate(x, 2)
                }));
                return levelStructure
                break;
            //Todo 2 octavas
            case 17:
                intervals = [];
                for (var i = 1; i < 37; i++) {
                    intervals.push(i)
                }
                return intervals;
                break;
        }
    }

    function setNumberOfIntervals() {
        Mathf.loor(Math.floor(level / 4) / 9)
    }

    function setTiming() {
        if (this.level == info.intervalsMaxLevel || this.level % 4 == 3) return Math.floor(Math.random() * 2);
        if (this.level % 4 < 2) return 1;
        return 0;
    }

    function setDirection() {
        if (level % 4 == 0) return 1;
        else if (level % 4 == 1) return -1;
        return (Math.floor(Math.random() * 2) - 0.5) * 2;
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
        if (direction < 0) note += intervals[intervals.length - 1];
        return note;
    }

    function buildStream() {
        var stream = [];
        elapsedTime = time;
        stream[0] = new Note(fundamental,
            0,
            1);
        for (let i = 0; i < numberOfIntervals; i++) {
            stream[i + 1] = new Note(fundamental + intervals[i],
                0 + elapsedTime,
                1);
            elapsedTime += time;
        }
        return stream;
    }
}

