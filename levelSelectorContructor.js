function ExerciseLevel(ex) {
    this.exercise = ex;
    this.icon;
    this.modalBlock;

    this.exerciseClick = function (e) {
        const manager = icons.levels[e.target.id]
        const exerciseDiv = document.getElementById("modalExercises")
        while (exerciseDiv.firstChild) {
            exerciseDiv.removeChild(exerciseDiv.firstChild);
        }
        exerciseDiv.appendChild(manager.modalBlock);
        $('#selectionOfExercise').modal('show');
    }

    this.start = function () {
        this.icon = document.getElementById(this.exercise.code);
        this.icon.addEventListener("click", this.exerciseClick, false);
        this.modalBlock = createModalBlock(this.exercise)
    }
}

function LessonLevel(ex) {
    this.exercise = ex;
    this.icon;

    this.lessonClick = function (e) {
        console.log("HI")
        const manager = icons.levels[e.target.code]

    }

    this.start = function (node) {
        this.icon = node.querySelector("#"+this.exercise.code);
        this.icon.addEventListener("click", this.lessonClick, false);
    }
}

//Todos los árboles empiezan con mode
//Podría sacar las áreas allí donde no hacen falta y crear el "row" directamente en la zona
var nodeMaker = {
    mode: function (element) {
        var node = document.createElement("div");
        node.className = element.class;
        node.interval = false;
        node.id = element.title
        node.innerHTML = `<br><h1 style="text-align: center">` + element.title + `</h1><br>`
        return node;
    },
    world: function (element) {
        var node = document.createElement("div");
        node.id = element.title
        node.innerHTML = `<h4 style="text-align: center">` + element.title + `</h4><br>`
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
        node.innerHTML = `<br><h4">` + element.title + `</h4>`
        return node;
    },
    group: function (element) {
        var node = document.createElement("div");
        var frame = `<svg id=svg` + element.code + ` width="200" height="200" shape-rendering="antialiasing">` + levelIcon(element.code) + `</svg>`
        node.id = element.code
        node.innerHTML = frame;
        icons.levels[element.code] = new ExerciseLevel(element)
        return node;
    },
    level: function (element) {
        var node = document.createElement("div");
        var frame = `<svg id=svg` + element.code + ` width="200" height="200" shape-rendering="antialiasing">` + levelIcon(element.code) + `</svg>`
        node.id = element.code
        node.innerHTML = frame;
        icons.levels[element.code] = new ExerciseLevel(element)
        return node;
    },
    badge: function (element, siblings, father) {
        if (icons.badges[father.id] == undefined) icons.badges[father.id] = {};
        icons.badges[father.id][element.code] = new LessonLevel(element)
        //return node;
    }
}

var gamesTrees = {
    components: {
        1: intervalsLevelsTree,
        //2: chordsLevelsTree,
        //3: progresionLevelsTree
    }
}

var icons = {
    levels: {},
    badges: {}
};
const parent = document.getElementById('gameSelector')
var objs = generateSelectionInterface(gamesTrees, parent);

Object.keys(icons.levels).forEach(function (icon) {
    icons.levels[icon].start()
})

function generateSelectionInterface(layer, father, brothers, codeName) {
    var element = Object.keys(layer.components).map(function (e) {
        let actualLayer = layer.components[e];
        if (codeName != undefined) actualLayer.code = codeName + actualLayer.code
        let htmlElement = nodeMaker[actualLayer.kind](actualLayer, brothers, father)
        let siblings = Object.keys(actualLayer.components).length
        generateSelectionInterface(actualLayer, htmlElement, siblings, actualLayer.code)
        return htmlElement;
    })
    if (element != undefined && layer.kind != "group") {
        element.forEach(function (e) {
            if (e != undefined) father.appendChild(e);
        })
    }
    return father;
}

function createModalBlock(exercise) {
    var node = document.createElement("div");
    node.id = "modal" + exercise.code;
    node.style.textAlign = "center";
    if (exercise.kind == "level") {
        node.innerHTML = `<svg id=svg` + exercise.code + ` width="200" height="200" shape-rendering="antialiasing">` + levelIcon(exercise.code) + `</svg>`;
    }
    else if (exercise.kind == "group") {
        const elements = icons.badges[exercise.code]
        var element = ""
        Object.keys(elements).forEach(function (e) {
            element += `<svg id=svg` + exercise.code + ` width="200" height="200" shape-rendering="antialiasing">`
                + levelIcon(elements[e].exercise.code) + `</svg>`;
        })
        /*var element = "";
        for (let i = 0; i < 3; i++) {
            element += `<svg id=svg` + exercise.id + ` width="200" height="200" shape-rendering="antialiasing">` + levelIcon(exercise.id + i) + `</svg>`;
        }*/
        node.innerHTML = element;
        Object.keys(elements).forEach(function (e) {
            levelIcon(elements[e].start(node))
        })
    }
    console.log(node)
    return node;
}


/*
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