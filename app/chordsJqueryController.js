//Layout del ejercicio
var selectedChordPath = []
var container = 'Chords';

var hasSeventh = false;
var hasExtention = false;
var pointer = 0;
var chordsRegEx = /^(|m|°|d|dim|a|aug|aum|\+)?(b7|7|majj|majj7)?((|\/)(b9|9|#9|11|#11|b13|13))?(b5)?$/
var answer = {}
var recievedExercise
var depth

function deactivateChordsButtons(parent, e) {
    recievedExercise = e.base;
    depth = e.depth;
    answer.kind = undefined;
    answer.seven = undefined;
    answer.extention = undefined;
    answer.b5 = undefined;
    if (depth > 1) hasSeventh = true;
    if (depth > 2) hasExtention = true;
    $("#" + parent + "InputButtons :input").prop("disabled", true)
        .removeClass('btn-primary')
        .addClass('btn-default')
    if (recievedExercise.length == 1) {
        selectedChordPath[0] = recievedExercise[0];
        $("#" + parent + " #" + selectedChordPath[0][0]).prop("disabled", false)
            .removeClass('btn-default')
            .addClass('btn-primary');
        answer.kind = selectedChordPath[0][0]
        activateSevenths();
    }
    else {
        recievedExercise.forEach(element => {
            $("#" + parent + " #" + element[0]).prop("disabled", false)
        });
    }
    $('#ChordsKeyInput').focus()
}

$('#ChordsKeyInput').focus(function(){
    var display;
    if(answer.kind == 'dim'){
        if(answer.seven == 'b7') display = '°'
        else if(answer.seven == '7') display = 'm7b5'
        else display = 'dim'
    }
    else {
        display = answer.kind != undefined? formatChordsToDisplay[answer.kind]:'';
        display += (answer.seven != undefined)? answer.seven: ''
        display += (answer.extention != undefined)? answer.extention: ''
    }
    this.value = display;
})

//Selection Buttons
$('#chordsBase .btn').click(function () {
    if (!$(this).hasClass('btn-primary')) {
        $('#chordsBase .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary')
        answer.kind = this.id;
        for (let i = 0; i < recievedExercise.length; i++) {
            const element = recievedExercise[i];
            if(element[0] == this.id){
                selectedChordPath[0] = element;
            }       
        }
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
        answer.seven = this.id;
        activateExtensions();
    }
    $('#ChordsKeyInput').focus()
})

function activateExtensions() {
    if (hasExtention) {
        $('#chordsExtentions .btn').prop("disabled", true)
        var iteration = selectedChordPath[1][1]
        if (iteration != undefined) {
            for (let i = 0; i < iteration.length; i++) {
                element = iteration[i][0].replace('#', 's')
                $("#" + container + " #" + element).prop("disabled", false);
            }
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
        answer.extention = this.id.replace('s', '#')
    }
    $('#ChordsKeyInput').focus()
})

//Recepción de respuesta
$('#chordsResponse').click(function () {
    if (currentExercise.getState() == 'playing') {
        answer.kind = $('#chordsBase .btn-primary').attr('id');
        answer.seven = $('#chordsSevenths .btn-primary').attr('id');
        answer.extention = $('#chordsExtentions .btn-primary').attr('id')
        if (answer.extention != undefined) answer.extention = answer.extention.replace('s', '#');
        //$("#play-pause").prop("disabled", true)
        //if (answer.kind == undefined) answer.kind = 'major'
        currentExercise.checkResponse([answer.kind, answer.seven, answer.extention]);
        $(this).text('Siguiente');
        $(this).focus();
    }
    else if (currentExercise.getState() == 'answer') {
        currentExercise.createNextQuestion();
        $(this).text('Respuesta');
    }
})

$('#ChordsKeyInput').on('input', function () {
    input = this.value;
    if (input[input.length -1] != ' ') {    
        var acceptedText = []
        var strReturn = chordsRegEx.exec(this.value)    
        if (strReturn != null) {
            strReturn = strReturn.splice(1)
            answer.kind = strReturn[0]
            answer.seven = strReturn[1]
            answer.extention = strReturn[2]
            answer.b5 = strReturn[5]
            if (answer.kind == '°') {
                answer.kind = 'dim'
                answer.seven = 'b7'
            }
            else {
                answer.kind = handInputTable[answer.kind]
                if (answer.extention != undefined) answer.extention = answer.extention.replace('s', '#');
                if (answer.b5 != undefined) answer.kind = 'dim';
            }
            if (!$('#chordsBase #' + answer.kind).hasClass('btn-primary') && !$('#chordsBase #' + acceptedText[0]).prop("disabled")) {
                $('#chordsBase .btn').removeClass('btn-primary')
                    .addClass('btn-default')
                $('#chordsBase #' + answer.kind).removeClass('btn-default')
                    .addClass('btn-primary')
            }
            if (!$('#chordsSevenths #' + answer.seven).hasClass('btn-primary') && !$('#chordsBase #' + acceptedText[0]).prop("disabled")) {
                $('#chordsSevenths .btn').removeClass('btn-primary')
                    .addClass('btn-default')
                $('#chordsSevenths #' + answer.seven).removeClass('btn-default')
                    .addClass('btn-primary')
            }
            if (!$('#chordsExtentions #' + answer.extention).hasClass('btn-primary') && !$('#chordsBase #' + acceptedText[0]).prop("disabled")) {
                $('#chordsExtentions .btn').removeClass('btn-primary')
                    .addClass('btn-default')
                $('#chordsExtentions #' + answer.extention).removeClass('btn-default')
                    .addClass('btn-primary')
            }
        }
    }
    else {
        input = input.substr(0,(input.length -1))
        $(this).val(input);
    }
})

//Feedback
function chordsButtonAnswer(parent, correctValue, failValue) {
    for (let i = 0; i < correctValue.length; i++) {
        if (failValue[i] != undefined) {
            $("#" + parent + " #" + correctValue[i].replace('#', 's')).addClass(btnCorrection);
            $("#" + parent + " #" + failValue[i].replace('#', 's')).addClass(btnFail);
        }
        else {
            $("#" + parent + " #" + correctValue[i].replace('#', 's')).addClass(btnSuccess);
        }
    }
    $('#ChordsKeyInput').val('')
}