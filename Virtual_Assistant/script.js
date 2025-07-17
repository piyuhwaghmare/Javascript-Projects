btn1 = document.getElementById("#btn")
voc = document.getElementById("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-G8"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12) {
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16) {
        speak("Good Afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
}

window.addEventListener('load', ()=>{
    wishMe()
})