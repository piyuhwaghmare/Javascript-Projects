box1 = document.getElementsByClassName("inner-box11")[0]
box2 = document.getElementsByClassName("inner-box22")[0]
box1value = document.getElementsByClassName("inner-box1")[0]
box2value = document.getElementsByClassName("inner-box2")[0]

box111 = document.getElementsByClassName("inner-box111")[0]
box222 = document.getElementsByClassName("inner-box222")[0]

let a = 0
let b = 0

let html = setInterval(() => {
    a++
    box111.innerHTML = `${a}%`
    box1.style.cssText= `background-color: rgb(35, 201, 121); width: ${1*a}%;`

    if(a==80) {
        clearInterval(html)
    }
}, 50);

let html1 = setInterval(() => {
    b++
    box222.innerHTML = `${b}%`
    box2.style.cssText= `background-color: rgb(35, 201, 121); width: ${1*b}%;`

    if(b==95) {
        clearInterval(html1)
    }
}, 50);

btn1 = document.getElementsByClassName('btn')[0]

btn1.addEventListener('click', ()=>{
    const element = document.getElementsByClassName("containerhead")[0];

    // Clone the element to avoid layout shifts
    const clonedElement = element.cloneNode(true);
    clonedElement.style.position = 'absolute';
    clonedElement.style.top = '0';
    clonedElement.style.left = '0';
    clonedElement.style.width = element.scrollWidth + 'px';
    clonedElement.style.height = element.scrollHeight + 'px';
    clonedElement.style.zIndex = '-1';
    clonedElement.style.opacity = '0';
    document.body.appendChild(clonedElement);

    // Convert size to mm
    const pxToMm = 0.264583; // px to mm
    const widthPx = clonedElement.scrollWidth;
    const heightPx = clonedElement.scrollHeight;
    const pdfWidthMm = widthPx * pxToMm;
    const pdfHeightMm = heightPx * pxToMm;

    html2pdf().set({
        margin: 0,
        filename: 'Full_Page.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: [pdfWidthMm, pdfHeightMm], orientation: 'portrait' }
    })
    .from(clonedElement)
    .save()
    // .then(() => {
    //     document.body.removeChild(clonedElement); // Clean up
    // });
    })