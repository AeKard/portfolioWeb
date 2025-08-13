const sections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    // Optional: Stop observing once shown
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.2 }); // Trigger when 20% of section is visible

sections.forEach(section => observer.observe(section));