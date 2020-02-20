var user = {
    id: "",
    statics:{},
    gameProgres:{}
}

function SaveManager(ex) {
    typeofExercice = ex
    this.storeValues = function (obj) {
        save = {};
        save[typeofExercice] = obj;
        date = setDate();
        savePoint = user.statics
        if (!(date in savePoint)) {
            savePoint[date] = save;
        } else {
            savePoint[date] = mergeObjectsAdd(savePoint[date], save)
        }
    }
    setDate = function () {
        var d = new Date();
        d = formatDates(d)
        return d;
    }


    this.flushUser = function(){
        const save = JSON.stringify(user);
        localStorage.setItem("user", save);
    }
}

$('#document').ready(function () {
    if (localStorage.length == 0) {
        const save = JSON.stringify(user);
        localStorage.setItem("user", save);
    } else {
        userValues = localStorage.getItem("user")
        user = JSON.parse(userValues);
    }
})

var winText = {
    primary: '¡Has superado este nivel!',
}

var looseText = {
    primary: 'No has logrado superar este nivel',
    secondary: 'Puedes intentarlo de nuevo'
}


