var tonalMajorProgressionChords = [
    new Degree(1, 'M', 'P', 'T'),
    new Degree(2, 'm', 'S', 'SD'),
    new Degree(3, 'm', 'S', 'N'),
    new Degree(4, 'M', 'P', 'SD'),
    new Degree(5, 'M', 'P', 'D'),
    new Degree(6, 'm', 'S', 'T'),
    new Degree(7, 'd', 'S', 'D'),
]

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
        choir = []
        bass = []
        tenor = []
        alto = []
        soprano = []
        for(var i = 0; i < progresion.length; i++){
            bass[i] = majorScale[progresion[i].grade - 1]
            //Esto se puede optimizar
            if(bass[i] - bass[i-1] > 7){
                bass[i] -= 12;
            }
            else if(bass[i] - bass[i-1] < -7){
                bass[i] += 12;
            }
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
                    stream[i+j] = new Note(choir[j][i] + 32,
                        0 + delay,
                        2);
                    delay += 2;
                }
            }
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
                }
                else this.direction.push(chords[i]);
            }
        }
    }
}
