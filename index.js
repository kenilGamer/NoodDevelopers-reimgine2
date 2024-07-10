function ls(){
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.defaults({ ignoreMobileResize: true });
  
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: 0.1,
    inertia: 0.5,
  multiplier: 0.9,
  });
  
  // Sync ScrollTrigger with Locomotive Scroll
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // Tell ScrollTrigger to use Locomotive Scroll's proxy methods
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  
  // Refresh ScrollTrigger and Locomotive Scroll on window resize
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
}
ls()
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
      scrollTrigger: {
        trigger: ".page2",
        scroller: "#main", // Attach the scroll to the Locomotive Scroll container
        toggleActions: "restart none none reverse",
        start: "top 0%",
        end: "top -50%",
        pin: true,
        // markers: true,
        scrub: 5,
      }
      });
      tl.to(".texts",{
        duration: 0.4, 
        opacity:0,
        scale: 3  
      })
      // tl.from(".text-121a",{
      //   duration: 1, 
      //   opacity:0,
      //   with: 0,
      //   ease: "power4.inOut"
      // })
      // tl.from(".page1img",{
      //   duration: 1, 
      //   opacity:0,
      // })
      tl.to(".page1img",{
        duration: 2, 
        top:"120%",
        rotate: 360,
        left: '55%',
        scale: 1.5,
          
      })
}
function page3(){
 
}
page1()
page2()
page3()