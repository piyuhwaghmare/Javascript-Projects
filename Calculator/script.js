const number = document.querySelectorAll('#num')
const dis = document.getElementById('display')
const ac = document.getElementById('ac')
const de = document.getElementById('de')
const dot = document.getElementById('dot')
const sin = document.getElementById('sin')
const cos = document.getElementById('cos')
const tan = document.getElementById('tan')
const sqrt = document.getElementById('sqrt')
const equal = document.getElementById('equal')
const div = document.getElementById('div')
const mul = document.getElementById('mul')
const sub = document.getElementById('sub')
const add = document.getElementById('add');

number.forEach((num) => {
    num.addEventListener('click', () => {
        dis.value += num.textContent;
    });
});

ac.addEventListener('click', () => {
    dis.value = '';
});

de.addEventListener('click', () => {
    dis.value = dis.value.slice(0, -1);
});

dot.addEventListener('click', () => {
    if (!dis.value.includes('.')) {
        dis.value += '.';
    }
});

sin.addEventListener('click', () => {
    dis.value = Math.sin(dis.value);
});

cos.addEventListener('click', () => {
    dis.value = Math.cos(dis.value);
});

tan.addEventListener('click', () => {
    dis.value = Math.tan(dis.value);
});

sqrt.addEventListener('click', () => {
    dis.value = Math.sqrt(dis.value);
});

equal.addEventListener('click', () => {
    dis.value = eval(dis.value);
});

div.addEventListener('click', () => {
    dis.value += '/';
});

mul.addEventListener('click', () => {
    dis.value += '*';
});

sub.addEventListener('click', () => {
    dis.value += '-';
});

add.addEventListener('click',()=>{
    dis.value += '+';
})