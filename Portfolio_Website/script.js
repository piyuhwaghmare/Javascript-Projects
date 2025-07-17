let ham = document.getElementById('ham')
let nav = document.getElementsByClassName("nav")[0]
let navlist_second = document.getElementsByClassName("nav-list-second")[0]
let div = document.querySelector('.right-nav')

ham.addEventListener('click', ()=>{
    nav.classList.toggle("active-nav")
    navlist_second.classList.toggle("active-nav-list-second")
    if(nav.classList.contains("active-nav")) {
       ham.src="cross.svg"
    }
    else {
        ham.src="hamburger.svg"
    }
})

 var typed = new Typed('#profession', {
      strings: ['Web Developer','Software Developer','Editor'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

let htmlprog = document.getElementsByClassName('html-prog')[0];
let cssprog = document.getElementsByClassName('css-prog')[0];
let jsprog = document.getElementsByClassName('js-prog')[0];
let htmlvalue = document.getElementsByClassName('html-value')[0];
let cssvalue = document.getElementsByClassName('css-value')[0];
let jsvalue = document.getElementsByClassName('js-value')[0];

let innercppprog = document.getElementsByClassName('inner-C++-prog')[0];
let innerreactprog = document.getElementsByClassName('inner-react-prog')[0];
let innerpythonprog = document.getElementsByClassName('inner-python-prog')[0];
let innerdsaprog = document.getElementsByClassName('inner-dsa-prog')[0];
let reactvalue = document.getElementsByClassName('react-value')[0];
let Cppvalue = document.getElementsByClassName('C++-value')[0];
let pythonvalue = document.getElementsByClassName('python-value')[0];
let dsavalue = document.getElementsByClassName('dsa-value')[0];


let h=0;
let c=0;
let j=0;

let html = setInterval(()=>{
    h++;
    htmlvalue.innerHTML = `${h}%`;
    htmlprog.style.background=`conic-gradient(rgb(35, 201, 121) ${3.6*h}deg, rgb(8,10,11) 0deg)`
    if(h==90) {
        clearInterval(html);
    }
},50)

let css = setInterval(()=>{
    c++;
    cssvalue.innerHTML = `${c}%`;
    cssprog.style.background=`conic-gradient(rgb(35, 201, 121) ${3.6*c}deg, rgb(8,10,11) 0deg)`
    if(h==80) {
        clearInterval(css);
    }
},50)

let js = setInterval(()=>{
    j++;
    jsvalue.innerHTML = `${j}%`;
    jsprog.style.background=`conic-gradient(rgb(35, 201, 121) ${3.6*j}deg, rgb(8,10,11) 0deg)`
    if(h==78) {
        clearInterval(js);
    }
},50)

a=0;
b=0;
ci=0;
d=0;

let react = setInterval(()=>{
    a++;
    reactvalue.innerHTML = `${a}%`;
    innerreactprog.style.cssText = `background-color: rgb(35, 201, 121); width: ${1*a}%;`
    
    if(a==89) {
        clearInterval(react);
    }

},50)

let CPP = setInterval(()=>{
    b++;
    Cppvalue.innerHTML = `${b}%`;
    innercppprog.style.cssText = `background-color: rgb(35, 201, 121); width: ${1*b}%;`
    
    if(b==96) {
        clearInterval(CPP);
    }

},50)

let python = setInterval(()=>{
    ci++;
    pythonvalue.innerHTML = `${ci}%`;
    innerpythonprog.style.cssText = `background-color: rgb(35, 201, 121); width: ${1*ci}%;`
    
    if(ci==80) {
        clearInterval(python);
    }

},50)

let dsa = setInterval(()=>{
    d++;
    dsavalue.innerHTML = `${d}%`;
    innerdsaprog.style.cssText = `background-color: rgb(35, 201, 121); width: ${1*d}%;`
    
    if(d==92) {
        clearInterval(dsa);
    }

},50)

let tl=gsap.timeline();

tl.from(".nav",{
    y:-300,
    opacity:0,
    duration:1
})

tl.from(".left-nav",{
    y:-200,
    opacity:0,
    duration:1
})

tl.from(".list-items",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.5
})

let tl2 = gsap.timeline()

tl2.from(".line",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:1
})

tl2.from("#btn",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:1
})

gsap.from("#logo",{
    x:500,
    opacity:0,
    duration:1,
    stagger:1
})

let tl3=gsap.timeline()

tl3.from(".heading",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".heading",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

tl3.from(".about-details",{
    y:200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".about-details",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:5
    }
})

tl3.from(".box",{
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

let tl4=gsap.timeline()

tl4.from(".heading-skill",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".heading-skill",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

tl4.from(".prog",{
    x:200,
    opacity:0,
    rotate:360,
    duration:2,
    stagger:0.7,
    scrollTrigger:{
        trigger:".prog",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

tl4.from(".linear-prog",{
    x:-200,
    opacity:0,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:".linear-prog",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

tl4.from(".skill-content",{
    x:-200,
    opacity:0,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:".skill-content",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

let tl5=gsap.timeline()

tl5.from(".right-contact",{
    x:500,
    opacity:0,
    duration:2,
    stagger:0.7,
    scrollTrigger:{
        trigger:".right-contact",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})

tl5.from(".left-contact",{
    x:-500,
    opacity:0,
    duration:2,
    stagger:0.7,
    scrollTrigger:{
        trigger:".left-contact",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:5
    }
})
