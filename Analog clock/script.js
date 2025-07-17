setInterval(() => {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

document.querySelector('.dh').textContent = String(hours).padStart(2, '0');
document.querySelector('.dm').textContent = String(minutes).padStart(2, '0');
document.querySelector('.ds').textContent = String(seconds).padStart(2, '0');

const hourRotation = (hours % 12) * 30 + minutes * 0.5;
const minuteRotation = minutes * 6 + seconds * 0.1;
const secondRotation = seconds * 6;

document.querySelector('.hour-hand').style.transform = `translate(-50%, 0) rotate(${hourRotation}deg)`;
document.querySelector('.min-hand').style.transform = `translate(-50%, 0) rotate(${minuteRotation}deg)`;
document.querySelector('.sec-hand').style.transform = `translate(-50%, 0) rotate(${secondRotation}deg)`;

}, 1000);