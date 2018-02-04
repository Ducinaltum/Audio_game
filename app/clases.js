
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
    "aug": [0, 4, 8],
}

const limits = {
    "min": 30,
    "max": 100
}

function clamp(value, max, min = 0) {
    return Math.min(Math.max(value, min), max);
}

function romanize (num) {
    if (!+num)
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function LevelManager(actualLevel) {
    rounds = 0
    totalRounds = 0
    winRatio = 0.8
    hit = 0;
    miss = 0;
    score = 0
    this.hasFinishedLevel = function (level, kind) {
        ratio = hit / rounds;
        correct = (hit / totalRounds) * 100
        incorrect = (miss / totalRounds) * 100

        updateProgressBar(correct, incorrect);

        if (rounds >= totalRounds) {
            hit = 0;
            miss = 0;
            rounds = 0;
            if (ratio > winRatio) {
                if (level == user[kind.toLowerCase()+'Level']) {
                    user[kind.toLowerCase()+'Level']++;
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

    //Actualizar para que funcione con fracciones
    this.addScore = function (value) {
        hit += value
        miss += Math.abs(value  - 1)
        rounds++;
    }

    setTotalRounds = function (actualLevel) {
        if (actualLevel % 4 == 3) return 50;
        return 20;
    }
    totalRounds = setTotalRounds(actualLevel);
}


function ProgresionInputManager() {
    //Indica cual es el input seleccionado
    fieldSelected = null;
    //Sirve para operar sobre el campo seleccionado
    actualField = []
    //guarda un valor para cada boton de input
    fields = []
    

    this.setFieldSelected = function(field){
        actualField = []
        fieldSelected = field
    }
    this.getFieldSelected = function(){return fieldSelected;}
    this.getFields = function(){return fields}
    this.setField = function(value, index){
        returnToUI = [];
        fieldIndex =  fieldSelected.id.slice(2)
        actualField[index] = value;
        fields[fieldIndex] = actualField;
        returnToUI[1] = romanize(actualField[1])
        $(fieldSelected).val(returnToUI.join(''))
    }
}

var chordsKeys = {
    'major':[0, 4, 7],
    'minor':[0,3,7],
    'dim':[0,3,6],
    'aug':[0,4,8],

    'b2':1,
    '2':2,
    
    'b3':3,
    '3':4,
    
    '4':5,
    '#4':6,
    
    'b5':6,
    '5': 7,
    '#5':8,
    
    'b6':8,
    '6':9,

    'b7': 9,
    '7': 10,
    'majj7': 11,

    '8':12,

    'b9':13,
    '9':14,
    '#9':15,

    '11':17,
    '#11':18,

    'b13':20,
    '13':21
}
