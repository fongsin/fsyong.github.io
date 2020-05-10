//Selectors
const canvas = document.querySelector(".canvas");

//Event Listeners
window.addEventListener('keydown', ((evt)=>{
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
    console.log(direction);
}))


//Functions
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;



(function setup(){
    snake = new Snake();
    fruit = new Fruit();
    poison = new Poison();
    fruit.pickLocation();
    poison.pickLocation();
    
    

    window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        poison.draw();
        snake.update();
        snake.draw();
        

        if(snake.eat(fruit)){
            fruit.pickLocation();
            poison.pickLocation();
        } 

        if(snake.swallow(poison)){
            poison.pickLocation();
        }

        
        snake.checkCollision();
        document.querySelector('.score')
            .innerText = snake.total;

    }, 250);
}())


//load audio files
const dead = new Audio();
const yum = new Audio();
const right = new Audio();
const left = new Audio();
const up = new Audio();
const down = new Audio();

dead.src ="deadaudio.mp4";
yum.src ="yumaudio.mp4";
right.src ="rightaudio.mp4";
left.src ="leftaudio.mp4";
up.src ="upaudio.mp4";
down.src ="down.mp4";