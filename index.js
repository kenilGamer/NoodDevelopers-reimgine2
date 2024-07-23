// document.addEventListener("contextmenu",(event)=>{
//   event.preventDefault();
//   const target = event.target;
//   if (target.tagName === "A" && target.getAttribute("href")!== "#") {
//     const link = new URL(target.getAttribute("href"), document.location.href);
//     const hash = link.hash;
//     if (hash) {
//       gsap.to(window, {
//         duration: 0.5,
//         scrollTo: {
//           y: hash,
//           offsetY: -100,
//         },
//       });
//     }
//   }
// })

// window.addEventListener("load", function () {
//   const loader = document.querySelector(".loader");
//   const body = document.body;

//   // Prevent scrolling
//   body.classList.add("no-scroll");

//   setTimeout(() => {
//     loader.style.transform = "scale(100)";
//     loader.style.opacity = "0";
//   }, 2000);

//   loader.addEventListener("transitionend", () => {
//     loader.style.display = "none";
//     // Allow scrolling again
//     body.classList.remove("no-scroll");
//   });
// });

                   
// document.addEventListener("DOMContentLoaded", (event) => {
  
//   function splitString(str){
//     let splittedTextHtml='',generatedHTML='';
//     let string = str.textContent;
//     let i;
//     for(i=0;i<string.length;i++){
//       splittedTextHtml += `
//       <span char="${string[i]}" style="--totalChars:${string.length};--index:${i};--delay:${i*100}ms;--duration:${string.length*100}ms">
//       ${string[i]}
//       </span>`;
//     }
    
//     generatedHTML = `<div>${splittedTextHtml}</div>`
//     str.innerHTML = generatedHTML;
//   }
  
//   function splittingInit(){
//     let splitCharArr = document.querySelectorAll('.split-text');
//     splitCharArr.forEach((str)=>{
//     splitString(str);
//   })
//   }
  
//   splittingInit();
  
  


//   function ls() {
//     ScrollTrigger.normalizeScroll(true);
//     ScrollTrigger.defaults({ ignoreMobileResize: true });
//     gsap.registerPlugin(ScrollTrigger);
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true,
//       smoothMobile: 0.1,
//       inertia: 0.7,
//       multiplier: 0.7,
//     }); 
//     locoScroll.on("scroll", ScrollTrigger.update);
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: document.querySelector("#main").style.transform
//         ? "transform"
//         : "fixed",
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
//   }

//   // Navbar animation function
//   function navbar() {
//     let nav = false;
//     const mbnav = gsap.timeline();
//     const mbnav_ = gsap.timeline();
//     const right_mobile_nav = document.querySelector(".right_mobile_nav");
//     const nav_line_1 = document.querySelector(".nav_line_1");
//     const nav_line_2 = document.querySelector(".nav_line_2");
//     const mobile_nav_ = document.querySelector(".mobile_nav_");

//     // Event listener for mobile nav click
//     right_mobile_nav.addEventListener("click", () => {
//       if (nav) {
//         nav = false;
//         mbnav_
//           .to(nav_line_1, { transform: "rotate(0deg)" }, "a")
//           .to(nav_line_2, { transform: "rotate(0deg)" }, "a")
//           .to(mobile_nav_, { right: -100 + "vw" });
//       } else {
//         nav = true;
//         mbnav
//           .to(nav_line_1, { transform: "rotate(45deg)", zIndex: 100000 }, "a")
//           .to(nav_line_2, { transform: "rotate(-45deg)", zIndex: 100000 }, "a")
//           .to(mobile_nav_, { right: 0, ease: "bounce.out", duration: 2.5 });
//       }
//     });
//   }

//   // Mousemove animation for circles
//   const cords = { x: 0, y: 0 };
//   const circles = document.querySelectorAll(".circle");

//   circles.forEach((circle, index) => {
//     circle.x = 0;
//     circle.y = 0;
//   });

//   document.addEventListener("mousemove", (e) => {
//     cords.x = e.clientX;
//     cords.y = e.clientY;
//   });

//   document.addEventListener("touchmove", (e) => {
//     if (e.touches.length > 0) {
//       cords.x = e.touches[0].clientX;
//       cords.y = e.touches[0].clientY;
//     }
//   });

//   function animateCircles() {
//     let x = cords.x;
//     let y = cords.y;
//     circles.forEach((circle, index) => {
//       circle.style.left = x - 12 + "px";
//       circle.style.top = y - 12 + "px";
//       circle.style.scale = (circles.length - index) / circles.length;
//       circle.x = x;
//       circle.y = y;
//       const nextCircle = circles[index + 1] || circles[0];
//       x += (nextCircle.x - x) * 0.2;
//       y += (nextCircle.y - y) * 0.2;
//     });
//     requestAnimationFrame(animateCircles);
//   }

//   animateCircles();

//   // Hover animation for nav items
//   const nav = document.querySelector(".nav ");
//   nav.addEventListener("mouseenter", () => {
//     gsap.to(circles, {
//       scale: 2,
//       duration: 0.5,
//     });
//   });

//   nav.addEventListener("mouseleave", () => {
//     gsap.to(circles, {
//       scale: 1,
//       duration: 0.5,
//     });
//   });

//   // Page animations using GSAP
//   function page1() {
//     const tl = gsap.timeline();
//     tl.to(".nav-img", {
//       opacity: 1,
//       duration: 1,
//     });
//     tl.to(
//       ".nav-all",
//       {
//         left: "20%",
//         opacity: 1,
//         duration: 1,
//       },
//       "a"
//     );
//     tl.to(
//       ".nav-daily",
//       {
//         left: "75%",
//         opacity: 1,
//         duration: 1,
//       },
//       "a"
//     );
//     tl.to(
//       ".nav-shop",
//       {
//         left: "5%",
//         duration: 1,
//         opacity: 1,
//       },
//       "b"
//     );
//     tl.to(
//       ".nav-more",
//       {
//         left: "92%",
//         opacity: 1,
//         duration: 1,
//       },
//       "b"
//     );
//   }

//   function page2() {
//     const media = window.matchMedia('(max-width: 600px)');
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page2",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 0%",
//         end: "top -80%",
//         pin: true,
//         scrub: 5,
//       },
//     });
//     tl.to(".texts", {
//       duration: 1.2,
//       opacity: 0,
//       scale: 3,
//     });
//     if(media.matches){
//       tl.to(".page1img", {
//         duration: 3,
//         top: "120%",
//         rotate: 370,
//         left: "30%",
//         scale: 2,
//       });
//     }
//     else{
//       tl.to(".page1img", {
//         duration: 3,
//         top: "120%",
//         rotate: 370,
//         left: "55%",
//         scale: 1.5,
//       });
//     }
    
//   }

//   function page3() {
//     function texts() {
//       let h1 = document.querySelector(".about2121");
//       let texts = h1.textContent;
//       let splittedText = texts.split("");
//       let clutter = "";
//       let letters = splittedText.forEach((elem) => {
//         clutter += `<span class='newtext'>${elem}</span>`;
//       });
//       h1.innerHTML = clutter;
//     }
//     texts();
//     // texts2();
//     const media = window.matchMedia('(max-width: 600px)');
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page3",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 50%",
//         end: "top -20%",
//         scrub: 5,
//       },
//     });

//     tl.from(".about2121 span", {
//       duration: 3,
//       opacity: 0,
//       y: 5,
//       stagger: 0.1,
//     });

//     tl.from(
//       ".Cyberstud21 span",
//       {
//         duration: 2,
//         opacity: 0,
//         y: 5,
//         stagger: 0.1,
//       },
//       "-=0.5"
//     );

//     if(media.matches){
//       tl.to(".page1img", {
//         duration: 6,
//         top: "220%",
//         rotate: 20,
//         left: "40%",
//         scale:1.5
//       });
//     }else{
//       tl.to(".page1img", {
//         duration: 6,
//         top: "220%",
//         rotate: 20,
//         left: "60%",
//       });
//     }

//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page-about2",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 20%",
//         end: "top -5%",
//         scrub: 5,
        
//         // pin: true,
//       },
//     });

//     tl2.from(".text-about22 h3,.text-about22 p", {
//       duration: 2,
//       opacity: 0,
//       y: 100,
//       stagger: 0.4,
//       // ease: "elastic.out(1, 0.7)",
//     });
//   }

//   function page4() {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page4",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 0%",
//         end: "top -80%",
//         pin: true,
//         scrub: 5,
//       },
//     });

//     tl.to(".texts2", {
//       duration: 1.2,
//       opacity: 0,
//       scale: 3,
//     });

//     tl.to(".page4img", {
//       duration: 3,
//       top: "110%",
//       rotate: 370,
//       left: "10%",
//       scale: 1.2,
//     });
//   }

//   function page5() {
//     function texts() {
//       let h1 = document.querySelector(".top-text");
//       let texts = h1.textContent;
//       let splittedText = texts.split("");
//       let clutter = "";
//       let letters = splittedText.forEach((elem) => {
//         clutter += `<span class='newtext'>${elem}</span>`;
//       });
//       h1.innerHTML = clutter;
//     }

//     texts();

//     function texts2() {
//       let h1 = document.querySelector(".top-text1");
//       let texts = h1.textContent;
//       let splittedText = texts.split("");
//       let clutter = "";
//       let letters = splittedText.forEach((elem) => {
//         clutter += `<span class='newtext'>${elem}</span>`;
//       });
//       h1.innerHTML = clutter;
//     }

//     texts2();

//     function texts3() {
//       let h1 = document.querySelector(".text-hrs");
//       let texts = h1.textContent;
//       let splittedText = texts.split("");
//       let clutter = "";
//       let letters = splittedText.forEach((elem) => {
//         clutter += `<span class='newtext'>${elem}</span>`;
//       });
//       h1.innerHTML = clutter;
//     }

//     texts3();

//     function texts4() {
//       let h1 = document.querySelector(".text-fast");
//       let texts = h1.textContent;
//       let splittedText = texts.split("");
//       let clutter = "";
//       let letters = splittedText.forEach((elem) => {
//         clutter += `<span class='newtext'>${elem}</span>`;
//       });
//       h1.innerHTML = clutter;
//     }

//     texts4();

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page5",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 50%",
//         end: "top -20%",
//         scrub: 5,
//       },
//     });

//     const media = window.matchMedia('(max-width: 600px)');
//     tl.from(
//       ".top-text span",
//       {
//         duration: 3,
//         opacity: 0,
//         y: 5,
//         stagger: 0.1,
//       },
//       "a"
//     );

//     tl.from(
//       ".top-text1 span",
//       {
//         duration: 3,
//         opacity: 0,
//         y: 5,
//         stagger: 0.1,
//       },
//       "a"
//     );

//     tl.from(
//       ".text-hrs span",
//       {
//         duration: 3,
//         opacity: 0,
//         y: 5,
//         stagger: 0.1,
//       },
//       "a"
//     );

//     tl.from(
//       ".text-fast span",
//       {
//         duration: 3,
//         opacity: 0,
//         y: 5,
//         stagger: 0.1,
//       },
//       "a"
//     );
//     if(media.matches){
//     tl.to(".page4img", {
//       duration: 3,
//       top: "220%",
//       rotate: 370,
//       left: "30%",
//       scale: 2,
//     });
//   }else{
//     tl.to(".page4img", {
//       duration: 3,
//       top: "215%",
//       rotate: 370,
//       left: "50%",
//       scale: 1.2,
//     });
//   }
//   }

//   function countUps() {
//     const countUp = (element, endValue) => {
//       console.log(element);
//       gsap.to(element, {
//         innerText: endValue,
//         duration: 5,
//         scrollTrigger: {
//           trigger: ".centre-text",
//           scroller: "#main",
//           toggleActions: "restart none none reverse",
//           start: "top 80%",
//           end: "top 0%",
//           scrub: 5,
//           // markers: true
//         },
//         onUpdate: function () {
//           element.innerHTML = Math.ceil(this.targets()[0].innerText);
//         },
//       });
//     };

//     const text70 = document.querySelector(".text-70");
//     countUp(text70, 70);
//   }
//   function page6() {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".page6",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 50%",
//         end: "top -20%",
//         scrub: 5,
//       },
//     });
//     gsap.from(".page4img", {
//       duration: 3,
//       // scale: 1.2,
//       rotateZ: 500,
//       repeat: -1,
//       scrollTrigger: {
//         trigger: ".page6",
//         scroller: "#main",
//         toggleActions: "restart none none reverse",
//         start: "top 50%",
//         end: "top -20%",  
//       },
//     });
//   }
  
// function disintegrate(event){
//   //console.log(this.event.target.children.length);
//   let i=0;
//   for(i=0;i<this.event.target.children.length;i++){
//     this.event.target.children[i].classList.add('disintegrate');
//   }
// }


// function page7(){
  

// const media = window.matchMedia('(max-width: 600px)');
// let tl = gsap.timeline({
//   scrollTrigger: {
//     scroller: "#main",
//     trigger: ".page7-a",
//     // markers: true,
//     start: "top 0%",
//     end: "top -80%",
//     scrub: 5,
//     pin: true
//   },
// });

// tl.from(
//   ".Immersive h3",
//   {
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//   },
  
// );

// tl.from(
//   ".Immersive h1",
//   {
//     y: 80,
//     duration: 1.2,
//     opacity: 0,
//   },
//   "0.5"
// );

// if (media.matches) {

//   tl.to("#right-earbuds", {
//     top: "130%",
//     left: "30%",
//     width: "30%",
//   });
// }else{
//   tl.to("#right-earbuds", {
//     top: "110%",
//     left: "30%",
//     width: "30%",
//   });
// }
// let tl1 = gsap.timeline({
//   scrollTrigger: {
//     scroller: "#main",
//     trigger: ".page7-beatbox",
//     // markers: true,
//     start: "top 30%",
//     end: "top -30%",
//     scrub: 5,
//   },
// })
// tl1.from(".img-text h1", {
//   opacity: 0,
//   duration: 1,
//   y: 40,
// });
// tl1.from(".actor-beat",{
//   opacity: 0,
//   duration: 1,
//   y: 400,
// })


// let tl3 = gsap.timeline({
//   scrollTrigger: {
//     scroller: "#main",
//     trigger: ".page7-b",
//     // markers: true,
//     start: "top 0%",
//     end: "top -10%",
//     scrub: 5,
//     pin: true,
//   },
// })

// tl3.from(".touch-control h1", {
//   y: 80,
//   duration: 0.8,
//   stagger: 0.3,
//   opacity: 0,
// });
// tl3.from(
//   ".features h4,h3",
//   {
//     y: 80,
//     duration: 0.5,
//     stagger: 0.1,
//     opacity: 0,
//   },
//   "p7"
// );
// tl3.from(
//   ".features-left img",
//   {
//     y: 100,
//     opacity: 0,
//   },
//   "p7"
// );
// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     scroller: "#main",
//     trigger: ".page7-c",
//     // markers: true,
//     start: "top 0%",
//     end: "top -10%",
//     scrub: 5,
//     pin: true,
//   },
// })
// tl2.from(".quick h1", {
//   y: 100,
//   opacity: 0,
//   stagger: 0.3,
//   duration: 1,
// });

// }

// function page8(){
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".page8",
//       scroller: "#main",
//       toggleActions: "restart none none reverse",
//       start: "top 00%",
//       end: "top -100%",
//       scrub: 5,
//       pin: true,
//     },
//   });
//   tl.from(".page8h1 span", {
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//   })
//   tl.from(".page8p span", {
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//   })

//   tl.from(".page_8_imgs", {
//     duration: 1,
//     y:500,
//     opacity: 0
//   });
// }

// function page9(){
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".page9",
//       scroller: "#main",
//       toggleActions: "restart none none reverse",
//       start: "top 00%",
//       end: "top -100%",
//       scrub: 5,
//       pin: true,
//     },
//   });
//   tl.to(".page9-img1", {
//     duration: 1,
//     y: -500,
//   },'a')
//   tl.to(".page9-img2", {
//     duration: 1,
//     y: 1000,
//   },'a')
//   tl.to(".page_9_text",{
//     duration: 1,
//     scale: 9,
//     // backgroundColor:"#000"
//   },"b")
//   tl.to(".page9",{
//     duration: 1,
//     // scale: 9,
//     backgroundColor:"#000"
//   },"b")

// }


// function page11(){
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".page_11",
//       scroller: "#main",
//       toggleActions: "restart none none reverse",
//       start: "top 50%",
//       end: "top -10%",
//       scrub: 5,
//       // pin: true,
//     },
//   });
//   tl.from(".page11text span",{
//     duration: 1,
//     y: 100,
//     opacity: 0,
//     stagger: 0.2,
//   },)
//   gsap.from(".page12text span",{
//     duration: 1,
//     y: 100,
//     opacity: 0,
//     stagger: 0.2,
//     scrollTrigger: {
//       trigger: ".page_12",
//       scroller: "#main",
//       toggleActions: "restart none none reverse",
//       start: "top 50%",
//       end: "top -10%",
//       scrub: 5,
//       // pin: true,
//     },
//   },)
//   gsap.from(".page13text span",{
//     duration: 1,
//     y: 100,
//     opacity: 0,
//     stagger: 0.2,
//     scrollTrigger: {
//       trigger: ".page_13",
//       scroller: "#main",
//       toggleActions: "restart none none reverse",
//       start: "top 50%",
//       end: "top -10%",
//       scrub: 5,
//       // pin: true,
//     },
//   },)
// }
// // Calling all page functions
//   ls();
//   navbar();
//   page1();
//   page2();
//   page3();
//   page4();
//   page5();
//   page6();
//   page7();
//   page8();
//   page9(); 

//   page11()
  
//   countUps();
// });
// function box(cardNumber) {
//   const card = document.querySelector(`.crad${cardNumber}`);
//   if (card.style.display === 'none' || card.style.display === '') {
//       card.style.display = 'flex';
//   } else {
//       card.style.display = 'none';
//   }
// }
function box(t){let e=document.querySelector(`.crad${t}`);"none"===e.style.display||""===e.style.display?e.style.display="flex":e.style.display="none"}document.addEventListener("contextmenu",t=>{t.preventDefault();let e=t.target;if("A"===e.tagName&&"#"!==e.getAttribute("href")){let r=new URL(e.getAttribute("href"),document.location.href),o=r.hash;o&&gsap.to(window,{duration:.5,scrollTo:{y:o,offsetY:-100}})}}),window.addEventListener("load",function(){let t=document.querySelector(".loader"),e=document.body;e.classList.add("no-scroll"),setTimeout(()=>{t.style.transform="scale(100)",t.style.opacity="0"},2e3),t.addEventListener("transitionend",()=>{t.style.display="none",e.classList.remove("no-scroll")})}),document.addEventListener("DOMContentLoaded",t=>{function e(t){let e="",r="",o=t.textContent,n;for(n=0;n<o.length;n++)e+=`
  <span char="${o[n]}" style="--totalChars:${o.length};--index:${n};--delay:${100*n}ms;--duration:${100*o.length}ms">
  ${o[n]}
  </span>`;r=`<div>${e}</div>`,t.innerHTML=r}function r(){document.querySelectorAll(".split-text").forEach(t=>{e(t)})}function o(){ScrollTrigger.normalizeScroll(!0),ScrollTrigger.defaults({ignoreMobileResize:!0}),gsap.registerPlugin(ScrollTrigger);let t=new LocomotiveScroll({el:document.querySelector("#main"),smooth:!0,smoothMobile:.1,inertia:.7,multiplier:.7});t.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy("#main",{scrollTop(e){return arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight}),pinType:document.querySelector("#main").style.transform?"transform":"fixed"}),ScrollTrigger.addEventListener("refresh",()=>t.update()),ScrollTrigger.refresh()}function n(){let t=!1,e=gsap.timeline(),r=gsap.timeline(),o=document.querySelector(".right_mobile_nav"),n=document.querySelector(".nav_line_1"),a=document.querySelector(".nav_line_2"),i=document.querySelector(".mobile_nav_");o.addEventListener("click",()=>{t?(t=!1,r.to(n,{transform:"rotate(0deg)"},"a").to(a,{transform:"rotate(0deg)"},"a").to(i,{right:"-100vw"})):(t=!0,e.to(n,{transform:"rotate(45deg)",zIndex:1e5},"a").to(a,{transform:"rotate(-45deg)",zIndex:1e5},"a").to(i,{right:0,ease:"bounce.out",duration:2.5}))})}r();let a={x:0,y:0},i=document.querySelectorAll(".circle");function l(){let t=a.x,e=a.y;i.forEach((r,o)=>{r.style.left=t-12+"px",r.style.top=e-12+"px",r.style.scale=(i.length-o)/i.length,r.x=t,r.y=e;let n=i[o+1]||i[0];t+=(n.x-t)*.2,e+=(n.y-e)*.2}),requestAnimationFrame(l)}i.forEach((t,e)=>{t.x=0,t.y=0}),document.addEventListener("mousemove",t=>{a.x=t.clientX,a.y=t.clientY}),document.addEventListener("touchmove",t=>{t.touches.length>0&&(a.x=t.touches[0].clientX,a.y=t.touches[0].clientY)}),l();let s=document.querySelector(".nav ");function $(){let t=gsap.timeline();t.to(".nav-img",{opacity:1,duration:1}),t.to(".nav-all",{left:"20%",opacity:1,duration:1},"a"),t.to(".nav-daily",{left:"75%",opacity:1,duration:1},"a"),t.to(".nav-shop",{left:"5%",duration:1,opacity:1},"b"),t.to(".nav-more",{left:"92%",opacity:1,duration:1},"b")}function g(){let t=window.matchMedia("(max-width: 600px)"),e=gsap.timeline({scrollTrigger:{trigger:".page2",scroller:"#main",toggleActions:"restart none none reverse",start:"top 0%",end:"top -80%",pin:!0,scrub:5}});e.to(".texts",{duration:1.2,opacity:0,scale:3}),t.matches?e.to(".page1img",{duration:3,top:"120%",rotate:370,left:"30%",scale:2}):e.to(".page1img",{duration:3,top:"120%",rotate:370,left:"55%",scale:1.5})}function c(){let t,e,r;e=(t=document.querySelector(".about2121")).textContent.split(""),r="",e.forEach(t=>{r+=`<span class='newtext'>${t}</span>`}),t.innerHTML=r;let o=window.matchMedia("(max-width: 600px)"),n=gsap.timeline({scrollTrigger:{trigger:".page3",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -20%",scrub:5}});n.from(".about2121 span",{duration:3,opacity:0,y:5,stagger:.1}),n.from(".Cyberstud21 span",{duration:2,opacity:0,y:5,stagger:.1},"-=0.5"),o.matches?n.to(".page1img",{duration:6,top:"220%",rotate:20,left:"40%",scale:1.5}):n.to(".page1img",{duration:6,top:"220%",rotate:20,left:"60%"});let a=gsap.timeline({scrollTrigger:{trigger:".page-about2",scroller:"#main",toggleActions:"restart none none reverse",start:"top 20%",end:"top -5%",scrub:5}});a.from(".text-about22 h3,.text-about22 p",{duration:2,opacity:0,y:100,stagger:.4})}function p(){let t=gsap.timeline({scrollTrigger:{trigger:".page4",scroller:"#main",toggleActions:"restart none none reverse",start:"top 0%",end:"top -80%",pin:!0,scrub:5}});t.to(".texts2",{duration:1.2,opacity:0,scale:3}),t.to(".page4img",{duration:3,top:"110%",rotate:370,left:"10%",scale:1.2})}function d(){let t,e,r;e=(t=document.querySelector(".top-text")).textContent.split(""),r="",e.forEach(t=>{r+=`<span class='newtext'>${t}</span>`}),t.innerHTML=r;let o,n,a;n=(o=document.querySelector(".top-text1")).textContent.split(""),a="",n.forEach(t=>{a+=`<span class='newtext'>${t}</span>`}),o.innerHTML=a;let i,l,s;l=(i=document.querySelector(".text-hrs")).textContent.split(""),s="",l.forEach(t=>{s+=`<span class='newtext'>${t}</span>`}),i.innerHTML=s;let $,g,c;g=($=document.querySelector(".text-fast")).textContent.split(""),c="",g.forEach(t=>{c+=`<span class='newtext'>${t}</span>`}),$.innerHTML=c;let p=gsap.timeline({scrollTrigger:{trigger:".page5",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -20%",scrub:5}}),d=window.matchMedia("(max-width: 600px)");p.from(".top-text span",{duration:3,opacity:0,y:5,stagger:.1},"a"),p.from(".top-text1 span",{duration:3,opacity:0,y:5,stagger:.1},"a"),p.from(".text-hrs span",{duration:3,opacity:0,y:5,stagger:.1},"a"),p.from(".text-fast span",{duration:3,opacity:0,y:5,stagger:.1},"a"),d.matches?p.to(".page4img",{duration:3,top:"220%",rotate:370,left:"30%",scale:2}):p.to(".page4img",{duration:3,top:"215%",rotate:370,left:"50%",scale:1.2})}function u(){var t;let e=document.querySelector(".text-70");t=e,console.log(t),gsap.to(t,{innerText:70,duration:5,scrollTrigger:{trigger:".centre-text",scroller:"#main",toggleActions:"restart none none reverse",start:"top 80%",end:"top 0%",scrub:5},onUpdate:function(){t.innerHTML=Math.ceil(this.targets()[0].innerText)}})}function m(){gsap.timeline({scrollTrigger:{trigger:".page6",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -20%",scrub:5}}),gsap.from(".page4img",{duration:3,rotateZ:500,repeat:-1,scrollTrigger:{trigger:".page6",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -20%"}})}function _(t){let e=0;for(e=0;e<this.event.target.children.length;e++)this.event.target.children[e].classList.add("disintegrate")}function y(){let t=window.matchMedia("(max-width: 600px)"),e=gsap.timeline({scrollTrigger:{scroller:"#main",trigger:".page7-a",start:"top 0%",end:"top -80%",scrub:5,pin:!0}});e.from(".Immersive h3",{y:100,opacity:0,duration:1,stagger:.2}),e.from(".Immersive h1",{y:80,duration:1.2,opacity:0},"0.5"),t.matches?e.to("#right-earbuds",{top:"130%",left:"30%",width:"30%"}):e.to("#right-earbuds",{top:"110%",left:"30%",width:"30%"});let r=gsap.timeline({scrollTrigger:{scroller:"#main",trigger:".page7-beatbox",start:"top 30%",end:"top -30%",scrub:5}});r.from(".img-text h1",{opacity:0,duration:1,y:40}),r.from(".actor-beat",{opacity:0,duration:1,y:400});let o=gsap.timeline({scrollTrigger:{scroller:"#main",trigger:".page7-b",start:"top 0%",end:"top -10%",scrub:5,pin:!0}});o.from(".touch-control h1",{y:80,duration:.8,stagger:.3,opacity:0}),o.from(".features h4,h3",{y:80,duration:.5,stagger:.1,opacity:0},"p7"),o.from(".features-left img",{y:100,opacity:0},"p7");gsap.timeline({scrollTrigger:{scroller:"#main",trigger:".page7-c",start:"top 0%",end:"top -10%",scrub:5,pin:!0}}).from(".quick h1",{y:100,opacity:0,stagger:.3,duration:1})}function f(){let t=gsap.timeline({scrollTrigger:{trigger:".page8",scroller:"#main",toggleActions:"restart none none reverse",start:"top 00%",end:"top -100%",scrub:5,pin:!0}});t.from(".page8h1 span",{y:100,opacity:0,duration:1,stagger:.2}),t.from(".page8p span",{y:100,opacity:0,duration:1,stagger:.2}),t.from(".page_8_imgs",{duration:1,y:500,opacity:0})}function h(){let t=gsap.timeline({scrollTrigger:{trigger:".page9",scroller:"#main",toggleActions:"restart none none reverse",start:"top 00%",end:"top -100%",scrub:5,pin:!0}});t.to(".page9-img1",{duration:1,y:-500},"a"),t.to(".page9-img2",{duration:1,y:1e3},"a"),t.to(".page_9_text",{duration:1,scale:9},"b"),t.to(".page9",{duration:1,backgroundColor:"#000"},"b")}function x(){let t=gsap.timeline({scrollTrigger:{trigger:".page_11",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -10%",scrub:5}});t.from(".page11text span",{duration:1,y:100,opacity:0,stagger:.2}),gsap.from(".page12text span",{duration:1,y:100,opacity:0,stagger:.2,scrollTrigger:{trigger:".page_12",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -10%",scrub:5}}),gsap.from(".page13text span",{duration:1,y:100,opacity:0,stagger:.2,scrollTrigger:{trigger:".page_13",scroller:"#main",toggleActions:"restart none none reverse",start:"top 50%",end:"top -10%",scrub:5}})}s.addEventListener("mouseenter",()=>{gsap.to(i,{scale:2,duration:.5})}),s.addEventListener("mouseleave",()=>{gsap.to(i,{scale:1,duration:.5})}),o(),n(),$(),g(),c(),p(),d(),m(),y(),f(),h(),x(),u()});