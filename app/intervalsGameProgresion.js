/*
MODE: Juego
WORLD: Intervalos que se usan
AREA: Gradaciones de un WORLD
ZONE: Ejercicios en sincronía
EXERCISE: Ejercicio definido
LEVEL: Ejercicio de modalidad única
BADGE: Modalidad en un tipo de juego
*/

function intervalsBuilder(exercise) {
    var level = {
        kind: intervalLevelMaker.kind[exercise[0]],
        structure: intervalLevelMaker.structure[exercise[1]],
        fundamental: intervalLevelMaker.fundamental[exercise[2]],
        get pitch() { return intervalLevelMaker.pitch[exercise[3]] },
        iterations: intervalLevelMaker.iterations[exercise[4]],
        get direction() { return intervalLevelMaker.mode[exercise[5]] },
    }
    return level;
}

intervalLevelMaker = {
    kind: {
        Int: "Intervals",
        Cho: "Chords",
        Prog: "Progresion"
    },
    structure: {
        get MayChord() { return [4, 7, 12]; },
        get MayScale() { return [2, 4, 5, 7, 9, 11, 12]; },
        get FullScale() { return [2, 4, 5, 7, 9, 11, 12]; },
        get Full() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; },
        get Comp() { return [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; },
        get All() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; }
    },
    fundamental: {
        get From() { return 0; },
        get To() { return 12; },
        get FromTo() { return Math.floor(Math.random() * 2) * 12 },
        get FromToAny() {
            fundamentalNotes = [2, 4, 5, 7, 9, 11, 12];
            return fundamentalNotes[Math.floor(Math.random() * fundamentalNotes.length)];
        }
    },
    pitch: {
        get Fix() { return 48; },
        get Any() { return 36 + (12 * Math.floor(Math.random() * 3)); },
        get Rand() { return undefined; },
        get AnyInScale() { return undefined; }
    },
    iterations: {
        Show: 15,
        Lesson: 20,
        Exam: 30
    },
    mode: {
        Asc: 1,
        Desc: -1,
        Harm: 0,
        get Rand () { return  Math.floor(Math.random() * 3) - 1}
    }
}


var intervalsLevels = {
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
            iterations: 1,
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

    helloBeautyfull: function () {
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
            fundamental: 0,
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
            fundamental: 0,
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
            fundamental: 0,
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
            fundamental: 0,
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
            intervals: [1, 3, 10],
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
            intervals: [1, 3, 10],
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
            fundamental: 0,
            pitch: 48,
            intervals: [2, 4, 5, 7, 9, 11, 12],
            notes: [2, 4, 5, 7, 9, 11, 12],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en inversión
    26: function () {
        var level = {
            fundamental: 12,
            pitch: 50,
            intervals: [1, 3, 5, 7, 8, 10, 12],
            notes: [2, 4, 5, 7, 9, 11],
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
            intervals: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
            notes: [2, 4, 5, 7, 9, 11, 12],
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
                fundamentalNotes = [2, 4, 5, 7, 9, 11, 12]
                return fundamentalNotes[Math.floor(Math.random() * fundamentalNotes.length)]
            },
            get pitch() { return 48 + (12 * Math.floor(Math.random() * 3)) },
            intervals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            notes: [2, 4, 5, 7, 9, 11, 12],
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
            intervals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            notes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
            fundamental: 0,
            pitch: 48,
            intervals: [14, 16, 17, 19, 21, 23, 24],
            notes: [14, 16, 17, 19, 21, 23, 24],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor fundamental aleatoria
    31: function () {
        var level = {
            fundamental: 0,
            pitch: undefined,
            intervals: [14, 16, 17, 19, 21, 23, 24],
            notes: [14, 16, 17, 19, 21, 23, 24],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en inversión en DO
    32: function () {
        var level = {
            fundamental: 24,
            pitch: 50,
            intervals: [13, 15, 17, 19, 20, 22, 24],
            notes: [0, 2, 4, 5, 7, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },
    //Intervalos de escala mayor en inversión fundamental aleatoria
    33: function () {
        var level = {
            fundamental: 24,
            pitch: 50,
            intervals: [13, 15, 17, 19, 20, 22, 24],
            notes: [0, 2, 4, 5, 7, 9, 11],
            get direction() { return Math.floor(Math.random() * 3) - 1 },
            get timing() { return Math.floor(Math.random() * 2) },
            iterations: 30
        }
        return level
    },

    //Todos los intervalos compuestos
    34: function () {
        var level = {
            fundamental: 0,
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
            fundamental: 0,
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

var intervalsLevelsTree = {
    kind: "mode",
    title: "Intervalos",
    //class: "tab-pane fade in active",
    class: "item active",
    color: "red",
    code: "Int",
    components: {
        1: {
            kind: "world",
            title: "Intervalos que componen el acorde mayor",
            code: "_MayChord",
            components: {
                1: {
                    kind: "area",
                    title: "Separación entre intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Fundamental del acorde como fundamental de la relación",
                            code: "_From",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Desde un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "group",
                                            id: "chordFixedFundCLesson",
                                            code: "_Show",
                                            title: "",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    id: "chordFixedFundCLessonAsc",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    id: "chordFixedFundCLessonDesc",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    id: "chordFixedFundCLessonHarm",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            },
                                        },
                                        2: {
                                            kind: "level",
                                            id: "chordFixedCExam",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "Desde cualquier Do",
                                    code: "_Any",
                                    components: {
                                        1: {
                                            kind: "level",
                                            id: "chordRandomCExam",
                                            code: "_Lesson",
                                            title: "",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                3: {
                                    kind: "exercise",
                                    title: "Desde una nota aleatoria",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            id: "chordRandomExam",
                                            code: "_Exam",
                                            title: "",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Fundamental del acorde como intervalo de la relación",
                            code: "_To",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Hacia un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "Aleatorio",
                                            code: "_Show",
                                            icon: "",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 7
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 8
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 9
                                                },
                                            },
                                        },
                                        2: {
                                            kind: "level",
                                            title: "Aleatorio",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    },
                                },
                                2: {
                                    kind: "exercise",
                                    title: "Hacia cualquier Do",
                                    code: "_Any",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                3: {
                                    kind: "exercise",
                                    title: "Hacia una nota aleatoria",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    kind: "area",
                    title: "Unión de intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Fundamental del acorde como fundamental y como intervalo de la relación",
                            code: "_FromTo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "Examen",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        2: {
            kind: "world",
            title: "Intervalos que faltan para completar la escala mayor",
            code: "_MayScale",
            components: {
                1: {
                    kind: "area",
                    title: "Separación entre intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Fundamental de la escala como fundamental de la relación",
                            code: "_From",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Desde un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "Desde un Do fijo",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            title: "Aleatorio",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "Desde cualquier Do",
                                    code: "_Any",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                3: {
                                    kind: "exercise",
                                    title: "Desde una nota aleatoria",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",

                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Fundamental de la escala como intervalo de la relación",
                            code: "_To",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Hacia un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "Hacia un Do fijo",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    id: "chordFixedFundCLessonAsc",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    id: "chordFixedFundCLessonDesc",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    id: "chordFixedFundCLessonHarm",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            },
                                        },
                                        2: {
                                            kind: "level",
                                            title: "Aleatorio",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "Hacia cualquier Do",
                                    code: "_Any",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                3: {
                                    kind: "exercise",
                                    title: "Hacia una nota aleatoria",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    kind: "area",
                    title: "Unión de intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Fundamental de la escala como fundamental y como intervalo de la relación",
                            code: "_FromTo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        3: {
            kind: "world",
            title: "Todos los intervalos que componen la escala mayor",
            code: "_FullScale",
            components: {
                1: {
                    kind: "area",
                    title: "Separación entre intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Fundamental de la escala como fundamental de la relación",
                            code: "_From",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Desde un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Fundamental de la escala como intervalo de la relación",
                            code: "_To",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Hacia un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Desde y hacia cualquier Do",
                            code: "_FromTo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Any",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                3: {
                    //Este tal vez se pueda dividir en 4
                    kind: "area",
                    title: "Todos los intervalos posibles que se pueden generar entre las notas de la escala mayor",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Cualquier nota de la escala como fundamental e intervalo de la relación",
                            code: "_FromToAny",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "",
                                    code: "_AnyInScale",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        4: {
            kind: "world",
            title: "Todos los intervalos contenidos en una octava",
            code: "_Full",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "",
                            code: "_FromTo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        5: {
            kind: "world",
            title: "Intervalos compuestos",
            code: "_Comp",
            components: {
                1: {
                    kind: "area",
                    title: "Intervalos propios de la escala mayor",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Fundamental de la escala como fundamental de la relación",
                            code: "_From",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Desde un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "Fundamental aleatoria",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Fundamental de la escala como intervalo de la relación",
                            code: "_To",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "Hacia un Do fijo",
                                    code: "_Fix",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "Fundamental aleatoria",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    kind: "area",
                    title: "Todos los intervalos compuestos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Todos los intervalos compuestos",
                            code: "_FromTo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "Exámen",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        6: {
            kind: "world",
            title: "Todos los intervalos simples y compuestos",
            code: "_All",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "",
                            code: "_FromTo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Exam",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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