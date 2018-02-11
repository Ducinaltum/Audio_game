//Deactivate unused buttons
function deactivateIntervalsButtons(parent, exercise) {
    $("#play-pause").prop("disabled", false)
    $("#" + parent + " :input").prop("disabled", true);
    $("#" + parent + "KeyInput").prop("disabled", false);

    exercise.forEach(element => {
        $("#" + parent + " #" + element).prop("disabled", false);
    });
}

var selectedButtons = []

$('#Intervals .btn').click(function (e) {
    if (!$(this).hasClass('btn-primary')) {
        $(this).removeClass('btn-default')
            .addClass('btn-primary')
        selectedButtons.push(this.id)
        if (selectedButtons.length >= currentExercise.getNumberOfIntervals()) {
            $("#play-pause").prop("disabled", true)
            currentExercise.checkResponse(selectedButtons)
            selectedButtons = []
        }
    }
    else{
        $(this).removeClass('btn-primary')
            .addClass('btn-default')
        selectedButtons = selectedButtons.filter(function(element){
            element != this.id
        })
    }
})

// Response Buttons feedback
function correctIntervalButtonAnswer(parent, value) {
    $("#" + parent + " #" + value).addClass("btn-success");
}
function failIntervalButtonAnswer(parent, value) {
    $("#" + parent + " #" + value).addClass("btn-danger");
}