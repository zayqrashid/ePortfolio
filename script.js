// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Example of a function to show project details (expandable)
function openProjectDetails() {
    alert("This will show more details about the project.");
}
