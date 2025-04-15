// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const currentYear = document.getElementById('year');

// Functions
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function toggleNav() {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function validateForm() {
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
    
    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        document.getElementById('email-error').textContent = 'Email is required';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject');
    if (!subject.value.trim()) {
        document.getElementById('subject-error').textContent = 'Subject is required';
        document.getElementById('subject-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }
    
    return isValid;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // In a real application, you would send the form data to a server here
        // For demonstration, we'll just show a success message
        
        contactForm.reset();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Store form submission in localStorage
        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || [];
        submissions.push({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    }
}

function filterProjects(category) {
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function setActiveFilter(button) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function setCurrentYear() {
    const year = new Date().getFullYear();
    currentYear.textContent = year;
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
navToggle.addEventListener('click', toggleNav);

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;
        filterProjects(filterValue);
        setActiveFilter(button);
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            toggleNav();
        }
    });
});

// Initialize
initializeTheme();
setCurrentYear();

// Set default filter to 'all' on projects page
if (window.location.pathname.includes('projects.html')) {
    filterProjects('all');
}