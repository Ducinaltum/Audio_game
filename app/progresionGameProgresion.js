//COMENTADO EL 13/2
/*
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
    arr.push(new Grade('1', new Chord('minor'), 0, [1, 4, 5, 2, 3, 6, 7, '3A', 'b7', '5/4', '7/4', '5/5', '7/5', '5/3', '5/6', '7/6', '5/b7', '7/b7', '4 Dorico', '2 Dorico', 'b2 Frigio', 'b7 Frigio', 'b7 Eolico', '5 Eolico', 'b5 Locrio', '3 Locrio'], 'minor'));
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
    arr.push(new Grade('b2 Frigio', new Chord('major'), 1, [1, "b7 Frigio"]))
    arr.push(new Grade('b7 Frigio', new Chord('minor'), 10, [1]))
    arr.push(new Grade('b7 Eolico', new Chord('major'), 10, [1, "5 Eolico"]))
    arr.push(new Grade('5 Eolico', new Chord('minor'), 7, [1]))
    arr.push(new Grade('b5 Locrio', new Chord('major'), 6, [1, "3 Locrio"]))
    arr.push(new Grade('3 Locrio', new Chord('minor'), 3, [1]))
    return arr;
}
*/
/*
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
*/
/*
const majorPrincipals = ["_1M", "_4M", "_5M"]
const minorPrincipals = ["_1m", "_4m", "_5m"]
const majorSecondaries = majorPrincipals.concat([2, 6, 7])
const minorSecondaries = minorPrincipals.concat([2, "3M", 6, 7])
//const minorFull = minorSecondaries.concat(["2m", "3A", "4M", "#6", "b7"])
const minorFull = minorSecondaries.concat(["3A", "b7"])
//Buscarle la vuelta pa que ande
const majorPrincipalsDominants = majorSecondaries.concat(["5/4", "7/4", "5/5", "7/5"])
const minorPrincipalsDominants = minorFull.concat(["5/4", "7/4", "5/5", "7/5"])
const majorSecondariesDominants = majorPrincipalsDominants.concat(['5/6', '5/2', '7/6', '7/2'])
const minorSecondariesDominants = minorPrincipalsDominants.concat(['5/3', '5/6', '5/b7', '7/6', '7/b7'])
//

const lydian = [1, 2, 7]
const mixolydian = [1, 7, 5]
const majorModes = mixolydian.concat(lydian)
const dorian = [1, 4, 2]
const phrigian = [1, 2, 7]
const aeolian = [1, 7, 5]
const locrian = [1, 5, 3]
const minorModes = dorian.concat(phrigian, aeolian, locrian)
*/

function Modes() {
    chords = {
        _1M: new Grade("1M", new Chord('major'), 0, []),
        _1m: new Grade("1m", new Chord('minor'), 0, []),
        _2m: new Grade("2m", new Chord('minor'), 2, []),
        _2d: new Grade("2d", new Chord('dim'), 2, []),
        _b3M: new Grade("b3M", new Chord('major'), 3, []),
        _b3A: new Grade("b3A", new Chord('aug'), 3, []),
        _4M: new Grade("4M", new Chord('major'), 5, []),
        _4m: new Grade("4m", new Chord('minor'), 5, []),
        _5M: new Grade("5M", new Chord('major'), 7, []),
        _b6M: new Grade("b6M", new Chord('major'), 8, []),
        _6m: new Grade("6m", new Chord('minor'), 9, []),
        _b7M: new Grade("b7M", new Chord('major'), 10, []),
        _7d: new Grade("7d", new Chord('dim'), 11, []),
        _5_5: new Grade("2M", new Chord('major', 2, "7"), 2, []),
        _7_5: new Grade("#4d", new Chord('dim'), 6, []),
        _5_4: new Grade("1M", new Chord('major', 0, "7"), 0, []),
        _7_4: new Grade("3d", new Chord('dim'), 4, []),
        _5_2: new Grade("6M", new Chord('major', 9, "7"), 11, []),
        _7_2: new Grade("#1d", new Chord('dim'), 2, []),
        _5_6: new Grade("3M", new Chord('major', 4, "7"), 11, []),
        _7_6: new Grade("#5d", new Chord('dim'), 8, []),
        _5_b3: new Grade("b7M", new Chord('major', 10, "7"), 11, []),
        //_7_b3M: new Grade("2d", new Chord('dim'), 2, []),
        _5_b6: new Grade("b3M", new Chord('major', 3, "7"), 11, []),
        _7_b6: new Grade("5d", new Chord('dim'), 7, []),
        _5_b7: new Grade("4M", new Chord('major', 5, "7"), 11, []),
        _7_b7: new Grade("6d", new Chord('dim'), 9, []),
        _2Lid: new Grade("2M", new Chord('major'), 2, []),
        _7Lid: new Grade("7m", new Chord('minor'), 11, []),
        _7Mix: new Grade("b7M", new Chord('major'), 10, []),
        _5Mix: new Grade("5m", new Chord('minor'), 7, []),
        _4Dor: new Grade("4M", new Chord('major'), 5, []),
        _2Dor: new Grade("2m", new Chord('minor'), 2, []),
        _2Frig: new Grade("b2M", new Chord('major'), 1, []),
        _7Frig: new Grade("b7m", new Chord('minor'), 10, []),
        _7Aeo: new Grade("b7M", new Chord('major'), 10, []),
        _5Aeo: new Grade("5m", new Chord('minor'), 7, []),
        _5Loc: new Grade("b5M", new Chord('major'), 6, []),
        _3Loc: new Grade("b3m", new Chord('minor'), 3, []),
    }

    var tree = {
        tonic: {
            primary: [chords._1M, chords._1m],
            secondary: [chords._6m, chords._b3M]
        },
        subDominant: {
            primary: [chords._4M, chords._4m],
            secondary: [chords._2m, chords._2d, chords._b6M]
        },
        dominant: {
            primary: [chords._5M],
            secondary: [chords._7d, chords._b3A]
        },
        neutral: [chords._b7M],
        lydian: {
            primary: [chords._2Lid],
            secondary: [chords._7Lid]
        },
        mixolydian: {
            primary: [chords._7Mix],
            secondary: [chords._5Mix]
        },
        dorian: {
            primary: [chords._4Dor],
            secondary: [chords._2Dor]
        },
        phrygian: {
            primary: [chords._2Frig],
            secondary: [chords._7Frig]
        },
        aeolian: {
            primary: [chords._7Aeo],
            secondary: [chords._5Aeo]
        },
        locrian: {
            primary: [chords._5Loc],
            secondary: [chords._3Loc]
        },
    }

    retrieveLeafs = function (obj) {
        let leafs = []
        if (!Array.isArray(obj)) {
            Object.keys(obj).forEach(function (key) {
                leaf = retrieveLeafs(obj[key])
                leafs = leafs.concat(leaf);
            });
            return leafs
        }
        else {
            return obj;
        }
    }

    loadDirections = function () {
        chords._1M.direction = retrieveLeafs(tree);
        console.log(chords._1M.direction)
        chords._1m.direction = retrieveLeafs(tree);
        chords._2m.direction = retrieveLeafs({ ...[tree.tonic, tree.subDominant.secondary, tree.dominant]});
        chords._2d.direction = retrieveLeafs({ ...[tree.tonic, tree.dominant]});
        chords._b3M.direction = retrieveLeafs({ ...[tree.tonic.secondary, tree.subDominant, tree.dominant]});
        chords._b3A.direction = retrieveLeafs({ ...[tree.tonic]});
        chords._4M.direction = retrieveLeafs({ ...[tree.tonic, tree.subDominant, tree.dominant]});
        chords._4m.direction = retrieveLeafs({ ...[tree.tonic, tree.subDominant.secondary, tree.dominant]});
        chords._5M.direction = retrieveLeafs({ ...[tree.tonic, tree.dominant]});
        chords._b6M.direction = retrieveLeafs({ ...[tree.tonic, tree.dominant]});
        chords._6m.direction = retrieveLeafs({ ...[tree.tonic.secondary, tree.subDominant, tree.dominant]});
        chords._b7M.direction = retrieveLeafs({ ...[tree.tonic.secondary, tree.subDominant.primary]});
        chords._7d.direction = retrieveLeafs(tree.tonic.primary);

        chords._5_5.direction = retrieveLeafs({...[tree.dominant.primary, [chords._7_5]]});
        chords._7_5.direction = retrieveLeafs([chords._5M]);
        chords._5_4.direction = retrieveLeafs({...[tree.subDominant.primary, [chords._7_4]]});
        chords._7_4.direction = retrieveLeafs([chords._4M]);

        chords._5_2.direction = retrieveLeafs({...[[chords._2m], [chords._7_2]]});
        chords._7_2.direction = retrieveLeafs([chords._2m]);
        chords._5_6.direction = retrieveLeafs({...[[chords._6m], [chords._7_6]]});
        chords._7_6.direction = retrieveLeafs([chords._6m]);
        chords._5_b3.direction = retrieveLeafs([chords._b3M]);
        //_7_b3M: new Grade("2d", new Chord('dim'), 11, []),
        chords._5_b6.direction = retrieveLeafs({...[[chords._b6M], [chords._7_b6]]});
        chords._7_b6.direction = retrieveLeafs([chords._b6M]);
        chords._5_b7.direction = retrieveLeafs({...[tree.neutral, [chords._7_b7]]});
        chords._7_b7.direction = retrieveLeafs(tree.neutral);        

        chords._2Lid.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.lydian.secondary]});
        chords._7Lid.direction = retrieveLeafs(tree.tonic.primary);
        chords._7Mix.direction = retrieveLeafs({ ...[tree.tonic.primary,tree.mixolydian.secondary]});
        chords._5Mix.direction = retrieveLeafs(tree.tonic.primary);
        chords._4Dor.direction = retrieveLeafs({ ...[tree.tonic.primary,tree.dorian.secondary]});
        chords._2Dor.direction = retrieveLeafs(tree.tonic.primary);
        chords._2Frig.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.phrygian.secondary]});
        chords._7Frig.direction = retrieveLeafs(tree.tonic.primary);
        chords._7Aeo.direction = retrieveLeafs({ ...[tree.tonic.primary,tree.aeolian.secondary]});
        chords._5Aeo.direction = retrieveLeafs(tree.tonic.primary);
        chords._5Loc.direction = retrieveLeafs({ ...[tree.tonic.primary,tree.locrian.secondary]});
        chords._3Loc.direction = retrieveLeafs(tree.tonic.primary);
    }

    loadDirections();

    this.retrieveChords = function () {
        return chords;
    }

}

const majorPrincipals = ["1M", "4M", "5M"]
const minorPrincipals = ["1m", "4m", "5M"]
const majorSecondaries = majorPrincipals.concat(["2m", "6m", "7d"])
const minorSecondaries = minorPrincipals.concat(["2d", "b3M", "b6M", "7d"])
const minorFull = minorSecondaries.concat(["3A", "b7M"])
const majorPrincipalsDominants = majorSecondaries.concat(["5_4", "7_4", "5_5", "7_5"])
const minorPrincipalsDominants = minorFull.concat(["5_4", "7_4", "5_5", "7_5"])
const majorSecondariesDominants = majorPrincipalsDominants.concat(['5_6', '5_2', '7_6', '7_2'])
const minorSecondariesDominants = minorPrincipalsDominants.concat(['5_b3', '5_b6', '5_b7', '7_b6', '7_b7'])
const lydian = ["1M", "2Lid", "7Lid"]
const mixolydian = ["1M", "7Mix", "5Mix"]
const majorModes = mixolydian.concat(lydian)
const dorian = ["1m", "4Dor", "2Dor"]
const phrigian = ["1m", "b2Frig", "7Frig"]
const aeolian = ["1m", "7Aeo", "5Aeo"]
const locrian = ["1m", "5Loc", "3Loc"]
const minorModes = dorian.concat(phrigian, aeolian, locrian)

function filterChords(harmonies, availableChords) {
    var buildedMode = {}
    availableChords.forEach(function (e) {
        Object.keys(harmonies).forEach(function (chord) {
            if (chord.replace("_", "") == e) {
                buildedMode[chord] = harmonies[chord]
            }
        })
    })
    const build = buildDirections(buildedMode)
    return build
}

function buildDirections(chords) {
    Object.keys(chords).forEach(function (c) {
        const actualChord = chords[c]
        console.log(actualChord)
        console.log(actualChord.direction)
        //buildDirection = []
        var buildDirection = {}
        actualChord.direction.forEach(function (d) {
            const candidate = d.grade;
            Object.keys(chords).forEach(function (pair) {
               //if (candidate == pair.replace("_", "")) {
                if (candidate == chords[pair].grade) {
                    //buildDirection.push(chords[pair])
                    buildDirection[pair] = chords[pair];
                }
            })
        })
        console.log(buildDirection)
        actualChord.direction = buildDirection
    })
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
    return level;
}

progresionLevelMaker = {
    kind: {
        Int: "Intervals",
        Cho: "Chords",
        Prog: "Progresion"
    },
    chords: function (grades, mode) {
        let modeConstruct = new Modes().retrieveChords();
        switch (grades) {
            /*
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
                */
            case "Prin":
                if (mode == "Major") return filterChords(modeConstruct, majorPrincipals)
                else if (mode == "Minor") return filterChords(modeConstruct, minorPrincipals)
                break;
            case "Sec":
                if (mode == "Major") return filterChords(modeConstruct, majorSecondaries)
                else if (mode == "Minor") return filterChords(modeConstruct, minorSecondaries)
                break;
            case "MinorScales":
                return filterChords(modeConstruct, minorFull)
                break;
            case "DomOnPrinc":
                if (mode == "Major") return filterChords(modeConstruct, majorPrincipalsDominants)
                else if (mode == "Minor") return filterChords(modeConstruct, minorPrincipalsDominants)
                break;
            case "DomOnAll":
                if (mode == "Major") return filterChords(modeConstruct, majorSecondariesDominants)
                else if (mode == "Minor") return filterChords(modeConstruct, minorSecondariesDominants)
                break;
            case "MajorModes":
                if (mode == "Lid") return filterChords(modeConstruct, lydian)
                else if (mode == "Mixol") return filterChords(modeConstruct, mixolydian)
                break;
            case "MinorModes":
                if (mode == "Dor") return filterChords(modeConstruct, [1].concat(dorian))
                else if (mode == "Frig") return filterChords(modeConstruct, [1].concat(phrigian))
                else if (mode == "Aeo") return filterChords(modeConstruct, [1].concat(aeolian))
                else if (mode == "Loc") return filterChords(modeConstruct, [1].concat(locrian))
                break;
            case "ModalMix":
                break;
        }
    },
    mode: {
        Major: 'major',
        Minor: 'minor',
        Lid: 'lydian',
        Mixol: 'mixolydian',
        Dor: 'dorian',
        Frig: 'phrygian',
        Aeo: 'aeolian',
        Loc: 'locrian',
        MixMajMode: 'major',
        MixMinMode: 'minor',
        Mix: 'major',
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
};

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
                            title: "Lidio",
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
                            title: "Mixolidio",
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
                            title: "Dórico",
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
                            title: "Frigio",
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
                            title: "Eólico",
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
                            title: "Locrio",
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
