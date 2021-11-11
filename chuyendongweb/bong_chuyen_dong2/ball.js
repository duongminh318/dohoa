function Ball(mapWidth, mapHeight){
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.radius = 20;
    this.speedX = 3;
    this.speedY = 3;
 
    this.cx = Math.floor(Math.random()*(this.mapWidth-2*this.radius)) + this.radius;
    this.cy = Math.floor(Math.random()*(this.mapHeight-2*this.radius)) + this.radius;
}
Ball.prototype.draw = function(context,alpha){
    if(!alpha)
        alpha = 255;
    context.beginPath();
    context.fillStyle = "rgba(255, 100, 100," + alpha + ")";
    context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
    context.closePath();
    context.fill();
}
Ball.prototype.move = function(){
    this.cx += this.speedX;
    this.cy += this.speedY;
 
    this.left = this.cx - this.radius;
    this.top = this.cy - this.radius;
    this.right = this.cx + this.radius;
    this.bottom = this.cy + this.radius;
}
Ball.prototype.checkCollision = function(shapes) {
 
    if(this.left <= 0 || this.right >= this.mapWidth) this.speedX = -this.speedX;
    if(this.top <= 0 || this.bottom >= this.mapHeight) this.speedY = -this.speedY;
}