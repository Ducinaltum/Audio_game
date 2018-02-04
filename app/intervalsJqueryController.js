//Deactivate unused buttons
function deactivateIntervalsButtons(parent, exercise) {
    $("#play-pause").prop("disabled", false)
    $("#" + parent + " :input").prop("disabled", true);
    $("#" + parent + "KeyInput").prop("disabled", false);

    exercise.forEach(element => {
        $("#" + parent + " #" + element).prop("disabled", false);
    });
}

$('#Intervals .btn').click(function (e) {
    $("#play-pause").prop("disabled", true)
    currentExercise.checkResponse(this.id)
})
// Response Buttons feedback
function correctIntervalButtonAnswer(parent, value) {
    $("#" + parent + " #" + value).addClass("btn-success");
}
function failIntervalButtonAnswer(parent, value) {
    $("#" + parent + " #" + value).addClass("btn-danger");
}