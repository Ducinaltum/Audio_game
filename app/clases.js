//Clase de notas para enviar a reproducir, muy similar al MIDI
function Note(pitch, startTime = 0, nLength = 1, chann = 0, velocity = 127) {
    this.channel = chann;
    this.note = pitch;
    this.dynamic = velocity;
    this.timeInPulse = startTime;
    this.duration = nLength;
    this.noteOff = startTime + nLength;
}

function Chord(k, d, s, e){
    this.kind = k;
    this.depth = d;
    this.seven = s;
    this.extensions = e;
}

function Grade(g, c, d = '', dir = [], mode = 'major', inv = 5) {
    this.grade = g;
    this.chord = c;
    this.distanceToTonic = d;
    this.direction = dir;
    this.inversion = inv;
    this.inMode = mode;
    this.seven = getSeven();
    function getSeven(){
        var posibleSeven;
        if(this.chord == 'minor'){
            posibleSeven = '7';
        }
        else if(this.chord == 'major'){
            if(this.grade == '5'){
                posibleSeven = '7'
            }
            else{
                posibleSeven = 'majj7'
            }
        }
        else if(this.chord == 'aug'){
            if(this.grade == '3'){
                posibleSeven = 'majj7';
            }
            else {
                posibleSeven = '7'
            }
        }
        else if(this.chord == 'dim'){
            if(this.grade == '2' || (this.grade == '7' && this.inMode == 'major')){
                posibleSeven = '7'
            }
            else {
                posibleSeven = 'b7'
            }
        }
        return posibleSeven;
    }
}

function LevelManager(iterations = 20) {
    rounds = 0
    totalRounds = iterations;
    winRatio = 0.8
    correct = 0;
    incorrect = 0
    this.hasFinishedLevel = function () {
        updateProgressBar(correct / totalRounds * 100, 
                        incorrect / totalRounds * 100);
        if (rounds >= totalRounds) {
            if (correct/rounds > winRatio) {
                endLevelMenu('win')
            }
            else {
                endLevelMenu('loose')                
            }
            progressRestore()
            //correct, incorrect, rounds = 0;
            return true;
        }
        return false;        
    }

    this.trackScore = function(value){
        correct += value;        
        incorrect += Math.abs(value - 1)    
        rounds++;
    }
}

function saveManager(ex){
    typeofExercice = ex
    this.storeValues = function(obj){
        save = {}
        save[typeofExercice] = obj
        date = setDate()
        if(!(date in user.date)){
            user.date[date] = save;
        }else{
            user.date[date] = mergeObjectsAdd(user.date[date], save)
        }
    }

    setDate = function(){
        var d = new Date();
        d = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate()
        return d;
    }
}
//Scales
var majorScale = [0, 2, 4, 5, 7, 9, 11]
var minorScale = [0, 2, 3, 5, 7, 8, 10]

var progresionMode = {
    major : {
        '1': 'major',
        'b2': 'major',
        '2': 'minor',
        'b3': 'major',
        '3': 'minor',
        '4': 'major',
        '#4': 'dim',
        '5': 'major',
        'b6': 'major',
        '6': 'minor',
        'b7': 'major',
        '7': 'dim'
    },
    minor : {
        '1': 'minor',
        'b2': 'major',
        '2': 'dim',
        'b3': 'major',
        '3': 'major',
        '4': 'minor',
        '#4': 'dim',
        '5': 'major',
        'b6': 'major',
        '6': 'major',
        '#6': 'dim',
        'b7': 'major',
        '7': 'dim'
    }
}

var handInputTable = {
    'major': 'major',
    'M': 'major',
    '': 'major',

    'm': 'minor',
    'min': 'minor',
    'minor': 'minor',

    'd': 'dim',
    'dim': 'dim',

    'aug': 'aug',
    'a': 'aug',
    'aum': 'aug',
    '+': 'aug',
}

var formatChordsToDisplay = {
    'major': '',
    'minor': 'm',
    'dim': 'dim',
    'aug': '+'
}

var chordTypes = {
    "major": [0, 4, 7],
    "minor": [0, 3, 7],
    "dim": [0, 3, 6],
    "aug": [0, 4, 8],
}

const limits = {
    "min": 40,
    "max": 100
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

function clamp(value, max, min = 0) {
    return Math.min(Math.max(value, min), max);
}

function romanize (num) {
    if (!+num)
        return num;
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

function deromanize (str) {
    if(str != undefined){
	    var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	    if (!(str && validator.test(str)))
		    return str;
	    while (m = token.exec(str))
    		num += key[m[0]];
        return num.toString();
    }
}

function octavate(note, oct){
    return note + (12 * oct)
}

/*
var info = {
    intervalsMaxLevel: 100,
    chordsMaxLevel: 100,
    progresionMaxLevel: 100
}*/

function randomNote(){
    return Math.floor(Math.random()*12) - 6
}

var intervalsInHalfStep = {
    1: "2m",
    2: "2M",
    3: "3m",
    4: "3M",
    5: "4J",
    6: "4A/5d",
    7: "5J",
    8: "6m",
    9: "6M",
    10: "7m",
    11: "7M",
    12: "8J",
    13: "9m",
    14: "9M",
    15: "10m",
    16: "10M",
    17: "11J",
    18: "11A/12d",
    19: "12J",
    20: "13m",
    21: "13M",
    22: "14m",
    23: "14M",
    24: "15J",
}

colors = {
    red: "#e4022dff",
    yellow:"#f6a016ff",
    turquose:"#009aa8ff",
    pink:"#df8797ff",
}