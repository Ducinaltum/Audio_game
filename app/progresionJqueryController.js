//Progresion Input Fields
function deactivateInputFields(numberOfChords, container) {
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
    currentExercise.checkResponse();
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