
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
    "min": 30,
    "max": 100
}

function clamp(value, max, min = 0) {
    return Math.min(Math.max(value, min), max);
}

function LevelManager(actualLevel) {
    rounds = 0
    totalRounds = 0
    winRatio = 0.8
    hit = 0;
    miss = 0;
    score = 0
    this.hasFinishedLevel = function (level) {
        ratio = hit / rounds;
        correct = (hit / totalRounds) * 100
        incorrect = (miss / totalRounds) * 100

        updateProgressBar(correct, incorrect);

        if (rounds >= totalRounds) {
            hit = 0;
            miss = 0;
            rounds = 0;
            if (ratio > winRatio) {
                if (level == user.intervalLevel) {
                    user.intervalLevel++;
                }
                progressRestore()
                endLevelMenu('win')
            }
            else {
                progressRestore()
                endLevelMenu('loose')
            }
            return true
        }
        return false;        
    }

    this.addScore = function (value) {
        if (value > 0) hit++;
        else miss++;
        rounds++;
    }
    setTotalRounds = function (actualLevel) {
        if (actualLevel % 4 == 3) return 50;
        return 20;
    }
    totalRounds = setTotalRounds(actualLevel);
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
            if (i < numberOfChords) usingElements.push(individualFields[i])
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
    }
}


