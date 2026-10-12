// كود حركة ظهور العناصر عند النزول (Scroll Animation)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.about-section, .contact-section, .gallery-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1 // يشتغل التأثير أول ما يظهر 10% من القسم
    });

    sections.forEach(section => {
        // نجهز العناصر أولاً بإخفائها وتنزيلها تحت شوي
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease-out";
        
        observer.observe(section);
    });
});
