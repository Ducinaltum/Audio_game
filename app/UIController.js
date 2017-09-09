function startIntervals(){            
    intervals = new simpleIntervals();
    intervals.selectInterval();    
}

function responseIntervals(e) {
    if (e == Math.abs(intervals.getInterval())) {
        intervals.selectInterval();
    }
}