var activeScreen = null;
var currentExercise = null;

var btnSuccess = "btn-success"
var btnFail = "btn-danger"
var btnCorrection = "btn-info"

//var testPattern = /(b|#)?(I|II|III|IV|V|VI|VII)(m|dim|\+)?[(/)(b|#)?(I|II|III|IV|V|VI|VII)]?[(b|#)?(7|9|11|13)]?[(/)(b|#)?(7|9|11|13)]*/

//Global
function resetElements(parent) {
    if (parent == 'Progresion') {
        $('#' + parent + ' .chord-bar').popover('hide')
            .removeClass('btn-success')
            .removeClass('btn-danger')
            .addClass('btn-default')
            .blur();
        $('#' + parent + " .gradeIndicator").html('&nbsp')
        $('#' + parent + ' .modeIndicator').html('&nbsp')
    }
    else {
        $("#" + parent + " :input").removeClass("btn-success")
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

//End level modal window REPARAR
function endLevelMenu(outcome) {
    if (outcome == "win") {
        $('#repeat').addClass("btn-default").removeClass('btn-primary')
        $('#endLevelPrimary').html(winText.primary)
    }
    if (outcome == "loose") {
        $('#endLevelPrimary').html(looseText.primary)
        $('#endLevelSecondary').html(looseText.secondary)
    }
    $('#endOfExercise').modal('show');
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
                var responseButton = $('#' + currentExercise.getKindOfExercise().toLowerCase() + 'Response')
                if(!responseButton.is(":focus")){
                    //responseButton.focus().click();
                }
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

$('#home').click(function(){
    goToHome();
})


//CAPAZ QUE ESTO NO SIRVE MAS
$(document).on('hide.bs.modal','#endOfExercise', function () {
    $('.collapse').collapse()
    //goToHome();
});

function hideIndividualExercisesUI(){
    var inputs = $('#playerInput').children()
    for(var i = 0; i < inputs.length; i++){
        $(inputs[i]).hide().prop('disabled', true);
    }
}

function showScreen(container) {
    hideIndividualExercisesUI()
    $("#" + container).show().prop('disabled', true);
    $("#" + container).css("display", "block");
}

function goToHome(){
    $('#exercise').hide().prop('disabled', true);
    $('#exerciseSelector').show().prop('disabled', false);
};

function goToExercise(exercise){
    hideIndividualExercisesUI()
    $("#exerciseSelectorHeader").hide().prop('disabled', true);
    $('#exerciseSelector').hide().prop('disabled', true);
    $('#selectionOfExercise').modal('hide');

    $('#exercise').show().prop('disabled', false);    
    $("#exerciseHeader").show().prop('disabled', false);
    $("#feedbackUIcontainer").show().prop('disabled', false);
    var Exercise = setExerciseConstructor(exercise.kind);
    currentExercise = null
    currentExercise = new Exercise(exercise);
}

function goToExerciseSelector(){
    hideIndividualExercisesUI()
    $("#mainMenuHeader").hide().prop('disabled', true);
    $("#mainMenu").hide().prop('disabled', true);
    $("#exerciseSelectorHeader").show().prop('disabled', false); 
    $("#exerciseSelector").show().prop('disabled', false);
    //document.getElementById("carouselEjercicios").style.marginTop = (document.getElementById("exerciseSelectorNav").offsetHeight) + "px";
}

//Este bloque sirve para que el carrusel de selección de ejercicio no se autoanime
$('.carousel').carousel({
    interval: false
})


