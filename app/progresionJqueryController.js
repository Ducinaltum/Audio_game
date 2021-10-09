function inputChord() {
    this.gradeModifier = undefined;
    this.grade = undefined;
    this.kind = undefined;
    this.secondaryDominant = undefined;
    this.mode = undefined

    //Convierte los valores del objeto en una cadena para que la visualice el usuario
    this.getChordAsString = function () {
        var chord = this
        var grade = [chord.gradeModifier, romanize(this.grade)].join('')
        var kind = [formatChordsToDisplay[chord.kind]].join('')
        var secondaryDominant = (chord.secondaryDominant != undefined) ? romanize(chord.secondaryDominant) + '/' : '';
        //var mode = chord.mode != undefined && (chord.mode != "major" || chord.mode != "minor") ? " " + chord.mode : "";
        var retrieve = secondaryDominant + grade + kind;
        return retrieve;
    }

    //Colorea los botones indicados al tocar un cuadro de input
    this.updateButtons = function () {
        var chord = this
        $('#inputButtons :button').removeClass('btn-primary')
            .addClass('btn-default')
        for (var property in Object.keys(chord)) {
            key = Object.keys(chord)[property]
            value = chord[key];
            if (!(Object.prototype.toString.call(value) == '[object Function]')) {
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
var chordsModes = []
var activeChordIndex;
var individualFields = {};
var mode;

function initiateExercise(numberOfChords, container, exerciseMode) {
    $("#play-pause").prop("disabled", false)
    $('#' + container + " #firstSection").prop('disabled', false).popover('hide')
    if (numberOfChords > 4) {
        $('#' + container + " #secondSection").prop('disabled', false).popover('hide')
        $('#' + container + " #secondSection").show();
    }
    else {
        $('#' + container + " #secondSection").prop("disabled", true).popover('hide')
        $('#' + container + " #secondSection").hide();
    }
    individualFields.parent = $('#' + container + " .chord-bar");
    individualFields.grade = $('#' + container + " .gradeIndicator");
    individualFields.mode = $('#' + container + " .modeIndicator");
    for (var i = 0; i < numberOfChords; i++) {
        responseChords[i] = new inputChord();
        //responseChords[i].mode = mode;
    }
    mode = exerciseMode;
    responseChords[0].mode = mode;
    activeChordIndex = 0
    $(individualFields.parent[activeChordIndex]).focus();
}

$('#Progresion #inputFields .chord-bar').focus(function () {
    $(this).addClass('hasBeenSelected')
    $(this).one('mouseup', function () {
        $(this).select();
    });
    var index = this.id.slice(2)
    if (activeChordIndex != index) activeChordIndex = index;
    responseChords[activeChordIndex].updateButtons()
    var valueToShow = responseChords[activeChordIndex].getChordAsString();
    if (valueToShow == '') {
        valueToShow = '&nbsp'
    }
    individualFields.grade[activeChordIndex].innerHTML = valueToShow
    updateModesStrip()
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

function loadValue(field, button) {
    var parent = $(button).parent().attr('id');
    $('#' + parent + ' .btn').removeClass('btn-primary').addClass('btn-default')
    $(button).addClass('btn-primary')
    if (field == "mode" && responseChords[activeChordIndex][field] != button.id) {
        updateModesStrip();
    }
    responseChords[activeChordIndex][field] = button.id;
    $(individualFields.parent[activeChordIndex]).focus();
}

function discardValue(field, button) {
    console.log("hi")
    $(button).removeClass('btn-primary').addClass('btn-default')
    responseChords[activeChordIndex][field] = undefined;
    $(individualFields.grade[activeChordIndex]).focus();
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
    var carryingMode = mode;
    responseChords.forEach(element => {
        let chord = {
            grade: undefined,
            mode: undefined,
            kind: undefined,
            secondaryDominant:""
        };
        if (element.mode != undefined) {
            chord.mode = element.mode;
            carryingMode = element.mode;
        }
        else chord.mode = carryingMode;
        if (element.secondaryDominant != undefined) {
            chord.secondaryDominant = element.secondaryDominant + "/"
        }
        chord.grade = progresionModeGrades[chord.mode][element.grade] != undefined ? progresionModeGrades[chord.mode][element.grade] : element.grade;
        chord.grade = [chord.secondaryDominant, element.gradeModifier, chord.grade].join('').replace('s', '#')
        chord.kind = element.kind;
        if (chord.grade != undefined && chord.grade != "") {
            if (chord.kind == undefined) {
                if (element.secondaryDominant != undefined) {
                    console.log(element.secondaryDominant)
                    chord.kind = progresionModeKinds[chord.mode][element.secondaryDominant];
                }
                else chord.kind = progresionModeKinds[chord.mode][[element.gradeModifier, element.grade].join('')];
            }
        }
        responses.push(chord)
    })
    return responses;
}

function updateModesStrip() {
    var initialMode = responseChords[0].mode == undefined ? formatModeToDisplay[mode] : formatModeToDisplay[responseChords[0].mode];
    individualFields.mode[0].innerHTML = initialMode;
    for (i = 1; i < responseChords.length; i++) {
        if (responseChords[i].mode != undefined && responseChords[i].mode != initialMode) {
            let actualMode = formatModeToDisplay[responseChords[i].mode]
            individualFields.mode[i].innerHTML = actualMode
        }
        else {
            individualFields.mode[i].innerHTML = '&nbsp'
        }
    }
}


//Feedback
function failChordAnswer(grade, kind, index) {
    //if (kind == 'major') kind = '';
    text = grade + ' ' + formatModeToDisplay[kind];
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
