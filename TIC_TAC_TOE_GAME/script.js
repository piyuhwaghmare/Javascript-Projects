const box = document.querySelectorAll(".boxes")
const turn1 = document.querySelector(".turn1")
const turn2 = document.querySelector(".turn2")
const msg1 = document.querySelector(".msg1")
const msg2 = document.querySelector(".msg2")
const msg3 = document.querySelector(".msg3")
const btn = document.querySelector(".btn");
let turnX = true;
let gameOver = false;

let WinnderCondition=[
    [0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

box.forEach(box => {
    box.addEventListener('click', ()=>{
        if(box.innerText !== '' || gameOver) {
            return;
        }
        if(turnX) {
            box.innerText = 'X';
            box.style.color = 'red';
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
        } else {
            box.innerText = 'O';
            box.style.color = 'blue';
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s");
        }
        turnX = !turnX;

        checkWinner();
  })
});

function checkWinner() {
    for(let condition of WinnderCondition) {
        let box1 = box[condition[0]].innerText;
        let box2 = box[condition[1]].innerText;
        let box3 = box[condition[2]].innerText;

        if(box1 !=="" && box2 !=="" && box3 !=="") {
            if(box1 === box2 && box2 === box3) {
                showResult(box1);
                return;
            }
        }
    }

    if ([...box].every(b => b.innerText !== "")) {
        showResult("draw");
    }
}

let a=0,b=0,c=0;

function showResult(result) {
    let msg;
    gameOver = true;
   if(result === 'X') {
        msg = msg1;
        const html = `<h2>Player X Wins</h2>
                <button class="btn">Play Again</button>`;
        msg.innerHTML = html;
        msg.classList.add("b-s");
        a=1;
    } else if(result === 'O') {
        msg = msg2;
        const html = `<h2>Player O Wins</h2>
                <button class="btn">Play Again</button>`;
        msg.innerHTML = html;
        msg.classList.add("b-s");
        b=1;
    } else {
        msg = msg3;
        const html = `<h2>It's a Draw</h2>
                <button class="btn">Play Again</button>`;
        msg.innerHTML = html;
        msg.classList.add("b-s");
        c=1;
    }

    const newbtn = msg.querySelector('.btn');
    newbtn.addEventListener('click', () => {
    box.forEach(box => {
        box.innerText = '';
        box.style.color = 'black';
    });
    turnX = true;
    gameOver = false;
    turn1.classList.remove("b-s");
    turn2.classList.add("b-s");
    msg1.classList.remove("b-s");
    msg2.classList.remove("b-s");
    msg3.classList.remove("b-s");
    if(a === 1) {
        msg1.innerHTML = '';
        a=0;
    } else if(b === 1) {
        msg2.innerHTML = '';
        b=0;
    } else if(c === 1) {
        msg3.innerHTML = '';
        c=0;
    }
  });
}