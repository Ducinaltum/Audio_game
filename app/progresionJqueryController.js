                /* regEx Return
                    0 modif
                    1 grade
                    2 kind
                    3 seven
                    6 extention
                    7 b5
                    10 secondary modif
                    11 secondary dominant
                */

function inputChord(){
    this.gradeModifier = undefined;
    this.grade = undefined;
    this.kind = undefined;
    this.secondaryDominat = undefined;

    //Convierte los valores del obajeto en una cadena para que la visualice el usuario
    this.getChordAsString = function(){
        var chord = this
        var grade = [chord.gradeModifier, romanize(this.grade)].join('')
        var kind = [formatChordsToDisplay[chord.kind]].join('')
        var secondaryDominat = [chord.isSecondaryDominat, chord.secondaryDominatModifier, romanize(chord.secondaryDominat)].join('')
        var retrieve = grade + kind + secondaryDominat;
        return retrieve;
    }

    //Convierte los valores raw recibidos de una cadena ya lamacenados en las variables 
    //y los procesa para adjudicarles su valor real interno
    function processChord(chord) {
        if (chord.kind == '°') {
            chord.kind = 'dim'
            chord.seven = 'b7'
        }
        else {
            chord.kind = handInputTable[chord.kind]
        }
        if (chord.extention != undefined) chord.extention = chord.extention.replace('s', '#');
        if (chord.b5 != undefined && chord.kind == 'm') chord.kind = 'dim';
        updateButtons(chord);

    }

    function updateButtons(chord){
        $('#inputButtons :input').removeClass('btn-primary')
            .addClass('btn-default')
        for (var property in Object.keys(chord)) {
            key = Object.keys(chord)[property]
            value = chord[key];
            if(!(Object.prototype.toString.call(value) == '[object Function]')){
                //no deberia funcionar
                if (value != undefined) {
                    if (key == 'isSecondaryDominat') {
                        value = 'isSecondary';
                    }
                    $('#' + key + ' #' + value.replace('#', 's')).removeClass('btn-default')
                        .addClass('btn-primary')
                }
            }
        }
    }
}

//Progresion Input Fields
var progresionRegEx = /^(b|#|\+)?(I|II|III|IV|V|VI|VII|[1-7])(M|m|°|d|dim|a|aug|aum|\+)?(b7|7|majj|majj7)?((|\/)(b9|9|#9|11|#11|b13|13))?(b5)?((\/)(b|#|\+)?(I|II|III|IV|V|VI|VII|[1-7]))?$/i
var gradeParserRegEx = /^(b|#|\+)?([1-7])((\/)(b|#|\+)?([1-7]))?$/i
var enters = 0;
var responseChords = [];
var activeChordIndex;
var individualFields;
var mode;

function initiateExercise(numberOfChords, container, exerciseMode) {
    $("#play-pause").prop("disabled", false)
    $('#' + container + " #firstSection").prop('disabled', false).popover('hide')
    if(numberOfChords > 4) {
        $('#' + container + " #secondSection").prop('disabled', false).popover('hide')
        $('#' + container + " #secondSection").show();
    }
    else {
        $('#' + container + " #secondSection").prop("disabled", true).popover('hide')
        $('#' + container + " #secondSection").hide();
    }
    individualFields = $('#' + container + " .chord-bar");
    mode = exerciseMode;
    for (var i = 0; i < numberOfChords; i++) {
        responseChords[i] = new inputChord();        
    }
    activeChordIndex = 0
    $(individualFields[activeChordIndex]).focus();
}

//Progresion buttons and fields
/*$('#Progresion #inputFields .form-control').on('input', function () {
    var index = this.id.slice(2)
    var input = this.value
    //Si agregó algo nuevo (si no hay espacio al final): procesar y cargar en el respectivo acorde
    if (input[input.length -1] == ' ') {  
        input = input.substr(0,(input.length -1))
        $(this).val(input);
    }
    //Si no agregó nada nuevo (si no hay espacio al final) no hacer nada
    responseChords[activeChordIndex].buildFromString(progresionRegEx.exec(input))
})*/
/*
$('#Progresion #inputFields .form-control').focus(function () {
    $(this).addClass('hasBeenSelected')
    $(this).one('mouseup', function() {
        $(this).select();
    });
    var index = this.id.slice(2)
    var input = this.value
    if (activeChordIndex != index) {
        activeChordIndex = index;
    }
    responseChords[activeChordIndex].buildFromString(progresionRegEx.exec(input))
    //Esto se hace necesario para cuando se utilizan los botones para ingresar los acordes
    this.value = responseChords[activeChordIndex].getChordAsString();
})

$('#Progresion #inputFields .form-control').blur(function() {
    if ($(this).hasClass('hasBeenSelected')) {
        var index = this.id.slice(2)
        var input = this.value
        responseChords[index].buildFromString(progresionRegEx.exec(input))
        this.value = responseChords[index].getChordAsString();
    }
});
*/
$('#Progresion #inputFields .chord-bar').focus(function() {
        $(this).addClass('hasBeenSelected')
        $(this).one('mouseup', function() {
            $(this).select();
        });
        var index = this.id.slice(2)
        var input = this.value
        if (activeChordIndex != index) {
            activeChordIndex = index;
        }
       // responseChords[activeChordIndex].buildFromString(progresionRegEx.exec(input))
        //Esto se hace necesario para cuando se utilizan los botones para ingresar los acordes
        this.value = responseChords[activeChordIndex].getChordAsString();
    });


//Progresion buttons click
$('#Progresion #gradeModifier .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        responseChords[activeChordIndex].gradeModifier = this.id
        console.log(individualFields[activeChordIndex])
        individualFields[activeChordIndex].innerHTML = responseChords[activeChordIndex].getChordAsString();
        $(individualFields[activeChordIndex]).focus();
    }
})

$('#Progresion #grade .btn').click(function () {
    console.log(activeChordIndex)
    if (!$(this).hasClass('disabled')) {
        console.log(individualFields[activeChordIndex])
        responseChords[activeChordIndex].grade = this.id;
        individualFields[activeChordIndex].innerHTML = responseChords[activeChordIndex].getChordAsString();
        $(individualFields[activeChordIndex]).focus();        
    }
})

$('#Progresion #kind .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        responseChords[activeChordIndex].kind = this.id
        individualFields[activeChordIndex].innerHTML = responseChords[activeChordIndex].getChordAsString();
        $(individualFields[activeChordIndex]).focus();
    }
})

$('#Progresion #secondaryDominat .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        responseChords[activeChordIndex].secondaryDominat = this.id
        individualFields[activeChordIndex].value = responseChords[activeChordIndex].getChordAsString();
        $(individualFields[activeChordIndex]).focus();
    }
})
//Falta el resto

//Button response
$('#progresionResponse').click(function () {
    if (currentExercise.getState() == 'playing') {
        currentExercise.checkResponse(getResponses());   
        $(this).text('Siguiente');
    }
    else if (currentExercise.getState() == 'answer') { 
        currentExercise.createNextQuestion();
        $(this).text('Respuesta');
    }
})

function getResponses() {    
    //$("#play-pause").prop("disabled", true)
    //var buttons = $('#Progresion #inputFields .form-control').get()
    var responses = []
    responseChords.forEach(element => {
        var retrievedChord = {};
        retrievedChord.grade = [element.gradeModifier,
            element.grade,
            element.isSecondaryDominat,
            element.secondaryDominatModifier,
            element.secondaryDominat].join('').replace('s', '#')
        retrievedChord.kind = element.kind;
        retrievedChord.seven = element.seven;
        retrievedChord.extention = element.extention;
        console.log(retrievedChord)
        if(retrievedChord.grade != undefined && retrievedChord.grade != "") {
            if(retrievedChord.kind == undefined){
                var gradeOf = gradeParserRegEx.exec(retrievedChord.grade)
                retrievedChord.kind = progresionMode[mode][[gradeOf[1], gradeOf[2]].join('')];
            }
        }
        responses.push(retrievedChord)
    })
    //$('#Progresion #inputFields .form-control').removeClass('hasBeenSelected')
    return responses;
}

//Feedback
function failChordAnswer(grade, kind, index) {
    if (kind == 'major') kind = '';
    text = grade + ' ' + kind;
    $('#ex' + index).attr('data-content', text)
        .popover('show')
    $('#ex' + index).removeClass('btn-default').addClass('btn-danger')
}
function correctChordAnswer(index) {
    $('#ex' + index).removeClass('btn-default').addClass('btn-success')
}
//RETOCAR
$('#Progresion .form-control').popover({
    placement: 'bottom',
    trigger: 'manual'
})
