//Progresion Input Fields
enters = 0;
function deactivateInputFields(numberOfChords, container) {
    $("#play-pause").prop("disabled", false)
    $('#' + container + " .form-control").prop('disabled', true).popover('hide')
    individualFields = $('#' + container + " .form-control");
    for (var i = 0; i < numberOfChords; i++) {
        if (i < numberOfChords) {
            individualFields[i].disabled = false;
        }
    }
}

//Progresion buttons and fields
$('#Progresion #inputFields .form-control').focus(function () {
    //si selecciono un input nuevo
    if (currentExercise.inputManager.getFieldSelected() != this) {
        currentExercise.inputManager.setFieldSelected(this);
        //si el input fue usado
        //if((currentExercise.inputManager.getFieldSelected() != this)){

        //}
        //else{
            $('#inputButtons .btn-primary').removeClass('btn-primary')
                .addClass('btn-default')
            
        //}
    }
})

$('#grades .btn').click(function () {
    if (currentExercise.inputManager.getFieldSelected() != null) {
        $('#grades .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary');
        currentExercise.inputManager.setField(this.id, 1)
        $(currentExercise.inputManager.getFieldSelected()).focus()
    }

})
$('#gradesModifier .btn').click(function () {
    if (currentExercise.inputManager.getFieldSelected() != null) {
        $('#gradesModifier .btn-primary').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary');
        currentExercise.inputManager.setField(this.id, 0)
        $(currentExercise.inputManager.getFieldSelected()).focus()
    }
})
$('#chordType .btn').click(function () {
    if (currentExercise.inputManager.getFieldSelected() != null) {
        $('#chordType .btn-primary').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary');
        currentExercise.inputManager.setField(this.id, 2)
        $(currentExercise.inputManager.getFieldSelected()).focus()
    }
})
/*
$('#extensions .btn').click(function(){
    if($(this).hasClass('btn-primary')){
        fieldChord[4] = this.id;
        $(this).removeClass('btn-primary').addClass('btn-default')
    }
    else {
        fieldChord[4] = this.id;
        $(this).removeClass('btn-default').addClass('btn-primary');
    }
    $(currentExercise.inputManager.fieldSelected).val( currentExercise.inputManager.fieldChord.join(''))
})
*/


$('#progresionResponse').click(function () {
    $("#play-pause").prop("disabled", true)
    currentExercise.checkResponse(getResponses());    
})

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

$('#Progresion .form-control').popover({
    placement: 'bottom',
    trigger: 'manual'
})

function getResponses() {
    var buttons = $('#Progresion #inputFields .form-control').get()
    var responses = []
    var progresionRegEx = /^(b|#|\+)?(I|II|III|IV|V|VI|VII|[1-7])(m|°|d|dim|a|aug|aum|\+)?(b7|7|majj|majj7)?((|\/)(b9|9|#9|11|#11|b13|13))?(b5)?((\/)(b|#|\+)?(I|II|III|IV|V|VI|VII|[1-7]))?$/i
    buttons.forEach(element => {
        if (!element.disabled) {
            var strReturn = progresionRegEx.exec(element.value)
            var retrievedChord = {};
            if (strReturn != null) {
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
                
                chord = {}
                chord.gradeModifier = strReturn[1]
                chord.grade = strReturn[2]
                chord.kind = strReturn[3]
                chord.seven = strReturn[4]
                chord.extention = strReturn[7]
                chord.b5 = strReturn[8]
                chord.isSecondaryDominat = strReturn[10]
                chord.secondaryDominatModifier = strReturn[11]
                chord.secondaryDominat = strReturn[12]

                if (chord != undefined) {
                    if (chord.kind == '°') {
                        chord.kind = 'dim'
                        chord.seven = 'b7'
                    }
                    else {
                        chord.kind = handInputTable[chord.kind]
                        if (chord.extention != undefined) chord.extention = chord.extention.replace('s', '#');
                        if (chord.b5 != undefined && chord.kind != 'm') chord.kind = 'dim';
                    }
                    for(var prop in chord) { 
                        if(chord[prop] == undefined) chord[prop] = '';
                    }
                    retrievedChord.grade = chord.gradeModifier + 
                        chord.grade + 
                        chord.isSecondaryDominat + 
                        chord.secondaryDominatModifier + 
                        chord.secondaryDominat;
                    retrievedChord.kind = chord.kind;
                    retrievedChord.seven = chord.seven;
                    retrievedChord.extention = chord.extention;
                }
            }
            responses.push(chord)
        }
    })
    return responses;
}
