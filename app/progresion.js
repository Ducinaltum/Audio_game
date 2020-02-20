const ranges = [12 * 4, 12 * 5, 12 * 6]
const gradeCleaner = /(?<!\D)[M|m|d|A]/

function HarmonicProgresionExercise(actualLevel) {
    var state = 'idle';
    var exercise = actualLevel
    var progresion;
    var progresionManager = new LevelManager(exercise.iterations)
    var saver = new SaveManager(exercise.kind);
    showScreen(exercise.kind)
    createProgresion();
    this.getKindOfExercise = function () { return exercise.kind }
    this.getState = function () { return state }
    this.createNextQuestion = function () {
        createProgresion();
    }
    function createProgresion() {
        resetElements(exercise.kind)
        initiateExercise(exercise.duration, exercise.kind, exercise.mode)
        if (!progresionManager.hasFinishedLevel()) {
            progresion = new Progresion(exercise)
            loadOnBuffer(progresion.notes)
            state = 'playing';
        }
    }
    this.checkResponse = function (response) {
        if (state == 'playing') {
            var saveObject = {}
            var score = 0;
            state = 'answer'
            for (var i = 0; i < progresion.progresion.length; i++) {
                let correctAnswer = {}
                let usrResponse = response[i]
                chord = exercise.chords[progresion.progresion[i]]
                correctAnswer.grade = chord.grade.replace(/(?<!\D)[M|m|d|A]/, '')
                //answer.grade = progresion.progresion[i].replace("_", '').replace(/(?<!\D)[M|m|d|A]/, '').replace("_", '/')
                correctAnswer.kind = chord.chord.kind
                usrResponse.grade.replace(/[\/]/, '')
                let hit = 0;
                if (correctAnswer.grade == usrResponse.grade) {
                    if (correctAnswer.kind == usrResponse.kind) {
                        hit += 1;
                        correctChordAnswer(i)
                    } else hit += 0.5;
                }
                if (hit != 1) {
                    let grade = correctAnswer.grade.split("");
                    grade = grade.map(function (char) {
                        if (!isNaN(char)) {
                            return romanize(char)
                        } return char;
                    }).join("")
                    failChordAnswer(grade, correctAnswer.kind, i)
                    failChordAnswer(grade, i)
                }
                score += hit;
                valueToAdd = progresion.progresion[i].replace("_", '')
                saveObject[valueToAdd] = saveObject[valueToAdd] || {}
                saveObject[valueToAdd].correct = saveObject[valueToAdd].correct + hit || hit;
                saveObject[valueToAdd].times = saveObject[valueToAdd].times + 1 || 1;
            };
            score /= exercise.duration;
            mode = {}
            saver.storeValues(mode[exercise.mode[0]] = saveObject);
            progresionManager.trackScore(score)
        }
    }
}


function Progresion(ex) {
    var exercise = ex;
    this.progresion = setProgresion(exercise);
    var voicing = buildChorale(this.progresion);
    this.notes = buildStream(voicing);
    function setProgresion() {
        var numberOfChords = exercise.duration;
        var progresion = []
        progresion[0] = Object.keys(exercise.chords)[0]
        for (var i = 1; i < numberOfChords; i++) {
            let posibleDirections = exercise.chords[progresion[i - 1]].direction
            let nextChord = Object.keys(posibleDirections)[Math.floor(Math.random() * Object.keys(posibleDirections).length)]
            progresion.push(nextChord);
        }
        return progresion;
    }
    function buildChorale(progresionAnalysis) {
        var progresion = []
        progresionAnalysis.forEach(function (element, index) {
            progresion.push(exercise.chords[element])
        });
        findOccurences = function (note) {
            var octave = 0
            var retrieve = []
            while (octave < limits.max) {
                for (var i = 0; i < chordTypes[note.chord.kind].length; i++) {
                    if (i == 0 && note.chord.seven != undefined) {
                        retrieve.push(octave + note.distanceToTonic + chordsKeys[note.chord.seven]);
                    }
                    else {
                        retrieve.push(octave + chordTypes[note.chord.kind][i] + note.distanceToTonic);
                    }
                }
                octave += 12;
            }
            retrieve.sort(function (a, b) { return a - b });
            return retrieve;
        }
        var choir = []
        var bass = []
        var tenor = []
        var alto = []
        var soprano = []
        var choirScope = {}
        //Se le suman 12 (puede ser cualquier número) para que el acorde tenga margen para descender
        var randomStartPos = Math.floor(Math.random() * 3) + 12;
        for (var i = 0; i < progresion.length; i++) {
            //Se traza el bajo            
            var chord = findOccurences(progresion[i])
            bass[i] = progresion[i].distanceToTonic;
            choirScope.lowest = bass[i];
            choirScope.highest = bass[i];
            if (bass[i] - bass[i - 1] > 7) {
                bass[i] -= 12;
            } else if (bass[i] - bass[i - 1] < -7) {
                bass[i] += 12;
            }

            if (bass[i] < choirScope.lowest) choirScope.lowest = bass[i];

            //Se generan las otras voces
            if (i == 0) {
                //Se asigna una disposición aleatoria para el primer acorde
                tenor[i] = chord[randomStartPos]
                alto[i] = chord[randomStartPos + 1]
                soprano[i] = chord[randomStartPos + 2]
                choirScope.lowestMid = tenor[i]
                choirScope.highest = soprano[i]
                choirScope.lowestDistBassTenor = tenor[i] - bass[i]
            } else {
                //Si el acorde que sigue es igual que el anterior se cambia la posición
                if (progresion[i].grade == progresion[i - 1].grade) {
                    for (var m = 0; m < chord.length; m++) {
                        if (chord[m] == tenor[i - 1]) {
                            direction = (Math.floor(Math.random() * 2) - 0.5) * 2;
                            m += direction;
                            tenor[i] = chord[m]
                            alto[i] = chord[m + 1]
                            soprano[i] = chord[m + 2]
                            break;
                        }
                    }
                }
                else {
                    //Si el acorde que sigue es diferente que el anterior los acordes se enlazan
                    for (var m = 0; m < chord.length; m++) {
                        if (chord[m] == tenor[i - 1]) {
                            tenor[i] = chord[m]
                            alto[i] = chord[m + 1]
                            soprano[i] = chord[m + 2]
                        }
                        if (chord[m] == alto[i - 1]) {
                            tenor[i] = chord[m - 1]
                            alto[i] = chord[m]
                            soprano[i] = chord[m + 1]
                        }
                        if (chord[m] == soprano[i - 1]) {
                            tenor[i] = chord[m - 2]
                            alto[i] = chord[m - 1]
                            soprano[i] = chord[m]
                        }
                    }
                    //Si entra acá es por que los acordes no tienen notas en común
                    if (tenor[i] == undefined) {
                        var bassDirection = Math.sign(bass[i] - bass[i - 1]);
                        for (var m = 0; m < chord.length; m++) {
                            if (chord[m] > tenor[i - 1]) {
                                var t;
                                if (bassDirection == 1) {
                                    t = m - 1;
                                } else {
                                    t = m;
                                }
                                tenor[i] = chord[t]
                                alto[i] = chord[t + 1]
                                soprano[i] = chord[t + 2]
                                break;
                            }
                        }
                    }
                }
                if (soprano[i] > choirScope.highest) choirScope.highest = soprano[i];
                if (tenor[i] < choirScope.lowestMid) choirScope.lowestMid = tenor[i];
                var distBassToTenor = tenor[i] - bass[i];
                if (distBassToTenor < choirScope.lowestDistBassTenor) choirScope.lowestDistBassTenor = distBassToTenor;
            }
        }
        //Set proper register
        choirScope.scope = choirScope.highest - choirScope.lowestMid;
        choirScope.medianNote = Math.floor((choirScope.scope / 2) + choirScope.lowestMid);
        var voiceTranposition = Math.floor((ranges[Math.floor(Math.random() * ranges.length)] - choirScope.medianNote) / 12) * 12;
        var bassTranposition = Math.floor(choirScope.lowestDistBassTenor / 12);
        var tonality = exercise.tonality
        if (bassTranposition == 0) bassTranposition -= 12;
        for (var m = 0; m < bass.length; m++) {
            bass[m] += 12 * bassTranposition;
        }
        if (choirScope.highest + voiceTranposition + tonality > limits.max) tonality -= 12;
        if (choirScope.lowest + voiceTranposition + tonality < limits.min) tonality += 12;
        for (var i = 0; i < tenor.length; i++) {
            bass[i] += voiceTranposition + tonality;
            tenor[i] += voiceTranposition + tonality;
            alto[i] += voiceTranposition + tonality;
            soprano[i] += voiceTranposition + tonality;
        }
        choir[0] = bass;
        choir[1] = tenor;
        choir[2] = alto;
        choir[3] = soprano;
        return choir;
    }
    function buildStream(choir) {
        var stream = [];
        stream = setTexture(choir);
        return stream;
    }
    function setTexture(choir) {
        var stream = [];
        var texture = Math.floor(Math.random() * 6);
        switch (texture) {
            case 0:
                stream = choral(choir)
                break;
            case 1:
                stream = stretching(choir)
                break;
            case 2:
                stream = albertiArpeggio(choir)
                break;
            case 3:
                stream = ascendingArpeggio(choir)
                break;
            case 4:
                stream = compoundArpeggio(choir)
                break;
            case 5:
                stream = popComping(choir)
                break;
            default:
                stream = choral(choir)
                break;
        }
        return stream;
    }
    function choral(choir) {
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
        return stream
    }
    function stretching(choir) {
        var stream = []
        var time = 0;
        var bassFigure = 4;
        var voiceFigure = 1;
        //Bajo en redondas resto en negras
        for (var b = 0; b < choir[0].length; b++) {
            stream.push(new Note(choir[0][b], time, bassFigure));
            stream.push(new Note(choir[0][b] - 12, time, bassFigure));
            time += bassFigure;
        }
        time = 0;
        for (var n = 0; n < choir[0].length; n++) {
            for (var r = 0; r < 4; r++) {
                for (var v = 1; v < choir.length; v++) {
                    stream.push(new Note(
                        choir[v][n],
                        time,
                        voiceFigure));
                }
                time += voiceFigure;
            }
        }
        stream.sort(function (a, b) { return a.timeInPulse - b.timeInPulse });
        return stream
    }
    function albertiArpeggio(choir) {
        var stream = []
        var time = 0;
        var bassFigure = 2;
        //Bajo en redondas resto en negras
        for (var b = 0; b < choir[0].length; b++) {
            stream.push(new Note(choir[0][b] + 12, time, bassFigure));
            time += bassFigure;
        }
        time = 0;
        for (var t = 0; t < choir[0].length; t++) {
            stream.push(new Note(choir[1][t], time + 0.5, 1));
            stream.push(new Note(choir[1][t], time + 1.5, 0.5));
            time += bassFigure;
        }
        time = 0;
        for (var a = 0; a < choir[0].length; a++) {
            stream.push(new Note(choir[2][a], time + 1, 1));
            time += bassFigure;
        }
        time = 0;
        for (var s = 0; s < choir[0].length; s++) {
            stream.push(new Note(choir[3][s], time, 2));
            time += bassFigure;
        }
        stream.sort(function (a, b) { return a.timeInPulse - b.timeInPulse });
        return stream
    }
    function ascendingArpeggio(choir) {
        var stream = [];
        var time = 0;
        for (var v = 0; v < choir[0].length; v++) {
            stream.push(new Note(choir[0][v], time, 2));
            stream.push(new Note(choir[1][v], time + 0.5, 1.5));
            stream.push(new Note(choir[2][v], time + 1, 1));
            stream.push(new Note(choir[3][v], time + 1.5, 0.5));
            time += 2;
        }
        return stream
    }
    function compoundArpeggio(choir) {
        var stream = []
        var time = 0;
        var bassFigure = 3;
        //Bajo en redondas resto en negras
        for (var b = 0; b < choir[0].length; b++) {
            stream.push(new Note(choir[0][b], time, bassFigure));
            time += bassFigure;
        }
        time = 0;
        for (var t = 0; t < choir[0].length; t++) {
            stream.push(new Note(choir[1][t], time + 0.5, 2));
            stream.push(new Note(choir[1][t], time + 2.5, 0.5));
            time += bassFigure;
        }
        time = 0;
        for (var a = 0; a < choir[0].length; a++) {
            stream.push(new Note(choir[2][a], time + 1, 1));
            stream.push(new Note(choir[2][a], time + 2, 1));
            time += bassFigure;
        }
        time = 0;
        for (var s = 0; s < choir[0].length; s++) {
            stream.push(new Note(choir[3][s], time + 1.5, 2));
            time += bassFigure;
        }
        stream.sort(function (a, b) { return a.timeInPulse - b.timeInPulse });
        return stream
    }
    function popComping(choir) {
        var stream = []
        var time = 0;
        var bassFigure = 4;
        var voiceFigure = 1;
        for (var b = 0; b < choir[0].length; b++) {
            stream.push(new Note(choir[0][b], time, bassFigure));
            time += bassFigure;
        }
        time = 0;
        for (var n = 0; n < choir[0].length; n++) {
            for (var r = 0; r < 4; r++) {
                stream.push(new Note(choir[1][n], time + 0.5, 0.5));
                stream.push(new Note(choir[2][n], time, voiceFigure));
                stream.push(new Note(choir[3][n], time, voiceFigure));
                time += voiceFigure;
            }
        }
        stream.sort(function (a, b) { return a.timeInPulse - b.timeInPulse });
        return stream
    }
}