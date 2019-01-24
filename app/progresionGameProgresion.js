function buildDirections(chords){
    chords.forEach(element => {
        direction = []
        buildDirection = [];
        element.direction.forEach(directionArr => {
            buildDirection = buildDirection.concat(directionArr);
        });
        element.direction = buildDirection;
        for(var i = 0; i < element.direction.length; i++){
            for(var j = 0; j < chords.length; j++){
                if(element.direction[i] == chords[j].grade) {
                    direction[i] = chords[j];
                }
            }
        }
        element.direction = direction
    });
}

function majorPrincipals() {
    arr = []
    arr.push(new Grade('1', new Chord('major'), 0, [1,4,5]));
    arr.push(new Grade('4', new Chord('major'), 5, [1,4,5]));
    arr.push(new Grade('5', new Chord('major'), 7, [1,5]));
    return arr;
}

function majorSecondaries(){
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [[1,4,5], [2,6,7]]));
    arr.push(new Grade('4', new Chord('major'), 5, [[1,4,5], [2,6,7]]));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[6,7]]));
    arr.push(new Grade('2', new Chord('minor'), 2, [[1,5], [6,7]]))
    arr.push(new Grade('6', new Chord('minor'), 9, [[4,5], [2,7]]))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]]))
    return arr;
}

//Acomodar la distancia a tónica
function minorPrincipals() {
    arr = []
    arr.push(new Grade('1', new Chord('minor'), 0, [1,4,5], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [1,4,5], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [1,5], 'minor'));
    return arr;
}

function minorSecondaries(){
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [[1,4,5],[2,3,6,7]], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [[1,4,5],[2,3,6,7]], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[3,7]], 'minor'));
    
    arr.push(new Grade('2', new Chord('dim'), 2, [[1,5],[3,6,7]], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [[4,5],[2,6,7]], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [[1,5],[2,3]], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]], 'minor'))
    return arr;
}

function expandedMinor(){
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [[1,4,5],[2,3,6,7],['3A', 'b7']], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [[1,4,5],[2,3,6,7],['3A', 'b7']], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[3,7]['2m','3A', '4M', '#6', 'b7']], 'minor'));
    
    arr.push(new Grade('2', new Chord('dim'), 2, [[1,5],[3,6,7]], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [[4,5],[2,6,7],['3A']], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [[1,5],[2,3]], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]], 'minor'))

    //Buscar la forma de obligar a utilizar los acordes nuevos
    arr.push(new Grade('2m', new Chord('minor'), 2, [[5],[7],['3A']], 'minor'))
    arr.push(new Grade('3A', new Chord('aug'), 3, [[1]], 'minor'))
    arr.push(new Grade('4M', new Chord('major'), 5, [[5],[7],['2m', '3A']], 'minor'))
    //Hay que pasarlo invertido
    //arr.push(new Grade(5, "minor", "D", "S", 11, [1]))
    arr.push(new Grade('#6', new Chord('dim'), 9, [[5],[7], ['3A']], 'minor'))
    arr.push(new Grade('b7', new Chord('major'), 10, [[1],[3, 6]], 'minor'))
    return arr;
}

function onMajorPrincipalsSecondaryDominats(){
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [[1,4,5], [2,6,7],['5/4','5/5', '7/4', '7/5']]));
    arr.push(new Grade('4', new Chord('major'), 5, [[1,4,5], [2,6,7],['5/5','7/5']]));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[6,7],[]]));
    arr.push(new Grade('2', new Chord('minor'), 2, [[1,5], [6,7],['5/4','5/5', '7/4', '7/5']]))
    arr.push(new Grade('6', new Chord('minor'), 9, [[4,5], [2,7],['5/4','5/5', '7/4', '7/5']]))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]]))

    arr.push(new Grade('5/4', new Chord('major', 2 ,'7'), 0, [[4],['7/4']]))
    arr.push(new Grade('5/5', new Chord('major'), 2, [[5],['7/5']]))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5]))
    return arr;
}

function onMajorSecondariesSecondaryDominats(){
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [[1,4,5], [2,6,7],['5/4','5/5', '7/4', '7/5'],['5/6', '7/6', '5/2', '7/2']]));
    arr.push(new Grade('4', new Chord('major'), 5, [[1,4,5], [2,6,7],['5/5','7/5'],['5/6', '7/6', '5/2', '7/2']]));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[6,7],[], ['5/6', '7/6']]));
    arr.push(new Grade('2', new Chord('minor'), 2, [[1,5], [6,7],['5/4','5/5', '7/4', '7/5'],['5/6', '7/6']]))
    arr.push(new Grade('6', new Chord('minor'), 9, [[4,5], [2,7],['5/4','5/5', '7/4', '7/5'],['5/2', '7/2']]))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]]))

    arr.push(new Grade('5/4', new Chord('major', 2 , '7'), 0, [[4],['7/4']]))
    arr.push(new Grade('5/5', new Chord('major'), 2, [[5],['7/5']]))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [[4]]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [[5]]))

    arr.push(new Grade('5/6', new Chord('major'), 4, [[6],['7/6']]))
    arr.push(new Grade('5/2', new Chord('major'), 9, [[2],['7/2']]))
    arr.push(new Grade('7/6', new Chord('dim'), 8, [[6]]))
    arr.push(new Grade('7/2', new Chord('dim'), 1, [[2]]))
    return arr;
}

function onMinorPrincipalsSecondaryDominats(){
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [[1,4,5],[2,3,6,7],['3A', 'b7'],['5/4', '7/4', '5/5', '7/5']], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [[1,4,5],[2,3,6,7],['3A', 'b7'],['5/5', '7/5']], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[3,7]['2m','3A', '4M', '#6', 'b7']], 'minor'));
    
    arr.push(new Grade('2', new Chord('dim'), 2, [[1,5],[3,6,7],['5/5', '7/5']], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [[4,5],[2,6,7],['3A'],['5/4, 5/5', '7/4', '7/5']], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [[1,5],[2,3]], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]], 'minor'))
    //Buscar la forma de obligar a utilizar los acordes nuevos
    arr.push(new Grade('2m', new Chord('minor'), 2, [[5],[7],['3A']], 'minor'))
    arr.push(new Grade('3A', new Chord('aug'), 3, [[1]], 'minor'))
    arr.push(new Grade('4M', new Chord('major'), 5, [[5],[7],['2m', '3A']], 'minor'))
    //Hay que pasarlo invertido
    //arr.push(new Grade(5, "minor", "D", "S", 11, [1]))
    arr.push(new Grade('#6', new Chord('dim'), 9, [[5],[7], ['3A']], 'minor'))
    arr.push(new Grade('b7', new Chord('major'), 10, [[1],[6]], 'minor'))

    arr.push(new Grade('5/4', new Chord('major', 2 , '7'), 0, [[4],['7/4']]))
    arr.push(new Grade('5/5', new Chord('major'), 2, [[5],['7/5']]))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [[4]]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [[5]]))
    return arr;
}

function onMinorSecondariesSecondaryDominats(){
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [[1,4,5],[2,3,6,7],['3A', 'b7'],['5/4', '7/4', '5/5', '7/5'],['5/3','5/6', '7/6', '5/b7', '7/b7']], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [[1,4,5],[2,3,6,7],['3A', 'b7'],['5/5', '7/5'],['5/3','5/6', '7/6', '5/b7', '7/b7']], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[3,7]['2m','3A', '4M', '#6', 'b7'],['5/3']], 'minor'));
    
    arr.push(new Grade('2', new Chord('dim'), 2, [[1,5],[3,6,7],['3A'],['5/5', '7/5'],['5/3','5/6', '7/6', '5/b7', '7/b7']], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [[4,5],[2,6,7],['3A'],['5/4, 5/5', '7/4', '7/5'],['5/6', '7/6', '5/b7', '7/b7']], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [[1,5],[2,3,7],['3A'],['5/3','5/b7', '7/b7']], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]], 'minor'))
    //Buscar la forma de obligar a utilizar los acordes nuevos
    arr.push(new Grade('2m', new Chord('minor'), 2, [[5],[7],['3A']], 'minor'))
    arr.push(new Grade('3A', new Chord('aug'), 3, [[1]], 'minor'))
    arr.push(new Grade('4M', new Chord('major'), 5, [[5],[7],['2m', '3A']], 'minor'))
    //Hay que pasarlo invertido
    //arr.push(new Grade(5, "minor", "D", "S", 11, [1]))
    arr.push(new Grade('#6', new Chord('dim'), 9, [[5],[7], ['3A']], 'minor'))
    arr.push(new Grade('b7', new Chord('major'), 10, [[1],[3, 6]], 'minor'))

    arr.push(new Grade('5/4', new Chord('major', 2 , '7'), 0, [[4],['7/4']]))
    arr.push(new Grade('5/5', new Chord('major'), 2, [[5],['7/5']]))
    arr.push(new Grade('7/4', new Chord('dim'), 4, [4]))
    arr.push(new Grade('7/5', new Chord('dim'), 6, [5]))

    arr.push(new Grade('5/3', new Chord('major', 2 , '7'), 10, [[4],['7/3']]))
    arr.push(new Grade('5/6', new Chord('major', 2 , '7'), 3, [[5],['7/6']]))
    arr.push(new Grade('5/b7', new Chord('major'), 2, [[5],['7/b7']]))
    //Este lo comento por que corresponde al segundo que no cambia de tipo
    //arr.push(new Grade('7/3', new Chord('dim', '7'), 4, [[3]]))
    arr.push(new Grade('7/6', new Chord('dim'), 7, [[6]]))
    arr.push(new Grade('7/b7', new Chord('dim'), 9, [['b7']]))
    return arr;
}

function buildMajorPrincipals() {
    chords = tonalMajorProgressionChords;
    chords.forEach(function (element) {
        element.setDirections(chords);
    }, this);
    return chords;
}

var progresionLevels = {
    //Acordes principales mayores 4cc
    0: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = new majorPrincipals();
        return exercise;
    },
    //Acordes principales menores 4cc
    1: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = new minorPrincipals();
        return exercise;
    },
    //Acordes principales mayores 8cc
    2: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = new majorPrincipals();
        return exercise;
    },
    //Acordes principales mayores 8cc DISTINTAS TONALIDADES
    3: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = new majorPrincipals();
        return exercise;
    },
    //Acordes principales menores 8cc
    4: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = new minorPrincipals();
        return exercise;
    },
    //Acordes principales menores 8cc DISTINTAS TONALIDADES
    5: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote
        exercise.chords = new minorPrincipals();
        return exercise;
    },
    //Acorde secundarios mayores 4cc
    6: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = new majorSecondaries();
        return exercise;
    },
    //Acorde secundarios menores 4cc
    7: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function () { return 0 }
        exercise.chords = new minorSecondaries();
        return exercise;
    },
    //Acorde secundarios mayores 8cc
    8: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = function(){return 0}
        exercise.chords = new majorSecondaries();
        return exercise;
    },
    //Acorde secundarios mayores 8cc DISTINTAS TONALIDADES
    9: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = new majorSecondaries();
        return exercise;
    },
    //Acorde secundarios menores 8cc
    10: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = new minorSecondaries();
        return exercise;
    },
    //Acorde secundarios menores 8cc DISTINTAS TONALIDADES
    11: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = new minorSecondaries();
        return exercise;
    },
    //Acordes menores de todas las escalas  4cc
    12: function () {
        var exercise = {};
        exercise.numberOfChords = 4
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = new expandedMinor();
        return exercise;
    },
    //Acordes menores de todas las escalas  8cc
    13: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = new expandedMinor();
        return exercise;
    },
    //Acordes menores de todas las escalas  8cc DISTINTAS TONALIDADES
    14: function () {
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = function(){return 0}
        exercise.chords = new expandedMinor();
        return exercise;
    },


    //Dominantes secundarias sobre acordes principales en modo mayor 
    //DIFERENTES TONALIDADES
    15: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = new onMajorPrincipalsSecondaryDominats();
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales en modo menor
    //DIFERENTES TONALIDADES
    16: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = new onMinorPrincipalsSecondaryDominats();
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales y secundarios modo mayor
    //DIFERENTES TONALIDADES
    17: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['major']
        exercise.tonality = randomNote;
        exercise.chords = new onMajorSecondariesSecondaryDominats();
        return exercise;
    },
    //Dominantes secundarias sobre acordes principales y secundarios modo mayor
    //DIFERENTES TONALIDADES
    18: function(){
        var exercise = {};
        exercise.numberOfChords = 8
        exercise.mode = ['minor']
        exercise.tonality = randomNote;
        exercise.chords = new onMinorSecondariesSecondaryDominats();
        return exercise;
    },

    //Mixtura modal: Tónica y dominantes en modo lidio, cuatro compases.
    //Mixtura modal: Tónica y dominantes en modo eólico, cuatro compases.
    //Mixtura modal: Tónica y dominantes en modo mixolidio, cuatro compases.
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
    //Mixtura modal: Tónica y dominantes de todos los modos combinados, ocho compases.
    //Mixtura modal: Tónica y dominantes en modo dórico, cuatro compases.

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

function randomNote(){
    return Math.floor(Math.random()*12) - 6
}