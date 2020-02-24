var user = {
    id: "",
    statistics: {},
    gameProgres: {}
}

/* RESCATE
user.statistics = {
    "20200017": {
        "intervals": {
            "6": { "correct": 1, "times": 3 },
            "7": { "correct": 2, "times": 5 },
            "12": { "correct": 2, "times": 7 }
        }
    },
    "20200117": {
        "intervals": {
            "5": { "correct": 2, "times": 5 },
            "6": { "correct": 4, "times": 12 }, "7": { "correct": 4, "times": 13 }, "12": { "correct": 5, "times": 15 }
        }
    },
    "20200118": {
        "intervals": {
            "6": { "correct": 3, "times": 5 }, "7": { "correct": 4, "times": 6 },
            "12": { "correct": 0, "times": 4 }
        }
    },
    "20200120": {
        "intervals": {
            "13": { "correct": 0, "times": 1 }, "14": { "correct": 2, "times": 2 },
            "15": { "correct": 1, "times": 1 }, "16": { "correct": 1, "times": 3 },
            "17": { "correct": 2, "times": 3 }, "18": { "correct": 0, "times": 1 },
            "19": { "correct": 2, "times": 3 }, "20": { "correct": 1, "times": 4 },
            "21": { "correct": 4, "times": 4 }, "22": { "correct": 1, "times": 2 },
            "23": { "correct": 4, "times": 4 }, "24": { "correct": 2, "times": 2 }
        },
        "chords": {
            "minor": { "correct": 9, "times": 12 }, "major": { "correct": 5, "times": 10 },
            "aug": { "correct": 5, "times": 6 }, "dim": { "correct": 5, "times": 7 },
            "dim/b7": { "correct": 1.5, "times": 6 }, "aug/majj7": { "correct": 2, "times": 4 },
            "minor/majj7": { "correct": 2, "times": 4 }, "major/7": { "correct": 3.5, "times": 4 },
            "aug/7": { "correct": 1, "times": 1 }, "major/majj7": { "correct": 1, "times": 1 },
            "dim/7": { "correct": 1, "times": 2 }, "aug/majj7/#11": { "correct": 1.3333333333333333, "times": 4 },
            "aug/7/#11": { "correct": 0.3333333333333333, "times": 2 },
            "aug/majj7/9": { "correct": 0.6666666666666666, "times": 2 },
            "minor/majj7/13": { "correct": 0, "times": 4 }, "major/7/9": { "correct": 0, "times": 1 },
            "dim/7/11": { "correct": 0, "times": 1 }, "minor/majj7/11": { "correct": 0, "times": 2 },
            "aug/7/9": { "correct": 0, "times": 1 }, "major/majj7/9": { "correct": 0, "times": 1 }
        }
    }
}*/

function SaveManager(ex) {
    typeofExercice = ex.toLowerCase()
    this.storeValues = function (obj) {
        save = {};
        save[typeofExercice] = obj;
        date = setDate();
        savePoint = user.statistics
        if (!(date in savePoint)) {
            savePoint[date] = save;
        } else {
            savePoint[date] = mergeObjectsAdd(savePoint[date], save)
        }
    }
    setDate = function () {
        var d = new Date();
        d = formatDates(d)
        return d;
    }

    this.flushUser = function () {
        localStorage.setItem("statistics", JSON.stringify(user.statistics));
        localStorage.setItem("gameProgres", JSON.stringify(user.gameProgres));
    }
}

$('#document').ready(function () {
    if (localStorage.length == 0) {
        localStorage.setItem("statistics", JSON.stringify(user.statistics));
        localStorage.setItem("gameProgres", JSON.stringify(user.gameProgres));
    } else {
        user.statistics = JSON.parse(localStorage.getItem("statistics"))
        user.gameProgres = JSON.parse(localStorage.getItem("gameProgres"))
    }
})

var winText = {
    primary: '¡Has superado este nivel!',
}

var looseText = {
    primary: 'No has logrado superar este nivel',
    secondary: 'Puedes intentarlo de nuevo'
}

