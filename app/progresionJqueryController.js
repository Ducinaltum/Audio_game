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
    this.gradeModifier = '';
    this.grade = '';
    this.kind = '';
    this.seven = '';
    this.extention = '';
    this.b5 = '';
    this.isSecondaryDominat ='';
    this.secondaryDominatModifier = '';
    this.secondaryDominat = '';

    this.buildFromString = function(input){
        this.gradeModifier = input[1]
        this.grade = deromanize(input[2])
        this.kind = input[3]
        this.seven = input[4]
        this.extention = input[7]
        this.b5 = input[8]
        this.isSecondaryDominat = input[10]
        this.secondaryDominatModifier = input[11]
        this.secondaryDominat = deromanize(input[12])
        processChord(this);
    }

    this.getChordAsString = function(){
        var chord = this
        var grade = [chord.gradeModifier, romanize(this.grade)].join('')
        var kind = [formatChordsToDisplay[chord.kind]].join('')
        var seven = [chord.seven].join('')
        var extention = [chord.extention].join('')
        var secondaryDominat = [chord.isSecondaryDominat, chord.secondaryDominatModifier, romanize(chord.secondaryDominat)].join('')
        var retrieve = grade + kind + seven + extention + secondaryDominat;
        return retrieve;
    }

    function processChord(chord) {
        for (var property in Object.keys(chord)) {
            key = Object.keys(chord)[property]
            if (chord[key] != undefined) {
                if (chord.kind == '°') {
                    chord.kind = 'dim'
                    chord.seven = 'b7'
                }
                else {
                    chord.kind = handInputTable[chord.kind]
                    if (chord.extention != undefined) chord.extention = chord.extention.replace('s', '#');
                    if (chord.b5 != undefined && chord.kind == 'm') chord.kind = 'dim';
                }
            }
            else chord.kind = 'major'
        }
    }


}

//Progresion Input Fields
var progresionRegEx = /^(b|#|\+)?(I|II|III|IV|V|VI|VII|[1-7])(m|°|d|dim|a|aug|aum|\+)?(b7|7|majj|majj7)?((|\/)(b9|9|#9|11|#11|b13|13))?(b5)?((\/)(b|#|\+)?(I|II|III|IV|V|VI|VII|[1-7]))?$/i
var enters = 0;
var responseChords = [];
var activeChordIndex;
var individualFields;

function deactivateInputFields(numberOfChords, container) {
    $("#play-pause").prop("disabled", false)
    $('#' + container + " .form-control").prop('disabled', true).popover('hide')
    individualFields = $('#' + container + " .form-control");
    for (var i = 0; i < numberOfChords; i++) {
        individualFields[i].disabled = false;
        responseChords[i] = new inputChord();        
    }
    console.log(responseChords)
    activeChordIndex = 0
    $(individualFields[activeChordIndex]).focus();
}

//Progresion buttons and fields
$('#Progresion #inputFields .form-control').on('input', function () {
    var index = this.id.slice(2)
    var input = this.value
    //Si agregó algo nuevo: procesar y cargar en el respectivo acorde
    if (input[input.length -1] != ' ') {  
        var strReturn = progresionRegEx.exec(input)
        if (strReturn != null) {
            responseChords[activeChordIndex].buildFromString(strReturn)
        }
    }
    //Si no agregó nada nuevo no hacer nada
    else {
        input = input.substr(0,(input.length -1))
        $(this).val(input);
    }
    
})

$('#Progresion #inputFields .form-control').focus(function () {
    $(this).addClass('hasBeenSelected')
    $(this).one('mouseup', function() {
        $(this).select();
    });
    var index = this.id.slice(2)
    if (activeChordIndex != index) {
        activeChordIndex = index;
        var strReturn = progresionRegEx.exec(this.value)
        if (strReturn != null) {
            responseChords[activeChordIndex].buildFromString(strReturn)
        }
    }
    this.value = responseChords[activeChordIndex].getChordAsString();
})

$('#Progresion #inputFields .form-control').blur(function() {
    if ($(this).hasClass('hasBeenSelected')) {
        var index = this.id.slice(2)
        var strReturn = progresionRegEx.exec(this.value)
        if (strReturn != null) {
            responseChords[index].buildFromString(strReturn)
        }
        this.value = responseChords[index].getChordAsString();
    }
});

$('#grade .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        $('#grade .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary');
        responseChords[activeChordIndex].grade = this.id;
        $(individualFields[activeChordIndex]).focus();
    }
})
$('#gradeModifier .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        $('#gradeModifier .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary');
        responseChords[activeChordIndex].gradeModifier = this.id
        $(individualFields[activeChordIndex]).focus();
    }
})
$('#kind .btn').click(function () {
    if (!$(this).hasClass('disabled')) {
        $('#kind .btn').removeClass('btn-primary')
            .addClass('btn-default')
        $(this).removeClass('btn-default')
            .addClass('btn-primary');
        responseChords[activeChordIndex].kind = this.id
        $(individualFields[activeChordIndex]).focus();
    }
})
$('#progresionResponse').click(function () {
    $("#play-pause").prop("disabled", true)
    currentExercise.checkResponse(getResponses());    
})
function getResponses() {
    var buttons = $('#Progresion #inputFields .form-control').get()
    var responses = []
    responseChords.forEach(element => {
        var retrievedChord = {};
        retrievedChord.grade = [element.gradeModifier,
            element.grade,
            element.isSecondaryDominat,
            element.secondaryDominatModifier,
            element.secondaryDominat].join('')
        retrievedChord.kind = element.kind;
        retrievedChord.seven = element.seven;
        retrievedChord.extention = element.extention;
        responses.push(retrievedChord)
    })
    $('#Progresion #inputFields .form-control').removeClass('hasBeenSelected')
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
$('#Progresion .form-control').popover({
    placement: 'bottom',
    trigger: 'manual'
})