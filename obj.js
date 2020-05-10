//SNAKE
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "black";
        for (let i=0; i<this.tail.length; i++){
            ctx.fillStyle= (i === (this.tail.length-1)) ? "black" : "white";
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        for (let i=0; i<this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
        
        }

        this.tail[this.total -1] = {x: this.x, y: this.y};
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x>canvas.width){
            this.x=0;
        }
        if(this.y>canvas.height){
            this.y=0;
        }
        if(this.x<0){
            this.x=canvas.width;
        }
        if(this.y<0){
            this.y=canvas.height;
        }
    }

    this.changeDirection = function(direction){
        switch(direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                up.play();
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                down.play();
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                left.play();
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                right.play();
                break;
        }
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            yum.play();
            return true;
        }

        return false;
    }
    this.swallow = function(poison){
        if(this.x === poison.x && this.y === poison.y){
            this.total = 0;
            this.tail = [];
            dead.play();
        }
    }

    this.checkCollision = function() {
        for(var i=0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.total = 0;
                this.tail = [];
                dead.play();
            }
        }
    }

    

}
//FRUIT
class Fruit {
    constructor() {
        this.x;
        this.y;
        this.pickLocation = function () {
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        };
        this.draw= function() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
    }
}

//Poison
class Poison {
    constructor() {
        this.x;
        this.y;
        this.pickLocation = function () {
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        };
        this.draw= function() {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
    }
}






  