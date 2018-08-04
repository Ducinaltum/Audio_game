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
            ['7', [['b9'], ['9'], ['#9'], ['#11'], ['13']]],
            ['majj7', [['9'], ['#11'], ['13']]]
        ]
    ],
    ['minor',
        [
            //['6'],
            ['7', [['9'], ['11'], ['13']]],
            ['majj7', [['9'], ['11'], ['13']]]
            //11 b13
        ]
    ],
    ['dim',
        [
            ['b7'],
            ['7', [['11'], ['b13']]]
        ]
    ],
    ['aug',
        [
            ['7', [['b9'], ['9'], ['#9'], ['#11'], ['13']]],
            ['majj7', [['9'], ['#11'], ['13']]]
        ]
    ],
    ['sus'],
]

var chordsLevels = {
    0: function () {
        return [baseChords[0], baseChords[1]];
    },
    1: function () {
        return [baseChords[2], baseChords[3]];
    },
    2: function () {
        return [baseChords[0], baseChords[1],baseChords[2], baseChords[3]];
    },
    3: function () {
        return [baseChords[0], baseChords[1],baseChords[2], baseChords[3]];
    },
    4: function () {
        return [baseChords[0]];
    },
    5: function () {
        return [baseChords[1]];
    },
    6: function () {
        return [baseChords[0],baseChords[1]]
    },
    7: function () {
        return [baseChords[0],baseChords[1]]
    },
    8: function () {
        return [baseChords[2]]
    },
    9: function () {
        return [baseChords[3]]
    },
    10: function () {
        return [baseChords[2],baseChords[3]];
    },
    11: function () {
        return [baseChords[2],baseChords[3]];
    },
    12: function () {
        return [baseChords[0],baseChords[1], baseChords[2],baseChords[3]];        
    },
    13: function () {
        return [baseChords[0],baseChords[1], baseChords[2],baseChords[3]];        
    }
}

$('#chordsSelection .list-group-item').click(function (e) {
    var selectedExercise = this.id;
    var levelSelected = Number(this.id.slice(3)) * 4
    if (currentExercise != null) {
        if (currentExercise.getKindOfExercise() != 'Chords') {
            progressRestore()
        }
    }
    levelSelected += Number($('#chordMode .btn-primary').attr('id'))
    currentExercise = new ChordsExercise(levelSelected);
    goToExercise();
})

