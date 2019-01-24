var cnvs = document.getElementById("animatedBackground");
var ctx = cnvs.getContext("2d")
var lastUpdate = Date.now();
var points = []



var numberOfPoints = 2// Math.floor(Math.random()*10)+2
for(var i = 0; i < numberOfPoints; i++){
    points[i] = new circlePoint();
}
setInterval(function(){
    var now = Date.now();
    var dt = (now - lastUpdate)/1000;
    lastUpdate = now;

    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    points.forEach(element => {
        //element.update(dt);
        //element.draw(ctx);
    });
    points[0].update(dt)
    points[0].draw(ctx)
    points[1].update(dt)
    points[1].draw(ctx)
}, 1000/60)

function circlePoint(){
    radious = Math.floor(Math.random() * 10) + 1
    posX = (Math.random() * 10 + radious)
    startPosY = (Math.random() * cnvs.height - (radious*2)) + radious*2;
    posY = startPosY
    speed = (Math.random() * 50) + 30;
    frequency = (Math.random() * 5) + 0.1
    amplitude = 50 //Math.random() * cnvs.height/2
    acumulatedTime = 0;
    this.X = posX
    this.Y = posY
    this.draw = function(ctx){
        ctx.beginPath()
        ctx.arc(posX,posY,radious, 2*Math.PI, false)
        ctx.fillStyle = 'green';
        ctx.fill();
    }

    this.update = function(dt){
        console.log(radious)
        acumulatedTime += dt
        posX += speed * dt;
        posY = startPosY + (amplitude * Math.cos(frequency * acumulatedTime));
        if( posX > cnvs.width) {
            radious = 10//Math.floor(Math.random() * 10) + 1
            posX = (Math.random() * 10 + radious)
            startPosY = (Math.random() * cnvs.height - (radious*2)) + radious*2;
            posY = startPosY
            speed = (Math.random() * 50) + 30;
            frequency = (Math.random() * 5) + 0.1
            amplitude = 50 //Math.random() * cnvs.height/2
            acumulatedTime = 0;
        }
        this.X = posX
        this.Y = posY
    }
}