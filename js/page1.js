var right_mobile_nav = document.querySelector(".right_mobile_nav");
var nav_line_1 = document.querySelector(".nav_line_1");
var nav_line_2 = document.querySelector(".nav_line_2");
var mobile_nav_ =document.querySelector(".mobile_nav_");
var nav = false;

var mbnav = gsap.timeline();
var mbnav_ = gsap.timeline();

right_mobile_nav.addEventListener("click",()=>{
if (nav) {
    nav=false;
    

mbnav_.to(nav_line_1,{
  position: "static",
  transform:"rotate(0deg)",
    direction:1,

},"a")
mbnav_.to(nav_line_2,{
    position: "static",
  transform:"rotate(0deg)",
    direction:1,

},"a")
mbnav_.to(mobile_nav_,{
right:-100+"vw",
})


} else {
  nav=true;
mbnav.to(nav_line_1,{
  position: "absolute",
  transform:"rotate(45deg)",
  direction:1,
    zIndex:100000,

},"a")
mbnav.to(nav_line_2,{
  postion: "absolute",
  transform:"rotate(-45deg)",
  zIndex:100000,
    direction:1,
},"a")
mbnav_.to(mobile_nav_,{
right:0,
ease: "bounce.out",
duration:2.5,
})

}







 
  
})
