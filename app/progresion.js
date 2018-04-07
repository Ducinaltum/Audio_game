function HarmonicProgresionExercise( actualLevel = user.progresionLevel) {
    typeOfExercise = 'Progresion'
    ready = true;
    var mode;
    level = clamp(actualLevel, info.progresionMaxLevel)
    exercise = setProgresionLevel(level);
    progresionManager = new LevelManager(level)
    showScreen(typeOfExercise)
    initiateExercise(exercise.numberOfChords, typeOfExercise, exercise.mode)
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
                initiateExercise(exercise.numberOfChords, typeOfExercise, exercise.mode)
                if (!progresionManager.hasFinishedLevel(level, typeOfExercise)) {
                    createProgresion()
                }
            }, 2000);
        }
    }

    function setProgresionLevel(lvl) {
        var retrieveExercise = progresionLevels[lvl]();
        buildDirections(retrieveExercise.chords)
        return retrieveExercise;
    }
}


function Progresion(ex) {
    //Deshardcodear
    numberOfChords = 8;
    this.exercise = ex;
    this.progresion = setProgresion(this.exercise.chords, this.exercise.numberOfChords);
    voicing = buildChorale(this.progresion);
    this.notes = buildStream(voicing);

    //Deshardcodear
    function setProgresion(chords, number) {
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



