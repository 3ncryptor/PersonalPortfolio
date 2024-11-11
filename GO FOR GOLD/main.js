// Coaches data
const coachesData = [
    {
        name: "Dr. Rajesh Kumar",
        achievement: "IOI Gold Medalist",
        bio: "Former IOI winner with 10+ years of coaching experience",
        image: "placeholder.jpg"
    },
    {
        name: "Priya Sharma",
        achievement: "ICPC World Finalist",
        bio: "Led multiple teams to ICPC World Finals",
        image: "placeholder.jpg"
    },
    {
        name: "Amit Patel",
        achievement: "Google Code Jam Finalist",
        bio: "Competitive programming expert and mentor",
        image: "placeholder.jpg"
    },
    {
        name: "Sarah Johnson",
        achievement: "IOI Silver Medalist",
        bio: "Specializes in algorithmic problem solving",
        image: "placeholder.jpg"
    },
    {
        name: "Dr. Mike Chen",
        achievement: "ACM ICPC Coach",
        bio: "Trained multiple national champions",
        image: "placeholder.jpg"
    },
    {
        name: "Anita Desai",
        achievement: "Facebook Hacker Cup Finalist",
        bio: "Expert in advanced algorithms",
        image: "placeholder.jpg"
    },
    {
        name: "David Wilson",
        achievement: "Codeforces Grandmaster",
        bio: "Top-rated competitive programmer",
        image: "placeholder.jpg"
    },
    {
        name: "Neha Gupta",
        achievement: "IOI Training Camp Lead",
        bio: "Specializes in training young programmers",
        image: "placeholder.jpg"
    },
    {
        name: "Alex Thompson",
        achievement: "ICPC Regional Champion",
        bio: "Expert in problem-solving strategies",
        image: "placeholder.jpg"
    },
    {
        name: "Ravi Shankar",
        achievement: "IMO Gold Medalist",
        bio: "Mathematics and algorithms specialist",
        image: "placeholder.jpg"
    }
];

// Schedule data
const scheduleData = [
    {
        day: 1,
        title: "Introduction to Competitive Programming",
        description: "Foundation concepts and problem-solving strategies"
    },
    {
        day: 2,
        title: "Dynamic Programming Techniques",
        description: "Advanced DP concepts and applications"
    },
    {
        day: 3,
        title: "Graph Theory Essentials",
        description: "Complex graph algorithms and implementations"
    },
    {
        day: 4,
        title: "Mock Contest I",
        description: "Practice contest with real-time feedback"
    },
    {
        day: 5,
        title: "Advanced Algorithms",
        description: "Specialized algorithms and optimization techniques"
    },
    {
        day: 6,
        title: "Final Preparations",
        description: "Strategy session and problem solving"
    },
    {
        day: 7,
        title: "Mock Contest II",
        description: "Final contest and closing ceremony"
    }
];

// Generate coaches carousel
const generateCoaches = () => {
    const container = document.querySelector('.coaches-carousel');
    
    coachesData.forEach(coach => {
        const card = document.createElement('div');
        card.className = 'coach-card';
        
        card.innerHTML = `
            <div class="coach-image">
                <img src="${coach.image}" alt="${coach.name}">
            </div>
            <div class="coach-info">
                <h3>${coach.name}</h3>
                <p class="achievement">${coach.achievement}</p>
                <p class="bio">${coach.bio}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
};

// Generate schedule path
const generateSchedulePath = () => {
    const pathContainer = document.querySelector('.path');
    
    // Create zigzag path
    const pathSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    pathSVG.setAttribute("viewBox", "0 0 1000 2000");
    pathSVG.classList.add("schedule-path-svg");
    
    // Create path element
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathData = "M100,0 C200,100 100,200 200,300 C300,400 200,500 300,600 " +
                     "C400,700 300,800 400,900 C500,1000 400,1100 500,1200 " +
                     "C600,1300 500,1400 600,1500 C700,1600 600,1700 700,1800";
    
    path.setAttribute("d", pathData);
    path.classList.add("schedule-path");
    pathSVG.appendChild(path);
    pathContainer.appendChild(pathSVG);
    
    // Add milestones
    scheduleData.forEach((milestone, index) => {
        const element = document.createElement('div');
        element.className = 'milestone';
        element.style.left = `${(index % 2) * 60}%`;
        element.style.top = `${index * 14}%`;
        
        element.innerHTML = `
            <div class="milestone-content">
                <h3>Day ${milestone.day}</h3>
                <h4>${milestone.title}</h4>
                <p>${milestone.description}</p>
            </div>
        `;
        
        pathContainer.appendChild(element);
    });
};

// Mobile menu toggle
const initMobileMenu = () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
};

// Initialize everything
const init = () => {
    generateCoaches();
    generateSchedulePath();
    initMobileMenu();
};

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);