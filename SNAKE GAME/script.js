let innercontainer = document.querySelector(".inner-container");
let btn = document.querySelector("#btn");
let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let foodX = Math.floor(Math.random() * 14) + 1;
let foodY = Math.floor(Math.random() * 14) + 1;
let snakeBody=[];
let SnakeX = 7;
let SnakeY = 7;
let velocityX = 0;
let velocityY = 0;

function moveSnake(e) {
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
        up.style.cssText = "background-color: red; transform: scale(1.2); transition: 0.2s;";
        setTimeout(() => {
    up.style.backgroundColor = "";
    up.style.transform = "";
}, 400);
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
        down.style.cssText = "background-color: red; transform: scale(1.2); transition: 0.2s;";
        setTimeout(() => {
            down.style.backgroundColor = "";
            down.style.transform = "";
        }, 400);
    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
        left.style.cssText = "background-color: red; transform: scale(1.2); transition: 0.2s;";
        setTimeout(() => {
            left.style.backgroundColor = "";
            left.style.transform = "";
        }, 400);
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
        right.style.cssText = "background-color: red; transform: scale(1.2); transition: 0.2s;";
        setTimeout(() => {
            right.style.backgroundColor = "";
            right.style.transform = "";
        }, 400);
    }

    main();
}

function main() {

    SnakeX += velocityX;
    SnakeY += velocityY;

    if(SnakeX === foodX && SnakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        foodX = Math.floor(Math.random() * 14) + 1;
        foodY = Math.floor(Math.random() * 14) + 1;
    }

    
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = [...snakeBody[i - 1]];
    }
    if (snakeBody.length) {
        snakeBody[0] = [SnakeX, SnakeY];
    }

    if (SnakeX < 1 || SnakeX > 14 || SnakeY < 1 || SnakeY > 14) {
        alert("Game Over! You hit the wall.");
        SnakeX = 7;
        SnakeY = 7;
        snakeBody = [];
        foodX = Math.floor(Math.random() * 14) + 1;
        foodY = Math.floor(Math.random() * 14) + 1;
        velocityX = 0;
        velocityY = 0;
    }
    
    for (let i = 1; i < snakeBody.length; i++) {
        if (SnakeX === snakeBody[i][0] && SnakeY === snakeBody[i][1]) {
            alert("Game Over! You touched your own body.");
            
            SnakeX = 7;
            SnakeY = 7;
            velocityX = 0;
            velocityY = 0;
            snakeBody = [];
            foodX = Math.floor(Math.random() * 14) + 1;
            foodY = Math.floor(Math.random() * 14) + 1;
            break;
        }
    }

    btn.addEventListener("click", () => {
        SnakeX = 7;
        SnakeY = 7;
        snakeBody = [];
        foodX = Math.floor(Math.random() * 14) + 1;
        foodY = Math.floor(Math.random() * 14) + 1;
        velocityX = 0;
        velocityY = 0;
    });
   
    let setHTML = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;
    setHTML += `<div class="snake" style="grid-area: ${SnakeY}/${SnakeX};"></div>`;
    for (let i = 0; i < snakeBody.length; i++) {
        setHTML += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }
    innercontainer.innerHTML = setHTML;
}
main();

setInterval(main, 600);

document.addEventListener("keydown", moveSnake);