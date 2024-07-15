const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store particles
let particles = [];
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// Function to initialize the canvas and particles
function setup() {
    // Set up initial particles
    const initialParticleCount = 100;
    for (let i = 0; i < initialParticleCount; i++) {
        particles.push(createParticle());
    }

    // Add mouse move event listener
    window.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('touchmove', function(e) {
        e.preventDefault(); // Prevent default touch behavior (like scrolling)
        updateTouchPosition(e);
    });

    window.addEventListener('click', function(e) {
        const burstCount = 20;
        for (let i = 0; i < burstCount; i++) {
            particles.push(createParticle(e.clientX, e.clientY));
        }
    });

    // Handle window resize
    window.addEventListener('resize', handleResize);
}

// Function to create a particle with random color and size
function createParticle(x = Math.random() * canvas.width, y = Math.random() * canvas.height) {
    const initialSpeed = 2;
    const maxSpeed = 4;
    const minRadius = 2;
    const maxRadius = 6;
    return {
        x,
        y,
        radius: Math.random() * (maxRadius - minRadius) + minRadius,
        color: getRandomColor(),
        speedX: Math.random() * (maxSpeed * 2) - maxSpeed,
        speedY: Math.random() * (maxSpeed * 2) - maxSpeed,
        friction: 0.98,
        alpha: 1,
        decay: 0.01,
        age: 0,
        maxAge: Math.random() * 100 + 200
    };
}

// Function to generate a random color
function getRandomColor() {
    const minColor = 50;
    const colorRange = 205;
    const r = Math.floor(Math.random() * colorRange) + minColor;
    const g = Math.floor(Math.random() * colorRange) + minColor;
    const b = Math.floor(Math.random() * colorRange) + minColor;
    return { r, g, b };
}

// Function to interpolate between two colors
function interpolateColor(color1, color2, factor) {
    const r = Math.round(color1.r + factor * (color2.r - color1.r));
    const g = Math.round(color1.g + factor * (color2.g - color1.g));
    const b = Math.round(color1.b + factor * (color2.b - color1.b));
    return { r, g, b };
}

// Function to draw particles on the canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        // Calculate the distance to the mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const gravity = 1 / (distance + 1);

        // Apply gravitational pull towards the mouse
        particle.speedX += gravity * dx * 0.2 ;
        particle.speedY += gravity * dy * 0.2 ;

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Apply friction to slow down particle
        particle.speedX *= particle.friction;
        particle.speedY *= particle.friction;

        // Update particle properties
        particle.alpha -= particle.decay;
        particle.radius *= 0.98;
        particle.age++;

        // Interpolate color based on particle's age
        const colorFactor = particle.age / particle.maxAge;
        const startColor = { r: 211, g: 1, b: 1 }; // Start color
        const endColor = particle.color; // End color (particle's random color)
        const currentColor = interpolateColor(startColor, endColor, colorFactor);

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${particle.alpha})`;
        ctx.fill();

        // Remove particle if it becomes too old, too small, or fully transparent
        if (particle.radius <= 0.5 || particle.alpha <= 0 || particle.age >= particle.maxAge) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(draw);
}

// Function to handle window resize
function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initialize canvas setup and start drawing
setup();
draw();
