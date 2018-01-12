var activeScreen =null;
var loadingScreen = null;
var currentExercise = null;

$('#gameSelector a').click(function () {
    if(activeScreen != null){
        activeScreen.hide();
    }
    goTo = this.id
    activeScreen = $('#' + goTo.slice(2))

    switch (this.id) {
        case 'goIntervals':
            if(currentExercise != null){
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
            if(currentExercise != null){
                if (currentExercise.getKindOfExercise() != 'Chords') {
                    progressRestore()
                    currentExercise = new ChordsExercise();
                }
            }
            else currentExercise = new ChordsExercise();
            break;
        case 'goProgresion':
            if(currentExercise != null){
                if (currentExercise.getKindOfExercise() != 'Progresion') {
                    progressRestore()
                    currentExercise = new HarmonicProgresionExercise();
                }
            }
            else currentExercise = new HarmonicProgresionExercise();
            break;            
    }
})


//Response click handlers

$('#Intervals .btn').click(function(e){
    currentExercise.checkResponse(this.id)
})

$('#Chords .btn').click(function(){
    currentExercise.checkResponse(this.id)
})


// Response Buttons
function correctButtonAnswer(value){
    $("#" + value).addClass("btn-success");
}

function failButtonAnswer(value){
    $("#" + value).addClass("btn-danger");
}

function deactivateButtons(parent, exercise){
    console.log(exercise)
    $("#" + parent + " :input").prop( "disabled", true );
    exercise.forEach(element => {
        $("#" + element).prop( "disabled", false);
    });    
}

function resetElements(parent){
    $("#" + parent + " :input:enabled").removeClass("btn-success")
    .removeClass("btn-danger")
    .blur();

    $("#feedbackText").html( "&nbsp" )
    $("#feedback").removeClass("alert-success")
    .removeClass("alert-danger");
}

//Feedback Text
function updateFeedback(text, kind){
    $("#feedbackText").html(text)
    $("#feedback").addClass("alert-" + kind);;
}

//Progress bar
function updateProgressBar(c, f){
    $(".progress-bar-success").attr('aria-valuenow', c).css('width',c + '%');
    $(".progress-bar-danger").attr('aria-valuenow', f).css('width',f + '%');
}

function progressRestore(){
    $(".progress-bar-success").attr('aria-valuenow', 0).css('width',0 + '%');
    $(".progress-bar-danger").attr('aria-valuenow', 0).css('width',0 + '%');
}

//End level modal window
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
        if (intervals.level >= user.intervalsLevel) {
            $('#next').prop("disabled", true);
        }
        $('#endLevelPrimary').html(looseText.primary)
        $('#endLevelSecondary').html(looseText.secondary)
    }
    $("#endOfExercise").modal('show');
}

//Modal click handlers
$('#next').click(function(){
    goToLevel(1);
})
$('#repeat').click(function(){
    goToLevel(0)
})
$('#previous').click(function(){
    goToLevel(-1);
})

//Screen management
function showScreen(container){
    $("#" + container).css("display", "block");
}

function goToLevel(level){
    newlevel = currentExercise.getLevel() + level;
    kind = currentExercise.getKindOfExercise();
    currentExercise = null
    Exercise = initiateExercise(kind);
    
    currentExercise = new Exercise(newlevel);
}

function initiateExercise(kind){
    switch(kind){
        case 'intervals':
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

//Progresion Input Fields
function deactivateInputFields(numberOfChords, container){
    individualFields = $('#'+ container + " .form-control");
    for (var i = 0; i < individualFields.length; i++) {
        if (i >= numberOfChords) {
            individualFields[i].disabled = true;
        }
    }
}


//Progresion buttons and fields
var fieldSelected;
$('#Progresion .form-control').focus(function(e){
    fieldSelected = e;
})

$('#progresionModifiers .btn').click(function(e){
    console.log(e)
})
$('#progresionGrades .btn').click(function(e){
    console.log(e)
})
$('#progresionChordType .btn').click(function(e){
    console.log(e)
})
$('#progresionExtensions .btn').click(function(e){
    console.log(e)
})