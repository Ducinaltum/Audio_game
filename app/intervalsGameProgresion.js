const sonorities = {
    "PerfectConsonances": [5, 7, 12],
    "NearConsonances": [3, 4],
    "NearDisonances": [1, 2],
    "FarConsonances": [8, 9],
    "FarDisonances": [6, 10, 11],
}

var intervalsLevels = {
    0: function () {
        return [].concat(sonorities.PerfectConsonances);
    },
    1: function () {
        return [].concat(sonorities.NearConsonances);
    },
    2: function () {
        return [].concat(sonorities.PerfectConsonances)
            .concat(sonorities.NearConsonances)
    },
    3: function () {
        return [].concat(sonorities.NearDisonances);
    },
    4: function () {
        return [].concat(sonorities.PerfectConsonances)
            .concat(sonorities.NearConsonances)
            .concat(sonorities.NearDisonances);
    },
    5: function () {
        return [].concat(sonorities.FarConsonances);
    },
    6: function () {
        return [].concat(sonorities.PerfectConsonances)
            .concat(sonorities.NearConsonances)
            .concat(sonorities.NearDisonances)
            .concat(sonorities.FarConsonances);
    },
    7: function () {
        return [].concat(sonorities.FarDisonances);
    },
    8: function () {
        var levelStructure = []
        for (var i = 1; i < 13; i++) {
            levelStructure.push(i)
        }
        return levelStructure;
    },
    9: function () {
        var levelStructure = []
        for (var i = 1; i < 25; i++) {
            levelStructure.push(i)
        }
        return levelStructure;
    },
}

$('#intervalsSelection .list-group-item').click(function (e) {
    var selectedExercise = this.id;
    var initLevel = 0;
    var levelSelected = Number(this.id.slice(3))
    if (currentExercise != null) {
        if (currentExercise.getKindOfExercise() != 'Intervals') {
            progressRestore()
        }
    }
    initLevel += Number($('#intervalMode .btn-primary').attr('id'))
    currentExercise = new IntervalsExercise((levelSelected * 4) + initLevel);
    goToExercise();
})

