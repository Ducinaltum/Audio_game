//Progress bar


//Buttons

function answer(c, f){
    $("#" + c).addClass("btn-success");
    if(f == undefined){
        updateFeedback("¡Correcto!")
    }
    else {
        $("#" + f).addClass("btn-danger");
        updateFeedback("¡Inorrecto!")
    }
}

function deactivateButtons(parent, exercise){
    $("#" + parent + " :input").prop( "disabled", true );
    exercise.forEach(element => {
        $("#" + element).prop( "disabled", false);
    });    
}

function resetElements(parent){
    $("#" + parent + " :input:enabled").removeClass("btn-success")
    .removeClass("btn-danger")
    .blur();

    $("#feedbackText").html( "&nbsp" );
}

//Feedback Text
function updateFeedback(text){
    $("#feedbackText").html(text);
}