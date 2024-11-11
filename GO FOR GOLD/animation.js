// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar animations
const navAnimation = () => {
    const navbar = document.querySelector('.navbar');
    
    gsap.fromTo(navbar, {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    });
};

// Hero section animations
const heroAnimation = () => {
    const tl = gsap.timeline();
    
    // Matrix canvas fade in
    tl.fromTo('#matrix-canvas', {
        opacity: 0
    }, {
        opacity: 1,
        duration: 2
    });

    // Typing effect for main title
    const title = document.querySelector('.typing-text');
    const text = title.textContent;
    title.textContent = '';
    
    tl.to(title, {
        opacity: 1,
        duration: 0.1
    });

    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = 0;
        title.appendChild(span);
        
        tl.to(span, {
            opacity: 1,
            duration: 0.1,
            ease: 'none'
        }, index * 0.1);
    });

    // Subtitle and button animations
    tl.fromTo('.subtitle', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .fromTo('.hero .cta-button', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7');
};

// About section scroll animation
const aboutAnimation = () => {
    gsap.fromTo('.about-content', {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        }
    });
};

// Coaches carousel animation
const coachesAnimation = () => {
    const cards = gsap.utils.toArray('.coach-card');
    
    cards.forEach((card, i) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: '.coaches',
                start: 'top center',
                toggleActions: 'play none none reverse'
            }
        });
    });
};

// Schedule path animation
const scheduleAnimation = () => {
    const milestones = gsap.utils.toArray('.milestone');
    
    // Create path animation
    gsap.to('.path-line', {
        height: '100%',
        duration: 2,
        scrollTrigger: {
            trigger: '.path',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });

    // Animate each milestone
    milestones.forEach((milestone, i) => {
        gsap.fromTo(milestone, {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: milestone,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }
        });
    });
};

// Resources section animation
const resourcesAnimation = () => {
    const resources = gsap.utils.toArray('.resource-item');
    
    resources.forEach((resource, i) => {
        gsap.fromTo(resource, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: '.resources',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    });
};

// Partners section animation
const partnersAnimation = () => {
    const partners = gsap.utils.toArray('.partner-card');
    
    partners.forEach((partner, i) => {
        gsap.fromTo(partner, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.3,
            scrollTrigger: {
                trigger: '.partners',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    });
};

// Initialize all animations
const initAnimations = () => {
    navAnimation();
    heroAnimation();
    aboutAnimation();
    coachesAnimation();
    scheduleAnimation();
    resourcesAnimation();
    partnersAnimation();
};

// Run animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);