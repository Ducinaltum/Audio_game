const sonorities = {
    "PerfectConsonances": [0, 5, 7, 12],
    "NearConsonances": [3, 4],
    "NearDisonances": [1, 2],
    "FarConsonances": [8, 9],
    "FarDisonances": [6, 10, 11],
}

function simpleIntervals() {
    var intervalManager = new LevelManager(info.intervalsMaxLevel, user.intervalLevel);
    //Se define que intervalos se van a presentar
    this.exercise = setIntervalLevel(intervalManager.level);
    UImanager = new ButtonBasedUIManager("Intervals");
    UImanager.deactivateButtons(this.exercise);
    
 
    this.createInterval = function (){
        interval = new Interval (this.exercise, setTiming(), setDirection())
        loadOnBuffer(interval.notes);
    }

    this.checkResponse = function(r){
        var response = r;
        var score = 0;
        if(response == interval.interval) score = 1;
        else score = -1;
        intervalManager.addScore(score);
        UImanager.setFeedback(response, interval.interval);
        setTimeout(function(){ 
            UImanager.restoreUIElements();
        }, 500);
        this.checkLevel();
    }

    this.checkLevel = function(){
        switch(intervalManager.controlNextLevel()){
            case 0:
                this.exercise = setIntervalLevel(intervalManager.level);
                UImanager = new ButtonBasedUIManager("Intervals");
                UImanager.deactivateButtons(this.exercise);
                break;
            case 1:    
                this.exercise = setIntervalLevel(intervalManager.level);
                UImanager = new ButtonBasedUIManager("Intervals");
                UImanager.deactivateButtons(this.exercise);
                break;
            case 2:
                this.createInterval()
                break;
        }
    }

    function setIntervalLevel(lvl) {
        var levelStructure = [];
        switch (Math.floor(lvl / 4)) {
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
                return [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
                break;
            //Intervalos compuestos
            case 9:
                return [Math.floor(Math.random() * 25)]
                break;
            //Todo el puto registro sonoro
            default:
                break;
        }
    }

    function setTiming(lvl) {
        if (intervalManager.level == intervalManager.maxLevel || intervalManager.level % 4 == 3) return Math.floor(Math.random() * 2);
        if (intervalManager.level % 4 < 2) return 1;
        return 0;
    }

    function setDirection() {
        if (intervalManager.level % 4 == 0) return 1;
        else if (intervalManager.level % 4 == 1) return -1;
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
        //Este algoritmo se sale de los límite CORREGIR
        var scope = limits.max - limits.min - Math.abs(this.interval);
        var note = Math.floor(Math.random() * scope) + limits.min;
        if (this.direction < 0) note += Math.abs(this.interval);
        return note;
    }
    this.buildStream = function() {
        //Creo quye no es necesario pasar la dureción de la nota
        var stream = [];
        stream[0] = new Note(this.fundamental,
            0,
            1);
        stream[1] = new Note(this.fundamental + (this.interval * this.direction),
            0 + this.time,
            1);
        return stream;
    }
    this.fundamental = this.setFundamental();
    this.notes = this.buildStream();
} 

