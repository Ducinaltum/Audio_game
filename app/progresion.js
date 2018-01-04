var tonalMajorProgressionChords = [
    new Degree(1, 'major', 'P', 'T'),
    new Degree(2, 'minor', 'S', 'SD'),
    new Degree(3, 'minor', 'S', 'N'),
    new Degree(4, 'major', 'P', 'SD'),
    new Degree(5, 'major', 'P', 'D'),
    new Degree(6, 'minor', 'S', 'T'),
    new Degree(7, 'dim', 'S', 'D'),
]

function Degree(d, k, h, t, r = 1){
    this.grade = d;
    this.kind = k;
    this.hierarchy = h;
    this.tonalFunction = t;
    this.harmRythm = r;
    this.direction = [];
    this.setDirections = function(chords){
        for (var i = 0; i < chords.length; i++) {
            if (this != chords[i] && chords[i].tonalFunction != 'N') {
                if (this.tonalFunction == chords[i].tonalFunction) {
                    if (this.hierarchy == "P") {
                        this.direction.push(chords[i]);
                    }
                }
                else if (this.tonalFunction == "D") {
                    if (chords[i].tonalFunction != "SD") {
                            this.direction.push(chords[i]);
                    }
                    if(this.hierarchy == "S" && chords[i].hierarchy =="P"){
                        this.direction.push(chords[i]);
                    }                    
                }
                else this.direction.push(chords[i]);
            }
        }
    }
}

var majorPrincipals = [1, 4, 5]
var majorSecondaries = [2, 6, 7]

var minorPrincipals = [1, 4, 5]
var minorSecondaries = [2, 3, 6, 7]
var expandedMinors = [];

var onMajorPrincipalsSecondaryDominats = [];
var onMajorSecondariesSecondaryDominats = [];

var onMinorPrincipalsSecondaryDominats = [];
var onMinorSecondarieSecondaryDominats = [];

var augmentedSixthChords = [];
var nonDominantDimishedChords = [];

var dorianChords = [1,2,4]
var phrigyanChords = [1, 2, 7]
var lidianChords = [1, 2, 4]
var mixolidiananChords = [1, 5, 7]
var eolianChords = [1, 5, 7]
var locrianChords = [1, 3, 5]

var coloristichDiatonicHarmonies = [];



function harmonicProgresion() {
    var progresionManager = new LevelManager(info.progresionMaxLevel, user.progresionLevel)
    var exercise = setProgresionLevel(progresionManager.level);
    UIManager = new TextInputUIManager();

    this.createProgresion = function(){
        progresion = new Progresion(exercise)
        loadOnBuffer(progresion.notes)
    }

    function setProgresionLevel(lvl){
        switch(lvl){
            case 0:
                return buildMajorPrincipals();
                break;
            default:
                return buildMajorPrincipals();
                break;
        }
    }
}


function Progresion(ex){
    //Deshardcodear
    numberOfChords = 8;
    this.exercise = ex;
    this.progresion = setProgresion(this.exercise, numberOfChords);
    voicing = buildChorale(this.progresion);
    this.notes = buildStream(voicing);

    //Deshardcodear
    function setProgresion(chords, number){
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

    function buildChorale(progresion){
        findOccurences = function(note){
            octave = 0
            retrieve = []
            while(octave < limits.max){
                for(var i = 0; i < chordTypes[note.kind].length; i++){
                    retrieve.push(octave + chordTypes[note.kind][i] + majorScale[note.grade - 1]);
                }
                octave += 12;
            }
            retrieve.sort(function(a,b){return a - b});
            return retrieve;
        }

        choir = []
        bass = []
        tenor = []
        alto = []
        soprano = []
        for(var i = 0; i < progresion.length; i++){
            //Se traza el bajo
            chord = findOccurences(progresion[i])
            bass[i] = majorScale[progresion[i].grade - 1]
            if(bass[i] - bass[i-1] > 7){
                bass[i] -= 12;
            }
            else if(bass[i] - bass[i-1] < -7){
                bass[i] += 12;
            }

            if(i == 0){
                tenor[i] = chord[10]
                alto[i] = chord[11]
                soprano[i] = chord [12]
            }
            else{
                /*
                if(Math.abs(progresion[i].grade - progresion[i-1].grade) == 1){

                }
                else{

                }*/
                for(var m = 0; m < chords.length; m++){
                    if(chords[m] == tenor[i-1]){
                        alto[i] = chords[m+1]
                        soprano[i] = chords[m+2]
                    }
                    if(chords[m] == alto[i-1]){
                        tenor[i] = chords[m-1]
                        soprano[i] = chords[m+1]
                    }
                    if(chords[m] == soprano[i-1]){
                        tenor[i] = chords[m-2]
                        alto[i] = chords[m-1]
                    }
                }
                if(tenor[i] == undefined){
                    tenor[i] = chord[10]
                    alto[i] = chord[11]
                    soprano[i] = chord [12]
                }
            }
        }
        for(var m = 0; m < bass.length; m++){
            bass[m] += 36
        }
        choir[0] = bass;
        choir[1] = tenor;
        choir[2] = alto;
        choir[3] = soprano;
        return choir;
    }

    function buildStream(choir){
        var stream = [];
        var delay = 0;        
        for(var i = 0; i < choir[0].length; i++)
        {
            for(var j = 0; j < choir.length; j++)
            {
                if(choir[j][i] != undefined)
                {
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


function buildMajorPrincipals(){
    chords = tonalMajorProgressionChords;
    chords.forEach(function (element) {
        element.setDirections(chords);
    }, this);
    return chords;
}


