function Note (pitch, startTime = 0, nLength = 1, chann = 0, velocity = 127){
    this.channel = chann;
    this.note = pitch;
    this.dynamic = velocity;
    this.timeInPulse = startTime;
    this.duration = nLength;
    this.noteOff = startTime + nLength;
}