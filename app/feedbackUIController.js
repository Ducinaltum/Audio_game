$('#play-pause').click(function () {
    if ($('#playButton').hasClass('hidden')) {
        setStop();
        stop();
    }
    else {
        setPlaying();
        playSequence();
    }
})
function setPlaying() {
    $('#playButton').addClass('hidden');
    $('#stopButton').removeClass('hidden');
}
function setStop() {
    $('#stopButton').addClass('hidden');
    $('#playButton').removeClass('hidden');
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