function hideanimation(){
  var btn=document.querySelector("#home_content #btn");
btn.addEventListener("click",function(){
  // alert("hi")
});
gsap.from("#home #home_content #hide",{
  x:350,
  opacity:1,
  duration:2.5,
  repeat:-1,
  yoyo:true
})
}

hideanimation();

function imageAnimation(){
  var image=document.querySelector("#about img");
  var aboutMe=document.querySelector("#about h1");
  aboutMe.addEventListener("mouseenter",()=>{
  // alert("hi")
    image.classList.remove("visible");
  })
  aboutMe.addEventListener("mouseleave",()=>{
    image.classList.add("visible");
  })

}

imageAnimation();



function stringAnimation(){
  
var initialPath=`M 10 100 Q 600 100 1190 100`;

var finalPath=`M 10 100 Q 600 100 1190 100`;

var string=document.querySelector("#string");

string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 1190 100`;

    gsap.to("svg path",{
        attr:{d:path},
        duration:.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.1,
        ease:"elastic.out(1,0.2"
    })
})
}

stringAnimation();

function paraAnimation(){
  var content=document.querySelector(".content p");

gsap.from(content,{
  y:200,
  opacity:0,
  duration:.5,
  scrollTrigger:{
    trigger:content,
    scroller:"body",
    // markers:true,
    start:"top 93%",
    end:"top 80%",
    scrub:1.5
  }
})
}

paraAnimation();

function skillsAnimation(){
  gsap.from(".boxes",{
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
      trigger:".boxes",
      scroller:"body",
      start:"top 80%",
      end:"top 30%",
      scrub:2.5
    }
  })
}

skillsAnimation();

function twogoodprojAanimation(){
  var visi=document.querySelector(".project a #twoGood");

visi.addEventListener("mouseenter",()=>{
  visi.style.opacity="1";
  visi.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  gsap.from(".project a #twoGood",{
    y:20,
    opacity:0, 
  })
})

visi.addEventListener("mouseleave",()=>{
  visi.style.opacity="0";
  visi.style.backgroundColor="rgba(0, 0, 0)";
})
}
twogoodprojAanimation();


function simonprojAnimation(){
  var visi1=document.querySelector(".project a #simon");

visi1.addEventListener("mouseenter",()=>{
  visi1.style.opacity="1";
  visi1.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  gsap.from(".project a #simon",{
    y:20,
    opacity:0, 
  })
})

visi1.addEventListener("mouseleave",()=>{
  visi1.style.opacity="0";
  visi1.style.backgroundColor="rgba(0, 0, 0)";
})
}
simonprojAnimation();


function bulbprojAnimation(){
  var visi2=document.querySelector(".project a #bulb");

visi2.addEventListener("mouseenter",()=>{
  visi2.style.opacity="1";
  visi2.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  gsap.from(".project a #bulb",{
    y:20,
    opacity:0, 
  })
})

visi2.addEventListener("mouseleave",()=>{
  visi2.style.opacity="0";
  visi2.style.backgroundColor="rgba(0, 0, 0)";
})
}
bulbprojAnimation();



function calculatorprojAnimation(){
  var visi3=document.querySelector(".project a #calculator");

visi3.addEventListener("mouseenter",()=>{
  visi3.style.opacity="1";
  visi3.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  gsap.from(".project a #calculator",{
    y:20,
    opacity:0
  })
})

visi3.addEventListener("mouseleave",()=>{
  visi3.style.opacity="0";
  visi3.style.backgroundColor="rgba(0, 0, 0)";
})
}
calculatorprojAnimation();


function weatherprojAnimation(){
  var visi4=document.querySelector(".project a #weather");

visi4.addEventListener("mouseenter",()=>{
  visi4.style.opacity="1";
  visi4.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  gsap.from(".project a #weather",{
    y:20,
    opacity:0 
  })
})

visi4.addEventListener("mouseleave",()=>{
  visi4.style.opacity="0";
  visi4.style.backgroundColor="rgba(0, 0, 0)";
})

}
weatherprojAnimation();


function sidebarAnimation(){
  var open=document.querySelector("#menu_icon");
var close=document.querySelector("#close");

var tl2=gsap.timeline();

tl2.from("#sidebar",{
  x:400,
  duration:.6,
  opacity:0
})
tl2.from("#sidebar i",{
  x:400,
  duration:.3,
  opacity:0,
})
tl2.from("#sidebar ul li",{
  x:200,
  opacity:0,
  duration:1,
  stagger:.3
})
tl2.pause();
open.addEventListener("click",()=>{
  tl2.play();
})

close.addEventListener("click",()=>{
  tl2.reverse();
})

}

sidebarAnimation();
