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
    exercise = setIntervalLevel()
    intervalManager = new LevelManager(this.level);   
    showScreen(typeOfExercise) 
    deactivateIntervalsButtons(typeOfExercise, exercise)

    createInterval();
 
    this.getKindOfExercise = function(){return typeOfExercise}
    this.getLevel = function(){return level}
    
    function createInterval(){
        ready = true;
        interval = new Interval (exercise, setTiming(), setDirection())
        loadOnBuffer(interval.notes);
    }

    this.checkResponse = function (response) {
        if (ready) {
            ready = false;
            currentInterval = Math.abs(interval.interval)
            correctIntervalButtonAnswer(typeOfExercise, currentInterval)
            if (response == currentInterval) {
                intervalManager.addScore(1)
                updateFeedback("¡Correcto!", 'success')
            }
            else {
                intervalManager.addScore(0);
                failIntervalButtonAnswer(typeOfExercise, response)
                updateFeedback("¡Incorrecto!", 'danger')
            }

            setTimeout(function () {
                resetElements(typeOfExercise)
                if (!intervalManager.hasFinishedLevel(level, typeOfExercise)) {
                    createInterval()
                }
            }, 1000);
        }
    }

    function setIntervalLevel() {
        levelStructure = [];
        switch (Math.floor(level / 4)) {
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
            //Se devuelve un valor random directamente, el ramdom de la llamada 
            //posterior solo podrá tomar el valor que retorne ésta función
            case 8:
                intervals = [];
                for(var i = 0; i < 14; i++){
                    intervals.push(i)
                }
                return intervals
                break;
            //Intervalos compuestos
            case 9:
                intervals = [];
                for(var i = 0; i < 25; i++){
                    intervals.push(i)
                }
                return intervals;
                break;
            //Todo el puto registro sonoro
            default:
                break;
        }
    }

    function setTiming() {
        if (this.level == info.intervalsMaxLevel || this.level % 4 == 3) return Math.floor(Math.random() * 2);
        if (this.level % 4 < 2) return 1;
        return 0;
    }

    function setDirection()  {
        if (level % 4 == 0) return 1;
        else if (level % 4 == 1) return -1;
        return (Math.floor(Math.random() * 2) - 0.5) * 2;
    }
   
}

function Interval(ex, timing, dir){
    //si tomo un enfoque similar a chords capaz que no necesite el timing
    this.exercise = ex;
    this.direction = dir;
    this.time = timing;
    this.interval = this.exercise[Math.floor(Math.random() * this.exercise.length)] * this.direction;

    this.setFundamental = function() {
        scope = limits.max - limits.min - Math.abs(this.interval);
        //Este algoritmo se sale de los límite por que no tiene en cuanta los valores negativos CORREGIR
        note = Math.floor(Math.random() * scope) + limits.min;
        if (this.direction < 0) note += Math.abs(this.interval);
        return note;
    }

    this.buildStream = function() {
        var stream = [];
        stream[0] = new Note(this.fundamental,
            0,
            1);
        stream[1] = new Note(this.fundamental + this.interval,
            0 + this.time,
            1);
        return stream;
    }
    this.fundamental = this.setFundamental();
    this.notes = this.buildStream();
} 

