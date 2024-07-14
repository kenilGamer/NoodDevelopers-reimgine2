function ls() {
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.defaults({ ignoreMobileResize: true });
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: 0.1,
    inertia: 0.7,
    multiplier: 0.7,
  });

  locoScroll.on("scroll", ScrollTrigger.update);
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
}
document.addEventListener("DOMContentLoaded", () => {
  ls();
  function navbar() {
    var right_mobile_nav = document.querySelector(".right_mobile_nav");
    var nav_line_1 = document.querySelector(".nav_line_1");
    var nav_line_2 = document.querySelector(".nav_line_2");
    var mobile_nav_ = document.querySelector(".mobile_nav_");
    var nav = false;

    var mbnav = gsap.timeline();
    var mbnav_ = gsap.timeline();

    right_mobile_nav.addEventListener("click", () => {
      if (nav) {
        nav = false;

        mbnav_.to(
          nav_line_1,
          {
            position: "static",
            transform: "rotate(0deg)",
            direction: 1,
          },
          "a"
        );
        mbnav_.to(
          nav_line_2,
          {
            position: "static",
            transform: "rotate(0deg)",
            direction: 1,
          },
          "a"
        );
        mbnav_.to(mobile_nav_, {
          right: -100 + "vw",
        });
      } else {
        nav = true;
        mbnav.to(
          nav_line_1,
          {
            position: "absolute",
            transform: "rotate(45deg)",
            direction: 1,
            zIndex: 100000,
          },
          "a"
        );
        mbnav.to(
          nav_line_2,
          {
            postion: "absolute",
            transform: "rotate(-45deg)",
            zIndex: 100000,
            direction: 1,
          },
          "a"
        );
        mbnav_.to(mobile_nav_, {
          right: 0,
          ease: "bounce.out",
          duration: 2.5,
        });
      }
    });
  }
  navbar();
  const cords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
  });

  document.addEventListener("mousemove", (e) => {
    cords.x = e.clientX;
    cords.y = e.clientY;
  });
  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      cords.x = e.touches[0].clientX;
      cords.y = e.touches[0].clientY;
    }
  });
  function animateCircles() {
    let x = cords.x;
    let y = cords.y;
    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      circle.style.scale = (circles.length - index) / circles.length;
      circle.x = x;
      circle.y = y;
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.2;
      y += (nextCircle.y - y) * 0.2;
    });
    requestAnimationFrame(animateCircles);
  }
  animateCircles();
  const nav = document.querySelector(".nav ");
  nav.addEventListener("mouseenter", () => {
    gsap.to(circles, {
      scale: 2,
      duration: 0.5,
      // ease: "elastic.out(1, 0.3)"
    });
  });
  nav.addEventListener("mouseleave", () => {
    gsap.to(circles, {
      scale: 1,
      duration: 0.5,
    });
  });
  function page1() {
    const tl = gsap.timeline();
    tl.to(".nav-img", {
      opacity: 1,
      duration: 1,
    });
    tl.to(
      ".nav-all",
      {
        left: "20%",
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      ".nav-daily",
      {
        left: "75%",
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      ".nav-shop",
      {
        left: "5%",
        duration: 1,
        opacity: 1,
      },
      "b"
    );
    tl.to(
      ".nav-more",
      {
        left: "92%",
        opacity: 1,
        duration: 1,
      },
      "b"
    );
  }

  function page2() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        toggleActions: "restart none none reverse",
        start: "top 0%",
        end: "top -80%",
        pin: true,
        scrub: 5,
      },
    });
    tl.to(".texts", {
      duration: 1.2,
      opacity: 0,
      scale: 3,
    });
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
        trigger: ".page3",
        scroller: "#main",
        toggleActions: "restart none none reverse",
        start: "top 50%",
        end: "top -20%",
        scrub: 5,
      },
    });
    tl.from(".about2121 span", {
      duration: 3,
      opacity: 0,
      y: -100,
      stagger: 0.1,
    });
    tl.from(
      ".Cyberstud21 span",
      {
        duration: 2,
        opacity: 0,
        y: 100,
        stagger: 0.1,
      },
      "-=0.5"
    );
    tl.to(".page1img", {
      duration: 6,
      top: "220%",
      rotate: 20,
      left: "60%",
      // scale: 1,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-about2",
        scroller: "#main",
        toggleActions: "restart none none reverse",
        start: "top 0%",
        end: "top -5%",
        // scrub: 5,
        pin: true,
        // scrub: 5,
      },
    });

    tl2.from(".text-about2",{
      duration: 1.5,
      opacity: 0,
      y: 200,
      ease: "elastic.out(1, 0.3)"
    })

  }

  function page4() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        scroller: "#main",
        toggleActions: "restart none none reverse",
        start: "top 0%",
        end: "top -80%",
        pin: true,
        scrub: 5,
      },
    });
    tl.to(".texts2", {
      duration: 1.2,
      opacity: 0,
      scale: 3,
    });

    tl.to(".page4img", {
      duration: 3,
      top: "110%",
      rotate: 370,
      left: "10%",
      scale: 1.2,
    });
  }

  function page5() {
    function texts() {
      let h1 = document.querySelector(".top-text");
      let texts = h1.textContent;
      let splittedText = texts.split("");
      let clutter = "";
      let letters = splittedText.forEach((elem) => {
        clutter += `<span class='newtext'>${elem}</span>`;
      });
      h1.innerHTML = clutter;
    }
    texts();
    function texts2() {
      let h1 = document.querySelector(".top-text1");
      let texts = h1.textContent;
      let splittedText = texts.split("");
      let clutter = "";
      let letters = splittedText.forEach((elem) => {
        clutter += `<span class='newtext'>${elem}</span>`;
      });
      h1.innerHTML = clutter;
    }
    texts2();
    function texts3() {
      let h1 = document.querySelector(".text-hrs");
      let texts = h1.textContent;
      let splittedText = texts.split("");
      let clutter = "";
      let letters = splittedText.forEach((elem) => {
        clutter += `<span class='newtext'>${elem}</span>`;
      });
      h1.innerHTML = clutter;
    }
    texts3();
    function texts4() {
      let h1 = document.querySelector(".text-fast");
      let texts = h1.textContent;
      let splittedText = texts.split("");
      let clutter = "";
      let letters = splittedText.forEach((elem) => {
        clutter += `<span class='newtext'>${elem}</span>`;
      });
      h1.innerHTML = clutter;
    }
    texts4();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page5",
        scroller: "#main",
        toggleActions: "restart none none reverse",
        start: "top 50%",
        end: "top -20%",
        // pin: true,
        scrub: 5,
      },
    });
    tl.from(
      ".top-text span",
      {
        duration: 3,
        opacity: 0,
        y: -100,
        stagger: 0.1,
      },
      "a"
    );
    tl.from(
      ".top-text1 span",
      {
        duration: 3,
        opacity: 0,
        y: -100,
        stagger: 0.1,
      },
      "a"
    );
    tl.from(
      ".text-hrs span",
      {
        duration: 3,
        opacity: 0,
        y: -100,
        stagger: 0.1,
      },
      "a"
    );
    tl.from(
      ".text-fast span",
      {
        duration: 3,
        opacity: 0,
        y: -100,
        stagger: 0.1,
      },
      "a"
    );
  }
  function countUps() {
    const countUp = (element, endValue) => {
      console.log(element);
      gsap.to(".text-70", {
        innerText: endValue,
        duration: 5,
        scrollTrigger: {
          trigger: ".centre-text",
          scroller: "#main",
          toggleActions: "restart none none reverse",
          start: "top -80%",
        },
        onUpdate: function () {
          element.innerHTML = Math.ceil(element.innerText);
        },
      });
    };
    const text70 = document.querySelector(".text-70");
    countUp(text70, 70);
  }
  countUps();
  page1();
  page2();
  page3();
  page4();
  page5();
});
