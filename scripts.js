const events = [
    {
        id: 1,
        name: "Poster Presentation",
        branch: "Computer Science",
        description: "Present your poster",
        description1: "A Poster Presentation is a concise and visual way to share research or ideas at academic or professional events. It combines key information—like objectives, methods, and results—with engaging visuals. Presenters explain their work, answer questions, and network with attendees, fostering collaboration and knowledge exchange. ",
        rules: "1. Teams of 2 members.\n2. The content should be original, well-researched, and visually engaging.\n3. Each team will have 5 minutes to present followed by 2 minutes for Q&A.\n 4.Only one team member may present, but both must be present for Q&A.\n5. Digital or printed posters are not  allowed.",
        icon: "scroll"
    },
    {
        id: 2,
        name: "Paper Presentation",
        branch: "Computer Science",
        description: "Present your research paper",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Paper Presentation is a formal way to share research or ideas at academic or professional events. It involves presenting a written paper with key sections like methodology and results, often supported by visual aids. Presenters explain their work, engage with the audience through Q&A sessions, and contribute to knowledge sharing and collaboration.",
        rules: "1. Teams of 2 members\n2. Papers should be based on original research or innovative ideas.\n3. The document must follow IEEE or APA formatting.\n4. Each team will get 7 minutes for presentation and 3 minutes for Q&A.\n5. Presentations must be in PPT format and submitted 24 hours before the event.\n6.Both team members must contribute to the presentation.",
        icon: "newspaper"
    },
    { 
        id: 3,
        name: "Project Expo",
        branch: "Computer Science",
        description: "Showcase your project",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Project Expo is an event where individuals or teams showcase their projects, innovations, or research to an audience. It typically includes interactive displays, demonstrations, and explanations to highlight the project's objectives, methodology, and outcomes. Project expos provide an opportunity for participants to share ideas, gain feedback, and network with peers, industry professionals, and potential collaborators.",
        rules: "1. Teams of 2-4 members\n2. Projects can be hardware, software, or a combination of both.\n 3.Teams must bring their own hardware, software, and necessary materials.\n4. A demo and explanation session will be allotted 10 minutes per team.\n5. Judges may conduct a Q&A round and test project functionality.",
        icon: "cpu"     
    },
    { 
        id: 4,
        name: "IdeaThon",
        branch: "Computer Science",
        description: "Present your research poster",
        description1: "An IdeaThon is an innovation-driven event where participants brainstorm, develop, and pitch creative ideas to solve specific problems or address challenges within a set time frame. It fosters collaboration, critical thinking, and innovation, often involving teams working together to propose unique solutions. IdeaThons typically culminate in presentations to judges, with awards or recognition for standout ideas. These events are popular in fields like technology, business, and social impact.",
        rules: "1. Open to all students\n ",
        icon: "brain"
    },
    { 
        id: 5,
        name: "Code Vinyasa",
        branch: "Computer Science",
        description: "Code your way to victory",
        description1: "Vinyasa Summer of Code (VSOC) is an immersive program designed to elevate your coding skills and provide hands-on experience with real-world open-source projects.It's a fantastic opportunity for undergraduate and postgraduate students to collaborate with experienced mentors, build an impressive portfolio, and become a vital part of a vibrant coding community.",
        rules: "1. Teams of 2-4 members\n2. The problem statement will be revealed at the start of the event.\n3. Teams must develop an innovative solution within the given time.\n4. Presentation time: 7 minutes, followed by 3 minutes for Q&A.\n5. The solution must be feasible, creative, and well-structured.\n6. Participants can use whiteboards, digital slides, or other supporting materials.",
        icon: "code"
    },
    {
        id: 1,
        name: "Poster Presentation",
        branch: "Electronics Engineering",
       description: "Present your poster",
        duration: "5 minutes",
        type: "Team Event",
        description1: "A Poster Presentation is a concise and visual way to share research or ideas at academic or professional events. It combines key information like objectives, methods, and results with engaging visuals. Presenters explain their work, answer questions, and network with attendees, fostering collaboration and knowledge exchange. ",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "scroll"
    },
    {
        id: 2,
        name: "Paper Presentation",
        branch: "Electronics Engineering",
        description: "Present your research paper",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Paper Presentation is a formal way to share research or ideas at academic or professional events. It involves presenting a written paper with key sections like methodology and results, often supported by visual aids. Presenters explain their work, engage with the audience through Q&A sessions, and contribute to knowledge sharing and collaboration.",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "newspaper"
    },
    { 
        id: 3,
        name: "Project Expo",
        branch: "Electronics Engineering",
        description: "Showcase your project",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Project Expo is an event where individuals or teams showcase their projects, innovations, or research to an audience. It typically includes interactive displays, demonstrations, and explanations to highlight the project's objectives, methodology, and outcomes. Project expos provide an opportunity for participants to share ideas, gain feedback, and network with peers, industry professionals, and potential collaborators.",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "cpu"     
    },
    { 
        id: 4,
        name: "technical quiz",
        branch: "Electronics Engineering",
        description: " Present your technical knowledge",
        description1: "A technical quiz is an assessment used to evaluate someone's knowledge and understanding of technical subjects. It often includes multiple-choice, true/false, short answer, or coding questions on topics such as programming, computer science, software development, and engineering. These quizzes are used in educational settings, job interviews, certification exams, and competitions to measure technical proficiency and problem-solving skills. They help individuals identify strengths and areas for improvement in specific technical domains.",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "brain"     
    },
    {
        id: 1,
        name: "Poster Presentation",
        branch: "Mechanical Engineering",
       description: "Present your poster",
        duration: "5 minutes",
        type: "Team Event",
        description1: "A Poster Presentation is a concise and visual way to share research or ideas at academic or professional events. It combines key information—like objectives, methods, and results—with engaging visuals. Presenters explain their work, answer questions, and network with attendees, fostering collaboration and knowledge exchange. ",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "scroll"
    },
    {
        id: 2,
        name: "Paper Presentation",
        branch: "Mechanical Engineering",
        description: "Present your research paper",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Paper Presentation is a formal way to share research or ideas at academic or professional events. It involves presenting a written paper with key sections like methodology and results, often supported by visual aids. Presenters explain their work, engage with the audience through Q&A sessions, and contribute to knowledge sharing and collaboration.",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "newspaper"
    },
    {
        id: 3,
        name: "Moeling & 3D Printing",
        branch: "Mechanical Engineering",
        description: "Design a 3D model using CAD software",
        description1: "Modeling involves creating digital representations of objects using software, either in 2D or 3D. 3D Printing is an additive manufacturing process that creates physical objects from digital 3D models by layering materials. Together, they enable the design and production of complex, custom objects with applications in various industries.",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "box"
    },
    {
        id: 4,
        name: "IOT & Robotics",
        branch: "Mechanical Engineering",
        description: "Robot racing competition",
        description1: "The Internet of Things (IoT) connects devices to exchange data over the internet, aiming to create a smarter, interconnected world through automation and real-time data collection. Robotics involves designing robots to perform tasks autonomously or semi-autonomously using sensors and actuators. The synergy between IoT and robotics enhances automation and efficiency by leveraging real-time data from IoT with robotic actions, leading to intelligent, autonomous systems used in various applications like smart homes, healthcare, manufacturing, and exploration.",
        rules: "1. Use provided CAD software\n2. Time limit: 3 hours\n3. Original designs only",
        icon: "bot"
    },
    {
        id: 5,
        name: "Technical Treasure Hunt",
        branch: "Mechanical Engineering",
        description: " technical treasure hunt ",
        description1: "A Technical Treasure Hunt is a competitive event where participants solve technical problems and clues to advance through multiple rounds. It tests technical knowledge, problem-solving, and teamwork, often including puzzles and tasks related to programming and computer operations. The event is designed to be fun, educational, and challenging, enhancing technical skills and providing a unique experience for participants.",
        rules: "1. Use provided CAD software\n2. Time limit: 3 hours\n3. Original designs only",
        icon: "shovel"
    },

    {
        id: 1,
        name: "Poster Presentation",
        branch: "Civil Engineering",
       description: "Present your poster",
        duration: "5 minutes",
        type: "Team Event",
        description1: "A Poster Presentation is a concise and visual way to share research or ideas at academic or professional events. It combines key information—like objectives, methods, and results—with engaging visuals. Presenters explain their work, answer questions, and network with attendees, fostering collaboration and knowledge exchange. ",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "scroll"
    },
    {
        id: 2,
        name: "Bridge Bust",
        branch: "Civil Engineering",
        description: "Design and build a model bridge",
        description1: "Designing and building a model bridge involves planning by researching different bridge types and sketching a design, gathering construction materials like popsicle sticks or balsa wood, and constructing the bridge by building the base, deck, and trusses or arches. Enhancements include reinforcing critical stress points, adding aesthetic touches, and testing the bridge's strength. Finally, document the process and present your bridge, showcasing your design choices and test results.",
        rules: "1. Use provided materials only\n2. Maximum span: 50 cm\n3. Tested for maximum load capacity",
        icon: "hard-hat"
    },
    {
        id: 3,
        name: "3d modelling",
        branch: "Civil Engineering",
        description: "Design a 3D model using CAD software",
        description1: "Modeling involves creating digital representations of objects using software, either in 2D or 3D. 3D Printing is an additive manufacturing process that creates physical objects from digital 3D models by layering materials. Together, they enable the design and production of complex, custom objects with applications in various industries.",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "box"
    },
    { 
        id: 4,
        name: "Project Expo",
        branch: "Civil Engineering",
        description: "Showcase your project",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Project Expo is an event where individuals or teams showcase their projects, innovations, or research to an audience. It typically includes interactive displays, demonstrations, and explanations to highlight the project's objectives, methodology, and outcomes. Project expos provide an opportunity for participants to share ideas, gain feedback, and network with peers, industry professionals, and potential collaborators.",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "cpu"     
    },

    {
        id: 1,
        name: "Poster Presentation",
        branch: "Electrical Engineering",
       description: "Present your poster",
        duration: "5 minutes",
        type: "Team Event",
        description1: "A Poster Presentation is a concise and visual way to share research or ideas at academic or professional events. It combines key information—like objectives, methods, and results—with engaging visuals. Presenters explain their work, answer questions, and network with attendees, fostering collaboration and knowledge exchange. ",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "scroll"
    },
    {
        id: 2,
        name: "Paper Presentation",
        branch: "Electrical Engineering",
        description: "Present your research paper",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Paper Presentation is a formal way to share research or ideas at academic or professional events. It involves presenting a written paper with key sections like methodology and results, often supported by visual aids. Presenters explain their work, engage with the audience through Q&A sessions, and contribute to knowledge sharing and collaboration.",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "newspaper"
    },
    { 
        id: 3,
        name: "Project Expo",
        branch: "Electrical Engineering",
        description: "Showcase your project",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Project Expo is an event where individuals or teams showcase their projects, innovations, or research to an audience. It typically includes interactive displays, demonstrations, and explanations to highlight the project's objectives, methodology, and outcomes. Project expos provide an opportunity for participants to share ideas, gain feedback, and network with peers, industry professionals, and potential collaborators.",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "cpu"     
    },
    {
        id: 1,
        name: "Paper Presentation",
        branch: "Master of Business Administration",
        description: "Present your research paper",
        duration: "10 minutes",
        type: "Team Event",
        description1: "A Paper Presentation is a formal way to share research or ideas at academic or professional events. It involves presenting a written paper with key sections like methodology and results, often supported by visual aids. Presenters explain their work, engage with the audience through Q&A sessions, and contribute to knowledge sharing and collaboration.",
        rules: "1. Teams of 2-4 members\n2. Bring your regardings\n3.",
        icon: "newspaper"
    },
    { 
        id: 2,
        name: "business quiz",
        branch: "Master of Business Administration",
        description: " Present your business knowledge",
        description1: "A business quiz is an assessment tool used to test knowledge and understanding of various business concepts, principles, and current affairs. It includes questions on topics like marketing, finance, management, economics, and entrepreneurship, and is commonly used in educational settings to help students prepare for exams and stay updated on industry trends while enhancing their business acumen.",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "brain"     
    },
    { 
        id: 3,
        name: "add marketing startup idea",
        branch: "Master of Business Administration",
        description: " Present your business knowledge",
        description1: "An add marketing startup idea involves creating a business focused on providing marketing services or products to other businesses. This could include digital marketing, social media management, content creation, SEO, or even developing marketing tools and software. The goal is to help other companies enhance their marketing efforts, reach their target audience more effectively, and grow their brand presence.",
        rules: "1. Teams of 2-4 members\n2. Bring your project report\n3.",
        icon: "lightbulb"     
    }, 
];

document.addEventListener('DOMContentLoaded', function() {
    // Ensure the modal element exists before adding event listeners
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Ensure the document is ready before adding the Escape key event listener
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Define the lucide variable to avoid ReferenceError
    const lucide = {}; // Define lucide as an empty object or import it if it's a library

    // Check if lucide.createIcons is a function before calling it
    if (typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }

    const branchIcons = {
        "Computer Science": "code-2",
        "Electronics Engineering": "cpu",
        "Mechanical Engineering": "car",
        "Civil Engineering": "hard-hat",
        "Electrical Engineering": "zap",
        "Master of Business Administration": "graduation-cap" 
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
    
    if (accordionContainer) {
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
            if (typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
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
    }
});

// Modal functionality
function openModal(eventId) {
    const event = events.find(e => e.id === eventId);
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalRules = document.getElementById('modal-rules');
    const modalIconWrapper = document.getElementById('modal-icon-wrapper');

    if (modal && modalTitle && modalDescription && modalRules && modalIconWrapper) {
        modalTitle.textContent = event.name;
        modalDescription.textContent = event.description1;
        modalRules.textContent = event.rules;
        modalIconWrapper.innerHTML = `<i data-lucide="${event.icon}"></i>`;

        modal.style.display = 'block';
        if (typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }
}

// Close modal when clicking the close button or outside the modal
const closeModalButton = document.querySelector('.close');
if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('event-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('event-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

