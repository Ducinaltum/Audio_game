//Layout del ejercicio
var selectedChordPath = []
var container;
success = "btn-success"
fail = "btn-danger"
correction = "btn-info"
hasSeventh = false;
hasExtention = false;
pointer = 0;


function deactivateChordsButtons(parent, e) {
    var exercise = e.base;
    var depth = e.depth;
    if (depth > 1) hasSeventh = true;
    if (depth > 2) hasExtention = true;
    container = parent;
    $("#" + parent + "InputButtons :input").prop("disabled", true)
        .removeClass('btn-primary')
        .addClass('btn-default')
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
        $('#chordsBase #major').removeClass('btn-default')
            .addClass('btn-primary')
    }
    $('#ChordsKeyInput').focus()
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
    $('#ChordsKeyInput').focus()
})

function activateSevenths() {
    if (hasSeventh) {
        $('#chordsSevenths .btn').prop("disabled", true)
        var iteration = selectedChordPath[0][1]
        for (let i = 0; i < iteration.length; i++) {
            if (iteration[i][0] != undefined) {
                element = iteration[i][0].replace('#', 's')
                $("#" + container + " #" + element).prop("disabled", false);
            }
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
    $('#ChordsKeyInput').focus()
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
    $('#ChordsKeyInput').focus()
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
    $('#ChordsKeyInput').val('')
}

function sendChordsResponse() {
    response = []
    response[0] = $('#chordsBase .btn-primary').attr('id');
    response[1] = $('#chordsSevenths .btn-primary').attr('id');
    response[2] = $('#chordsExtentions .btn-primary').attr('id')
    if (response[2] != undefined) response[2] = response[2].replace('s', '#');
    $("#play-pause").prop("disabled", true)
    currentExercise.checkResponse(response);
}



var chordsRegEx = /^(m|°|d|dim|a|aug|aum|\+)?(b7|7|majj|majj7)?((|\/)(b9|9|#9|11|#11|b13|13))?(b5)?$/
$('#ChordsKeyInput').on('input', function () {
    input = this.value;
    if (input[input.length -1] != ' ') {
        
        var acceptedText = []
        var strReturn = chordsRegEx.exec(this.value).splice(1)
        if (strReturn != null) {
            if (strReturn[0] == '°') {
                acceptedText[0] = 'dim'
                acceptedText[1] = 'b7'
            }
            else {
                acceptedText[0] = handInputTable[strReturn[0]]
                acceptedText[1] = strReturn[1]
                if (strReturn[2] != undefined) acceptedText[2] = strReturn[2].replace('s', '#');
                if (strReturn[5] != undefined) acceptedText[0] = 'dim';
            }
        }
        if (!$('#chordsBase #' + acceptedText[0]).hasClass('btn-primary') && !$('#chordsBase #' + acceptedText[0]).prop("disabled")) {
            $('#chordsBase .btn').removeClass('btn-primary')
                .addClass('btn-default')
            $('#chordsBase #' + acceptedText[0]).removeClass('btn-default')
                .addClass('btn-primary')
        }
        if (!$('#chordsSevenths #' + acceptedText[1]).hasClass('btn-primary') && !$('#chordsBase #' + acceptedText[0]).prop("disabled")) {
            $('#chordsSevenths .btn').removeClass('btn-primary')
                .addClass('btn-default')
            $('#chordsSevenths #' + acceptedText[1]).removeClass('btn-default')
                .addClass('btn-primary')
        }
        if (!$('#chordsExtentions #' + acceptedText[2]).hasClass('btn-primary') && !$('#chordsBase #' + acceptedText[0]).prop("disabled")) {
            $('#chordsExtentions .btn').removeClass('btn-primary')
                .addClass('btn-default')
            $('#chordsExtentions #' + acceptedText[2]).removeClass('btn-default')
                .addClass('btn-primary')
        }
    }
    else {
        input = input.substr(0,(input.length -1))
        $(this).val(input);
    }
})


handInputTable = {
    'M': 'major',
    'undefined': 'major',

    'm': 'minor',
    'min': 'minor',
    'minor': 'minor',

    'd': 'dim',
    'dim': 'dim',

    'aug': 'aug',
    'a': 'aug',
    'aum': 'aug',
    '+': 'aug',
}