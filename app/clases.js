function Note (pitch, startTime = 0, nLength = 1, chann = 0, velocity = 127){
    this.channel = chann;
    this.note = pitch;
    this.dynamic = velocity;
    this.timeInPulse = startTime;
    this.duration = nLength;
    this.noteOff = startTime + nLength;
}


var majorScale = [0,2,4,5,7,9,11]
var minorScale = [0,2,3,5,7,8,10]




var compoundFirst = [4, 5, 1]
var compoundSecond = [4,1,5,1]
var authentic = [5,1]
var broken = [5,6]
console.log("hi")
console.log(compoundFirst)
