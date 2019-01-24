var user = {
    intervalsLevel: 0,
    progresionLevel: 0,
    chordsLevel: 0,
    /*
    totalScore: 0,
    intervalScore: 0,
    progresionScore: 0,
    chordsScore: 0,
    */
/*
    intervalsStats: {
        1:{
            right:0,
            wrong:0,
        },
        2:{
            right:0,
            wrong:0,
        },
        3:{
            right:0,
            wrong:0,
        },
        4:{
            right:0,
            wrong:0,
        },
        6:{
            right:0,
            wrong:0,
        },
        5:{
            right:0,
            wrong:0,
        },
        7:{
            right:0,
            wrong:0,
        },
        8:{
            right:0,
            wrong:0,
        },
        9:{
            right:0,
            wrong:0,
        },
        11:{
            right:0,
            wrong:0,
        },
        12:{
            right:0,
            wrong:0,
        },
        13:{
            right:0,
            wrong:0,
        },
        14:{
            right:0,
            wrong:0,
        },
        15:{
            right:0,
            wrong:0,
        },
        16:{
            right:0,
            wrong:0,
        },
        17:{
            right:0,
            wrong:0,
        },
        18:{
            right:0,
            wrong:0,
        },
        19:{
            right:0,
            wrong:0,
        },
        20:{
            right:0,
            wrong:0,
        },
        21:{
            right:0,
            wrong:0,
        },
        22:{
            right:0,
            wrong:0,
        },
        23:{
            right:0,
            wrong:0,
        },
        24:{
            right:0,
            wrong:0,
        },
    },
    */
/*
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
    intervalsMaxLevel: 36,
    chordsMaxLevel: 68,
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
        localStorage.setItem('progresionLevel', 3)
    }
    user.intervalsLevel = localStorage.intervalsLevel;
    user.chordsLevel = localStorage.chordsLevel;
    user.progresionLevel = localStorage.progresionLevel;
})
