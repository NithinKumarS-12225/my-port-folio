ocument.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Form Submission (Example)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});