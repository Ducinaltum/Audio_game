function Grade(g, k, t = '', h = '', d = '', dir = [], inv = 5) {
    this.grade = g;
    this.kind = k;
    this.tonalFunction = t;
    this.hierarchy = h;
    this.distanceToTonic = d;
    this.direction = dir;
    this.inversion = inv;
}

function buildDirections(chords){
    chords.forEach(element => {
        direction = []
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
    arr.push(new Grade(1, "major", "T", "P", 0, [1,4,5]));
    arr.push(new Grade(4, "major", "SD", "P", 5, [1,4,5]));
    arr.push(new Grade(5, "major", "D", "P", 7, [1,5]));
    return arr;
}

function majorSecondaries(){
    arr = [];
    arr.push(new Grade(1, "major", "T", "P", 0, [1,2,4,5,6,7]))
    arr.push(new Grade(4, "major", "SD", "P", 5, [1,2,4,5,6,7]))
    arr.push(new Grade(5, "major", "D", "P", 7, [1,5,6,7]));

    arr.push(new Grade(2, "minor", "T", "S", 2, [1,5,6,7]))
    arr.push(new Grade(6, "minor", "SD", "S", 9, [2,4,5,7]))
    arr.push(new Grade(7, "dim", "D", "S", 11, [1]))
    return arr;
}

//Acomodar la distancia a tónica
function minorPrincipals() {
    arr = []
    arr.push(new Grade(1, "minor", "T", "P", 0, [1,4,5]));
    arr.push(new Grade(4, "minor", "SD", "P", 5, [1,4,5]));
    arr.push(new Grade(5, "major", "D", "P", 7, [1,5]));
    return arr;
}

function minorSecondaries(){
    arr = [];
    arr.push(new Grade(1, "minor", "T", "P", 0, [1,2,3,4,5,6,7]))
    arr.push(new Grade(4, "minor", "SD", "P", 5, [1,2,3,4,5,6,7]))
    //Capaz que al 6 no
    arr.push(new Grade(5, "major", "D", "P", 7, [1,3,5,6,7]));

    arr.push(new Grade(2, "dim", "SD", "S", 2, [1,3,5,6,7]))
    arr.push(new Grade(3, "major", "T", "S", 3, [2,4,5,6,7]))
    arr.push(new Grade(6, "major", "SD", "S", 8, [1,2,3,5,7]))
    arr.push(new Grade(7, "dim", "D", "S", 11, [1]))
    return arr;
}

function expandedMinor(){
    arr = [];
    arr.push(new Grade(1, "minor", "T", "P", 0, [1,2,3,4,5,6,7]))
    arr.push(new Grade(4, "minor", "SD", "P", 5, [1,2,3,4,5,6,7]))
    //Capaz que al 6 no
    arr.push(new Grade(5, "major", "D", "P", 7, [1,3,5,6,7]));

    arr.push(new Grade(2, "dim", "SD", "S", 2, [1,3,5,6,7]))
    arr.push(new Grade(3, "major", "T", "S", 3, [2,4,5,6,7]))
    arr.push(new Grade(6, "major", "SD", "S", 8, [1,2,3,5,7]))
    arr.push(new Grade(7, "dim", "D", "S", 11, [1]))

    arr.push(new Grade(2, "minor", "SD", "S", 2, [1]))
    arr.push(new Grade(3, "aug", "D", "S", 3, [1]))
    arr.push(new Grade(4, "major", "SD", "S", 5, [1]))
    //Hay que pasarlo invertido
    //arr.push(new Grade(5, "minor", "D", "S", 11, [1]))
    
    arr.push(new Grade('#6', "dim", "SD", "S", 9, [1]))
    arr.push(new Grade('b7', "major", "D", "S", 10, [1]))
    return arr;
}

var onMajorPrincipalsSecondaryDominats = [
    new Grade(5/4, "major", "D", "P", 0),
    new Grade(5/5, "major", "D", "P", 5),
    new Grade(7/4, "dim", "D", "S", 0),
    new Grade(7/5, "dim", "D", "S", 5),
];

var onMajorSecondariesSecondaryDominats = [];

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
    level = clamp(actualLevel, info.progresionMaxLevel)
    exercise = setProgresionLevel(level);
    progresionManager = new LevelManager(level)
    this.inputManager = new ProgresionInputManager();
    showScreen(typeOfExercise)
    deactivateInputFields(exercise[1], typeOfExercise)
    createProgresion();
    this.getKindOfExercise = function(){return typeOfExercise}
    this.getLevel = function(){return level}     

    function createProgresion() {
        ready = true;
        progresion = new Progresion(exercise)
        loadOnBuffer(progresion.notes)
    }

    this.checkResponse = function(){
        if (ready) {
            ready = false
            grades = [];
            gradeHits = 0
            kindHits = 0
            response = parseResponse(this.inputManager.getFields());
            parsedResponse = []
            for (var i = 0; i < progresion.progresion.length; i++) {
                grades[i] = 0;
                if (progresion.progresion[i].grade == response[i].grade) {
                    gradeHits++;
                    if (progresion.progresion[i].kind == response[i].kind) {
                        kindHits = 1;
                        grades[i] = 1;
                    }
                }
            };
            for(var i = 0; i < grades.length; i++){
                if(grades[i] != 1){
                    failChordAnswer(romanize(progresion.progresion[i].grade), progresion.progresion[i].kind, i)
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
                if (!progresionManager.hasFinishedLevel()) {
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
                retrieveExercise = new majorPrincipals();
                buildDirections(retrieveExercise)
                break;
            case 1:
                number = 8
                retrieveExercise = new majorPrincipals();
                buildDirections(retrieveExercise)
                break;
            case 2:
                number = 4
                retrieveExercise = new majorSecondaries();
                buildDirections(retrieveExercise)
                break;
            case 3:
                number = 8
                retrieveExercise = new majorSecondaries();
                buildDirections(retrieveExercise)
                break;
            case 4:
                number = 4;
                retrieveExercise = new minorPrincipals()
                buildDirections(retrieveExercise)
                break;
            case 5:
                number = 8
                retrieveExercise = new minorPrincipals();
                buildDirections(retrieveExercise)
                break;
            case 6:
                number = 4
                retrieveExercise = new minorSecondaries();
                buildDirections(retrieveExercise)
                break;
            case 7:
                number = 8
                retrieveExercise = new minorSecondaries();
                buildDirections(retrieveExercise)
                break;

            //Mayor con menor 16 compases 50 vueltas
            //Menor expandido 4 cc
            //Menor expandido 8 cc
            //Dominantes secundarias principales modo mayor 8cc
            //Dominantes secundarias principales modo menor 8cc
            //Dominantes secundarias secundarios modo mayor 8cc
            //Dominantes secundarias secundarios modo menor 8cc
            //Modulación por acorde pivot al 4 5 y relativo 20 repeticiones 16 cc
            //Acordes de sexta aumentada ambos modos
            //Acordes diminuidos sin funcion de dominate
            //Modulación por acordes alterados 16 cc
            //correspondencia de terceras 8cc
            //Modulación por correspondencia de terceras?
            //Modos mayores 4 cc
            //Modos mayores 8 cc
            //Modos menores 4 cc
            //Modos mayores 4 cc
            //Armonías diatónicas coloristas
            //Filmscore

            default:
                number = 8
                retrieveExercise = majorPrincipals();
                setPrincipalsDirection(retrieveExercise)
                break;
        }
        deactivateInputFields(number, typeOfExercise)
        return [retrieveExercise, number]
    }

    function parseResponse(response){
        retrieve = []
        for(var i = 0; i < response.length; i++){
            raw = response[i];
            var modifier, grade, kind, seventh, ninth, eleventh, thirteenth;
            (raw[0] != undefined)? modifier = raw[0]: modifier = '';
            (raw[1] != undefined)? grade = raw[1]: grade = '';

            (raw[2] != undefined)? kind = raw[2]: kind = 'major';
            (raw[3] != undefined)? seventh = raw[3]: seventh = '';
            (raw[4] != undefined)? ninth = raw[4]: ninth = '';
            (raw[5] != undefined)? eleventh = raw[5]: eleventh = '';
            (raw[6] != undefined)? thirteenth = raw[6]: thirteenth = '';

            retrieve[i] = new Grade (modifier + grade, 
                kind + seventh + ninth + eleventh + thirteenth);
        };
        return retrieve
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
                for (var i = 0; i < chordTypes[note.kind].length; i++) {
                    retrieve.push(octave + chordTypes[note.kind][i] + note.distanceToTonic);
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



