// document.addEventListener('DOMContentLoaded', () => {
//     const gradient = document.querySelector('.gradient');
//     const blueColor = 'skyblue';
//     gradient.style.background = `linear-gradient(to bottom, ${blueColor}, white)`;
// });

// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.section-content, .project-card, .skill-tag');
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

fadeInElements.forEach(element => fadeInObserver.observe(element));

// Navbar scroll effect
const navbar = document.querySelector('.nav-container');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 50; // Adjust this value as needed
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ASCII Art hidden as an Easter Egg
const wweAsciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⡖⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢾⣿⡏⠟⢀⣾⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣨⣿⣷⣾⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣏⡉⠙⢿⣿⡿⠋⢩⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠈⡏⢋⠀⠀⠉⠀⠀⠈⢿⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⢸⡔⠒⠀⢀⠀⣶⣶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡥⠖⠈⠁⣸⢤⢋⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣀⣀⣀⠵⠋⠀⠀⣷⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠿⣅⠀⠀⠀⢠⠃⢀⣈⣓⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⣿⠀⢤⠀⠀⣰⣣⣞⠋⠉⠀⠳⡈⠧⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡖⠚⠛⢛⣦⠖⠒⡻⢸⠁⠄⣼⠄⣰⢿⠗⠂⠀⠀⠀⠀⠱⣄⠀⠉⠢⡀⠀⠀⠀
⠀⠀⢰⠁⠀⠀⠠⢬⣢⠊⠀⢸⠀⢠⠃⢠⠃⠈⠳⢄⠀⠀⠀⠀⡠⣷⣳⡀⠀⢹⠀⠀⠀
⠀⢠⡏⠀⠀⠀⡤⠞⡁⠀⠀⢸⡀⠈⣦⠋⠀⠀⠀⠀⠙⠒⣤⣾⣿⣿⣷⣱⣄⣀⡇⠀⠀
⠀⣼⣿⣄⣀⣴⢁⣰⠀⠀⠀⠀⣇⢸⡏⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣧⠻⣿⣷⠀⠀
⢠⢿⣿⣿⣿⣏⠁⢹⠀⠀⠀⠀⢸⣾⡁⠀⠀⠀⠀⠀⠀⠀⣰⡟⣿⣿⣿⣿⣧⣿⣿⠀⠀
⣾⣼⣿⣿⣧⢸⠀⠘⣷⡀⠀⠀⢸⣽⠓⠤⡲⣄⣀⣀⡠⠞⠁⣿⠿⠿⠿⠛⠁⠘⠈⢦⠀
⣼⢻⠻⠿⠟⠋⡇⢀⡼⣟⣶⡞⠙⡿⠀⠀⠀⢀⡈⠁⠀⣠⠞⢹⠀⠀⠀⠀⠀⠀⠀⢸⠄
⢸⡞⠀⠀⠀⠀⢰⠎⡰⢻⡏⡠⠀⡇⠀⠀⠉⠁⠀⠀⣠⠟⢲⣼⡄⠀⠀⠀⠀⠀⡇⢸⠄
⠈⡇⠀⠀⠀⠀⢚⡴⠁⠀⣿⠁⠀⢱⠀⢀⣀⣀⡤⠀⠁⠠⠊⢸⣿⣄⠀⠀⠀⠀⢸⠏⠀
⠀⠙⢄⣀⣀⡠⠊⠀⠀⠀⣿⣆⡀⠸⠀⠀⠀⠀⠀⡀⠀⠀⠀⠋⢸⡏⠱⠤⢤⠴⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⢥⡀⠀⢦⠀⠉⠉⢉⡴⠀⠀⠀⠀⣼⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡸⡍⠀⠘⠃⠀⠀⠎⠀⠀⠀⣠⠾⠃⣻⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⢿⢧⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣾⣿⣷⣦⣿⣶⣷⣽⣿⣿⡿⠿⠟⠛⠛⠉⢇⠀⠀⠀⠀⠀
`;

console.log(wweAsciiArt);

// Animated skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('animate-fade-in');
});

// Logo animation
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mouseenter', () => {
    const paths = logo.querySelectorAll('.logo-path');
    paths.forEach(path => {
        path.style.strokeDashoffset = '1000';
        path.style.animation = 'none';
        path.offsetHeight; // Trigger reflow
        path.style.animation = 'drawPath 2s ease-out forwards';
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scroll * 0.5}px`;
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const tags = card.querySelectorAll('.project-tag');
        tags.forEach((tag, index) => {
            tag.style.transitionDelay = `${index * 0.1}s`;
            tag.style.transform = 'translateY(-5px)';
        });
    });
    
    card.addEventListener('mouseleave', () => {
        const tags = card.querySelectorAll('.project-tag');
        tags.forEach(tag => {
            tag.style.transitionDelay = '0s';
            tag.style.transform = '';
        });
    });
});

// Typing animation configuration
const textVariations = [
    { text: "Ben Platt", font: "'Inter', sans-serif", delay: 100 }
];

const additionalVariations = [
    { text: "ベン・プラット", font: "'Noto Sans JP', sans-serif", delay: 100 },
    { text: "benPlatt;", font: "'Source Code Pro', monospace", delay: 100 },
    { text: "bxnplxtt", font: "'Source Code Pro', monospace", delay: 100, class: 'text-glitch' },
    { text: "｛Ben.Platt｝", font: "'Source Code Pro', monospace", delay: 100 },
    { text: "< benplatt.dev />", font: "'Roboto Mono', monospace", delay: 100 },
    { text: "console.log('Ben Platt');", font: "'Source Code Pro', monospace", delay: 100 },
    { text: "And his name is... BEN PLATT!", font: "'Source Code Pro', sans-serif", delay: 100, class: 'text-glitch' },
];

class TypingAnimation {
    constructor(element, variations) {
        this.element = element;
        // Start with Ben Platt, then add shuffled additional variations
        this.variations = [...variations, ...this.shuffleArray([...additionalVariations])];
        this.currentIndex = 0;
        this.isDeleting = false;
        this.currentText = '';
        this.updateFontSize();
        window.addEventListener('resize', () => this.updateFontSize());
        this.tick();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    updateFontSize() {
        const container = this.element.parentElement;
        const containerWidth = container.offsetWidth;
        
        // Set base font size based on screen width
        const vw = Math.min(window.innerWidth, 1200) / 100;
        let fontSize = Math.min(6, Math.max(2, vw * 4));
        
        if (window.innerWidth <= 480) {
            fontSize = Math.min(fontSize, 3);
        } else if (window.innerWidth <= 768) {
            fontSize = Math.min(fontSize, 4);
        }
        
        this.element.style.fontSize = `${fontSize}rem`;
        
        // Check if text needs to wrap
        const text = this.element.textContent;
        if (text.length > 25) {
            const midPoint = Math.floor(text.length / 2);
            let breakPoint = text.lastIndexOf(' ', midPoint);
            if (breakPoint === -1) {
                breakPoint = text.indexOf(' ', midPoint);
            }
            
            if (breakPoint !== -1) {
                const firstLine = text.substring(0, breakPoint);
                const secondLine = text.substring(breakPoint + 1);
                this.element.textContent = `${firstLine}\n${secondLine}`;
            }
        }
    }

    tick() {
        if (!this.element || !document.body.contains(this.element)) {
            return;
        }

        const currentVariation = this.variations[this.currentIndex];
        const { text, font, rtl } = currentVariation;
        const delay = currentVariation.delay || 100;

        // Update element styles
        this.element.style.fontFamily = font;
        this.element.style.direction = rtl ? 'rtl' : 'ltr';
        
        // Remove previous variation classes
        this.element.classList.remove('text-glitch', 'text-retro', 'text-scare');
        
        // Add new variation class if specified
        if (currentVariation.class) {
            this.element.classList.add(currentVariation.class);
        }

        // Handle text update
        if (this.isDeleting) {
            this.currentText = this.currentText.slice(0, -1);
        } else {
            if (this.currentText.length === text.length && text.length > 25) {
                const midPoint = Math.floor(text.length / 2);
                let breakPoint = text.lastIndexOf(' ', midPoint);
                if (breakPoint === -1) {
                    breakPoint = text.indexOf(' ', midPoint);
                }
                
                if (breakPoint !== -1) {
                    const firstLine = text.substring(0, breakPoint);
                    const secondLine = text.substring(breakPoint + 1);
                    this.currentText = `${firstLine}\n${secondLine}`;
                }
            } else {
                this.currentText = text.substring(0, this.currentText.length + 1);
            }
        }

        // Update text
        this.element.textContent = this.currentText;
        this.updateFontSize();

        // Calculate next tick timing
        let delta = delay;
        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.currentText === text) {
            delta = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentIndex = (this.currentIndex + 1) % this.variations.length;
            if (this.currentIndex === 0) {
                this.variations = [...textVariations, ...this.shuffleArray([...additionalVariations])];
            }
            delta = 500;
        }

        setTimeout(() => {
            if (this.element && document.body.contains(this.element)) {
                requestAnimationFrame(() => this.tick());
            }
        }, delta);
    }

    // Start the animation
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.tick();
        }
    }

    // Stop the animation
    stop() {
        this.isRunning = false;
    }
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    new TypingAnimation(dynamicText, textVariations);
});

// JavaScript for Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link'); // Get all links inside the nav-menu

    // Toggle the sliding menu visibility when the hamburger menu is clicked
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Close the menu when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open'); // Close the menu
        });
    });
});