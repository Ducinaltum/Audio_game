function Note (pitch, startTime = 0, nLength = 1, chann = 0, velocity = 127){
    this.channel = chann;
    this.note = pitch;
    this.dynamic = velocity;
    this.timeInPulse = startTime;
    this.duration = nLength;
    this.noteOff = startTime + nLength;
/*
08/09
    this.sendNote = s;
    this.endNote = e;
    
    function s(){
        console.log("envia")
        return { 1:this.channel, 
            2:this.note, 
            3:this.dynamic, 
            4:this.absTime };
    }

    
    function e(){
        console.log("devuelve")
        return this.channel, this.note, this.absTime + this.duration;
    }
*/
}