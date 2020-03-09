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
    selectedChordsValues.dataSelection = chordsCharts.values[this.id + "Values"]
})
$('#showIntervalsStatistics').click(function () {
    if (intervalsCharts == undefined) startIntervalsChart();
})
$('#showChordsStatistics').click(function () {
    if (chordsCharts == undefined) startChordsChart();
})
$('#showProgresionStatistics').click(function () {
    if (progresionCharts == undefined) startProgresionChart();
})

var intervalsCharts = undefined;
var chordsCharts = undefined;
var progresionCharts = undefined;
var selectedChordsValues = {
    btnSelections: {
        base: undefined,
        seven: undefined,
        extention: undefined
    },
    dataSelection: undefined
};

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
        initiate: function (time = "historic") {
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
                    },
                    plugins: {
                        labels: {
                            render: function () { }
                        }
                    }
                }
            })
    }
}

function startChordsChart() {
    chordsCharts = {
        values: loadChartValues("chords", {
            major: {
                values: {
                    positive: 0,
                    negative: 0,
                },
                children: {
                    '7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            'b9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '#9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '#11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '13': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            }
                        }
                    },
                    'majj7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '#11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '13': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            }
                        }
                    }
                }
            },
            minor: {
                values: {
                    positive: 0,
                    negative: 0,
                },
                children: {
                    '7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '13': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                        }
                    },
                    'majj7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '13': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                        }
                    }
                }
            },
            dim: {
                values: {
                    positive: 0,
                    negative: 0,
                },
                children: {
                    'b7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                    },
                    '7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                        }
                    }
                }
            },
            aug: {
                values: {
                    positive: 0,
                    negative: 0,
                },
                children: {
                    '7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            'b9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '#9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '#11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            },
                            '13': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                },
                            }
                        }
                    },
                    'majj7': {
                        values: {
                            positive: 0,
                            negative: 0,
                        },
                        children: {
                            '9': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                }
                            },
                            '#11': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                }
                            },
                            '13': {
                                values: {
                                    positive: 0,
                                    negative: 0,
                                }
                            }
                        }
                    }
                }
            }
        }),
        initiate: function (time = "historic") {
            selectedChordsValues.dataSelection = chordsCharts.values[time + "Values"]
        },
        charts: {
            chart: undefined
        }
    }
    chordsCharts.initiate()
    chordsCharts.charts.chart = createChordsChart("major")
}
function createChordsChart(kind) {
    return {
        chart: new Chart(document.getElementById(kind + 'Chart'),
            {
                type: 'doughnut',
                data: {
                    labels: [
                        'Mayor',
                        'Menor',
                        'Disminuido',
                        'Aumentado',
                    ],
                    datasets: [
                        {
                            data: [25, 25, 25, 25],
                            backgroundColor: [
                                'grey',
                                'grey',
                                'grey',
                                'grey',
                            ],
                        },
                    ],
                },
                options: {
                    cutoutPercentage: 10,
                    rotation: Math.PI * 1.3,
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        enabled: false
                    },
                    onClick: chartClickEvent,
                    plugins: {
                        labels: {
                            render: 'label',
                            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                            fontColor: 'black',
                            fontSize: 20,
                            fontStyle: 'bold',
                            showZero: false,
                            arc: true,
                        },
                        datalabels: {
                            formatter: function (value, context) {
                                if (value == 0) {
                                    return ''
                                }
                                return context.chart.data.labels[context.dataIndex];
                            },
                            color: 'black',
                            font: {
                                weight: 'bold'
                            }
                        }

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
                obj[brokenChord[0]].values.positive = root[chordKind].correct
                obj[brokenChord[0]].values.negative = root[chordKind].times - root[chordKind].correct
            }
            else if (brokenChord.length == 2) {
                obj[brokenChord[0]].children[brokenChord[1]].values.positive = root[chordKind].correct
                obj[brokenChord[0]].children[brokenChord[1]].values.negative = root[chordKind].times - root[chordKind].correct
            }
            else if (brokenChord.length == 3) {
                obj[brokenChord[0]].children[brokenChord[1]].children[brokenChord[2]].values.positive = root[chordKind].correct
                obj[brokenChord[0]].children[brokenChord[1]].children[brokenChord[2]].values.negative = root[chordKind].times - root[chordKind].correct
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
    console.log("Hi")
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
                },
                plugins: {
                    labels: {
                        render: function () { }
                    }
                }
            }
        })
    }
}


const hasSelectedLabels = ['Correctas', 'Incorrectas']
const hasSelectedColors = ['green', 'red']

function setValuesWithNameOffset(positive, negative) {
    const offsetPerc = 0.2
    var name = ((positive + negative) / (1 - offsetPerc)) - positive - negative
    return [name, positive, negative]
}

function ocuppySpace(elements, value) {
    return Array(Object.keys(elements).length).fill(value);
}

function setChartColorSpace(elements) {
    var arr = []
    Object.keys(elements).forEach(function (key) {
        if (elements[key].values.positive != 0 || elements[key].values.negative != 0) {
            arr.push('dimgray')
        }
        else {
            arr.push('darkgray')
        }
    })
    return arr
}

var showInChart = {
    base: {
        isSelected: false,
        data: undefined
    },
    seven: {
        isSelected: false,
        data: undefined
    },
    extention: {
        isSelected: false,
        data: undefined
    }
}

function chartClickEvent(event, array) {
    //Este valor indica cual de los aros fue clickeado
    if (!array[0]) return
    const circle = array[0]._datasetIndex
    //Este valor indica cual de las porciones del aro fue tocada
    const valIndex = array[0]._index - (circle * 2)
    if (circle == 0 && !showInChart.base.isSelected) {
        $("#statsBase").html(formatModeToDisplay[updateChartData(showInChart.base, selectedChordsValues.dataSelection, valIndex, circle)])
    }
    else if (circle == 1 && !showInChart.seven.isSelected) {
        $("#statsseven").html(updateChartData(showInChart.seven, showInChart.base.data, valIndex, circle))
    }
    else if (circle == 2 && !showInChart.extention.isSelected) {
        $("#statsExtensions").html(updateChartData(showInChart.extention, showInChart.seven.data, valIndex, circle))
    }
    chordsCharts.charts.chart.chart.update();

}

function updateChartData(pointedData, source, index, circle) {
    //Hay que restarle circle por que mágicamente agrega un valor por ciclo
    var key = Object.keys(source)[index - circle]
    if (source[key].values.positive != 0 || source[key].values.negative != 0) {
        console.log(key)
        //Etiquetas actual
        var labels = (function () {
            let arr = chordsCharts.charts.chart.chart.data.labels.slice(0, chordsCharts.charts.chart.chart.data.labels.length - Object.keys(source).length)
            let kind= circle == 0? formatModeToDisplay[key]: key;
            arr = arr.concat([formatModeToDisplay[key]|| key, 'Correctas', 'Incorrectas']);
            console.log(arr)
            return arr;
        })()
            .concat((function () {
                let val = source[key].hasOwnProperty('children') ? Object.keys(source[key].children) : [];
                return val
            }()))
        //Valores actual
        var previousData = (function () {
            var arr = [];
            for (let c = 0; c < circle; c++) {
                arr = arr.concat([0, 0, 0]);
            }
            return arr;
        })().concat(setValuesWithNameOffset(source[key].values.positive, source[key].values.negative))
        //console.log(previousData)
        //Colores actual y siguiente
        var colours = (function () {
            var arr = [];
            for (let c = -1; c < circle; c++) {
                arr = arr.concat(['grey', 'green', 'red']);
            }
            return arr;
        })().concat((function () {
            let val = source[key].hasOwnProperty('children') ? setChartColorSpace(source[key].children, 'grey') : [];
            return val
        }()))
        //console.log(colours)
        pointedData.isSelected = true
        pointedData.data = source[key].children
        chordsCharts.charts.chart.chart.data.labels = labels
        chordsCharts.charts.chart.chart.data.datasets[circle] = {
            data: previousData,
            backgroundColor: colours
        }
        if (source[key].hasOwnProperty('children')) {
            chordsCharts.charts.chart.chart.data.datasets[circle + 1] = {
                data: Array(previousData.length).fill(0).concat(ocuppySpace(source[key].children, 1)),
                backgroundColor: colours
            }
        }
        return key;
    }
    return '&nbsp';
}

$('#statsClear').click(function () {
    $("#statsBase").html('&nbsp')
    $("#statsseven").html('&nbsp')
    $("#statsExtensions").html('&nbsp')
    Object.keys(showInChart).forEach(function (key) {
        showInChart[key].isSelected = false;
        showInChart[key].data = undefined;
    })
    chordsCharts.charts.chart.chart.data.labels = Object.keys(selectedChordsValues.dataSelection).map(function(e){
        return formatModeToDisplay[e]||e})
    chordsCharts.charts.chart.chart.data.datasets = [
        {
            data: ocuppySpace(selectedChordsValues.dataSelection, 1),
            backgroundColor: setChartColorSpace(selectedChordsValues.dataSelection, 'grey')
        }
    ]
    chordsCharts.charts.chart.chart.update();
})


$("#stats .panel").on("transitionend", function (event) {
    console.log("end of the animation");
    this.scrollIntoView(true);
})