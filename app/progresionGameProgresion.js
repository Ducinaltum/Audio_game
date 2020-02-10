const principals = [1, 4, 5]
const majorSecondaries = principals.concat([2, 6, 7])
const minorSecondaries = principals.concat([2, 3, 6, 7])
const minorFull = minorSecondaries.concat(["2m", "3A", "4M", "#6", "b7"])
const majorPrincipalsDominants = majorSecondaries.concat(["5/4", "7/4", "5/5", "7/5"])
const minorPrincipalsDominants = minorFull.concat(["5/4", "7/4", "5/5", "7/5"])
const majorSecondariesDominants = majorPrincipalsDominants.concat(['5/6', '5/2', '7/6', '7/2'])
const minorSecondariesDominants = minorPrincipalsDominants.concat(['5/3', '5/6', '5/b7', '7/6', '7/b7'])
const lydian = ["2 Lidio", "7 Lidio"]
const mixolydian = ["7 Mixolidio", "5 Mixolidio"]
const majorModes = mixolydian.concat(lydian)
const dorian = ["4M", "2m"]
const phrigian = ["b2M", "b7m"]
const aeolian = ["b7M", "5m"]
const locrian = ["5M", "3m"]
const minorModes = dorian.concat(phrigian, aeolian, locrian)




function majorChords() {
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [1, 4, 5, 2, 6, 7, '5/4', '5/5', '7/4', '7/5', '5/6', '7/6', '5/2', '7/2', "2 Lidio", "7 Lidio", "7 Mixolidio", "5 Mixolidio"]));
    arr.push(new Grade('4', new Chord('major'), 5, [1, 4, 5, 2, 6, 7, '5/5', '7/5', '5/6', '7/6', '5/2', '7/2']));
    arr.push(new Grade('5', new Chord('major'), 7, [1, 5, 6, 7, '5/6', '7/6']));
    arr.push(new Grade('2', new Chord('minor'), 2, [1, 5, 6, 7, '5/4', '5/5', '7/4', '7/5', '5/6', '7/6']))
    arr.push(new Grade('6', new Chord('minor'), 9, [4, 5, 2, 7, '5/4', '5/5', '7/4', '7/5', '5/2', '7/2']))
    arr.push(new Grade('7', new Chord('dim'), 11, [1]))

    arr.push(new Grade('5/4', new Chord('major', 2, '7'), 0, [4, '7/4']))
    arr.push(new Grade('5/5', new Chord('major'), 2, [5, '7/5']))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5]))

    arr.push(new Grade('5/6', new Chord('major'), 4, [6, '7/6']))
    arr.push(new Grade('5/2', new Chord('major'), 9, [2, '7/2']))
    arr.push(new Grade('7/6', new Chord('dim'), 8, [6]))
    arr.push(new Grade('7/2', new Chord('dim'), 1, [2]))

    arr.push(new Grade('2 Lidio', new Chord('major'), 2, [1, "7 Lidio"]))
    arr.push(new Grade('7 Lidio', new Chord('minor'), 11, [1]))
    arr.push(new Grade('7 Mixolidio', new Chord('major'), 10, [1, "5m"]))
    arr.push(new Grade('5 Mixolidio', new Chord('minor'), 7, [1]))
    arr.push(new Grade('4M', new Chord('major'), 5, [1, "2m"]))
    arr.push(new Grade('2m', new Chord('minor'), 2, [1]))
    arr.push(new Grade('b2M', new Chord('major'), 1, [1, "b7m"]))
    arr.push(new Grade('b7m', new Chord('minor'), 10, [1]))
    arr.push(new Grade('b7', new Chord('major'), 10, [1, "5m"]))
    arr.push(new Grade('5m', new Chord('minor'), 7, [1]))
    arr.push(new Grade('5M', new Chord('major'), 6, [1, "3m"]))
    arr.push(new Grade('3m', new Chord('minor'), 3, [1]))
    return arr;
}

function minorChords() {
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [1, 4, 5, 2, 3, 6, 7, '3A', 'b7', '5/4', '7/4', '5/5', '7/5', '5/3', '5/6', '7/6', '5/b7', '7/b7'], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [1, 4, 5, 2, 3, 6, 7, '3A', 'b7', '5/5', '7/5', '5/3', '5/6', '7/6', '5/b7', '7/b7'], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [1, 5, 3, 7, '2m', '3A', '4M', '#6', 'b7', '5/3'], 'minor'));

    arr.push(new Grade('2', new Chord('dim'), 2, [1, 5, 3, 6, 7, '3A', '5/5', '7/5', '5/3', '5/6', '7/6', '5/b7', '7/b7'], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [4, 5, 2, 6, 7, '3A', '5/4, 5/5', '7/4', '7/5', '5/6', '7/6', '5/b7', '7/b7'], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [1, 5, 2, 3, 7, '3A', '5/3', '5/b7', '7/b7'], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [1], 'minor'))

    arr.push(new Grade('2m', new Chord('minor'), 2, [5, 7, '3A'], 'minor'))
    arr.push(new Grade('3A', new Chord('aug'), 3, [1], 'minor'))
    arr.push(new Grade('4M', new Chord('major'), 5, [5, 7, '2m', '3A'], 'minor'))
    arr.push(new Grade('#6', new Chord('dim'), 9, [5, 7, '3A'], 'minor'))
    arr.push(new Grade('b7', new Chord('major'), 10, [1, 3, 6], 'minor'))

    arr.push(new Grade('5/4', new Chord('major', 2, '7'), 0, [4, '7/4'], 'minor'))
    arr.push(new Grade('5/5', new Chord('major'), 2, [5, '7/5'], 'minor'))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4], 'minor'))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5], 'minor'))

    arr.push(new Grade('5/3', new Chord('major', 2, '7'), 10, [3, '7/3'], 'minor'))
    arr.push(new Grade('5/6', new Chord('major', 2, '7'), 3, [6, '7/6'], 'minor'))
    arr.push(new Grade('5/b7', new Chord('major'), 2, ["b7", '7/b7'], 'minor'))
    //Este lo comento por que corresponde al segundo que no cambia de tipo
    //arr.push(new Grade('7/3', new Chord('dim', '7'), 4, [[3]]))
    arr.push(new Grade('7/6', new Chord('dim'), 7, [6], 'minor'))
    arr.push(new Grade('7/b7', new Chord('dim'), 9, ['b7'], 'minor'))

    arr.push(new Grade('2 Lidio', new Chord('major'), 2, [1, "7 Lidio"], 'minor'))
    arr.push(new Grade('7 Lidio', new Chord('minor'), 11, [1]))
    arr.push(new Grade('7 Mixolidio', new Chord('major'), 10, [1, "5 Mixolidio"]))
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

function modes() {
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [1, 4, 5, 2, 6, 7, '5/4', '5/5', '7/4', '7/5', '5/6', '7/6', '5/2', '7/2', "2 Lidio", "7 Lidio", "7 Mixolidio", "5 Mixolidio"]));
    arr.push(new Grade('4', new Chord('major'), 5, [1, 4, 5, 2, 6, 7, '5/5', '7/5', '5/6', '7/6', '5/2', '7/2']));
    arr.push(new Grade('5', new Chord('major'), 7, [1, 5, 6, 7, '5/6', '7/6']));
    arr.push(new Grade('2', new Chord('minor'), 2, [1, 5, 6, 7, '5/4', '5/5', '7/4', '7/5', '5/6', '7/6']))
    arr.push(new Grade('6', new Chord('minor'), 9, [4, 5, 2, 7, '5/4', '5/5', '7/4', '7/5', '5/2', '7/2']))
    arr.push(new Grade('7', new Chord('dim'), 11, [1]))

    arr.push(new Grade('5/4', new Chord('major', 2, '7'), 0, [4, '7/4']))
    arr.push(new Grade('5/5', new Chord('major'), 2, [5, '7/5']))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5]))

    arr.push(new Grade('5/6', new Chord('major'), 4, [6, '7/6']))
    arr.push(new Grade('5/2', new Chord('major'), 9, [2, '7/2']))
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

function filterChords(tonality, availableChords) {
    var buildedMode = []
    availableChords.forEach(function (e) {
        tonality.forEach(function (chord) {
            if (chord.grade == e) buildedMode.push(chord)
        })
    })
    return buildDirections(buildedMode)
}

function buildDirections(chords) {
    chords.forEach(element => {
        buildDirection = [];
        for (var i = 0; i < element.direction.length; i++) {
            for (var j = 0; j < chords.length; j++) {
                if (element.direction[i] == chords[j].grade) {
                    buildDirection.push(chords[j]);
                }
            }
        }
        element.direction = buildDirection
    });
    return chords
}

function progresionBuilder(exercise) {
    var level = {
        kind: progresionLevelMaker.kind[exercise[0]],
        chords: progresionLevelMaker.chords(exercise[1], exercise[2]),
        mode: progresionLevelMaker.mode[exercise[2]],
        get tonality() { return progresionLevelMaker.tonality[exercise[3]] },
        iterations: progresionLevelMaker.iterations[exercise[4]],
        get duration() { return progresionLevelMaker.duration[exercise[5]] },
    }
    console.log(exercise[1])
    console.log(exercise[2])
    return level;
}

progresionLevelMaker = {
    kind: {
        Int: "Intervals",
        Cho: "Chords",
        Prog: "Progresion"
    },
    chords: function (grades, mode) {
        switch (grades) {
            case "Prin":
                if (mode == "Major") return filterChords(new majorChords(), principals)
                else if (mode == "Minor") return filterChords(new minorChords(), principals)
                break;
            case "Sec":
                if (mode == "Major") return filterChords(new majorChords(), majorSecondaries)
                else if (mode == "Minor") return filterChords(new minorChords(), minorSecondaries)
                break;
            case "MinorScales":
                return filterChords(new minorChords(), minorFull)
                break;
            case "DomOnPrinc":
                if (mode == "Major") return filterChords(new majorChords(), majorPrincipalsDominants)
                else if (mode == "Minor") return filterChords(new minorChords(), minorPrincipalsDominants)
                break;
            case "DomOnAll":
                if (mode == "Major") return filterChords(new majorChords(), majorSecondariesDominants)
                else if (mode == "Minor") return filterChords(new minorChords(), minorSecondariesDominants)
                break;
            case "MajorModes":
                if (mode == "Lid") return filterChords(new majorChords(), [1].concat(lydian))
                else if (mode == "Mixol") return filterChords(new majorChords(), [1].concat(mixolydian))
                break;
            case "MinorModes":
                if (mode == "Dor") return filterChords(new minorChords(), [1].concat(dorian))
                else if (mode == "Frig") return filterChords(new minorChords(), [1].concat(phrigian))
                else if (mode == "Aeo") return filterChords(new minorChords(), [1].concat(aeolian))
                else if (mode == "Loc") return filterChords(new minorChords(), [1].concat(locrian))
                break;
            case "ModalMix":
                break;
        }
    },
    mode: {
        Major: ['major'],
        Minor: ['minor'],
        Lid: ['major'],
        Mixol: ['major'],
        Dor: ['minor'],
        Frig: ['minor'],
        Aeo: ['minor'],
        Loc: ['minor'],
        MixMajMode: ['major'],
        MixMinMode: ['minor'],
        Mix: ['major'],
    },
    tonality: {
        InC: 0,
        get Rand() { return randomNote() }
    },
    iterations: {
        Show: 15,
        Lesson: 20,
        Exam: 30
    },
    duration: {
        Four: 4,
        Eight: 8
    }
}
/*
var progresionLevels = {
    //Acordes principales mayores 4cc
    0: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new majorChords(), [1, 4, 5])
        return exercise;
    },
    //Acordes principales menores 4cc
    1: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1, 4, 5])
        return exercise;
    },
    //Acordes principales mayores 8cc
    2: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new majorChords(), [1, 4, 5])
        return exercise;
    },
    //Acordes principales mayores 8cc DISTINTAS TONALIDADES
    3: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1, 4, 5])
        return exercise;
    },
    //Acordes principales menores 8cc
    4: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1, 4, 5])
        return exercise;
    },
    //Acordes principales menores 8cc DISTINTAS TONALIDADES
    5: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote
        exercise.chords = filterChords(new minorChords(), [1, 4, 5])
        return exercise;
    },
    //Acorde secundarios mayores 4cc
    6: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new majorChords(), [1, 2, 4, 5, 6, 7])
        return exercise;
    },
    //Acorde secundarios menores 4cc
    7: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1, 2, 3, 4, 5, 6, 7])
        return exercise;
    },
    //Acorde secundarios mayores 8cc
    8: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new majorChords(), [1, 2, 4, 5, 6, 7])
        return exercise;
    },
    //Acorde secundarios mayores 8cc DISTINTAS TONALIDADES
    9: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1, 2, 4, 5, 6, 7])
        return exercise;
    },
    //Acorde secundarios menores 8cc
    10: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1, 2, 3, 4, 5, 6, 7])
        return exercise;
    },
    //Acorde secundarios menores 8cc DISTINTAS TONALIDADES
    11: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new minorChords(), [1, 2, 3, 4, 5, 6, 7])
        return exercise;
    },

    //Acordes menores de todas las escalas  4cc
    12: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1, 2, "2m", "3A", 3, 4, "4M", 5, 6, "#6", "b7", 7])
        return exercise;
    },
    //Acordes menores de todas las escalas  8cc
    13: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = filterChords(new minorChords(), [1, 2, "2m", "3A", 3, 4, "4M", 5, 6, "#6", "b7", 7])
        return exercise;
    },
    //Acordes menores de todas las escalas  8cc DISTINTAS TONALIDADES
    14: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote
        exercise.chords = filterChords(new minorChords(), [1, 2, "2m", "3A", 3, 4, "4M", 5, 6, "#6", "b7", 7])
        return exercise;
    },


    //Dominantes secundarias sobre acordes principales en modo mayor 
    //DIFERENTES TONALIDADES
    15: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1, 2, 4, 5, 6, 7, '5/4', '7/4', '5/5', '7/5'])
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales en modo menor
    //DIFERENTES TONALIDADES
    16: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new minorChords(), [1, 2, "2m", "3A", 3, 4, "4M", 5, 6, "#6", "b7", 7, '5/4', '7/4', '5/5', '7/5'])
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales y secundarios modo mayor
    //DIFERENTES TONALIDADES
    17: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1, 2, 4, 5, 6, 7, '5/4', '7/4', '5/5', '7/5', '5/6', '7/6', '5/2', '7/2'])
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales y secundarios modo mayor
    //DIFERENTES TONALIDADES
    18: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new minorChords(), [1, 2, "2m", "3A", 3, 4, "4M", 5, 6, "#6", "b7", 7, '5/4', '7/4', '5/5', '7/5', '5/3', '5/6', '7/6', '5/b7', '7/b7'])
        return exercise;
    },

    //Mixtura modal: Tónica y dominantes en modo lidio, cuatro compases.
    19: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1, "2 Lidio", "7 Lidio"])
        return exercise;
    },
    //Mixtura modal: Tónica y dominantes en modo mixolidio, cuatro compases.
    20: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = filterChords(new majorChords(), [1, "7 Mixolidio", "5 Mixolidio"])
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
}*/

var progresionLevelsTree = {
    kind: "mode",
    title: "Progresión",
    //class: "tab-pane fade",
    class: "item",
    color: "yellow",
    code: "Prog",
    components: {
        1: {
            kind: "world",
            title: "Acordes principales",
            code: "_Prin",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            code: "_Major",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            code: "_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
            title: "Acordes principales y secundarios",
            code: "_Sec",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            code: "_Major",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            code: "_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
            title: "Acordes principales y secundarios de las tres escalas del modo menor",
            code: "_MinorScales",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            code: "_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
            title: "Dominantes secundarias sobre acordes principales",
            code: "_DomOnPrinc",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            code: "_Major",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo menor",
                            code: "_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
            title: "Dominantes secundarias sobre acordes principales y secundarios",
            code: "_DomOnAll",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo mayor",
                            code: "_Major",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
                            title: "Modo menor",
                            code: "_Minor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                    components: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
            title: "Modos mayores",
            code: "_MajorModes",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo lidio",
                            code: "_Lid",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo mixolidio",
                            code: "_Mixol",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
                            title: "Modos mayores en mixtura",
                            code: "_MixMajMode",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        },
        7: {
            kind: "world",
            title: "Modos menores",
            code: "_MinorModes",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "Modo dórico",
                            code: "_Dor",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },
                        2: {
                            kind: "zone",
                            title: "Modo frigio",
                            code: "_Frig",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        3: {
                            kind: "zone",
                            title: "Modo eólico",
                            code: "_Aeo",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },
                        4: {
                            kind: "zone",
                            title: "Modo locrio",
                            code: "_Loc",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
                            title: "Modos menores en mixtura",
                            code: "_MixMinMode",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
            title: "Mixtura modal",
            code: "_ModalMix",
            components: {
                1: {
                    kind: "area",
                    title: "",
                    code: "",
                    components: {
                        1: {
                            kind: "zone",
                            title: "",
                            code: "_Mix",
                            components: {
                                1: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_InC",
                                    components: {
                                        1: {
                                            kind: "group",
                                            title: "",
                                            code: "_Show",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "4 compases en Do",
                                                    code: "_Four",
                                                },
                                                2: {
                                                    kind: "badge",
                                                    title: "8 compases en Do",
                                                    code: "_Eight",
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    kind: "exercise",
                                    title: "",
                                    code: "_Rand",
                                    components: {
                                        1: {
                                            kind: "level",
                                            title: "",
                                            code: "_Lesson",
                                            components: {
                                                1: {
                                                    kind: "badge",
                                                    title: "8 compases en tonalidad aleatoria",
                                                    code: "_Eight",
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
