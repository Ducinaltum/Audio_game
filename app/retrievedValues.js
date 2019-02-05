var user = {
    intervalsLevel: 1,
    progresionLevel: 1,
    chordsLevel: 1,
    /*
    totalScore: 0,
    intervalScore: 0,
    progresionScore: 0,
    chordsScore: 0,
    */

    intervalsStats: {
        1: {
            right: 0,
            wrong: 0,
        },
        2: {
            right: 0,
            wrong: 0,
        },
        3: {
            right: 0,
            wrong: 0,
        },
        4: {
            right: 0,
            wrong: 0,
        },
        6: {
            right: 0,
            wrong: 0,
        },
        5: {
            right: 0,
            wrong: 0,
        },
        7: {
            right: 0,
            wrong: 0,
        },
        8: {
            right: 0,
            wrong: 0,
        },
        9: {
            right: 0,
            wrong: 0,
        },
        11: {
            right: 0,
            wrong: 0,
        },
        12: {
            right: 0,
            wrong: 0,
        },
        13: {
            right: 0,
            wrong: 0,
        },
        14: {
            right: 0,
            wrong: 0,
        },
        15: {
            right: 0,
            wrong: 0,
        },
        16: {
            right: 0,
            wrong: 0,
        },
        17: {
            right: 0,
            wrong: 0,
        },
        18: {
            right: 0,
            wrong: 0,
        },
        19: {
            right: 0,
            wrong: 0,
        },
        20: {
            right: 0,
            wrong: 0,
        },
        21: {
            right: 0,
            wrong: 0,
        },
        22: {
            right: 0,
            wrong: 0,
        },
        23: {
            right: 0,
            wrong: 0,
        },
        24: {
            right: 0,
            wrong: 0,
        },
    },
    /*
        chordsStats:{
            'major':{
                right:0,
                wrong:0,
            },
            'minor':{
                right:0,
                wrong:0,
            },
            'dim':{
                right:0,
                wrong:0,
            },
            'aug':{
                right:0,
                wrong:0,
            },
    
            '7':{
                right:0,
                wrong:0,
            },
            'major':0,
            'minor':0,
            'minor':0,
            'dim':0,
            'dim':0,
            'aug':0,
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
        */
    progresionStats: {
        major: {
            '1': {
                right:0,
                wrong:0,
            },
            '2': {
                right:0,
                wrong:0,
            },
            '3': {
                right:0,
                wrong:0,
            },
            '4': {
                right:0,
                wrong:0,
            },
            '5': {
                right:0,
                wrong:0,
            },
            '6': {
                right:0,
                wrong:0,
            },
            '7': {
                right:0,
                wrong:0,
            },

            '5/4': {
                right:0,
                wrong:0,
            },
            '5/5': {
                right:0,
                wrong:0,
            },
            '7/4': {
                right:0,
                wrong:0,
            },
            '7/5': {
                right:0,
                wrong:0,
            },

            '5/6': {
                right:0,
                wrong:0,
            },
            '5/6': {
                right:0,
                wrong:0,
            },
            '7/2': {
                right:0,
                wrong:0,
            },
            '7/2': {
                right:0,
                wrong:0,
            },
        },

        minor: {
            '1': {
                right:0,
                wrong:0,
            },
            '2': {
                right:0,
                wrong:0,
            },
            '3': {
                right:0,
                wrong:0,
            },
            '4': {
                right:0,
                wrong:0,
            },
            '5': {
                right:0,
                wrong:0,
            },
            '6': {
                right:0,
                wrong:0,
            },
            '7': {
                right:0,
                wrong:0,
            },
            '2m': {
                right:0,
                wrong:0,
            },
            '3A': {
                right:0,
                wrong:0,
            },
            '4M': {
                right:0,
                wrong:0,
            },
            '#6': {
                right:0,
                wrong:0,
            },
            'b7': {
                right:0,
                wrong:0,
            },

            '5/4': {
                right:0,
                wrong:0,
            },
            '5/5': {
                right:0,
                wrong:0,
            },
            '7/4': {
                right:0,
                wrong:0,
            },
            '7/5': {
                right:0,
                wrong:0,
            },

            '5/3': {
                right:0,
                wrong:0,
            },            
            '5/6': {
                right:0,
                wrong:0,
            },
            '7/6': {
                right:0,
                wrong:0,
            },
            '5/b7': {
                right:0,
                wrong:0,
            },
            '7/b7': {
                right:0,
                wrong:0,
            },
        }
    }
}




var winText = {
    primary: '¡Has superado este nivel!',
    secondary: 'Puede continuar al siguiente'
}

var looseText = {
    primary: 'No has logrado superar este nivel',
    secondary: 'Le recomiendo repetirlo, o volver al nivel anterior'
}
$('#document').ready(function () {
    if (localStorage.length == 0) {
        localStorage.setItem('intervalsLevel', 1)
        localStorage.setItem('chordsLevel', 1)
        localStorage.setItem('progresionLevel', 0)
    }
    user.intervalsLevel = localStorage.intervalsLevel;
    user.chordsLevel = localStorage.chordsLevel;
    user.progresionLevel = localStorage.progresionLevel;
})
