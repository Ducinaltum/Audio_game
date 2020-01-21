function majorChords(){
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [1,4,5,2,6,7,'5/4','5/5', '7/4', '7/5','5/6', '7/6', '5/2', '7/2', "2 Lidio", "7 Lidio", "7 Mixolidio", "5 Mixolidio"]));
    arr.push(new Grade('4', new Chord('major'), 5, [1,4,5,2,6,7,'5/5','7/5','5/6', '7/6', '5/2', '7/2']));
    arr.push(new Grade('5', new Chord('major'), 7, [1,5,6,7, '5/6', '7/6']));
    arr.push(new Grade('2', new Chord('minor'), 2, [1,5,6,7,'5/4','5/5', '7/4', '7/5','5/6', '7/6']))
    arr.push(new Grade('6', new Chord('minor'), 9, [4,5,2,7,'5/4','5/5', '7/4', '7/5','5/2', '7/2']))
    arr.push(new Grade('7', new Chord('dim'), 11, [1]))

    arr.push(new Grade('5/4', new Chord('major', 2 , '7'), 0, [4,'7/4']))
    arr.push(new Grade('5/5', new Chord('major'), 2, [5,'7/5']))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5]))

    arr.push(new Grade('5/6', new Chord('major'), 4, [6,'7/6']))
    arr.push(new Grade('5/2', new Chord('major'), 9, [2,'7/2']))
    arr.push(new Grade('7/6', new Chord('dim'), 8, [6]))
    arr.push(new Grade('7/2', new Chord('dim'), 1, [2]))

    arr.push(new Grade('2 Lidio', new Chord('major'), 2, [1, "7 Lidio"]))
    arr.push(new Grade('7 Lidio', new Chord('minor'), 11, [1]))
    arr.push(new Grade('7 Mixolidio', new Chord('major'), 10, [1, "7 Mixolidio"]))
    arr.push(new Grade('5 Mixolidio', new Chord('minor'), 7, [1]))
    arr.push(new Grade('4 Dorico', new Chord('major'), 5, [1, "2 Dorico"]))
    arr.push(new Grade('2 Dorico', new Chord('minor'), 2, [1]))
    arr.push(new Grade('2 Frigio', new Chord('major'), 1, [1, "7 Frigio"]))
    arr.push(new Grade('7 Frigio', new Chord('minor'), 10, [1]))
    arr.push(new Grade('7 Eolico', new Chord('major'), 10, [1, "5 Eolico"]))
    arr.push(new Grade('5 Eolico', new Chord('minor'), 7, [1]))
    arr.push(new Grade('5 Locrio', new Chord('major'), 6, [1, "3 Locrio"]))
    arr.push(new Grade('3 Locrio', new Chord('minor'), 3, [1]))
    return arr;
}

function minorChords(){
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [1,4,5,2,3,6,7,'3A', 'b7','5/4', '7/4', '5/5', '7/5','5/3','5/6', '7/6', '5/b7', '7/b7'], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [1,4,5,2,3,6,7,'3A', 'b7','5/5', '7/5','5/3','5/6', '7/6', '5/b7', '7/b7'], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [1,5,3,7,'2m','3A', '4M', '#6', 'b7','5/3'], 'minor'));
    
    arr.push(new Grade('2', new Chord('dim'), 2, [1,5,3,6,7,'3A','5/5', '7/5','5/3','5/6', '7/6', '5/b7', '7/b7'], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [4,5,2,6,7,'3A','5/4, 5/5', '7/4', '7/5','5/6', '7/6', '5/b7', '7/b7'], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [1,5,2,3,7,'3A','5/3','5/b7', '7/b7'], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [1], 'minor'))
    //Buscar la forma de obligar a utilizar los acordes nuevos
    arr.push(new Grade('2m', new Chord('minor'), 2, [5,7,'3A'], 'minor'))
    arr.push(new Grade('3A', new Chord('aug'), 3, [1], 'minor'))
    arr.push(new Grade('4M', new Chord('major'), 5, [5,7,'2m', '3A'], 'minor'))
    //Hay que pasarlo invertido
    //arr.push(new Grade(5, "minor", "D", "S", 11, [1]))
    arr.push(new Grade('#6', new Chord('dim'), 9, [5,7, '3A'], 'minor'))
    arr.push(new Grade('b7', new Chord('major'), 10, [1,3, 6], 'minor'))

    arr.push(new Grade('5/4', new Chord('major', 2 , '7'), 0, [4,'7/4'],'minor'))
    arr.push(new Grade('5/5', new Chord('major'), 2, [5,'7/5'],'minor'))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4],'minor'))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5],'minor'))

    arr.push(new Grade('5/3', new Chord('major', 2 , '7'), 10, [4,'7/3'],'minor'))
    arr.push(new Grade('5/6', new Chord('major', 2 , '7'), 3, [5,'7/6'],'minor'))
    arr.push(new Grade('5/b7', new Chord('major'), 2, [5,'7/b7'],'minor'))
    //Este lo comento por que corresponde al segundo que no cambia de tipo
    //arr.push(new Grade('7/3', new Chord('dim', '7'), 4, [[3]]))
    arr.push(new Grade('7/6', new Chord('dim'), 7, [6],'minor'))
    arr.push(new Grade('7/b7', new Chord('dim'), 9, ['b7'],'minor'))

    arr.push(new Grade('2 Lidio', new Chord('major'), 2, [1, "7 Lidio"]))
    arr.push(new Grade('7 Lidio', new Chord('minor'), 11, [1]))
    arr.push(new Grade('7 Mixolidio', new Chord('major'), 10, [1, "7 Mixolidio"]))
    arr.push(new Grade('5 Mixolidio', new Chord('minor'), 7, [1]))
    arr.push(new Grade('4 Dorico', new Chord('major'), 5, [1, "2 Dorico"]))
    arr.push(new Grade('2 Dorico', new Chord('minor'), 2, [1]))
    arr.push(new Grade('2 Frigio', new Chord('major'), 1, [1, "7 Frigio"]))
    arr.push(new Grade('7 Frigio', new Chord('minor'), 10, [1]))
    arr.push(new Grade('7 Eolico', new Chord('major'), 10, [1, "5 Eolico"]))
    arr.push(new Grade('5 Eolico', new Chord('minor'), 7, [1]))
    arr.push(new Grade('5 Locrio', new Chord('major'), 6, [1, "3 Locrio"]))
    arr.push(new Grade('3 Locrio', new Chord('minor'), 3, [1]))
    return arr;
}

function filterChords(tonality, availableChords){
    var buildedMode = []
    availableChords.forEach(function(e){
        tonality.forEach(function(chord){
            if(chord.grade == e) buildedMode.push(chord)
        })
    })
    return buildDirections(buildedMode)
}

function buildDirections(chords){
    chords.forEach(element => {
        buildDirection = [];
        for(var i = 0; i < element.direction.length; i++){
            for(var j = 0; j < chords.length; j++){
                if(element.direction[i] == chords[j].grade) {
                    buildDirection.push(chords[j]);
                }
            }
        }
        element.direction = buildDirection
    });
    return chords
}

var progresionLevels = {
    //Acordes principales mayores 4cc
    0: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new majorChords(), [1,4,5])
        return exercise;
    },
    //Acordes principales menores 4cc
    1: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new minorChords(), [1,4,5])
        return exercise;
    },
    //Acordes principales mayores 8cc
    2: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new majorChords(), [1,4,5])
        return exercise;
    },
    //Acordes principales mayores 8cc DISTINTAS TONALIDADES
    3: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1,4,5])
        return exercise;
    },
    //Acordes principales menores 8cc
    4: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new minorChords(), [1,4,5])
        return exercise;
    },
    //Acordes principales menores 8cc DISTINTAS TONALIDADES
    5: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote
        exercise.chords = filterChords(new minorChords(), [1,4,5])
        return exercise;
    },
    //Acorde secundarios mayores 4cc
    6: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new majorChords(), [1,2,4,5,6,7])
        return exercise;
    },
    //Acorde secundarios menores 4cc
    7: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1,2,3,4,5,6,7])
        return exercise;
    },
    //Acorde secundarios mayores 8cc
    8: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new majorChords(), [1,2,4,5,6,7])
        return exercise;
    },
    //Acorde secundarios mayores 8cc DISTINTAS TONALIDADES
    9: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1,2,4,5,6,7])
        return exercise;
    },
    //Acorde secundarios menores 8cc
    10: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new minorChords(), [1,2,3,4,5,6,7])
        return exercise;
    },
    //Acorde secundarios menores 8cc DISTINTAS TONALIDADES
    11: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new minorChords(), [1,2,3,4,5,6,7])
        return exercise;
    },

    //Acordes menores de todas las escalas  4cc
    12: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new minorChords(), [1,2, "2m", "3A", 3,4, "4M", 5,6, "#6", "b7", 7])
        return exercise;
    },
    //Acordes menores de todas las escalas  8cc
    13: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = filterChords(new minorChords(), [1,2, "2m", "3A", 3,4, "4M", 5,6, "#6", "b7", 7])
        return exercise;
    },
    //Acordes menores de todas las escalas  8cc DISTINTAS TONALIDADES
    14: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote
        exercise.chords = filterChords(new minorChords(), [1,2, "2m", "3A", 3,4, "4M", 5,6, "#6", "b7", 7])
        return exercise;
    },


    //Dominantes secundarias sobre acordes principales en modo mayor 
    //DIFERENTES TONALIDADES
    15: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1,2,4,5,6,7, '5/4', '7/4', '5/5', '7/5'])
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales en modo menor
    //DIFERENTES TONALIDADES
    16: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new minorChords(), [1,2, "2m", "3A", 3,4, "4M", 5,6, "#6", "b7", 7, '5/4', '7/4', '5/5', '7/5'])
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales y secundarios modo mayor
    //DIFERENTES TONALIDADES
    17: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1,2,4,5,6,7, '5/4', '7/4', '5/5', '7/5', '5/6', '7/6', '5/2', '7/2' ])
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales y secundarios modo mayor
    //DIFERENTES TONALIDADES
    18: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new minorChords(), [1,2, "2m", "3A", 3,4, "4M", 5,6, "#6", "b7", 7, '5/4', '7/4', '5/5', '7/5', '5/3', '5/6', '7/6', '5/b7', '7/b7'])
        return exercise;
    },

    //Mixtura modal: Tónica y dominantes en modo lidio, cuatro compases.
    19: function(){
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1,"2 Lidio", "7 Lidio"])
        return exercise;
    },
    //Mixtura modal: Tónica y dominantes en modo mixolidio, cuatro compases.
    20: function(){
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1,"7 Mixolidio", "5 Mixolidio"])
        return exercise;
    },
    //Mixtura modal: Tónica y dominantes en modo eólico, cuatro compases.
    //Mixtura modal: Tónica y dominantes en modo dórico, cuatro compases.
    //Mixtura modal: Tónica y dominantes en modo frigio, cuatro compases.
    //Mixtura modal: Tónica y dominantes en modo locrio, cuatro compases.
    //Mixtura modal: Tónica y dominantes en modo lidio, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo mixolidio, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo eólico, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo dórico, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo frigio, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo locrio, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo lidio y mixolidio combinados, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo eólico, dórico, frigio y locrio combinados, ocho compases.
}

var progresionLevelsTree = {
    kind: "mode",
    title: "Progresión",
    class: "item",
    components: {
        1: {
            kind: "world",
            title: "Acordes principales",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        2: {
                                            kind: "level",
                                            title: "8 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        3: {
                                            kind: "level",
                                            title: "8 compases en tonalidad aleatoria",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        2: {
                                            kind: "level",
                                            title: "8 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        3: {
                                            kind: "level",
                                            title: "8 compases en tonalidad aleatoria",
                                            icon: "",
                                            components: 1
                                        },
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
            title: "Acordes principales y secundarios",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        2: {
                                            kind: "level",
                                            title: "8 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        3: {
                                            kind: "level",
                                            title: "8 compases en tonalidad aleatoria",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        2: {
                                            kind: "level",
                                            title: "8 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        3: {
                                            kind: "level",
                                            title: "8 compases en tonalidad aleatoria",
                                            icon: "",
                                            components: 1
                                        },
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
            title: "Acordes principales y secundarios de las tres escalas del modo menor",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        2: {
                            kind: "zone",
                            title: "",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        2: {
                                            kind: "level",
                                            title: "8 compases en Do",
                                            icon: "",
                                            components: 1
                                        },
                                        3: {
                                            kind: "level",
                                            title: "8 compases en tonalidad aleatoria",
                                            icon: "",
                                            components: 1
                                        },
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
            title: "Dominantes secundarias sobre acordes principales",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            icon: "",
                                            components: 1
                                        },
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
            title: "Dominantes secundarias sobre acordes principales y secundarios",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            icon: "",
                                            components: 1
                                        },
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
            title: "Modos mayores",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo Lidio",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases",
                                            icon: "",
                                            components: 1
                                        },
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo Mixolidio",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases",
                                            icon: "",
                                            components: 1
                                        },
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modos mayores en mixtura",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                    }
                },
            }
        },
        7: {
            kind: "world",
            title: "Modos menores",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo Dórico",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases",
                                            icon: "",
                                            components: 1
                                        },
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo Frigio",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases",
                                            icon: "",
                                            components: 1
                                        },
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        3: {
                            kind: "zone",
                            title: "Modo Eólico",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases",
                                            icon: "",
                                            components: 1
                                        },
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                        4: {
                            kind: "zone",
                            title: "Modo Locrio",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "4 compases",
                                            icon: "",
                                            components: 1
                                        },
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modos menores en mixtura",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "8 compases",
                                            icon: "",
                                            components: 1
                                        },
                                    }
                                }
                            }
                        },
                    }
                },
            }
        },
        8: {
            kind: "world",
            title: "Mixtura modal",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "",
                            components: {
                                1: {
                                    kind: "exercise",
                                    description: "",
                                    title: "Ex4",
                                    icon: "",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            icon: "",
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

$('#progresionSelection .list-group-item').click(function (e) {
    var levelSelected = Number(this.id.slice(3))
    if (currentExercise != null) {
        if (currentExercise.getKindOfExercise() != 'Progresion') {
            progressRestore()
        }
    }
    currentExercise = new HarmonicProgresionExercise(levelSelected);
    goToExercise();
})