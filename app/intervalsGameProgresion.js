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
            fundamental: 0,
            pitch: 48,
            notes: [4, 7, 12],
            direction: 1,
            timing: 1,
            iterations: 20,
        }
        return level
    },
    2: function () {
        var level = {
            fundamental: 0,
            pitch: 48,
            notes: [4, 7, 12],
            direction: -1,
            timing: 1,
            iterations: 20,
        }
        return level
    },
    3: function () {
        var level = {
            fundamental: 0,
            pitch: 48,
            notes: [4, 7, 12],
            direction: 1,
            timing: 0,
            iterations: 20,
        }
        return level

    },
    4: function () {
        var level = {
            fundamental: 0,
            pitch: 48,
            notes: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 3ra mayor quinta y octava en Do en distintas octavas Aleatorio
    5: function () {
        var level = {
            fundamental: 0,
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            notes: [4, 7, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de 3ra mayor quinta y octava en distintas octavas fundamental aleatoria
    6: function () {
        var level = {
            fundamental: 0,
            pitch: undefined,
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
            pitch: 48,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            direction: 1,
            timing: 1,
            iterations: 10,
        }
        return level
    },
    8: function () {
        var level = {
            fundamental: 12,
            pitch: 48,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            direction: -1,
            timing: 1,
            iterations: 10,
        }
        return level
    },
    9: function () {
        var level = {
            fundamental: 12,
            pitch: 48,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            direction: 1,
            timing: 0,
            iterations: 10,
        }
        return level
    },
    10: function () {
        var level = {
            fundamental: 12,
            pitch: 48,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
        }
        return level
    },
    //Intervalos de inversión de 3ra mayor quinta y octava en Do en distintas octavas Aleatorio
    11: function () {
        var level = {
            fundamental: 12,
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de inversión de 3ra mayor quinta y octava en distintas octavas fundamental aleatoria
    12: function () {
        var level = {
            fundamental: 12,
            pitch: undefined,
            intervals: [5, 8, 12],
            notes: [0, 4, 7],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30,
        }
        return level
    },


//---------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------//

    //Intervalos de 2 mayor, 6 mayor y 7 mayor
    13: function () {
        var level = {
            fundamental:0,
            pitch: 48,
            notes: [2, 9, 11],
            direction: 1,
            timing: 1,
            iterations: 20,
        }
        return level
    },
    14: function () {
        var level = {
            fundamental:0,
            pitch: 48,
            notes: [2, 9, 11],
            direction: -1,
            timing: 1,
            iterations: 20,
        }
        return level
    },
    15: function () {
        var level = {
            fundamental:0,
            pitch: 48,
            notes: [2, 9, 11],
            direction: 1,
            timing: 0,
            iterations: 20,
        }
        return level
    },
    16: function () {
        var level = {
            fundamental: 0,
            pitch: 48,
            notes: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20
        }
        return level
    },
    //Intervalos de 2 mayor, 6 mayor y 7 mayor en distintas octavas Aleatorio
    17: function () {
        var level = {
            fundamental:0,
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            notes: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20
        }
        return level
    },
    //Intervalos de 2 mayor, 6 mayor y 7 mayor en distintas octavas fundamental aleatoria
    18: function () {
        var level = {
            fundamental: 0,
            pitch: undefined,
            notes: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
        }
        return level;
    },

//---------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------//

    //Intervalos de inversión de 2 mayor, 6 mayor y 7 mayor
    19: function () {
        var level = {
            fundamental: 12,
            pitch: 50,
            intervals: [1,3,10],
            notes: [2, 9, 11],
            direction: 1,
            timing: 1,
            iterations: 20,
        }
        return level
    },
    20: function () {
        var level = {
            fundamental: 12,
            pitch: 50,
            intervals: [1,3,10],
            notes: [2, 9, 11],
            direction: -1,
            timing: 1,
            iterations: 20,
        }
        return level
    },
    21: function () {
        var level = {
            fundamental: 12,
            pitch: 50,
            intervals: [1, 3, 10],
            notes: [2, 9, 11],
            direction: 1,
            timing: 0,
            iterations: 20,
        }
        return level

    },
    22: function () {
        var level = {
            fundamental: 12,
            pitch: 50,
            intervals: [1, 3, 10],
            notes: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
        }
        return level
    },
    //Intervalos de inversión de 2 mayor, 6 mayor y 7 mayor en distintas octavas Aleatorio
    23: function () {
        var level = {
            fundamental: 12,
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [1, 3, 10],
            notes: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20,
        }
        return level
    },
    //Intervalos de inversión de 2 mayor, 6 mayor y 7 mayor en distintas octavas fundamental aleatoria
    24: function () {
        var level = {
            fundamental: 12,
            pitch: undefined,
            intervals: [1, 3, 10],
            notes: [2, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 20
        }
        return level;
    },

//---------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------//


    //Intervalos de escala mayor
    25: function () {
        var level = {
            fundamental:0,
            pitch:48,
            intervals:  [2,4,5,7,9,11,12],
            notes: [2,4,5,7,9,11,12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en inversión
    26: function () {
        var level = {
            fundamental:12,
            pitch:50,
            intervals: [1,3,5,7,8,10,12],
            notes: [2,4,5,7,9,11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en distintas octavas en Do Aleatorio
    27: function () {
        var level = {
            get fundamental() { return Math.floor(Math.random() * 2) * 12 },
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [1,2,3,4,5,7,8,9,10,11,12],
            notes: [2,4,5,7,9,11,12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos que se forman con las notas de la escala de DO
    28: function () {
        var level = {
            get fundamental() { 
                fundamentalNotes = [2,4,5,7,9,11,12]
                return fundamentalNotes[Math.floor(Math.random() * fundamentalNotes.length)]
            },
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [1,2,3,4,5,6,7,8,9,10,11,12],
            notes: [2,4,5,7,9,11,12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //TODOS los intervalos dentro de la octava
    29: function () {
        var level = {
            get fundamental() { return Math.floor(Math.random() * 2) * 12 },
            pitch: undefined,
            intervals: [1,2,3,4,5,6,7,8,9,10,11,12],
            notes: [1,2,3,4,5,6,7,8,9,10,11,12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },

//---------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------//

    //DOBLE OCTAVA
    //Intervalos de escala mayor en DO
    30: function () {
        var level = {
            fundamental:0,
            pitch:48,
            intervals: [14,16,17,19,21,23,24],
            notes: [14,16,17,19,21,23,24],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor fundamental aleatoria
    31: function () {
        var level = {
            fundamental:0,
            pitch:undefined,
            intervals: [14,16,17,19,21,23,24],
            notes: [14,16,17,19,21,23,24],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en inversión en DO
    32: function () {
        var level = {
            fundamental:24,
            pitch:50,
            intervals: [13,15,17,19,20,22,24],
            notes: [0,2,4,5,7,9,11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en inversión fundamental aleatoria
    33: function () {
        var level = {
            fundamental:24,
            pitch:50,
            intervals: [13,15,17,19,20,22,24],
            notes: [0,2,4,5,7,9,11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },

    //Todos los intervalos compuestos
    34: function () {
        var level = {
            fundamental:0,
            pitch: undefined,
            get intervals() { 
                ints = []
                for (var i = 13; i < 25; i++) {
                    ints.push(i)
                }
                return ints
            },
            get notes() { 
                ints = []
                for (var i = 13; i < 25; i++) {
                    ints.push(i)
                }
                return ints
            },
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },

    //TODOS LOS INTERVALOS
    35: function () {
        var level = {
            fundamental:0,
            pitch: undefined,
            get intervals() { 
                ints = []
                for (var i = 1; i < 24; i++) {
                    ints.push(i)
                }
                return ints
            },
            get notes() { 
                ints = []
                for (var i = 1; i < 24; i++) {
                    ints.push(i)
                }
                return ints
            },
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    }
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