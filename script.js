const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

// Music control
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "⏸ Music";
    } else {
        music.pause();
        musicBtn.innerText = "🎵 Music";
    }
});

// Floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "50";
    heart.style.opacity = "0.8";
    heart.style.animation = `floatUp ${3 + Math.random() * 2}s ease-in forwards`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

// Add CSS animation for floating hearts
const style = document.createElement("style");
style.innerHTML = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0.5);
            opacity: 0;
        }
    }

    @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
`;
document.head.appendChild(style);

// Create hearts at intervals
setInterval(createFloatingHeart, 1500);

// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('photo').scrollIntoView({ behavior: 'smooth' });
});

// Add subtle parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});