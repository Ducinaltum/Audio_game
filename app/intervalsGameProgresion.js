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
        //fundamental: intervalLevelMaker.fundamental[exercise[2]],
        isInverted: intervalLevelMaker.fundamental[exercise[2]],
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
        /*
        get MayChord() { return [4, 7, 12]; },
        get MayScale() { return [2, 4, 5, 7, 9, 11, 12]; },
        get FullScale() { return [2, 4, 5, 7, 9, 11, 12]; },
        get Full() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; },
        get Comp() { return [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; },
        get All() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; }
        */
        get Fifth() { return [6, 7, 12]; },
        get Third() { return [3, 4]; },
        get Triad() { return [3, 4, 6, 7, 12]; },
        get Seventh() { return [10, 11]; },
        get Full() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; },
        get Comp() { return [15, 16, 18, 19, 22, 23, 24]; },
        get FullComp() { return [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; },
        get All() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; }
    },
    fundamental: {
        /*
        get From() { return 0; },
        get To() { return 12; },
        get FromTo() { return Math.floor(Math.random() * 2) * 12 },
        get FromToAny() {
            fundamentalNotes = [2, 4, 5, 7, 9, 11, 12];
            return fundamentalNotes[Math.floor(Math.random() * fundamentalNotes.length)];
        }*/
        From: false,
        To: true,
        FromTo: undefined
    },
    pitch: {
        get Fix() { return 54;},
        get Any() { return 24 + (12 * Math.floor(Math.random() * 7)); },
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
        get Rand() { return Math.floor(Math.random() * 3) - 1 }
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
            title: "Intervalos que componen los acordes: las octavas y quintas",
            code: "_Fifth",
            components: {
                1: {
                    kind: "area",
                    title: "Separación entre intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Quintas",
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
                            title: "Cuartas",
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
            title: "Intervalos que componen los acordes: la tercera",
            code: "_Third",
            components: {
                1: {
                    kind: "area",
                    title: "Separación entre intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Terceras",
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
                            title: "Sextas",
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
            title: "Los acordes tríada: Octavas, quintas y terceras ",
            code: "_Triad",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "",
                            code: "_From",
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
        4: {
            kind: "world",
            title: "Intervalos que componen los acordes: la séptima",
            code: "_Seventh",
            components: {
                1: {
                    kind: "area",
                    title: "Separación entre intervalos fundamentales e invertidos",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Séptimas",
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
                            title: "Segundas",
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
        5: {
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
                            code: "_From",
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
        6: {
            kind: "world",
            title: "Intervalos compuestos",
            code: "_Comp",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Décimas, docenas, catorcenas y quincenas",
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
                            title: "Quincenas, trecenas, oncenas y novenas",
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
                    title: "",
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
        7: {
            kind: "world",
            title: "Todos los intervalos compuestos",
            code: "_FullComp",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "",
                            code: "_From",
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
        8: {
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
                            code: "_From",
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

//Comentado el 8/2
/*
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
}*/