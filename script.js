document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animasi Section dengan efek yang lebih menarik
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Parallax Effect pada Home Section
    gsap.to('.home-section .content', {
        scrollTrigger: {
            trigger: '.home-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: (i, el) => -window.innerHeight * 0.5,
        opacity: (i, el) => 1 - window.scrollY / window.innerHeight
    });

    // Tambahkan di bagian GSAP animations
gsap.from('.home-section .content', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.utils.toArray('.feature').forEach(feature => {
    gsap.from(feature, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: feature,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});


    // Navbar Scroll Effect dengan transisi lebih halus
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(18,18,18,0.95)';
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = 'rgba(18,18,18,0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing GSAP and scroll code...
});
  