const htmlinput = document.querySelector('.html-editor textarea')
const cssinput = document.querySelector('.css-editor textarea')
const jsinput = document.querySelector('.js-editor textarea')
const save = document.querySelector('#save')
const output = document.querySelector('#output')
const full = document.querySelector('#full')
const copy = document.querySelectorAll('.copy')

save.addEventListener('click', () => {
    const html = htmlinput.value
    const css = `<style>${cssinput.value}</style>`
    const js = `<script>${jsinput.value}</script>`
    output.contentDocument.body.innerHTML = html
    output.contentDocument.head.innerHTML = css
    output.contentWindow.eval(js)
})

full.addEventListener('click', () => {
    if (output.requestFullscreen) {
        output.requestFullscreen()
    } else if (output.mozRequestFullScreen) {
        output.mozRequestFullScreen()
    } else if (output.webkitRequestFullscreen) {
        output.webkitRequestFullscreen()
    } else if (output.msRequestFullscreen) {
        output.msRequestFullscreen()
    }
})

copy.forEach((e) => {
    e.addEventListener('click', () => {
        if(e.classList.contains("copy1")) {
        navigator.clipboard.writeText(htmlinput.value)
    } else if(e.classList.contains("copy2")) {
        navigator.clipboard.writeText(cssinput.value)
    } else if(e.classList.contains("copy3")) {
        navigator.clipboard.writeText(jsinput.value)
    }
  })
    
})