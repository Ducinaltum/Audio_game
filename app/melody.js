function Melody(initLevel){
    var maxLevel = 100
    var level = initLevel;
    var fundamental;
    var melody;
    var buildMelody;
    var buildMelody = setMelodyLevel(level);    
    melody = buildMelody();
    loadOnBuffer(buildStream(70));

    function buildStream(f) {
        var stream = [];
        var elapsedTime = 0;
        for(var i = 0; i < melody.length; i++) {
            note = melody[i][0] + f;
            time = melody[i][1];
            elapsedTime += time;
            stream[i] = new Note(note, elapsedTime, time);
        }
        return stream;
    }

    function setMelodyLevel(lvl){
        switch(lvl){
            case 1:
                break;
            default:
                return generateSerie;
                break;
        }
    }
}




function generateSerie(length){
    l = length;
    s = []
    for(var i= 0; i < 12; i++){
        s.push([i, 1]);
    }
    s = shuffle(s);
    console.log(s);
    return s;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }  
    return array;
}