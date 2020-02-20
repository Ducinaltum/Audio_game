$('#intervalsPeriod .btn').click(function () {
    $('#intervalsPeriod .btn').removeClass('btn-primary').addClass('btn-default')
    $(this).addClass('btn-primary')
    intervalsCharts.initiate(this.id)
})
$('#progresionPeriod .btn').click(function () {
    $('#intervalsPeriod .btn').removeClass('btn-primary').addClass('btn-default')
    $(this).addClass('btn-primary')
    intervalsCharts.initiate(this.id)
})
$('#chordseriod .btn').click(function () {
    $('#intervalsPeriod .btn').removeClass('btn-primary').addClass('btn-default')
    $(this).addClass('btn-primary')
    intervalsCharts.initiate(this.id)
})
$('#showIntervalsStatistics').click(function () {
    if(intervalsCharts == undefined) startIntervalsChart();
})

var intervalsCharts = undefined;

function startIntervalsChart() {
    intervalsCharts = {
        values: loadChartIntervalsValues(),
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
        chart: new Chart(document.getElementById("intervals" + kind + "Chart").getContext('2d'), {
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

function loadChartIntervalsValues() {
    var storageRoot = user.statics
    var today = new Date()
    var week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var month = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    var weekValues;
    var monthValues;
    var historicValues;
    var datesStored = Object.keys(storageRoot);
    week = formatDates(week)
    month = formatDates(month)
    datesStored.sort(function (a, b) { return b - a });
    historicValues = {
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
    }
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
        loadDayValues(storageRoot[day]["Intervals"], historicValues)
    })
    return { weekValues, monthValues, historicValues }
}

function loadDayValues(root, obj) {
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
}
//loadChartIntervalsValues()
/*
var baseChordsChartCtx = document.getElementById("baseChordsChart").getContext('2d');
var baseChordsChart = new Chart(baseChordsChartCtx, {
    type: 'radar',
    data: {
        labels: ["Mayor", "Menor", "Aumentado", "Disminuido"],
        datasets: [{
            label: "Triadas",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70, 80],
        }],
    },
    options: {
        scale:{
            gridLines:{
                circular: true
            }
        }
    }
});
var sevenChordsChartCtx = document.getElementById("sevenChordsChart").getContext('2d');
var sevenChordsChart = new Chart(sevenChordsChartCtx, {
    type: 'radar',
    data: {
        labels: ["b7", "7", "majj7"],
        datasets: [{
            label: "Mayor",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70],
        },
        {
            label: "Menor",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70],
        },
        {
            label: "Disminuido",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70],
        },
        {
            label: "Aumentado",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70],
        }],
    },
    options: {
        scale:{
            gridLines:{
                circular: true
            }
        }
    }
});
*/
/*
var majorChordsChartCtx = document.getElementById("majorChordsChart").getContext('2d');
var majorChordsChart = new Chart(majorChordsChartCtx, {
    type: 'radar',
    data: data,
    options: options
});
var minorChordsChartCtx = document.getElementById("minorChordsChart").getContext('2d');
var minorChordsChart = new Chart(minorChordsChartCtx, {
    type: 'radar',
    data: data,
    options: options
});
var dimChordsChartCtx = document.getElementById("dimChordsChart").getContext('2d');
var dimChordsChart = new Chart(dimChordsChartCtx, {
    type: 'radar',
    data: data,
    options: options
});
var augChordsChartCtx = document.getElementById("augChordsChart").getContext('2d');
var augChordsChart = new Chart(augChordsChartCtx, {
    type: 'radar',
    data: data,
    options: options
});
*/
/*
var majorProgresionChartCtx = document.getElementById("majorProgresionChart").getContext('2d');
var majorProgresionChart  = new Chart(majorProgresionChartCtx, {
    type: 'bar',
    data: {
        labels: ["I", "II", "III", "IV", "V", "VI", "VII",
                "V/V", "VII/V", "V/IV","VII/IV","V/II", "VII/II", "V/VI","VII/VI",
                "IIM Lidio", "VIIm Lidio", "bVII Mixolidio","Vm Mixolidio"],
        datasets: [
            {
                label: 'Correctas',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: '#D6E9C6'
            },
            {
                label: 'Incorrectas',
                data: [13, 19, 3, 5, 2, 3],
                backgroundColor: '#EBCCD1'
            }
        ]
    },
    options: {
        maintainAspectRatio:true,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});

var minorProgresionChartCtx = document.getElementById("minorProgresionChart").getContext('2d');
var minorProgresionChart  = new Chart(minorProgresionChartCtx, {
    type: 'bar',
    data: {
        labels: ["I", "II", "III", "IV", "V", "VI", "VII",
                "IIm", "IIIA", "IVM", "#VI", "bVII",
                "V/V", "VII/V", "V/IV","VII/IV", "V/III", "V/VI","VII/VI", "V/bVII","VII/bVII",
                "VIIM Eolico", "Vm Eolico", "IVM Dórico", "IIm Dórico",
                "bII Frigio", "bVIIm Frigio", "bVM Locrio", "IIIm Locrio"],
        datasets: [
            {
                label: 'Correctas',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: '#D6E9C6'
            },
            {
                label: 'Incorrectas',
                data: [13, 19, 3, 5, 2, 3],
                backgroundColor: '#EBCCD1'
            }
        ]
    },
    options: {
        maintainAspectRatio:true,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
*/

