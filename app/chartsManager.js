$('#intervalsPeriod .btn').click(function () {
    $('#intervalsPeriod .btn').removeClass('btn-primary').addClass('btn-default')
    $(this).addClass('btn-primary')
    intervalsCharts.initiate(this.id)
})
$('#progresionPeriod .btn').click(function () {
    $('#progresionPeriod .btn').removeClass('btn-primary').addClass('btn-default')
    $(this).addClass('btn-primary')
    progresionCharts.initiate(this.id)
})
$('#chordsPeriod .btn').click(function () {
    $('#chordsPeriod .btn').removeClass('btn-primary').addClass('btn-default')
    $(this).addClass('btn-primary')
    chordsCharts.initiate(this.id)
})
$('#showIntervalsStatistics').click(function () {
    if (intervalsCharts == undefined) startIntervalsChart();
})
$('#showChordsStatistics').click(function () {
    if (chordsCharts == undefined) startChordsChart();
})
$('#showProgresionStatistics').click(function () {
    if (chordsCharts == undefined) startProgresionChart();
})

var intervalsCharts = undefined;
var chordsCharts = undefined;
var progresionCharts = undefined;

function startIntervalsChart() {
    intervalsCharts = {
        values: loadChartValues("intervals", {
            simple: {
                label: Array(12).fill(0).map(function (val, i) { return intervalsInHalfStep[i + 1] }),
                positive: Array(12).fill(0),
                negative: Array(12).fill(0)
            },
            compound: {
                label: Array(12).fill(0).map(function (val, i) { return intervalsInHalfStep[i + 13] }),
                positive: Array(12).fill(0),
                negative: Array(12).fill(0),
                show: false
            }
        }),
        initiate: function (time = "week") {
            intervalsCharts.charts.simple.chart.data.datasets = [
                {
                    label: 'Correctas',
                    data: intervalsCharts.values[time + "Values"].simple.positive,
                    backgroundColor: "green"
                },
                {
                    label: 'Incorrectas',
                    data: intervalsCharts.values[time + "Values"].simple.negative,
                    backgroundColor: 'red'
                }
            ];
            intervalsCharts.charts.simple.chart.update();
            if (intervalsCharts.charts.compound != undefined) {
                intervalsCharts.charts.compound.chart.data.datasets = [
                    {
                        label: 'Correctas',
                        data: intervalsCharts.values[time + "Values"].compound.positive,
                        backgroundColor: "green"
                    },
                    {
                        label: 'Incorrectas',
                        data: intervalsCharts.values[time + "Values"].compound.negative,
                        backgroundColor: 'red'
                    }
                ];
                intervalsCharts.charts.compound.chart.update();
            }
        },
        charts: {
            simple: undefined,
            compound: undefined
        }
    }
    intervalsCharts.charts.simple = createIntervalChart("Simple")
    intervalsCharts.charts.simple.chart.data.labels = intervalsCharts.values.weekValues.simple.label
    if (intervalsCharts.values.historicValues.compound.show) {
        intervalsCharts.charts.compound = createIntervalChart("Compound")
        intervalsCharts.charts.compound.chart.data.labels = intervalsCharts.values.weekValues.compound.label
    }
    intervalsCharts.initiate()
}

function createIntervalChart(kind) {
    return {
        chart: new Chart(document.getElementById("intervals" + kind + "Chart").getContext('2d'),
            {
                type: 'bar',
                data: {
                    datasets: [
                        {
                            label: 'Correctas',
                            backgroundColor: "green"
                        },
                        {
                            label: 'Incorrectas',
                            backgroundColor: 'red'
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: true,
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            })
    }
}

function startChordsChart() {
    chordsCharts = {
        values: loadChartValues("chords", {
            major: {
                positive: 0,
                negative: 0,
                '7': {
                    positive: 0,
                    negative: 0,
                    'b9': {
                        positive: 0,
                        negative: 0,
                    },
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '#9': {
                        positive: 0,
                        negative: 0,
                    },
                    '#11': {
                        positive: 0,
                        negative: 0,
                    },
                    '13': {
                        positive: 0,
                        negative: 0,
                    },
                },
                'majj7': {
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '#11': {
                        positive: 0,
                        negative: 0,
                    },
                    '13': {
                        positive: 0,
                        negative: 0,
                    },
                }
            },
            minor: {
                positive: 0,
                negative: 0,
                '7': {
                    positive: 0,
                    negative: 0,
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '11': {
                        positive: 0,
                        negative: 0,
                    },
                    '13': {
                        positive: 0,
                        negative: 0,
                    },
                },
                'majj7': {
                    positive: 0,
                    negative: 0,
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '11': {
                        positive: 0,
                        negative: 0,
                    },
                    '13': {
                        positive: 0,
                        negative: 0,
                    },
                }
            },
            dim: {
                positive: 0,
                negative: 0,
                'b7': {
                    positive: 0,
                    negative: 0,
                },
                '7': {
                    positive: 0,
                    negative: 0,
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '11': {
                        positive: 0,
                        negative: 0,
                    },
                }
            },
            aug: {
                positive: 0,
                negative: 0,
                '7': {
                    positive: 0,
                    negative: 0,
                    'b9': {
                        positive: 0,
                        negative: 0,
                    },
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '#9': {
                        positive: 0,
                        negative: 0,
                    },
                    '#11': {
                        positive: 0,
                        negative: 0,
                    },
                    '13': {
                        positive: 0,
                        negative: 0,
                    },
                },
                'majj7': {
                    positive: 0,
                    negative: 0,
                    '9': {
                        positive: 0,
                        negative: 0,
                    },
                    '#11': {
                        positive: 0,
                        negative: 0,
                    },
                    '13': {
                        positive: 0,
                        negative: 0,
                    },
                }
            },
        }),
        initiate: function (time = "week") {
            console.log(chordsCharts)
            var selectedDataset = chordsCharts.values[time + "Values"]
            console.log(selectedDataset)
            if (selectedDataset != undefined) {
                var triadDatasets = []
                var sevenDatasets = []
                var extendDatasets = []
                Object.keys(selectedDataset).forEach(function (k) {
                    const chord = selectedDataset[k]
                    var cnvs = document.createElement('canvas');
                    cnvs.id = k + "Chart";
                    cnvs.width = 50;
                    cnvs.height = 50;
                    cnvs.style.zIndex = 8;
                    cnvs.style.position = "absolute"
                    var ctx = cnvs.getContext("2d");
                    ctx.fillStyle = "rgba(255, 0, 0, 1)";
                    ctx.fillRect(100, 100, 200, 200);
                    var triadicChordChart = new Chart(cnvs.getContext('2d'),
                        {
                            type: 'doughnut',
                            data: {
                                datasets: [{
                                    labels: ["correctas", "incorrectas"],
                                    data: [chord.positive, chord.negative],
                                    backgroundColor: [
                                        "green",
                                        "red",
                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255,99,132,1)'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero:true
                                        }
                                    }]
                                }
                            }
                        })
                    triadDatasets.push(triadicChordChart)
                })
                /*
                chordsCharts.charts.base.chart.data.datasets.forEach(function (e, index) {
                    e.pointStyle = triadDatasets[index].canvas
                    triadDatasets[index].canvas.width = 100
                    triadDatasets[index].canvas.height = 100
                    triadDatasets[index].canvas.maxWidth = 100
                    triadDatasets[index].canvas.maxHeight = 100
                    triadDatasets[index].canvas.style.left = index*50
                    triadDatasets[index].canvas.style.top = index*50
                    document.getElementById("statsChords").appendChild(triadDatasets[index].canvas)
                    //document.getElementById("baseChordsChart").appendChild(triadDatasets[index].canvas)
                })
                chordsCharts.charts.base.chart.update()*/
            }
        },
        charts: {
            base: undefined,
            seven: undefined,
            extended: {
                major: undefined,
                minor: undefined,
                dim: undefined,
                aug: undefined
            }
        }
    }
    //chordsCharts.charts.base = createChordsChart("base")
    chordsCharts.initiate();
}

function createSingleChordKindChart(values, size = 20) {

}

function createChordsChart(kind) {
    return {
        chart: new Chart(document.getElementById(kind + "ChordsChart").getContext('2d'),
            {
                type: 'bubble',
                data: {
                    labels: "Africa",
                    datasets: [
                        //DATASETS TRÍADAS
                        {
                            //label: ["Mayor"],
                            //pointStyle: "rect",
                            backgroundColor: "rgba(255,221,50,0.2)",
                            borderColor: "rgba(255,221,50,1)",
                            data: [{
                                x: 0,
                                y: 0,
                                r: 40
                            }]
                        }, {
                            //label: ["Menor"],
                            //pointStyle: triadicChordChart,
                            backgroundColor: "rgba(60,186,159,0.2)",
                            borderColor: "rgba(60,186,159,1)",
                            data: [{
                                x: 10,
                                y: 10,
                                r: 40
                            }]
                        }, {
                            //label: ["Disminuido"],
                            // pointStyle: pointCanvas,
                            backgroundColor: "rgba(0,0,0,0.2)",
                            borderColor: "#000",
                            data: [{
                                x: 20,
                                y: 10,
                                r: 40
                            }]
                        }, {
                            //label: ["Aumentado"],
                            // pointStyle: pointCanvas,
                            backgroundColor: "rgba(193,46,12,0.2)",
                            borderColor: "rgba(193,46,12,1)",
                            data: [{
                                x: 30,
                                y: 0,
                                r: 40
                            }]
                        }
                        //DATASETS 7°
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Predicted world population (millions) in 2050'
                    }, scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Happiness"
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Tipos"
                            }
                        }]
                    }
                }
            })
    }
}

function loadChartValues(kind, structure) {
    var storageRoot = user.statistics
    var today = new Date()
    var week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var month = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    var weekValues;
    var monthValues;
    var historicValues;
    var datesStored = Object.keys(storageRoot).filter(date => storageRoot[date][kind]);
    week = formatDates(week)
    month = formatDates(month)
    datesStored.sort(function (a, b) { return b - a });
    historicValues = structure
    datesStored.forEach(function (day, index) {
        console.log(day)
        console.log(week)
        if (day < week && index > 0) {
            if (weekValues == undefined) {
                weekValues = clone(historicValues)
            }
        }
        if (day < month && index > 0) {
            if (monthValues == undefined) {
                monthValues = clone(historicValues)
            }
        }
        historicValues = loadValues[kind](storageRoot[day][kind], historicValues)
    })
    return { weekValues, monthValues, historicValues }
}

var loadValues = {
    intervals: function (root, obj) {
        var chart = obj.simple
        var offset = 1
        Object.keys(root).forEach(function (key) {
            if (key > 12) {
                chart = obj.compound
                chart.show = true
                offset = 13
            }
            chart.positive[key - offset] += root[key].correct;
            chart.negative[key - offset] += root[key].times - root[key].correct;
        })

        return obj
    },
    chords: function (root, obj) {
        Object.keys(root).forEach(function (chordKind) {
            var brokenChord = chordKind.split("/")
            if (brokenChord.length == 1) {
                obj[brokenChord[0]].positive = root[chordKind].correct
                obj[brokenChord[0]].negative = root[chordKind].times - root[chordKind].correct
            }
            else if (brokenChord.length == 2) {
                obj[brokenChord[0]][brokenChord[1]].positive = root[chordKind].correct
                obj[brokenChord[0]][brokenChord[1]].negative = root[chordKind].times - root[chordKind].correct
            }
            else if (brokenChord.length == 3) {
                obj[brokenChord[0]][brokenChord[1]][brokenChord[2]].positive = root[chordKind].correct
                obj[brokenChord[0]][brokenChord[1]][brokenChord[2]].negative = root[chordKind].times - root[chordKind].correct
            }
        })

        return obj
    },
    progresion: function (root, obj) {
        if (obj == undefined) obj = clone(root)
        else obj = mergeObjectsAdd(root, obj)
        return obj
    }
}

function startProgresionChart() {
    progresionCharts = {
        values: loadChartValues("progresion"),
        initiate: function (time = "week") {
            Object.keys(progresionCharts.values.historicValues).forEach(function (key) {
                const ch = progresionCharts.values.historicValues[key]
                var mode = key != "major" && key != "minor" ? "modal" : key
                var valuesKeys = Object.keys(ch)
                valuesKeys.sort((a, b) => progresionGradeOrderForCharts.indexOf(a) - progresionGradeOrderForCharts.indexOf(b))
                var positiveData = valuesKeys.map(function (e) {
                    valueFromTime = progresionCharts.values[time + "Values"][key][e]
                    if (valueFromTime != undefined) {
                        return valueFromTime.correct
                    }
                    return 0
                })
                var negativeData = valuesKeys.map(function (e) {
                    valueFromTime = progresionCharts.values[time + "Values"][key][e]
                    if (valueFromTime != undefined) {
                        return valueFromTime.times - valueFromTime.correct
                    }
                    return 0
                })
                progresionCharts.charts[mode].chart.data.labels = valuesKeys.map(key => progresionModeGradesForCharts[key]);
                progresionCharts.charts[mode].chart.data.datasets = [
                    {
                        label: 'Correctas',
                        data: positiveData,
                        backgroundColor: "green"
                    },
                    {
                        label: 'Incorrectas',
                        data: negativeData,
                        backgroundColor: 'red'
                    }
                ];
                progresionCharts.charts[mode].chart.update();
            })
        },
        charts: {
            major: undefined,
            minor: undefined,
            modal: undefined
        }
    }
    if (progresionCharts.values.historicValues.major != undefined) progresionCharts.charts.major = createProgresionChart("major")
    if (progresionCharts.values.historicValues.minor != undefined) progresionCharts.charts.minor = createProgresionChart("minor")
    if (Object.keys(progresionCharts.values.historicValues).length > 2) progresionCharts.charts.modal = createProgresionChart("modal")
    progresionCharts.initiate()
}

function createProgresionChart(kind) {
    return {
        chart: new Chart(document.getElementById(kind + "ProgresionChart").getContext('2d'), {
            type: 'bar',
            data: {
                datasets: [
                    {
                        label: 'Correctas',
                        backgroundColor: "green"
                    },
                    {
                        label: 'Incorrectas',
                        backgroundColor: 'red'
                    }
                ]
            },
            options: {
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        })
    }
}