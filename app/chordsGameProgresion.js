const chordsTree = {
    'major': {
        '7': {
            'b9': null,
            '9': null,
            '#9': null,
            '#11': null,
            '13': null,
        },
        'majj7': {
            '9': null,
            '#11': null,
            '13': null,
        }
    }
}

const baseChords = [
    ['major',
        [
            ['7',
                [['b9'], ['9'], ['#9'], ['#11'], ['13']]],
            ['majj7',
                [['9'], ['#11'], ['13']]]
        ]
    ],
    ['minor',
        [
            //['6'],
            ['7',
                [['9'], ['11'], ['13']]],
            ['majj7',
                [['9'], ['11'], ['13']]]
            //11 b13
        ]
    ],
    ['dim',
        [
            ['b7'],
            ['7',
                [['11'], ['b13']]]
        ]
    ],
    ['aug',
        [
            ['7',
                [['b9'], ['9'], ['#9'], ['#11'], ['13']]],
            ['majj7',
                [['9'], ['#11'], ['13']]]
        ]
    ],
    ['sus'],
]

function chordsBuilder(exercise) {
    var level = {
        kind: chordLevelMaker.kind[exercise[0]],
        depth: chordLevelMaker.depth[exercise[1]],
        isOpen: chordLevelMaker.isOpen[exercise[2]],
        base: chordLevelMaker.base[exercise[3]],
        iterations: chordLevelMaker.iterations[exercise[4]],
        get direction() { return chordLevelMaker.mode[exercise[5]] },
    }
    return level;
}

chordLevelMaker = {
    kind: {
        Int: "Intervals",
        Cho: "Chords",
        Prog: "Progresion"
    },
    depth: {
        Triad: 1,
        Seventh: 2,
        Extended: 3
    },
    isOpen: {
        Closed: false,
        Open: true
    },
    base: {
        Major: [baseChords[0]],
        Minor:[baseChords[1]],
        Dim:[baseChords[2]],
        Aug:[baseChords[3]],
        Perfect:[baseChords[0],baseChords[1]],
        Imperfect:[baseChords[2],baseChords[3]],
        All:[baseChords[0],baseChords[1],baseChords[2],baseChords[3]],
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

var chordsLevelsTree = {
    kind: "mode",
    title: "Acordes",
    //class: "tab-pane fade",
    class: "item",
    color: "pink",
    code: "Cho",
    components: {
        1: {
            kind: "world",
            title: "Acordes Tríada",
            code: "_Triad",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes con quinta justa",
                            code: "_Perfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
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
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Acordes con quinta aumentada o disminuida",
                            code: "_Imperfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
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
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
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
                    code: "_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Todos los acordes triada",
                            code: "_All",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
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
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
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
                    kind: "area",
                    title: "",
                    code: "_Open",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Todos los acordes triada en posición abierta",
                            code: "_All",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
            code: "_Seventh",
            title: "Acordes con séptima",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acorde mayor",
                            code: "_Major",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Acorde menor",
                            code: "_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        3: {
                            kind: "zone",
                            title: "Acorde disminuido",
                            code: "_Dim",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        4: {
                            kind: "zone",
                            title: "Acorde aumentado",
                            code: "_Aug",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    code: "_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes con quinta justa en posición cerrada",
                            code: "_Perfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Acordes con quinta aumentada o disminuida",
                            code: "_Imperfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    kind: "area",
                    title: "",
                    code: "_Open",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes con quinta justa en posición abierta",
                            code: "_Perfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Acordes con quinta aumentada o disminuida en posición abierta",
                            code:"_Imperfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    kind: "area",
                    title: "",
                    code:"_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Todos los acordes con séptima en posición cerrada",
                            code:"_All",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    kind: "area",
                    title: "",
                    code:"_Open",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Todos los acordes con séptima en posición abierta",
                            code:"_All",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
            title: "Acordes extendidos",
            code:"_Extended",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code:"_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Mayores",
                            code:"_Major",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Menores",
                            code:"_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        3: {
                            kind: "zone",
                            title: "Disminuidos",
                            code:"_Dim",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        4: {
                            kind: "zone",
                            title: "Aumentados",
                            code:"_Aug",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    code:"_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes con quinta justa en posición cerrada",
                            code:"_Perfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Acordes con quinta aumentada o disminuida",
                            code:"_Imperfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    kind: "area",
                    title: "",
                    code:"_Open",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes con quinta justa en posición abierta",
                            code:"_Perfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Acordes con quinta aumentada o disminuida en posición abierta",
                            code:"_Imperfect",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    kind: "area",
                    title: "",
                    code:"_Closed",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes extendidos en posición cerrada",
                            code:"_All",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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
                    kind: "area",
                    title: "",
                    code:"_Open",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Acordes extendidos en posición abierta",
                            code:"_All",
                            components: {
                                1: {
                                    kind: "exercise",
                                    code: "",
                                    title: "",
                                    components: {
                                        1: {
                                            kind: "group",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "Ascendente",
                                                    code: "_Asc",
                                                    components: 1
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "Descendente",
                                                    code: "_Desc",
                                                    components: 2
                                                },
                                                3: {
                                                    kind: "badge",
                                                    title: "Armónico",
                                                    code: "_Harm",
                                                    components: 3
                                                }
                                            }
                                        },
                                        2: {
                                            kind: "level",
                                            code: "_Lesson",
                                            title: "Aleatorio",
                                            components: {
                                                4: {
                                                    kind: "badge",
                                                    title: "Aleatorio",
                                                    code: "_Rand",
                                                    components: 4
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

$('#chordsSelection .list-group-item').click(function (e) {
    var levelSelected = {}
    levelSelected.level = Number(this.id.slice(3)) * 4
    levelSelected.kind = Number($('#chordMode .btn-primary').attr('id'))
    if (currentExercise != null) {
        if (currentExercise.getKindOfExercise() != 'Chords') {
            progressRestore()
        }
    }
    currentExercise = new ChordsExercise(levelSelected);
    goToExercise();
})