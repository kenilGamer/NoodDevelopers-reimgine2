function ls() {
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

  // Refresh ScrollTrigger and Locomotive Scroll on window resize
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
ls();

function page1() {
  const tl = gsap.timeline();
  tl.to(".nav-img", {
    // top: -100,
    opacity: 1,
    duration: 1,
    // ease: "power4.inOut"
  });
  tl.to(
    ".nav-all",
    {
      left: "20%",
      opacity: 1,
      duration: 1,
      // ease: "power4.inOut"
    },
    "a"
  );
  tl.to(
    ".nav-daily",
    {
      left: "75%",
      opacity: 1,
      duration: 1,
      // ease: "power4.inOut"
    },
    "a"
  );
  tl.to(
    ".nav-shop",
    {
      left: "5%",
      duration: 1,
      opacity: 1,
      // ease: "power4.inOut"
    },
    "b"
  );
  tl.to(
    ".nav-more",
    {
      left: "92%",
      opacity: 1,
      duration: 1,
      // ease: "power4.inOut"
    },
    "b"
  );
}
function page2() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: "#main", // Attach the scroll to the Locomotive Scroll container
      toggleActions: "restart none none reverse",
      start: "top 0%",
      end: "top -80%",
      pin: true,
      // markers: true,
      scrub: 5,
    },
  });
  tl.to(".texts", {
    duration: 1.2,
    opacity: 0,
    scale: 3,
  });
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
  tl.to(".page1img", {
    duration: 3,
    top: "120%",
    rotate: 370,
    left: "55%",
    scale: 1.5,
  });
}
function page3() {
  function texts() {
    let h1 = document.querySelector(".about2121");
    let texts = h1.textContent;
    console.log(texts);
    let splittedText = texts.split("");
    let clutter = "";
    let letters = splittedText.forEach((elem) => {
      clutter += `<span class='newtext'>${elem}</span>`;
    });
    h1.innerHTML = clutter;
  }
  function texts2() {
    let h1 = document.querySelector(".Cyberstud21");
    let texts = h1.textContent;
    console.log(texts);
    let splittedText = texts.split("");
    let clutter = "";
    let letters = splittedText.forEach((elem) => {
      clutter += `<span class='newtext'>${elem}</span>`;
    });
    h1.innerHTML = clutter;
  }
  texts();
  texts2();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3-a",
      scroller: "#main", // Attach the scroll to the Locomotive Scroll container
      toggleActions: "restart none none reverse",
      start: "top 30%",
      end: "top -30%",
      // pin: true,
      // markers: true,
      scrub: 5,
    },
  });
  tl.from(".about2121 span", {
    duration: 3,
    opacity: 0,
    y: -100,
    stagger: 0.1,
    // ease: "power4.inOut",
  });
  tl.from(".Cyberstud21 span", {
    duration: 3,
    opacity: 0,
    y: -100,
    stagger: 0.1,
  });
  tl.to(".page1img", {
    duration: 6,
    top: "220%",
    rotate: 20,
    left: "35%",
    scale: 1,
  });
}
function page4() {
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".page4",
  //     scroller: "#main", // Attach the scroll to the Locomotive Scroll container
  //     toggleActions: "restart none none reverse",
  //     start: "top 0%",
  //     end: "top -80%",
  //     pin: true,
  //     markers: true,
  //     scrub: 5,
  //   }
  //   });
}
page1();
page2();
page3();
page4();
