var activeScreen = null;
var currentExercise = null;

var btnSuccess = "btn-success"
var btnFail = "btn-danger"
var btnCorrection = "btn-info"

var testPattern = /(b|#)?(I|II|III|IV|V|VI|VII)(m|dim|\+)?[(/)(b|#)?(I|II|III|IV|V|VI|VII)]?[(b|#)?(7|9|11|13)]?[(/)(b|#)?(7|9|11|13)]*/

$('#gameSelector a').click(function () {
    if (activeScreen != null ) {
        activeScreen.hide();
    }
    goTo = this.id
    activeScreen = $('#' + goTo.slice(2))
    activeScreen.show()

    switch (this.id) {
        case 'goIntervals':
            if (currentExercise != null) {
                if (currentExercise.getKindOfExercise() != 'Intervals') {
                    progressRestore()
                    currentExercise = new IntervalsExercise();
                }
            }
            else {
                currentExercise = new IntervalsExercise();
            }
            break;
        case 'goChords':
            if (currentExercise != null) {
                if (currentExercise.getKindOfExercise() != 'Chords') {
                    progressRestore()
                    currentExercise = new ChordsExercise();
                }
            }
            else currentExercise = new ChordsExercise();
            break;
        case 'goProgresion':
            if (currentExercise != null) {
                if (currentExercise.getKindOfExercise() != 'Progresion') {
                    progressRestore()
                    currentExercise = new HarmonicProgresionExercise();
                }
            }
            else currentExercise = new HarmonicProgresionExercise();
            break;
    }
})

//Global
function resetElements(parent) {
    if (parent == 'Progresion') {
        $('#' + parent + ' .form-control').val('')
            .popover('hide')
            .removeClass('btn-success')
            .removeClass('btn-danger')
            .addClass('btn-default')
            .blur();
        $('#ex0').focus()
    }
    else {
        $("#" + parent + " :input:enabled").removeClass("btn-success")
            .removeClass("btn-danger")
            .removeClass("btn-info")
            .removeClass("btn-primary")
            .addClass('btn-default')
            .blur();
    }

    $("#feedbackText").html("&nbsp")
    $("#correctText").html("&nbsp")
    $("#feedback").removeClass("alert-success")
        .removeClass("alert-danger");
    
    $("#play-pause").prop("disabled", false)
}

//Feedback Text
function updateFeedback(text, kind, correct = '&nbsp') {
    $("#feedbackText").html(text)
    $("#correctText").html(correct)
    $("#feedback").addClass("alert-" + kind);
}

//Progress bar
function updateProgressBar(c, f) {
    $(".progress-bar-success").attr('aria-valuenow', c).css('width', c + '%');
    $(".progress-bar-danger").attr('aria-valuenow', f).css('width', f + '%');
}
function progressRestore() {
    $(".progress-bar-success").attr('aria-valuenow', 0).css('width', 0 + '%');
    $(".progress-bar-danger").attr('aria-valuenow', 0).css('width', 0 + '%');
}

//End level modal window REPARAR
function endLevelMenu(outcome) {
    if (outcome == "win") {
        $('#next').addClass('btn-primary').removeClass('btn-default')
        $('#repeat').addClass("btn-default").removeClass('btn-primary')
        $('#endLevelPrimary').html(winText.primary)
        $('#endLevelSecondary').html(winText.secondary)
    }
    if (outcome == "loose") {
        $('#repeat').addClass('btn-primary').removeClass('btn-default')
        $('#next').addClass("btn-default").removeClass('btn-primary')
        if (currentExercise.getLevel() >= user[currentExercise.getKindOfExercise().toLowerCase() +'Level']) {
            $('#next').prop("disabled", true);
        }
        $('#endLevelPrimary').html(looseText.primary)
        $('#endLevelSecondary').html(looseText.secondary)
    }
    $('#endOfExercise').modal('show');
}

//Modal click handlers
$('#next').click(function () {
    goToLevel(1);
})
$('#repeat').click(function () {
    goToLevel(0)
})
$('#previous').click(function () {
    goToLevel(-1);
})

//Screen management
function showScreen(container) {
    $("#" + container).css("display", "block");
}

function goToLevel(level) {
    var newlevel = currentExercise.getLevel() + level;
    var kind = currentExercise.getKindOfExercise();
    var Exercise = setExerciseConstructor(kind);
    currentExercise = null
    currentExercise = new Exercise(newlevel);
}

function setExerciseConstructor(kind) {
    switch (kind) {
        case 'Intervals':
            return IntervalsExercise;
            break;
        case 'Chords':
            return ChordsExercise;
            break;
        case 'Progresion':
            return HarmonicProgresionExercise;
            break;
    }
}

$(document).keypress(function (e) {
    var key = e.which;
    if(key == 13)  {
        if($('#endOfExercise').hasClass('in')){
            $('#endOfExercise .btn-primary').click();
        }
        else{
            if (currentExercise != null) {
                $('#' + currentExercise.getKindOfExercise().toLowerCase() + 'Response').focus().click();        
            }
        }
    }
    if(key == 32)  {
        if (currentExercise != null) {
            if(!$('#play-pause').prop("disabled")){
                $('#play-pause').click();
            }
        }
    }
    
});

$(document).click(function(){
    if(currentExercise != null) {
        if(currentExercise.getKindOfExercise() == 'Chords'){
            $('#' + currentExercise.getKindOfExercise() + 'KeyInput').focus();
        }
    }
})

