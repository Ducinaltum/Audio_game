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
    arr.push(new Grade('6', new Chord('major'), 8, [[1,5],[2,3,7]], 'minor'))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]], 'minor'))
    return arr;
}

function expandedMinor(){
    arr = [];
    arr.push(new Grade('1', new Chord('minor'), 0, [[1,4,5],[2,3,6,7],['3A', 'b7']], 'minor'));
    arr.push(new Grade('4', new Chord('minor'), 5, [[1,4,5],[2,3,6,7],['3A', 'b7']], 'minor'));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[3,7]['2m','3A', '4M', '#6', 'b7']], 'minor'));
    
    arr.push(new Grade('2', new Chord('dim'), 2, [[1,5],[3,6,7],['3A']], 'minor'))
    arr.push(new Grade('3', new Chord('major'), 3, [[4,5],[2,6,7],['3A']], 'minor'))
    arr.push(new Grade('6', new Chord('major'), 8, [[1,5],[2,3,7],['3A']], 'minor'))
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

    arr.push(new Grade('5/4', new Chord('major', '7'), 0, [[4],['7/4']]))
    arr.push(new Grade('5/5', new Chord('major', '7'), 2, [[5],['7/5']]))
    arr.push(new Grade('7/4', new Chord('dim', '7'), 4, [4]))
    arr.push(new Grade('7/5', new Chord('dim', '7'), 6, [5]))
    return arr;
}

function onMajorSecondariesSecondaryDominats(){
    arr = [];
    arr.push(new Grade('1', new Chord('major'), 0, [[1,4,5], [2,6,7],['5/4','5/5', '7/4', '7/5'],['5/6', '7/6', '5/2', '7/2']]));
    arr.push(new Grade('4', new Chord('major'), 5, [[1,4,5], [2,6,7],['5/5','7/5'],['5/6', '7/6', '5/2', '7/2']]));
    arr.push(new Grade('5', new Chord('major'), 7, [[1,5],[6,7],[], ['5/6', '7/6', '5/2', '7/2']]));
    arr.push(new Grade('2', new Chord('minor'), 2, [[1,5], [6,7],['5/4','5/5', '7/4', '7/5'],['5/6', '7/6']]))
    arr.push(new Grade('6', new Chord('minor'), 9, [[4,5], [2,7],['5/4','5/5', '7/4', '7/5'],['5/2', '7/2']]))
    arr.push(new Grade('7', new Chord('dim'), 11, [[1]]))

    arr.push(new Grade('5/4', new Chord('major', '7'), 0, [[4],['7/4']]))
    arr.push(new Grade('5/5', new Chord('major', '7'), 2, [[5],['7/5']]))
    arr.push(new Grade('7/4', new Chord('dim', '7'), 4, [[4]]))
    arr.push(new Grade('7/5', new Chord('dim', '7'), 6, [[5]]))

    arr.push(new Grade('5/6', new Chord('major', '7'), 4, [[6],['7/6']]))
    arr.push(new Grade('5/2', new Chord('major', '7'), 9, [[2],['7/2']]))
    arr.push(new Grade('7/6', new Chord('dim', '7'), 8, [[6]]))
    arr.push(new Grade('7/2', new Chord('dim', '7'), 1, [[2]]))
    return arr;
}

var onMinorPrincipalsSecondaryDominats = [];
var onMinorSecondarieSecondaryDominats = [];

var augmentedSixthChords = [];
var nonDominantDimishedChords = [];
var thirdsCorresponsy = []

var dorianChords = [1, 2, 4]
var phrigyanChords = [1, 2, 7]
var lidianChords = [1, 2, 4]
var mixolidiananChords = [1, 5, 7]
var eolianChords = [1, 5, 7]
var locrianChords = [1, 3, 5]

var coloristichDiatonicHarmonies = [];

function buildMajorPrincipals() {
    chords = tonalMajorProgressionChords;
    chords.forEach(function (element) {
        element.setDirections(chords);
    }, this);
    return chords;
}

function HarmonicProgresionExercise( actualLevel = user.progresionLevel) {
    typeOfExercise = 'Progresion'
    ready = true;
    var mode;
    level = clamp(actualLevel, info.progresionMaxLevel)
    exercise = setProgresionLevel(level);
    progresionManager = new LevelManager(level)
    //Deshardcodear
    
    //this.inputManager = new ProgresionInputManager();    
    showScreen(typeOfExercise)
    initiateExercise(exercise[1], typeOfExercise, mode)
    createProgresion();
    this.getKindOfExercise = function(){return typeOfExercise}
    this.getLevel = function(){return level}     

    function createProgresion() {
        ready = true;
        progresion = new Progresion(exercise)
        loadOnBuffer(progresion.notes)
    }

    this.checkResponse = function(response){
        if (ready) {
            ready = false
            grades = [];
            gradeHits = 0
            kindHits = 0
            parsedResponse = []
            for (var i = 0; i < progresion.progresion.length; i++) {
                grades[i] = 0;
                if (progresion.progresion[i].grade == response[i].grade) {
                    gradeHits++;
                    if (progresion.progresion[i].chord.kind == response[i].kind) {
                        kindHits = 1;
                        grades[i] = 1;
                    }
                }
            };
            for(var i = 0; i < grades.length; i++){
                if(grades[i] != 1){
                    failChordAnswer(romanize(progresion.progresion[i].grade), progresion.progresion[i].chord.kind, i)
                }
                else{
                    correctChordAnswer(i)
                }
            }

            averageHits = gradeHits / progresion.progresion.length;
            averageKindHits = kindHits / progresion.progresion.length;
            progresionManager.addScore(averageHits)

            setTimeout(function () {
                resetElements(typeOfExercise)
                initiateExercise(exercise[1], typeOfExercise, mode)
                if (!progresionManager.hasFinishedLevel(level, typeOfExercise)) {
                    createProgresion()
                }
            }, 2000);
        }
    }

    function setProgresionLevel(lvl) {
        retrieveExercise = [];
        var number;
        switch (lvl) {
            case 0:
                number = 4;
                mode = ['major'];
                retrieveExercise = new majorPrincipals();
                buildDirections(retrieveExercise)
                break;
            case 1:
                number = 8
                mode = ['major'];
                retrieveExercise = new majorPrincipals();
                buildDirections(retrieveExercise)
                break;
            case 2:
                number = 4
                mode = ['major'];
                retrieveExercise = new majorSecondaries();
                buildDirections(retrieveExercise)
                break;
            case 3:
                number = 8
                mode = ['major'];
                retrieveExercise = new majorSecondaries();
                buildDirections(retrieveExercise)
                break;
            case 4:
                number = 4;
                mode = ['minor'];
                retrieveExercise = new minorPrincipals()
                buildDirections(retrieveExercise)
                break;
            case 5:
                number = 8
                mode = ['minor'];
                retrieveExercise = new minorPrincipals();
                buildDirections(retrieveExercise)
                break;
            case 6:
                number = 4
                mode = ['minor'];
                retrieveExercise = new minorSecondaries();
                buildDirections(retrieveExercise)
                break;
            case 7:
                number = 8
                mode = ['minor'];
                retrieveExercise = new minorSecondaries();
                buildDirections(retrieveExercise)
                break;
            //Menor expandido 4 cc
            case 8:   
                number = 4;
                mode = ['minor']
                retrieveExercise = new expandedMinor();
                buildDirections(retrieveExercise)
                break;
            //Menor expandido 8 cc
            case 9:   
                number = 8;
                mode = ['minor']
                retrieveExercise = new expandedMinor();
                buildDirections(retrieveExercise)
                break;
            //Dominantes secundarias principales modo mayor 8cc
            case 10:
                number = 8
                mode = 'major';
                retrieveExercise = new onMajorPrincipalsSecondaryDominats();
                buildDirections(retrieveExercise)
            break;
            //Dominantes secundarias principales modo menor 8cc
            //Dominantes secundarias secundarios modo mayor 8cc
            //Dominantes secundarias secundarios modo menor 8cc
            //Acordes de sexta aumentada ambos modos
            //Acordes diminuidos sin funcion de dominate
            //correspondencia de terceras 8cc
            //Modos mayores 4 cc
            //Modos menores 4 cc
            //Modos mayores 8 cc
            //Modos menores 8 cc
            //Armonías diatónicas coloristas

            default:
                number = 8
                mode = 'major';
                retrieveExercise = majorPrincipals();
                setPrincipalsDirection(retrieveExercise)
                break;
        }
        return [retrieveExercise, number]
    }
}


function Progresion(ex) {
    //Deshardcodear
    numberOfChords = 8;
    this.exercise = ex;
    this.progresion = setProgresion(this.exercise, numberOfChords);
    voicing = buildChorale(this.progresion);
    this.notes = buildStream(voicing);

    //Deshardcodear
    function setProgresion([chords, number]) {
        numberOfChords = number;
        progresion = []
        progresion.push(chords[0])
        for (var i = 1; i < this.numberOfChords; i++) {
            currentChord = progresion[i - 1]
            nextChord = currentChord.direction[Math.floor(Math.random() * currentChord.direction.length)]
            progresion.push(nextChord);
        }
        return progresion;
    }

    function buildChorale(progresion) {

        findOccurences = function (note) {
            octave = 0
            retrieve = []
            while (octave < limits.max) {
                for (var i = 0; i < chordTypes[note.chord.kind].length; i++) {
                    retrieve.push(octave + chordTypes[note.chord.kind][i] + note.distanceToTonic);
                }
                octave += 12;
            }
            retrieve.sort(function (a, b) { return a - b });
            return retrieve;
        }

        choir = []
        bass = []
        tenor = []
        alto = []
        soprano = []

        for (var i = 0; i < progresion.length; i++) {
            //Se traza el bajo
            chord = findOccurences(progresion[i])
            bass[i] = progresion[i].distanceToTonic
            if (bass[i] - bass[i - 1] > 7) {
                bass[i] -= 12;
            }
            else if (bass[i] - bass[i - 1] < -7) {
                bass[i] += 12;
            }

            if (i == 0) {
                tenor[i] = chord[10]
                alto[i] = chord[11]
                soprano[i] = chord[12]
            }
            else {
                if (progresion[i].grade == progresion[i - 1].grade) {
                    for (var m = 0; m < chord.length; m++) {
                        if (chord[m] == tenor[i - 1]) {
                            direction = (Math.floor(Math.random() * 2) - 0.5) * 2;
                            tenor[i] = chord[m + 1]
                            alto[i] = chord[m + 2]
                            soprano[i] = chord[m + 3]
                            break;
                        }
                    }
                }
                if (Math.abs(progresion[i].grade - progresion[i - 1].grade) == 1) {

                }
                else {

                }
                for (var m = 0; m < chord.length; m++) {
                    if (chord[m] == tenor[i - 1]) {
                        alto[i] = chord[m + 1]
                        soprano[i] = chord[m + 2]
                    }
                    if (chord[m] == alto[i - 1]) {
                        tenor[i] = chord[m - 1]
                        soprano[i] = chord[m + 1]
                    }
                    if (chord[m] == soprano[i - 1]) {
                        tenor[i] = chord[m - 2]
                        alto[i] = chord[m - 1]
                    }
                }
                if (tenor[i] == undefined) {
                    tenor[i] = chord[10]
                    alto[i] = chord[11]
                    soprano[i] = chord[12]
                }
            }
        }
        for (var m = 0; m < bass.length; m++) {
            bass[m] += 36
        }
        choir[0] = bass;
        choir[1] = tenor;
        choir[2] = alto;
        choir[3] = soprano;
        return choir;
    }

    function buildStream(choir) {
        var stream = [];
        var delay = 0;
        for (var i = 0; i < choir[0].length; i++) {
            for (var j = 0; j < choir.length; j++) {
                if (choir[j][i] != undefined) {
                    stream.push(new Note(choir[j][i],
                        0 + delay,
                        2));
                }
            }
            delay += 2;
        }
        return stream;
    }
}



