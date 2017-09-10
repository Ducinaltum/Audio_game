const limits = {
    "min": 20,
    "max": 108
}

const sonorities = {
    "PerfectConsonances": [0, 5, 7, 12],
    "NearConsonances": [3, 4],
    "NearDisonances": [1, 2],
    "FarConsonances": [8, 9],
    "FarDisonances": [6, 10, 11],
}

function simpleIntervals(initLevel) {
    var maxLevel = 33
    var level = initLevel;
    var fundamental;
    var interval;
    var direction;
    var delay;
    var exercise = [];
    //Se define que intervalos se van a presentar
    var exercise = setIntervalLevel(level);

    this.selectInterval = function() {

        //En base al nivel se especifica si es ascendente o descendente, armónico o melódico
        delay = setTiming(level);
        direction = setDirection(level, delay);
        //Se selecciona el intervalo
        interval = exercise[Math.floor(Math.random() * exercise.length)];
        interval *= direction;
        //Se elige la fundamental en base a los límites y el intervalo elegido
        fundamental = setFundamental(interval);
        //Se cre la línea melódica y
        //buildStream();
        //Se manda a reproducir
        loadOnBuffer(buildStream());
    }

    this.getInterval = function(){
        return interval;
    }

    function buildStream() {
        var stream = [];
        stream[0] = new Note(fundamental,
            0,
            1);
        stream[1] = new Note(fundamental + (interval * direction),
            0 + delay,
            1);
        return stream;
    }

    function setFundamental(distance) {
        var scope = limits.max - limits.min - Math.abs(distance);
        var note = Math.floor(Math.random() * scope) + limits.min;
        if (distance < 0) note += Math.abs(distance);
        return note;
    }

    function setTiming(lvl) {
        if (lvl == maxLevel || lvl % 4 == 3) return Math.floor(Math.random() * 2);
        if (lvl % 4 < 2) return 1;
        return 0;
    }

    function setDirection(lvl, del) {
        if (del == 0 || lvl % 4 == 0) return 1;
        else if (lvl % 4 == 1) return -1;
        return (Math.floor(Math.random() * 2) - 0.5) * 2;
    }

    function setIntervalLevel(lvl) {
        var levelStructure = [];
        switch (Math.floor(lvl / 4)) {
            //Consonancias perfectas
            case 0:
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
                return [Math.floor(Math.random() * 13)]
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


}