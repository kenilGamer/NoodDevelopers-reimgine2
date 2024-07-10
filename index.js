const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true,
  inertia: 0.5, 
  multiplier: 0.9, 
//   class: "is-reveal",
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


function page1(){
    const tl = gsap.timeline()
    tl.to(".nav-img",{
    // top: -100,
    opacity:1,
    duration: 1,
    // ease: "power4.inOut"
    })
    tl.to(".nav-all",{
        left:"20%",
        opacity:1,
        duration: 1,
        // ease: "power4.inOut"
    },'a')
    tl.to(".nav-daily",{
        left:"75%",
        opacity:1,
        duration: 1,
        // ease: "power4.inOut"
    },'a')
    tl.to(".nav-shop",{
        left:"5%",
        duration: 1,
        opacity:1
        // ease: "power4.inOut"
    },'b')
    tl.to('.nav-more',{
        left:"92%",
        opacity:1,
        duration: 1,
        // ease: "power4.inOut"
    },'b')
  
}
function page2(){
    const tl = gsap.timeline({
       
      });
      gsap.to(".page2",{
        opacity:1,
        duration: 1,
        // ease: "power4.inOut"
         scrollTrigger: {
          trigger: ".page2",
          scroller: "#main", // Attach the scroll to the Locomotive Scroll container
          toggleActions: "restart none none reverse",
          start: "top 0%",
          end: "top -80%",
        //   pin: true,
          
        }
      })
}
function page3(){

}
page1()
page2()