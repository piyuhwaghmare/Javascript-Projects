const btn1 = document.getElementById("btnn1");
const btn2 = document.getElementById("btnn2");
const btn3 = document.getElementById("btnn3");
const mainImage = document.querySelector("#img2");
const midcontainer = document.querySelector(".mid-container");
const something = document.querySelector(".something");
const result = document.querySelector(".result");

btn1.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "stone.png";
    img.alt = "rock";
    img.id = "img1";
    if(something.querySelector("#img3") || something.querySelector("#img2") || something.querySelector("#img1")) {
        something.innerHTML = "";
    }
    something.appendChild(img);

    let btn4 = document.createElement("button");
    btn4.id = "btnnn4";
    btn4.innerText = "Draw";

    btn4.style.cssText = `height: 60px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: transparent;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(0,0,0, 0.5);`;

    if(result.querySelector("#btnnn4") || result.querySelector("#btnnn5") || result.querySelector("#btnnn6")) {
        result.innerHTML = "";
    }
    result.appendChild(btn4);
});

btn2.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "paper.jpg";
    img.alt = "paper";
    img.id = "img2";
    if(something.querySelector("#img3") || something.querySelector("#img2") || something.querySelector("#img1")) {
        something.innerHTML = "";
    }
    something.appendChild(img);

    let btn4 = document.createElement("button");
    btn4.id = "btnnn5";
    btn4.innerText = "Win";

    btn4.style.cssText = `height: 60px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: transparent;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(0,0,0, 0.5);`;

    if(result.querySelector("#btnnn4") || result.querySelector("#btnnn5") || result.querySelector("#btnnn6")) {
        result.innerHTML = "";
    }
    result.appendChild(btn4);
});

btn3.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "scissor.jpg";
    img.alt = "scissor";
    img.id = "img3";
    if(something.querySelector("#img3") || something.querySelector("#img2") || something.querySelector("#img1")) {
        something.innerHTML = "";
    }
    something.appendChild(img);

    let btn4 = document.createElement("button");
    btn4.id = "btnnn6";
    btn4.innerText = "Loose";

    btn4.style.cssText = `height: 60px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: transparent;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(0,0,0, 0.5);`;

    if(result.querySelector("#btnnn4") || result.querySelector("#btnnn5") || result.querySelector("#btnnn6")) {
        result.innerHTML = "";
    }
    result.appendChild(btn4);
});

