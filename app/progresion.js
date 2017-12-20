function Progresion(initLevel) {
    var maxLevel = 33
    var level = initLevel;
    var fundamental;
    var numberOfChords;
    var harmonicRithm;
    var progresion;
    var exercise = [];
    var exercise = setProgresionLevel(level);

    function setProgresionLevel(lvl){
        return buildMajorPrincipals();
    }
}

function buildMajorPrincipals(){
    prog = [];
    numberOfChords = 8;
    chords = tonalMajorProgressionChords;
    chords.forEach(function (element) {
        element.setDirections(chords);
    }, this);
    prog.push(chords[0])
    for (var i = 1; i < numberOfChords; i++) {
        var currentChord = prog[i - 1]
        var nextChord = currentChord.direction[Math.floor(Math.random() * currentChord.direction.length)]
        prog.push(nextChord);
    }
    loadOnBuffer(buildStream());
    return prog;

    function buildStream(){
        var chorale = []
        for(var i = 0; i < prog.length; i++){
            chorale[i] = majorScale[prog[i].grade - 1]
            //Esto se puede optimizar
            if(chorale[i] - chorale[i-1] > 7){
                chorale[i] -= 12;
            }
            else if(chorale[i] - chorale[i-1] < -7){
                chorale[i] += 12;
            }
        }
        var stream = [];
        var delay = 2;
        for(var i = 0; i < prog.length; i++){
            stream[i] = new Note(chorale[i] + 32,
                0 + delay,
                2);
            delay += 2;
        }
        console.log(stream)
        return stream;
    }

    function buildChorale(){
        
    }
}

var tonalMajorProgressionChords = [
    new Degree(1, 'M', 'P', 'T'),
    new Degree(2, 'm', 'S', 'SD'),
    new Degree(3, 'm', 'S', 'N'),
    new Degree(4, 'M', 'P', 'SD'),
    new Degree(5, 'M', 'P', 'D'),
    new Degree(6, 'm', 'S', 'T'),
    new Degree(7, 'd', 'S', 'D'),
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
                }
                else this.direction.push(chords[i]);
            }
        }
    }
}


