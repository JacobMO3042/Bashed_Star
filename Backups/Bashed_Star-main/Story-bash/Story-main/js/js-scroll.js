
//Stellar nebular code / Stage  0
const Nebular = document.getElementById('Stellar')

Nebular.onclick = function(){
  Nebular.style.scale = ".25"
  function ColourChange(){
    Nebular.classList.add("White")
  }
  setTimeout(ColourChange,2000)
}
//stage 1 code
const Star0 = document.getElementById("Nebular-Star")

Star0.onclick = function(){
  Star0.style.filter = "blur(0rem)"
  Star0.style.transition = "1s"
  function ColourChange(){
    Star0.classList.add("Yellow")
  }
  setTimeout(ColourChange,500 )

}
// Star Style Code / Stage 2 code
const Star = document.getElementById('Star-icon')
const StarStyle = document.getElementById('Star-icon')
var SizeCounter = 1
var ClickCounter = 1
var StarBlur = 0

Star.onclick = function(){
  SizeCounter = SizeCounter + 0.1;
  ClickCounter = ClickCounter + 1;

  console.log('star clicked')
  console.log(SizeCounter)
  // StarStyle.style.color ="red";
  
if (ClickCounter <= 5){
  StarBlur = StarBlur + 0.5;
  console.log("starBlur")
  Star.style.scale  = SizeCounter
  StarStyle.classList.add("red")
  StarStyle.style.filter = "blur("+ StarBlur + "rem)"
}
}



//Planetry code / stage 3

// to do, add if statement to allow the dwarf stage to run on 2nd click
const PNebular = document.getElementById("Nebular")

PNebular.onclick = function(){
PNebular.style.scale = "1.2"
PNebular.style.filter = "Blur(1rem)"
function ColourChange(){
  PNebular.classList.add("Green")
}
setTimeout(ColourChange,500);

function Dwarf(){
  PNebular.classList.add("Dwarf")
  PNebular.style.scale = ".2"
}
setTimeout(Dwarf,4000)
}


// Scroll code
const scrollElements = document.querySelectorAll('.js-scroll');



scrollElements.forEach((el) => {
  if (elementInView(el, .5)) {
    displayScrollElement(el)
  }
}
)
window.addEventListener('scroll', throttle(handleScrollAnimation, 100))
// display functions
// check element is in viewable area
// el = element
function elementInView(el, amountInView = 1) {
  const elementTop = el.getBoundingClientRect().top;
  const elementHeight = el.getBoundingClientRect().height;
  return (
    elementTop <= document.documentElement.clientHeight && elementTop + (elementHeight * amountInView)> 0
  )
}
// Checks is out of viewable area
function elementOutOfView(el) {
  const elementTop = el.getBoundingClientRect().top;
  const elementBottom = el.getBoundingClientRect().bottom;
  return (
    elementTop >= document.documentElement.clientHeight || elementBottom < 0
  )
}
//show element
function displayScrollElement(el) {
  el.classList.add("scrolled");
}
//hide element
function hideScrollElement(el) {
  el.classList.remove("scrolled");
}
function handleScrollAnimation() {
  console.log('eventcalled')
  scrollElements.forEach((el) => {
    if (elementInView(el, .5)) {
      displayScrollElement(el)
    } else if (elementOutOfView(el)) {
      hideScrollElement(el)
    }
  }
  )
}
//UTILITY
// throttle - fn = function to call, wait = interval in ms
function throttle(fn, wait) {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};



