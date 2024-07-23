// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const clickSound = document.getElementById('clickSound');

// // Set canvas size to fill the window
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Array to store particles
// let particles = [];
// let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// // Function to initialize the canvas and particles
// function setup() {
//     // Set up initial particles
//     const initialParticleCount = 100;
//     for (let i = 0; i < initialParticleCount; i++) {
//         particles.push(createParticle());
//     }

//     // Add mouse move event listener
//     window.addEventListener('mousemove', function(e) {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//     });

//     // Add touch move event listener
//     window.addEventListener('touchmove', function(e) {
//         e.preventDefault(); // Prevent default touch behavior (like scrolling)
//         const touch = e.touches[0];
//         mouse.x = touch.clientX;
//         mouse.y = touch.clientY;
//     });

//     // Add click event listener
//     window.addEventListener('click', function(e) {
//         handleClick(e.clientX, e.clientY);
//     });

//     // Add touch start event listener
//     window.addEventListener('touchstart', function(e) {
//         e.preventDefault(); // Prevent default touch behavior (like scrolling)
//         const touch = e.touches[0];
//         handleClick(touch.clientX, touch.clientY);
//     });

//     // Handle window resize
//     window.addEventListener('resize', handleResize);
// }

// // Function to handle click and touch start events
// function handleClick(x, y) {
//     // Play click sound
//     clickSound.currentTime = 0;
//     clickSound.play();

//     const burstCount = 20;
//     for (let i = 0; i < burstCount; i++) {
//         particles.push(createParticle(x, y));
//     }
// }

// // Function to create a particle with random color and size
// function createParticle(x = Math.random() * canvas.width, y = Math.random() * canvas.height) {
//     const initialSpeed = 2;
//     const maxSpeed = 4;
//     const minRadius = 2;
//     const maxRadius = 6;
//     return {
//         x,
//         y,
//         radius: Math.random() * (maxRadius - minRadius) + minRadius,
//         color: getRandomColor(),
//         speedX: Math.random() * (maxSpeed * 2) - maxSpeed,
//         speedY: Math.random() * (maxSpeed * 2) - maxSpeed,
//         friction: 0.98,
//         alpha: 1,
//         decay: 0.01,
//         age: 0,
//         maxAge: Math.random() * 100 + 200
//     };
// }

// // Function to generate a random color
// function getRandomColor() {
//     const minColor = 50;
//     const colorRange = 205;
//     const r = Math.floor(Math.random() * colorRange) + minColor;
//     const g = Math.floor(Math.random() * colorRange) + minColor;
//     const b = Math.floor(Math.random() * colorRange) + minColor;
//     return { r, g, b };
// }

// // Function to interpolate between two colors
// function interpolateColor(color1, color2, factor) {
//     const r = Math.round(color1.r + factor * (color2.r - color1.r));
//     const g = Math.round(color1.g + factor * (color2.g - color1.g));
//     const b = Math.round(color1.b + factor * (color2.b - color1.b));
//     return { r, g, b };
// }

// // Function to draw particles on the canvas
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     particles.forEach((particle, index) => {
//         // Calculate the distance to the mouse
//         const dx = mouse.x - particle.x;
//         const dy = mouse.y - particle.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const gravity = 1 / (distance + 1);

//         // Apply gravitational pull towards the mouse
//         particle.speedX += gravity * dx * 0.2;
//         particle.speedY += gravity * dy * 0.2;

//         // Update particle position
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         // Apply friction to slow down particle
//         particle.speedX *= particle.friction;
//         particle.speedY *= particle.friction;

//         // Update particle properties
//         particle.alpha -= particle.decay;
//         particle.radius *= 0.98;
//         particle.age++;

//         // Interpolate color based on particle's age
//         const colorFactor = particle.age / particle.maxAge;
//         const startColor = { r: 211, g: 1, b: 1 }; // Start color
//         const endColor = particle.color; // End color (particle's random color)
//         const currentColor = interpolateColor(startColor, endColor, colorFactor);

//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${particle.alpha})`;
//         ctx.fill();

//         // Remove particle if it becomes too old, too small, or fully transparent
//         if (particle.radius <= 0.5 || particle.alpha <= 0 || particle.age >= particle.maxAge) {
//             particles.splice(index, 1);
//         }
//     });

//     requestAnimationFrame(draw);
// }

// // Function to handle window resize
// function handleResize() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }

// // Initialize canvas setup and start drawing
// setup();
// draw();
const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),clickSound=document.getElementById("clickSound");canvas.width=window.innerWidth,canvas.height=window.innerHeight;let particles=[],mouse={x:canvas.width/2,y:canvas.height/2};function setup(){for(let e=0;e<100;e++)particles.push(createParticle());window.addEventListener("mousemove",function(e){mouse.x=e.clientX,mouse.y=e.clientY}),window.addEventListener("touchmove",function(e){e.preventDefault();let t=e.touches[0];mouse.x=t.clientX,mouse.y=t.clientY}),window.addEventListener("click",function(e){handleClick(e.clientX,e.clientY)}),window.addEventListener("touchstart",function(e){e.preventDefault();let t=e.touches[0];handleClick(t.clientX,t.clientY)}),window.addEventListener("resize",handleResize)}function handleClick(e,t){clickSound.currentTime=0,clickSound.play();for(let n=0;n<20;n++)particles.push(createParticle(e,t))}function createParticle(e=Math.random()*canvas.width,t=Math.random()*canvas.height){return{x:e,y:t,radius:4*Math.random()+2,color:getRandomColor(),speedX:8*Math.random()-4,speedY:8*Math.random()-4,friction:.98,alpha:1,decay:.01,age:0,maxAge:100*Math.random()+200}}function getRandomColor(){return{r:Math.floor(205*Math.random())+50,g:Math.floor(205*Math.random())+50,b:Math.floor(205*Math.random())+50}}function interpolateColor(e,t,n){let a=Math.round(e.r+n*(t.r-e.r)),c=Math.round(e.g+n*(t.g-e.g)),i=Math.round(e.b+n*(t.b-e.b));return{r:a,g:c,b:i}}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height),particles.forEach((e,t)=>{let n=mouse.x-e.x,a=mouse.y-e.y,c=1/(Math.sqrt(n*n+a*a)+1);e.speedX+=c*n*.2,e.speedY+=c*a*.2,e.x+=e.speedX,e.y+=e.speedY,e.speedX*=e.friction,e.speedY*=e.friction,e.alpha-=e.decay,e.radius*=.98,e.age++;let i=e.age/e.maxAge,r=e.color,o=interpolateColor({r:211,g:1,b:1},r,i);ctx.beginPath(),ctx.arc(e.x,e.y,e.radius,0,2*Math.PI),ctx.fillStyle=`rgba(${o.r}, ${o.g}, ${o.b}, ${e.alpha})`,ctx.fill(),(e.radius<=.5||e.alpha<=0||e.age>=e.maxAge)&&particles.splice(t,1)}),requestAnimationFrame(draw)}function handleResize(){canvas.width=window.innerWidth,canvas.height=window.innerHeight}setup(),draw();