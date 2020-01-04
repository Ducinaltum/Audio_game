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
            notes: [4, 7, 12],
            direction: 1,
            timing: 1,
            pitch: 48,
            iterations: 20,
        }
        return level
    },
    2: function () {
        console.log(level)
        var level = intervalsLevels[1]();
        level.direction = -1
        console.log(level)
        return level
    },
    3: function () {
        var level = intervalsLevels[1]();
        level.timing = 0
        return level

    },
    4: function () {
        var level = {
            notes: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            pitch: 48,
            iterations: 30
        }
        return level
    },
    //Intervalos de 3ra mayor quinta y octava en Do en distintas octavas Aleatorio
    5: function () {
        var level = {
            notes: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 3ra mayor quinta y octava en distintas octavas fundamental aleatoria
    6: function () {
        var level = {
            notes: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },

//---------------------------------------------------------------------------------------------//
    
    //Intervalos de inversión de 3Mayor quinta y octava en DO
    7: function () {
        var level = {
            fundamental: 12,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            direction: 1,
            timing: 1,
            pitch: 48,
            iterations: 10,
        }
        return level
    },
    8: function () {
        var level = {
            fundamental: 12,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            direction: -1,
            timing: 1,
            pitch: 48,
            iterations: 10,
        }
        return level
    },
    9: function () {
        var level = {
            fundamental: 50,
            intervals: [5, 8, 12],
            direction: 1,
            timing: 0,
            iterations: 10,
            isRelationInverted: true,
        }
        return level

    },
    10: function () {
        var level = {
            fundamental: 50,
            intervals: [5, 8, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
            isRelationInverted: true,
        }
        return level
    },
    //Intervalos de inversión de 3ra mayor quinta y octava en Do en distintas octavas Aleatorio
    11: function () {
        var level = {
            get fundamental() { return 50 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [5, 8, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30,
            isRelationInverted: true,
        }
        return level
    },
    //Intervalos de inversión de 3ra mayor quinta y octava en distintas octavas fundamental aleatoria
    12: function () {
        var level = {
            intervals: [5, 8, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30,
            isRelationInverted: true,
        }
        return level
    },


//---------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------//

    //Intervalos de 2 mayor, 6 mayor y 7 mayor
    13: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 9, 11],
            direction: 1,
            timing: 1,
            iterations: 20
        }
        return level
    },
    14: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 9, 11],
            direction: -1,
            timing: 1,
            iterations: 20
        }
        return level
    },
    15: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 9, 11],
            direction: 1,
            timing: 0,
            iterations: 20
        }
        return level

    },
    16: function () {
        var level = {
            fundamental: 48,
            intervals: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20
        }
        return level
    },
    //Intervalos de 2 mayor, 6 mayor y 7 mayor en distintas octavas Aleatorio
    17: function () {
        var level = {
            get fundamental() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20
        }
        return level
    },
    //Intervalos de 2 mayor, 6 mayor y 7 mayor en distintas octavas fundamental aleatoria
    18: function () {
        var level = {
            intervals: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
        }
        return level;
    },

    //Intervalos de inversión de 2 mayor, 6 mayor y 7 mayor
    19: function () {
        var level = {
            fundamental: 50,
            intervals: [1, 3, 10],
            direction: 1,
            timing: 1,
            iterations: 20,
            isRelationInverted: true,
        }
        return level
    },
    20: function () {
        var level = {
            fundamental: 50,
            intervals: [1, 3, 10],
            direction: -1,
            timing: 1,
            iterations: 20,
            isRelationInverted: true,
        }
        return level
    },
    21: function () {
        var level = {
            fundamental: 50,
            intervals: [1, 3, 10],
            direction: 1,
            timing: 0,
            iterations: 20,
            isRelationInverted: true,
        }
        return level

    },
    22: function () {
        var level = {
            fundamental: 50,
            intervals: [1, 3, 10],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
            isRelationInverted: true,
        }
        return level
    },
    //Intervalos de inversión de 2 mayor, 6 mayor y 7 mayor en distintas octavas Aleatorio
    23: function () {
        var level = {
            get fundamental() { return 50 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [1, 3, 10],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
            isRelationInverted: true,
        }
        return level
    },
    //Intervalos de inversión de 2 mayor, 6 mayor y 7 mayor en distintas octavas fundamental aleatoria
    24: function () {
        var level = {
            intervals: [1, 3, 10],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
            isRelationInverted: true,
        }
        return level;
    },

//---------------------------------------------------------------------------------------------//

    //Intervalos de escala mayor en distintas octavas en Do Aleatorio
    25: function () {
        var level = {
            get fundamental() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            get realIntervals() {
                var ints = []
                for (var i = 1; i < 13; i++) {
                    ints.push(i)
                }
                ints.splice(5,1)
                return ints
            },
            intervals: [2, 4, 5, 7, 9, 11, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level
    },

    //Intervalos que se generan gracias a la escala de DO
    //BONUS LEVEL --> Se agrega el tritono
    25: function () {
        var level = {
            get fundamental() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            get realIntervals() {
                var ints = []
                for (var i = 1; i < 13; i++) {
                    ints.push(i)
                }
                return ints
            },
            intervals: [2, 4, 5, 7, 9, 11, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level
    },


    //Intervalos de escala mayor en distintas octavas fundamental aleatoria
    30: function () {
        var level = {
            get intervals() {
                var ints = []
                for (var i = 1; i < 13; i++) {
                    ints.push(i)
                }
                return ints
            },
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
        }
        return level;
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
    if (currentExercise != null) {
        if (currentExercise.getKindOfExercise() != 'Intervals') {
            progressRestore()
        }
    }
    currentExercise = new IntervalsExercise(Number(this.id.slice(3)));
    goToExercise();
})



/*
Usar el concepto de pairFundamental: Armar el intervalo y después acomodarlo a las necesidades
*/