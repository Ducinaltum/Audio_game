function ExerciseLevel(ex) {
    const exercise = ex;
    var icon;
    var modalBlock;
    this.start = function () {
        icon = document.getElementById(exercise.code);
        icon.addEventListener("click", exerciseClick, false);
        modalBlock = createModalBlock();
    }
    const exerciseClick = function (e) {
        const exerciseDiv = document.getElementById("modalExercises")
        while (exerciseDiv.firstChild) {
            exerciseDiv.removeChild(exerciseDiv.firstChild);
        }
        exerciseDiv.appendChild(modalBlock);
        $('#selectionOfExercise').modal('show');
    }
    const createModalBlock = function () {
        const elements = icons.badges[exercise.code]
        var node = document.createElement("div");
        node.id = "modal" + exercise.code;
        node.style.textAlign = "center";
        Object.keys(elements).forEach(function (e) {
            elements[e].start(node)
        })
        return node;
    }
}

function LessonLevel(ex) {
    const exercise = ex;
    var icon;
    const lessonClick = function (e) {
        const exerciseParameters = e.target.id.split("_")
        var exerciseBuilder;
        switch (exerciseParameters[0]) {
            case "Int":
                exerciseBuilder = intervalsBuilder;
                break;
            case "Cho":
                exerciseBuilder = chordsBuilder;
                break;
            case "Prog":
                exerciseBuilder = progresionBuilder;
                break;
        }
        goToExercise(exerciseBuilder(exerciseParameters))
    };

    this.start = function (node) {
        //if(user[exercise.code] == undefined) user[exercise.code] = 0;
        const element = `<svg id=svg` + exercise.code + ` width="200" height="200" shape-rendering="antialiasing">`
            + levelIcon(exercise.code) + `</svg>`;
        node.insertAdjacentHTML('beforeend', element)
        icon = node.querySelector("#" + exercise.code);
        icon.addEventListener("click", lessonClick, false);
    }
}

//Todos los árboles empiezan con mode
//Podría sacar las áreas allí donde no hacen falta y crear el "row" directamente en la zona
var nodeMaker = {
    mode: function (element) {
        var node = document.createElement("div");
        node.className = element.class;
        node.interval = false;
        node.id = element.title;
        node.style.margin = "2%"
        node.style.background = colors[element.color];
        node.style.borderRadius = "25px"
        node.innerHTML = `<br><h1 style="text-align: center">` + element.title + `</h1>`;
        return node;
    },
    world: function (element) {
        var node = document.createElement("div");
        node.id = element.title;
        node.style.background = "#ffffff";
        node.style.margin = "4%"
        node.style.borderRadius = "25px"
        node.innerHTML = `<br><h2 style="text-align: center">` + element.title + `</h2><br>`
        return node;
    },
    area: function (element) {
        var node = document.createElement("div");
        node.id = element.title
        node.className = "row"
        return node
    },
    zone: function (element, siblings) {
        var node = document.createElement("div");
        node.id = element.title
        node.className = "col-xs-" + Math.floor(12 / siblings)
        node.style.textAlign = "center"
        node.innerText = element.title
        return node;
    },
    exercise: function (element) {
        var node = document.createElement("div");
        node.id = element.title
        node.innerHTML = `<br><h4>` + element.title + `</h4>`
        return node;
    },
    group: function (element) {
        var node = document.createElement("div");
        var frame = `<svg id=svg` + element.code + ` width="200" height="200" shape-rendering="antialiasing">` + levelIcon(element.code) + `</svg>`
        node.id = "div" + element.code
        node.innerHTML = frame;
        icons.levels[element.code] = new ExerciseLevel(element)
        return node;
    },
    level: function (element) {
        var node = document.createElement("div");
        var frame = `<svg id=svg` + element.code + ` width="200" height="200" shape-rendering="antialiasing">` + levelIcon(element.code) + `</svg>`
        node.id = "div" + element.code
        node.innerHTML = frame;
        icons.levels[element.code] = new ExerciseLevel(element)
        return node;
    },
    badge: function (element, siblings, father) {
        var name = father.id.replace("div", "")
        if (icons.badges[name] == undefined) icons.badges[name] = {};
        icons.badges[name][element.code] = new LessonLevel(element)
    }
}

var gamesTrees = {
    components: {
        1: chordsLevelsTree,
        2: intervalsLevelsTree,
        3: progresionLevelsTree
    }
}

var icons = {
    levels: {},
    badges: {}
};
const parent = document.getElementById('gameSelector')
var userPointer = user.gameProgres
var objs = generateSelectionInterface(gamesTrees, parent, userPointer);


Object.keys(icons.levels).forEach(function (icon) {
    icons.levels[icon].start()
})

function generateSelectionInterface(layer, father, pointer, brothers, codeName) {
    var element = Object.keys(layer.components).map(function (e) {
        let actualLayer = layer.components[e];
        sendPointer = buildSaverObject(pointer, actualLayer.code.replace("_",""))
        if (codeName != undefined) actualLayer.code = codeName + actualLayer.code
        let htmlElement = nodeMaker[actualLayer.kind](actualLayer, brothers, father)
        if (actualLayer.components != undefined) {
            let siblings = Object.keys(actualLayer.components).length
            generateSelectionInterface(actualLayer, htmlElement, sendPointer, siblings, actualLayer.code)
        }
        return htmlElement;
    })
    if (element != undefined && layer.kind != "group") {
        if (layer.kind == "mode") element.push(document.createElement("br"))
        element.forEach(function (e) {
            if (e != undefined) father.appendChild(e);
        })
    }
    return father;
}

function buildSaverObject(pointer, newname){
    if(newname!= "") {
        pointer[newname] = pointer[newname] || {}
        return pointer[newname]
    }
    else return pointer
}


/*
code:"Int",

code:"_MayChord",
code:"_MayScale",
code:"_FullScale",
code:"_Full",
code:"_Comp",
code:"_All",

code:"",

code:"_From",
code:"_To",
code:"_FromTo",
code:"_FromToAny",

code:"_Fix",
code:"_Any",
code:"_Rand",
code:"_AnyInScale",

code:"_Exam",
code:"_Lesson",
code:"_Show",

code:"_Asc",
code:"_Desc",
code:"_Harm",
code:"_Rand",

*/



/*
code:"Chord",

code:"_Triad",
code:"_Seventh",
code:"_Extended",

code:"_Closed",
code:"_Open",

code:"_Major",
code:"_Minor",
code:"_Dim",
code:"_Aug",
code:"_Perfect",
code:"_Imperfect",
code:"_All",

code:"_Exam",
code:"_Lesson",
code:"_Show",

code:"_Asc",
code:"_Desc",
code:"_Harm",
code:"_Rand",

*/

/*
code:"Prog",

code:"_Prin",
code:"_Sec",
code:"_MinorScales",
code:"_DomOnPrinc",
code:"_DomOnAll",
code:"_MajorModes",
code:"_MinorModes",
code:"_ModalMix",

code:"",

code:"_Major",
code:"_Minor",
code:"_Lid",
code:"_Mixol",
code:"_Dor",
code:"_Frig",
code:"_Aeo",
code:"_Loc",
code:"_MixMajMode",
code:"_MixMinMode",
code:"_Mix",


code:"_InC",
code:"_Rand",

code:"_Exam",
code:"_Lesson",
code:"_Show",

code:"_Four",
code:"_Eight",

*/

$("#levelSelectorBack").click(function(){
    $("#mainMenuHeader").show().prop('disabled', false); 
    $("#mainMenu").show().prop('disabled', false);
    $("#exerciseSelectorHeader").hide().prop('disabled', true);
    $("#exerciseSelector").hide().prop('disabled', true);
})