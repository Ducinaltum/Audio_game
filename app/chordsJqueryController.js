//Layout del ejercicio
var selectedChordPath = []
var container;
success = "btn-success"
fail = "btn-danger"
correction = "btn-info"
hasSeventh = false;
hasExtention = false;

function deactivateChordsButtons(parent, e) {
    var exercise = e.base;
    var depth = e.depth;
    if (depth > 1) hasSeventh = true;
    if (depth > 2) hasExtention = true;
    container = parent;
    $("#" + parent + "InputButtons :input").prop("disabled", true)
    if (exercise.length == 1) {
        selectedChordPath[0] = exercise[0];
        $("#" + parent + " #" + exercise[0][0]).prop("disabled", false)
            .removeClass('btn-default')
            .addClass('btn-primary');
        activateSevenths();
    }
    else {
        exercise.forEach(element => {
            $("#" + parent + " #" + element[0]).prop("disabled", false)
        });
    }
}

//Selection Buttons
$('#chordsBase .btn').click(function () {
    if (!$(this).hasClass('btn-primary')) {
        $('#chordsBase .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary')
        activateSevenths();
    }
})

function activateSevenths() {
    if (hasSeventh) {
        $('#chordsSevenths .btn').prop("disabled", true)
        var iteration = selectedChordPath[0][1]
        for (let i = 0; i < iteration.length; i++) {
            element = iteration[i][0].replace('#', 's')
            $("#" + container + " #" + element).prop("disabled", false);
        }
    }
}

$('#chordsSevenths .btn').click(function () {
    if (!$(this).hasClass('btn-primary')) {
        $('#chordsSevenths .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary')
        for (let i = 0; i < selectedChordPath[0][1].length; i++) {
            const element = selectedChordPath[0][1][i]
            if (this.id == element[0].replace('#', 's')) {
                selectedChordPath[1] = element;
            }
        }
        activateExtensions();
    }

})

function activateExtensions() {
    if (hasExtention) {
        $('#chordsExtentions .btn').prop("disabled", true)
        var iteration = selectedChordPath[1][1]
        for (let i = 0; i < iteration.length; i++) {
            element = iteration[i][0].replace('#', 's')
            $("#" + container + " #" + element).prop("disabled", false);
        }
    }
}

$('#chordsExtentions .btn').click(function () {
    if (!$(this).hasClass('btn-primary')) {
        $('#chordsExtentions .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary')

        for (let i = 0; i < selectedChordPath[1][1].length; i++) {
            const element = selectedChordPath[1][1][i][0];
            if (this.id == element.replace('#', 's')) {
                selectedChordPath[2] = element;
            }
        }
    }
})

function activateSpecials() {

}

//Recepción de respuesta
$('#chordsResponse').click(function () {
    sendChordsResponse()
})

//Feedback
function chordsButtonAnswer(parent, correctValue, failValue) {
    for (let i = 0; i < correctValue.length; i++) {
        if (failValue[i] != undefined) {
            $("#" + parent + " #" + correctValue[i].replace('#', 's')).addClass(correction);
            $("#" + parent + " #" + failValue[i].replace('#', 's')).addClass(fail);
        }
        else {
            $("#" + parent + " #" + correctValue[i].replace('#', 's')).addClass(success);
        }
    }
}

function sendChordsResponse(){
    response = []
    response[0] = $('#chordsBase .btn-primary').attr('id');
    response[1] = $('#chordsSevenths .btn-primary').attr('id');
    response[2] = $('#chordsExtentions .btn-primary').attr('id')
    if (response[2] != undefined) response[2] = response[2].replace('s', '#');
    currentExercise.checkResponse(response);
}