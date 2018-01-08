
//Clase de notas para enviar a reproducir, muy similar al MIDI
function Note(pitch, startTime = 0, nLength = 1, chann = 0, velocity = 127) {
    this.channel = chann;
    this.note = pitch;
    this.dynamic = velocity;
    this.timeInPulse = startTime;
    this.duration = nLength;
    this.noteOff = startTime + nLength;
}

//Scales
var majorScale = [0, 2, 4, 5, 7, 9, 11]
var minorScale = [0, 2, 3, 5, 7, 8, 10]

//Cadences
var compoundFirst = [4, 5, 1]
var compoundSecond = [4, 1, 5, 1]
var authentic = [5, 1]
var broken = [5, 6]

var chordTypes = {
    "major": [0, 4, 7],
    "minor": [0, 3, 7],
    "dim": [0, 3, 6],
}

const limits = {
    "min": 20,
    "max": 108
}

function clamp(value, max, min = 0) {
    return Math.min(Math.max(value, min), max);
}

//User levels
var levels = {
    intervals: 0,
    chords: 0,
    progresion: 0
}

function LevelManager(maxLvl, actualLvl) {
    this.maxLevel = maxLvl
    this.level = clamp(actualLvl, this.maxLevel);
    rounds = 0
    totalRounds = 0
    winRatio = 0.8
    hit = 0;
    miss = 0;
    score = 0

    this.controlNextLevel = function () {

        ratio = score / rounds;
        if (rounds >= totalRounds) {
            if (ratio > winRatio) {
                level++;
                //Pasa de nivel
                return 0;
            }
            //No pasa de nivel
            return 1;
        }
        //Sigue
        return 2;
    }

    this.addScore = function (value) {
        if (value > 0) hit++;
        else miss++;
        rounds++;
    }
    setTotalRounds = function () {
        if (this.level % 4 == 3) return 50;
        return 30;
    }
    totalRounds = setTotalRounds();
}

function ButtonBasedUIManager(containerName) {
    //Se toman los elemntos de la UI para modificarlos segun corresponda

    this.feedback = document.getElementById("feedbackText");
    this.container = document.getElementById(containerName)
    this.container.style.display = "block";
    this.progressFeedback;
    usingElements = [];

    //Habria que establecer la barra de progreso
    this.deactivateButtons = function (exercise) {
        deactivateButtons(this.container.id, exercise)
     }

    this.setFeedback = function (response, value) {
        send = undefined;
        //correctAnswer(send[0].id)
        if (response != value) {
            send = response;
        }
        console.log(send);
        answer(value, send);
    }

    this.restoreUIElements = function () {
        resetElements(this.container.id)
        //this.feedback.innerHTML = "&nbsp";
    }
}

function TextInputUIManager(containerName) {
    //Se toman los elemntos de la UI para modificarlos segun corresponda
    this.feedback = document.getElementById("feedbackText");
    this.container = document.getElementById(containerName)
    this.container.style.display = "block";
    this.progressFeedback;
    usingElements = [];

    //Habria que establecer la barra de progreso
    this.deactivateFields = function (numberOfChords) {
        individualFields = this.container.getElementsByTagName('input');
        for (var i = 0; i < individualFields.length; i++) {
            if(i < numberOfChords) usingElements.push(individualFields[i])
            else individualFields[i].disabled = true;
        }
    }

    this.setFeedback = function (response, value) {
        restore = []
        restore.push(document.getElementById(value));
        //restore[0].style.border-color = 'green';
        if (response == value) {
            this.feedback.innerHTML = "¡Correcto!";
        }
        else {
            this.feedback.innerHTML = "¡Incorrecto!";
            restore.push(document.getElementById(response));
            //restore[1].style.border-color = 'red';
        }
    }

    this.restoreUIElements = function () {
        usingElements.forEach(element => {
            //element.style.border-color = '';
        });
        this.feedback.innerHTML = "&nbsp";
    }
}