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

var chordsLevels = {
    get 0() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1]],
            depth: 1,
            isOpen: false,
        }
        return level;
    },
    get 1() {
        var level = {
            name: "",
            base: [baseChords[2], baseChords[3]],
            depth: 1,
            isOpen: false
        }
        return level;
    },
    get 2() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1], baseChords[2], baseChords[3]],
            depth: 1,
            isOpen: false
        }
        return level;
    },
    get 3() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1], baseChords[2], baseChords[3]],
            depth: 1,
            isOpen: true
        }
        return level;
    },

    //Séptimas
    get 4() {
        var level = {
            name: "",
            base: [baseChords[0]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 5() {
        var level = {
            name: "",
            base: [baseChords[1]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 6() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 7() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1]],
            depth: 2,
            isOpen: true
        }
        return level;
    },
    get 8() {
        var level = {
            name: "",
            base: [baseChords[2]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 9() {
        var level = {
            name: "",
            base: [baseChords[3]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 10() {
        var level = {
            name: "",
            base: [baseChords[2], baseChords[3]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 11() {
        var level = {
            name: "",
            base: [baseChords[2], baseChords[3]],
            depth: 2,
            isOpen: true
        }
        return level;
    },
    get 12() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1], baseChords[2], baseChords[3]],
            depth: 2,
            isOpen: false
        }
        return level;
    },
    get 13() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1], baseChords[2], baseChords[3]],
            depth: 2,
            isOpen: true
        }
        return level;
    },

    //Novenas
    get 14() {
        var level = {
            name: "",
            base: [baseChords[0]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 15() {
        var level = {
            name: "",
            base: [baseChords[1]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 16() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 17() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1]],
            depth: 3,
            isOpen: true
        }
        return level;
    },
    get 18() {
        var level = {
            name: "",
            base: [baseChords[2]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 19() {
        var level = {
            name: "",
            base: [baseChords[3]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 20() {
        var level = {
            name: "",
            base: [baseChords[2], baseChords[3]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 21() {
        var level = {
            name: "",
            base: [baseChords[2], baseChords[3]],
            depth: 3,
            isOpen: true
        }
        return level;
    },
    get 22() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1], baseChords[2], baseChords[3]],
            depth: 3,
            isOpen: false
        }
        return level;
    },
    get 23() {
        var level = {
            name: "",
            base: [baseChords[0], baseChords[1], baseChords[2], baseChords[3]],
            depth: 3,
            isOpen: true
        }
        return level;
    },
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

