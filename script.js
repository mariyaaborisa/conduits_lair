// ===================================
// Femme Tech Futuristic Interactive Elements
// ===================================

// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random size
        const size = Math.random() * 4 + 1;

        // Random animation duration
        const duration = Math.random() * 20 + 10;

        // Random delay
        const delay = Math.random() * 5;

        // Random color from our palette
        const colors = [
            'rgba(255, 0, 110, 0.5)',
            'rgba(131, 56, 236, 0.5)',
            'rgba(6, 255, 165, 0.5)',
            'rgba(58, 134, 255, 0.5)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            animation: float-particle ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;

        particlesContainer.appendChild(particle);
    }
}

// Add particle float animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 1, 24, 0.95)';
        nav.style.boxShadow = '0 10px 40px rgba(131, 56, 236, 0.2)';
    } else {
        nav.style.background = 'rgba(10, 1, 24, 0.8)';
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards and philosophy points
const animateElements = document.querySelectorAll('.service-card, .point, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add sparkle effect on hover for buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        createSparkles(e.target);
    });
});

function createSparkles(element) {
    const sparkleCount = 5;
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        sparkle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle-fade 0.6s ease-out forwards;
        `;

        element.style.position = 'relative';
        element.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 600);
    }
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(1) translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Create orbiting particles for philosophy section
function createOrbitParticles() {
    const orbits = document.querySelectorAll('.orbit');

    orbits.forEach((orbit, index) => {
        const particle = document.createElement('div');
        const size = 10;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: linear-gradient(135deg, rgba(255, 0, 110, 0.8), rgba(131, 56, 236, 0.8));
            border-radius: 50%;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
        `;

        orbit.appendChild(particle);
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Add parallax effect to floating cards
window.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach((card, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;

        card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Add glow effect on scroll
const glowElements = document.querySelectorAll('.service-card, .contact-content');

window.addEventListener('scroll', () => {
    glowElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
            const glowIntensity = Math.min(scrollProgress, 1);

            if (el.classList.contains('service-card')) {
                el.style.boxShadow = `0 0 ${40 * glowIntensity}px rgba(131, 56, 236, ${0.3 * glowIntensity})`;
            }
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createOrbitParticles();

    // Add a subtle gradient animation to the background
    document.body.style.animation = 'gradient-bg 15s ease infinite';

    const bgStyle = document.createElement('style');
    bgStyle.textContent = `
        @keyframes gradient-bg {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }
    `;
    document.head.appendChild(bgStyle);
});

// Add cursor trail effect
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');

    trail.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: radial-gradient(circle, rgba(6, 255, 165, 0.6), transparent);
        border-radius: 50%;
        pointer-events: none;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transform: translate(-50%, -50%);
        animation: trail-fade 0.5s ease-out forwards;
        z-index: 9999;
    `;

    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 500);

    lastX = e.clientX;
    lastY = e.clientY;
});

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trail-fade {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(trailStyle);

// Console easter egg
console.log('%c✨ Liberation Designer ', 'background: linear-gradient(135deg, #ff006e, #8338ec); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold;');
console.log('%cFractional CISO/CIO services with a futuristic edge 🚀', 'color: #06ffa5; font-size: 14px;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #b8b8d1; font-size: 12px;');
