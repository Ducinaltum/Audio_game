function Modes() {
    chords = {
        _1M: new Grade("1M", new Chord('major'), 0, []),
        _1m: new Grade("1m", new Chord('minor'), 0, [], "minor"),
        _2m: new Grade("2m", new Chord('minor'), 2),
        _2d: new Grade("2d", new Chord('dim'), 2, [], "minor"),
        _b3M: new Grade("b3M", new Chord('major'), 3, [], "minor"),
        _b3A: new Grade("b3A", new Chord('aug'), 3, [], "minor"),
        _4M: new Grade("4M", new Chord('major'), 5),
        _4m: new Grade("4m", new Chord('minor'), 5, [], "minor"),
        _5M: new Grade("5M", new Chord('major'), 7, [], ""),
        _b6M: new Grade("b6M", new Chord('major'), 8, [], "minor"),
        _6m: new Grade("6m", new Chord('minor'), 9),
        _b7M: new Grade("b7M", new Chord('major'), 10, [], "minor"),
        _7d: new Grade("7d", new Chord('dim'), 11, [], ""),
        _5_5: new Grade("5/5", new Chord('major', 2, "7"), 2, [], ""),
        _7_5: new Grade("7/5", new Chord('dim'), 6, [], ""),
        _5_4: new Grade("5/4", new Chord('major', 0, "7"), 0, [], ""),
        _7_4: new Grade("7/4", new Chord('dim'), 4, [], ""),
        _5_2: new Grade("5/2", new Chord('major', 9, "7"), 11, [], ""),
        _7_2: new Grade("7/2", new Chord('dim'), 1, [], ""),
        _5_6: new Grade("5/6", new Chord('major', 4, "7"), 11),
        _7_6: new Grade("7/6", new Chord('dim'), 8),
        _5_b3: new Grade("5/b3", new Chord('major', 10, "7"), 11, [], "minor"),
        //_7_b3M: new Grade("2d", new Chord('dim'), 2),
        _5_b6: new Grade("5/b6", new Chord('major', 3, "7"), 11, [], "minor"),
        _7_b6: new Grade("7/b6", new Chord('dim'), 7, [], "minor"),
        _5_b7: new Grade("5/b7", new Chord('major', 5, "7"), 11, [], "minor"),
        _7_b7: new Grade("7/b7", new Chord('dim'), 9, [], "minor"),
        _2lydian: new Grade("2M", new Chord('major'), 2, [], "lydian"),
        _7lydian: new Grade("7m", new Chord('minor'), 11, [], "lydian"),
        _7mixolydian: new Grade("b7M", new Chord('major'), 10, [], "mixolydian"),
        _5mixolydian: new Grade("5m", new Chord('minor'), 7, [], "mixolydian"),
        _4dorian: new Grade("4M", new Chord('major'), 5, [], "dorian"),
        _2dorian: new Grade("2m", new Chord('minor'), 2, [], "dorian"),
        _2phrygian: new Grade("b2M", new Chord('major'), 1, [], "phrygian"),
        _7Frig: new Grade("b7m", new Chord('minor'), 10, [], "phrygian"),
        _7aeolian: new Grade("b7M", new Chord('major'), 10, [], "aeolian"),
        _5aeolian: new Grade("5m", new Chord('minor'), 7, [], "aeolian"),
        _5locrian: new Grade("b5M", new Chord('major'), 6, [], "locrian"),
        _3locrian: new Grade("b3m", new Chord('minor'), 3, [], "locrian"),
    }

    var tree = {
        tonic: {
            primary: ["_1M", "_1m"],
            secondary: ["_6m", "_b3M"]
        },
        subDominant: {
            primary: ["_4M", "_4m"],
            secondary: ["_2m", "_2d", "_b6M"]
        },
        dominant: {
            primary: ["_5M"],
            secondary: ["_7d", "_b3A"]
        },
        neutral: ["_b7M"],

        secondaryDom:{
            toV:["_5_5","_7_5"],
            toIV:["_5_4","_7_4"],
            toII:["_5_2","_7_2"],
            toVI:["_5_6","_7_6"],
            tobIII:["_5_b3"],
            tobVI:["_5_b6","_7_b6"],
            tobVII:["_5_b7","_7_b7"]
        },
        lydian: {
            primary: ["_2lydian"],
            secondary: ["_7lydian"]
        },
        mixolydian: {
            primary: ["_7mixolydian"],
            secondary: ["_5mixolydian"]
        },
        dorian: {
            primary: ["_4dorian"],
            secondary: ["_2dorian"]
        },
        phrygian: {
            primary: ["_2phrygian"],
            secondary: ["_7Frig"]
        },
        aeolian: {
            primary: ["_7aeolian"],
            secondary: ["_5aeolian"]
        },
        locrian: {
            primary: ["_5locrian"],
            secondary: ["_3locrian"]
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
        chords._1m.direction = retrieveLeafs(tree);
        chords._2m.direction = retrieveLeafs({ ...[tree.tonic, tree.subDominant.secondary, tree.dominant,tree.secondaryDom] });
        chords._2d.direction = retrieveLeafs({ ...[tree.tonic, tree.dominant,tree.secondaryDom] });
        chords._b3M.direction = retrieveLeafs({ ...[tree.tonic.secondary, tree.subDominant, tree.dominant,tree.secondaryDom] });
        chords._b3A.direction = retrieveLeafs({ ...[tree.tonic,tree.secondaryDom] });
        chords._4M.direction = retrieveLeafs({ ...[tree.tonic, tree.subDominant, tree.dominant,tree.secondaryDom] });
        chords._4m.direction = retrieveLeafs({ ...[tree.tonic, tree.subDominant.secondary, tree.dominant,tree.secondaryDom] });
        chords._5M.direction = retrieveLeafs({ ...[tree.tonic, tree.dominant, tree.secondaryDom.toVI] });
        chords._b6M.direction = retrieveLeafs({ ...[tree.tonic, tree.dominant,tree.secondaryDom] });
        chords._6m.direction = retrieveLeafs({ ...[tree.tonic.secondary, tree.subDominant, tree.dominant,tree.secondaryDom] });
        chords._b7M.direction = retrieveLeafs({ ...[tree.tonic.secondary, tree.subDominant.primary,tree.secondaryDom] });
        chords._7d.direction = retrieveLeafs({...[tree.tonic.primary,["_5_6"]]});

        chords._5_5.direction = retrieveLeafs({ ...[tree.dominant.primary, ["_7_5"]] });
        chords._7_5.direction = retrieveLeafs(tree.dominant.primary);
        chords._5_4.direction = retrieveLeafs({ ...[tree.subDominant.primary, ["_7_4]"]]});
        chords._7_4.direction = retrieveLeafs(tree.subDominant.primary);

        chords._5_2.direction = retrieveLeafs({ ...[["_2m"], ["_7_2"]] });
        chords._7_2.direction = retrieveLeafs(["_2m"]);
        chords._5_6.direction = retrieveLeafs({ ...[["_6m"], ["_7_6"]] });
        chords._7_6.direction = retrieveLeafs(["_6m"]);
        chords._5_b3.direction = retrieveLeafs(["_b3M"]);
        //_7_b3M: new Grade("2d", new Chord('dim'), 11, []),
        chords._5_b6.direction = retrieveLeafs({ ...[["_b6M"], ["_7_b6"]] });
        chords._7_b6.direction = retrieveLeafs(["_b6M"]);
        chords._5_b7.direction = retrieveLeafs({ ...[tree.neutral, ["_7_b7"]] });
        chords._7_b7.direction = retrieveLeafs(tree.neutral);

        chords._2lydian.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.lydian.secondary] });
        chords._7lydian.direction = retrieveLeafs(tree.tonic.primary);
        chords._7mixolydian.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.mixolydian.secondary] });
        chords._5mixolydian.direction = retrieveLeafs(tree.tonic.primary);
        chords._4dorian.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.dorian.secondary] });
        chords._2dorian.direction = retrieveLeafs(tree.tonic.primary);
        chords._2phrygian.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.phrygian.secondary] });
        chords._7Frig.direction = retrieveLeafs(tree.tonic.primary);
        chords._7aeolian.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.aeolian.secondary] });
        chords._5aeolian.direction = retrieveLeafs(tree.tonic.primary);
        chords._5locrian.direction = retrieveLeafs({ ...[tree.tonic.primary, tree.locrian.secondary] });
        chords._3locrian.direction = retrieveLeafs(tree.tonic.primary);
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
const lydian = ["1M", "2lydian", "7lydian"]
const mixolydian = ["1M", "7mixolydian", "5mixolydian"]
const majorModes = mixolydian.concat(lydian)
const dorian = ["1m", "4dorian", "2dorian"]
const phrigian = ["1m", "b2phrygian", "7Frig"]
const aeolian = ["1m", "7aeolian", "5aeolian"]
const locrian = ["1m", "5locrian", "3locrian"]
const minorModes = dorian.concat(phrigian, aeolian, locrian)
const mixedModes = majorModes.concat(minorModes)

function filterChords(harmonies, availableChords) {
    console.log(availableChords)
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
        var buildDirection = {}
        actualChord.direction.forEach(function (d) {
            const candidate = d;
            Object.keys(chords).forEach(function (pair) {
                if (candidate == pair) {
                    buildDirection[pair] = chords[pair];
                }
            })
        })
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
                else if (mode == "MixMajMode") return filterChords(modeConstruct, majorModes)
                break;
            case "MinorModes":
                if (mode == "Dor") return filterChords(modeConstruct, [1].concat(dorian))
                else if (mode == "Frig") return filterChords(modeConstruct, [1].concat(phrigian))
                else if (mode == "Aeo") return filterChords(modeConstruct, [1].concat(aeolian))
                else if (mode == "Loc") return filterChords(modeConstruct, [1].concat(locrian))
                else if (mode == "MixMinMode") return filterChords(modeConstruct, minorModes)
                break;
            case "ModalMix":
                return filterChords(modeConstruct, mixedModes)
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
