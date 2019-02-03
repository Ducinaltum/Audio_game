var intervalsChartCtx = document.getElementById("intervalsChart").getContext('2d');
var intervalsChart  = new Chart(intervalsChartCtx, {
    type: 'bar',
    data: {
        labels: ["2m", "2M", "3m", "3M", "4J", "4A/5d", "5J", "6m", "6M", "7m", "7M", "8J",
     "9m", "9M", "10m", "10M", "11J", "11A/12d", "12J", "13m", "13M", "14m", "14M", "15J"],
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
});

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