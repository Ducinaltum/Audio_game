function goToExerciseSelector(){
    document.getElementById("mainMenuHeader").style.display = "none";
    document.getElementById("exerciseSelectorHeader").style.display = "block";
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("exerciseSelector").style.display = "block";
    document.getElementById("carouselEjercicios").style.marginTop = (document.getElementById("exerciseSelectorNav").offsetHeight) + "px";
    
}