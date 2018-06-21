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
        var secondaryDominat = (chord.secondaryDominat != undefined)? romanize(chord.secondaryDominat) + '/': '';
        var retrieve = secondaryDominat + grade + kind;
        return retrieve;
    }

    this.updateButtons = function(){
        var chord = this
        $('#inputButtons :button').removeClass('btn-primary')
            .addClass('btn-default')
        for (var property in Object.keys(chord)) {
            key = Object.keys(chord)[property]
            value = chord[key];
            if(!(Object.prototype.toString.call(value) == '[object Function]')){
                if (value != undefined) {
                    $('#' + key + ' #' + value.replace('#', 's')).removeClass('btn-default')
                        .addClass('btn-primary')
                }
            }
        }
    }
}

//Progresion Input Fields
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

$('#Progresion #inputFields .chord-bar').focus(function () {
    $(this).addClass('hasBeenSelected')
    $(this).one('mouseup', function () {
        $(this).select();
    });
    var index = this.id.slice(2)
    if (activeChordIndex != index) activeChordIndex = index;
    responseChords[activeChordIndex].updateButtons(responseChords[activeChordIndex])
    var valueToShow = responseChords[activeChordIndex].getChordAsString();
    if(valueToShow == '') {
        valueToShow = '&nbsp'
    }
    individualFields[activeChordIndex].innerHTML = valueToShow
});


//Progresion buttons click
$('#Progresion #inputButtons .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        if (!$(this).hasClass('btn-primary')) {
            loadValue($(this).parent().attr('id'), this)
        }
        else {
            discardValue($(this).parent().attr('id'), this)
        }
    }
})

function loadValue(field, button){
    var parent = $(button).parent().attr('id');
    $('#' + parent + ' .btn').removeClass('btn-primary').addClass('btn-default')
    $(button).addClass('btn-primary')
    responseChords[activeChordIndex][field] = button.id;
    $(individualFields[activeChordIndex]).focus();
}
function discardValue(field, button){
    $(button).removeClass('btn-primary').addClass('btn-default')
    responseChords[activeChordIndex][field] = undefined;
    $(individualFields[activeChordIndex]).focus();
}

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
    var responses = []
    responseChords.forEach(element => {
        var retrievedChord = {};
        if(element.secondaryDominat != undefined) element.secondaryDominat +='/'
        retrievedChord.grade = [element.secondaryDominat, element.gradeModifier, element.grade].join('').replace('s', '#')
        retrievedChord.kind = element.kind;
        if(retrievedChord.grade != undefined && retrievedChord.grade != "") {
            if(retrievedChord.kind == undefined){
                if(element.secondaryDominat != undefined) retrievedChord.kind = progresionMode[mode][[element.secondaryDominat.slice(0, element.secondaryDominat.length - 1)]];
                else retrievedChord.kind = progresionMode[mode][[element.gradeModifier, element.grade].join('')];
            }
        }
        responses.push(retrievedChord)
    })
    return responses;
}

//Feedback
function failChordAnswer(grade, kind, index) {
    if (kind == 'major') kind = '';
    text = grade + ' ' + kind;
    $('#ex' + index).attr('data-content', text).popover('show')
    $('#ex' + index).removeClass('btn-default').addClass('btn-danger')
}
function correctChordAnswer(index) {
    $('#ex' + index).removeClass('btn-default').addClass('btn-success')
}
//RETOCAR
$('#Progresion .chord-bar').popover({
    placement: 'bottom',
    trigger: 'manual'
})
