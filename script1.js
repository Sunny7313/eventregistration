const events = [
    {
        id: 1,
        name: "Poster Presentation",
        branch: "Computer Science",
        description: "Present your research poster",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "paperclip"
    },
    {
        id: 2,
        name: "Paper Presentation",
        branch: "Computer Science",
        description: "Present your research paper",
        duration: "10 minutes",
        type: "Team Event",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "cpu"
    },
    { 
        id: 3,
        name: "Project Expo",
        branch: "Computer Science",
        description: "Showcase your project",
        duration: "10 minutes",
        type: "Team Event",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "cpu"     
    },
    { 
        id: 4,
        name: "IdeaThon",
        branch: "Computer Science",
        description: "Pitch your startup idea",
        rules: "1. Open to all students\n ",
        icon: "cpu"
    },
    { 
        id: 5,
        name: "code Vinyasa",
        branch: "Computer Science",
        description: "Code your way to victory",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "cpu"
    },
    {
        id: 1,
        name: "Poster Presentation",
        branch: "Electronics Engineering",
        description: "Present your research poster",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "paperclip"
    },
    {
        id: 3,
        name: "Robo Race",
        branch: "Mechanical Engineering",
        description: "Robot racing competition",
        rules: "1. Self-built robots only\n2. Maximum size: 30x30x30 cm\n3. No harmful components allowed",
        icon: "cpu"
    },
    {
        id: 4,
        name: "CAD Design Challenge",
        branch: "Mechanical Engineering",
        description: "Design a 3D model using CAD software",
        rules: "1. Use provided CAD software\n2. Time limit: 3 hours\n3. Original designs only",
        icon: "hard-hat"
    },
    {
        id: 5,
        name: "Bridge Building",
        branch: "Civil Engineering",
        description: "Design and build a model bridge",
        rules: "1. Use provided materials only\n2. Maximum span: 50 cm\n3. Tested for maximum load capacity",
        icon: "hard-hat"
    },
    {
        id: 6,
        name: "Circuit Design Challenge",
        branch: "Electrical Engineering",
        description: "Design and build an electronic circuit",
        rules: "1. Individual participation\n2. Use provided components\n3. Time limit: 4 hours",
        icon: "zap"
    },
    {
        id: 7,
        name: "Power Distribution Simulation",
        branch: "Electrical Engineering",
        description: "Simulate a city's power distribution network",
        rules: "1. Teams of 2 members\n2. Use provided simulation software\n3. Efficiency and reliability are key factors",
        icon: "zap"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    const branchIcons = {
        "Computer Science": "code-2",
        "Electronics Engineering": "cpu",
        "Mechanical Engineering": "vehicle",
        "Civil Engineering": "hard-hat",
        "Electrical Engineering": "zap"
        
    };

    // Group events by branch
    const eventsByBranch = events.reduce((acc, event) => {
        if (!acc[event.branch]) {
            acc[event.branch] = [];
        }
        acc[event.branch].push(event);
        return acc;
    }, {});

    // Create accordions
    const accordionContainer = document.getElementById('event-accordions');
    
    Object.entries(eventsByBranch).forEach(([branch, branchEvents]) => {
        const accordion = document.createElement('div');
        accordion.className = 'accordion';
        
        const header = document.createElement('div');
        header.className = 'accordion-header';
        
        header.innerHTML = `
            <div class="accordion-icon">
                <i data-lucide="${branchIcons[branch]}"></i>
            </div>
            <span class="accordion-title">${branch}</span>
            <i data-lucide="chevron-right" class="accordion-arrow"></i>
        `;

        const content = document.createElement('div');
        content.className = 'accordion-content';

        const eventGrid = document.createElement('div');
        eventGrid.className = 'event-grid';

        branchEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-header">
                    <div class="event-icon">
                        <i data-lucide="${event.icon}"></i>
                    </div>
                    <h3 class="event-title">${event.name}</h3>
                </div>
                <div class="event-body">
                    <p class="event-description">${event.description}</p>
                    <button class="btn btn-primary" onclick="openModal(${event.id})">View Details</button>
                </div>
            `;
            eventGrid.appendChild(eventCard);
        });

        content.appendChild(eventGrid);
        accordion.appendChild(header);
        accordion.appendChild(content);
        accordionContainer.appendChild(accordion);

        // Initialize Lucide icons for the new content
        lucide.createIcons();
    });

    // Setup accordion functionality
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            const content = header.nextElementSibling;
            accordion.classList.toggle('active');
            if (accordion.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

// Modal functionality
function openModal(eventId) {
    const event = events.find(e => e.id === eventId);
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalRules = document.getElementById('modal-rules');
    const modalIconWrapper = document.getElementById('modal-icon-wrapper');

    modalTitle.textContent = event.name;
    modalDescription.textContent = event.description;
    modalRules.textContent = event.rules;
    modalIconWrapper.innerHTML = `<i data-lucide="${event.icon}"></i>`;

    modal.style.display = 'block';
    lucide.createIcons();
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('event-modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('event-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

