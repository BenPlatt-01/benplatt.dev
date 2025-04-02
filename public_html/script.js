// Debounced Scroll Event Listener
let scrollTimeout;
const navbar = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 50);
    });
});

// Smooth Scrolling with optimized event delegation
document.body.addEventListener('click', (e) => {
    if (e.target && e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Get the navbar height (adjust this value if necessary)
            const navbarHeight = document.querySelector('.nav-container').offsetHeight;

            // Scroll to the target element with an offset for the navbar
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,  // Adjust for the navbar height
                behavior: 'smooth'
            });
        }
    }
});


// Intersection Observer for fade-in animations with minimal threshold
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-content, .project-card, .skill-tag').forEach(element => fadeInObserver.observe(element));

// Optimized Typing Animation
class TypingAnimation {
    constructor(element) {
        this.element = element;
        this.text = '';
        this.targetText = "Ben Platt";
        this.element.style.fontFamily = "'Inter', sans-serif";
        this.element.classList.add('typing-text');
        this.processNextCharacter();
    }

    processNextCharacter() {
        if (this.text.length < this.targetText.length) {
            this.text = this.targetText.slice(0, this.text.length + 1);
            this.element.textContent = this.text;
            setTimeout(() => this.processNextCharacter(), 150);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    if (dynamicText) {
        new TypingAnimation(dynamicText);
    }
});

// Parallax effect with performance optimization
const hero = document.querySelector('.hero');
let parallaxTimeout;

window.addEventListener('scroll', () => {
    if (parallaxTimeout) {
        cancelAnimationFrame(parallaxTimeout);
    }

    parallaxTimeout = requestAnimationFrame(() => {
        hero.style.backgroundPosition = `center ${window.pageYOffset * 0.5}px`;
    });
});

// Project Cards Hover Effect with optimized transitions
document.querySelectorAll('.project-card').forEach(card => {
    const handleHover = (isEnter) => {
        card.querySelectorAll('.project-tag').forEach((tag, index) => {
            tag.style.transitionDelay = isEnter ? `${index * 0.1}s` : '0s';
            tag.style.transform = isEnter ? 'translateY(-5px)' : '';
        });
    };

    card.addEventListener('mouseenter', () => handleHover(true));
    card.addEventListener('mouseleave', () => handleHover(false));
});

// Optimized Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    let isAnimating = false;

    if (!hamburgerMenu || !navLinks) return;

    const toggleMenu = (show) => {
        if (isAnimating) return;
        isAnimating = true;

        hamburgerMenu.classList.toggle('active', show);
        navLinks.classList.toggle('nav-active', show);

        setTimeout(() => isAnimating = false, 300);
    };

    hamburgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu(!navLinks.classList.contains('nav-active'));
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('nav-active') && 
            !hamburgerMenu.contains(e.target) && 
            !navLinks.contains(e.target)) {
            toggleMenu(false);
        }
    });
});

// Optimized Theme Toggle with Smooth Transitions
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const root = document.documentElement;

    themeToggle.addEventListener("click", () => {
        const isDarkMode = root.getAttribute("data-theme") === "dark";

        // Add transition effect for smooth color change
        document.body.style.transition = "background-color 1s ease, color 1s ease";
        
        // Toggle theme
        root.setAttribute("data-theme", isDarkMode ? "light" : "dark");

        // Ensure all elements transition smoothly
        document.querySelectorAll("*").forEach(el => {
            el.style.transition = "background-color 1s ease, color 1s ease, border-color 1s ease";
        });

        // Remove transition after it's done (to avoid issues in future changes)
        setTimeout(() => {
            document.body.style.transition = "";
            document.querySelectorAll("*").forEach(el => el.style.transition = "");
        }, 1000); // Matches transition duration
    });
});

// Optimized Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    requestAnimationFrame(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (window.innerWidth <= 768) {
                    entry.target.style.transitionDuration = '0.4s';
                }
                observer.unobserve(entry.target);
            }
        });
    });
}, observerOptions);

function initScrollAnimations() {
    const elements = document.querySelectorAll('.section-content, .project-card, .education-item, .contact-content');
    const isMobile = window.innerWidth <= 768;

    elements.forEach(element => {
        element.style.willChange = 'opacity, transform';
        if (isMobile) {
            element.style.transitionDuration = '0.4s';
        }
        observer.observe(element);

        element.addEventListener('transitionend', () => {
            element.style.willChange = 'auto';
        }, { once: true });
    });
}

let resizeTimeout;
window.addEventListener('resize', () => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initScrollAnimations, 250);
});

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Get the logo and the image inside the logo
const logo = document.querySelector('.nav-logo');
const logoImage = logo.querySelector('.logo-img');

// The source of the wrestler gif
const wrestlerGif = 'images/wrestler-gif.gif'; // Replace with the actual path to your gif

// Boolean to track if the gif is showing (for mobile)
let isGifVisible = false;

// Function to change the logo to the wrestler gif
const showWrestlerGif = () => {
  logoImage.src = wrestlerGif;  // Replace the logo with the gif
  isGifVisible = true;
};

// Function to revert the logo back to the original
const hideWrestlerGif = () => {
  logoImage.src = 'images/logo_svg.svg';  // Replace with the path to your original logo
  isGifVisible = false;
};

// Desktop: Change to wrestler gif on hover
logo.addEventListener('mouseenter', () => {
  showWrestlerGif();
});

// Desktop: Revert back when hover ends
logo.addEventListener('mouseleave', () => {
  hideWrestlerGif();
});

// Mobile: Change to wrestler gif on tap (click or touchstart)
logo.addEventListener('click', (e) => {
  e.preventDefault();  // Prevent the default link action
  
  if (isGifVisible) {
    hideWrestlerGif();  // If the gif is showing, revert back to the logo
  } else {
    showWrestlerGif();  // Otherwise, show the wrestler gif
  }
});

// Mobile: In case of touchstart (for devices where hover doesn't exist)
logo.addEventListener('touchstart', (e) => {
  e.preventDefault();  // Prevent the default link action
  
  if (isGifVisible) {
    hideWrestlerGif();  // Revert back to the logo on tap
  } else {
    showWrestlerGif();  // Show the wrestler gif on tap
  }
});

