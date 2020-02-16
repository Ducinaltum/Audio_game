var user = {
    id: "",
    statics:{},
    gameProgres:{

    }
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
        d = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate()
        return d;
    }
    mergeObjectsAdd = function (firstObject, secondObject) {
        var result = $.extend(true, {}, firstObject, secondObject);
        for (var k in result) {
            if ("object" === typeof result[k]) {
                firstObject[k] = firstObject[k] || {};
                secondObject[k] = secondObject[k] || {};
                result[k] = mergeObjectsAdd(firstObject[k], secondObject[k]);
            }
            else {
                firstObject[k] = firstObject[k] || 0;
                secondObject[k] = secondObject[k] || 0;
                result[k] = ("number" === typeof firstObject[k] && "number" === typeof secondObject[k]) ? (firstObject[k] + secondObject[k]) : result[k];
            }
        }
        return result;
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