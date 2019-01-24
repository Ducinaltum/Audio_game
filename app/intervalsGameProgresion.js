const sonorities = {
    "PerfectConsonances": [5, 7, 12],
    "NearConsonances": [3, 4],
    "NearDisonances": [1, 2],
    "FarConsonances": [8, 9],
    "FarDisonances": [6, 10, 11],
}

var intervalsLevels = {
    //Custom level
    0: function (ints, dir, time, iter) {
        var level = {
            //fundamental : 48,
            intervals: ints,
            direction: dir,
            timing: time,
        }
        return level
    },

    //Intervalos de 3Mayor quinta y octava en DO
    1: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            direction: 1,
            timing: 1,
            iterations: 20
        }
        return level
    },
    2: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            direction: -1,
            timing: 1,
            iterations: 20
        }
        return level
    },
    3: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            direction: 1,
            timing: 0,
            iterations: 20
        }
        return level

    },
    4: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 3ra mayor quinta y octava en Do en distintas octavas Aleatorio
    5: function () {
        var level = {
            get fundamental() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 3ra mayor quinta y octava en distintas octavas fundamental aleatoria
    6: function () {
        var level = {
            intervals: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 2 mayor, 4 Justa, 6 mayor y 7 mayor
    7: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 5, 9, 11],
            direction: 1,
            timing: 1,
            iterations: 20
        }
        return level
    },
    8: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 5, 9, 11],
            direction: -1,
            timing: 1,
            iterations: 20
        }
        return level
    },
    9: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 5, 9, 11],
            direction: 1,
            timing: 0,
            iterations: 20
        }
        return level

    },
    10: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 5, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 2 mayor, 4 Justa, 6 mayor y 7 mayor en distintas octavas Aleatorio
    11: function () {
        var level = {
            get fundamental() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [2, 5, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level
    },
    //Intervalos de 2 mayor, 4 Justa, 6 mayor y 7 mayor en distintas octavas Aleatorio
    12: function () {
        var level = {
            intervals: [2, 5, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level;
    },
    //Intervalos de escala mayor en distintas octavas en Do Aleatorio
    13: function () {
        var level = {
            get fundamental() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [2, 4, 5, 7, 9, 11, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level
    },
    //Intervalos de escala mayor en distintas octavas fundamental aleatorio
    14: function () {
        var level = {
            intervals: [2, 4, 5, 7, 9, 11, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level;
    },
    //Intervalos de 6menor, 4 Justa y Octava Justa con Do como nota final
    15: function () {
        var level = {
            fundamental: 48,
            intervals: [5, 8, 12],
            direction: 1,
            timing: 1,
            isInverted: true,
            iterations: 20
        }
        return level
    },
    16: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            direction: -1,
            timing: 1,
            isInverted: true,
            iterations: 20
        }
        return level
    },
    17: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            direction: 1,
            timing: 0,
            isInverted: true,
            iterations: 20
        }
        return level

    },
    18: function () {
        var level = {
            fundamental: 48,
            intervals: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            isInverted: true,
            iterations: 30
        }
        return level
    },

    /*
    : function () {
        var level = {}
        level.intervals = []
        for (var i = 1; i < 13; i++) {
            level.intervals.push(i)
        }
        return level;
    }*/
}

$('#intervalsSelection .list-group-item').click(function (e) {
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

