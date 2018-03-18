var user = {
    intervalsLevel: 44,
    progresionLevel: 11,
    chordsLevel: 0,
    
    totalScore: 0,
    intervalScore: 0,
    progresionScore: 0,
    chordsScore: 0,
/*
    intervalsStats:{
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0,
        17:0,
        18:0,
        19:0,
        20:0,
        21:0,
        22:0,
        23:0,
        24:0,
    },

    chordsStats:{
        'major':0,
        'minor':0,
        'dim':0,
        'aug':0,

        'b7':0,
        '7':0,
        'majj7':0,

        'b9':0,
        '9':0,
        '#9':0,

        '11':0,
        '11#':0,

        'b13':0,
        '13':0,        
    },
    progresionStats:{
        major:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0,
            7:0,

            '5/4':0,
            '5/5':0,
            '7/4':0,
            '7/5':0,

            '5/6':0,
            '5/6':0,
            '7/2':0,
            '7/2':0      
        },
        minor:{
            1:0,
            1:0,
            1:0,
            1:0,
            1:0,
            1:0,
            1:0,
        }

    }
    */
}

var info = {
    intervalsMaxLevel: 144,
    chordsMaxLevel: 43,
    progresionMaxLevel: 33
}


var winText = {
    primary: '¡Has superado este nivel!',
    secondary: 'Puede continuar al siguiente'
}

var looseText = {
    primary: 'No has logrado superar este nivel',
    secondary: 'Le recomiendo repetirlo, o volver al nivel anterior'
}
$('#document').ready(function(){
    if(localStorage.length == 0){
        localStorage.setItem('intervalsLevel', 0)
        localStorage.setItem('chordsLevel', 0)
        localStorage.setItem('progresionLevel', 0)
    }
    user.intervalsLevel = localStorage.intervalsLevel;
    user.chordsLevel = localStorage.chordsLevel;
    user.progresionLevel = localStorage.progresionLevel;
})
