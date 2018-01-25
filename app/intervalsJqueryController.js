//Deactivate unused buttons
function deactivateIntervalsButtons(parent, exercise) {
    $("#" + parent + " :input").prop("disabled", true);
    exercise.forEach(element => {
        $("#" + parent + " #" + element).prop("disabled", false);
    });
}

$('#Intervals .btn').click(function (e) {
    currentExercise.checkResponse(this.id)
})
// Response Buttons feedback
function correctIntervalButtonAnswer(parent, value) {
    $("#" + parent + " #" + value).addClass("btn-success");
}
function failIntervalButtonAnswer(parent, value) {
    $("#" + parent + " #" + value).addClass("btn-danger");
}



