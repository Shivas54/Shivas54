document.addEventListener("DOMContentLoaded", () => {
    // --- BOAT ANIMATION (Index Page) ---
    const boatWrapper = document.getElementById('boat-wrapper');
    const bubble = document.getElementById('speech-bubble');

    if (boatWrapper && bubble) {
        setTimeout(() => { boatWrapper.style.left = '40%'; }, 500);

        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.innerText = 'Hi!';
            bubble.style.transform = 'translateY(0)';
            setTimeout(() => {
                const wavingArm = document.getElementById('waving-arm');
                if (wavingArm) wavingArm.classList.add('wave-action');
            }, 200);
        }, 3500);

        setTimeout(() => {
            bubble.innerText = 'About Me →';
            boatWrapper.classList.add('wiggle');
        }, 5500);

        boatWrapper.addEventListener('click', () => {
            window.location.href = 'about.html';
        });
    }

    // --- HAMBURGER MENU (About Page) ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
            hamburger.textContent = navMenu.classList.contains('nav-open') ? '✕' : '☰';
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-open');
                hamburger.textContent = '☰';
            });
        });
    }

    // --- ACTIVE NAV HIGHLIGHT ON SCROLL (About Page) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('nav-active'));
                    const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                    if (active) active.classList.add('nav-active');
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px' });

        sections.forEach(s => observer.observe(s));
    }

    // --- SCROLL OFFSET FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore standard hash links

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Select your profile picture
    const profileImage = document.querySelector('.profile-pic img');

    if (profileImage) {
        // Blur when the window loses focus (e.g., Snipping Tool opens)
        window.addEventListener('blur', () => {
            profileImage.style.transition = 'filter 0.1s ease';
            profileImage.style.filter = 'blur(15px) grayscale(100%)';
        });

        // Unblur when they click back into the website
        window.addEventListener('focus', () => {
            profileImage.style.filter = 'grayscale(100%) contrast(300%)'; // Restores your original sketch styling
        });

        // Optional: Disable right-click saving on the image
        profileImage.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // --- BOAT ANIMATION (Index Page) ---
    const boatWrapper = document.getElementById('boat-wrapper');
    const bubble = document.getElementById('speech-bubble');

    if (boatWrapper && bubble) {
        setTimeout(() => { boatWrapper.style.left = '40%'; }, 500);

        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.innerText = 'Hi!';
            bubble.style.transform = 'translateY(0)';
            setTimeout(() => {
                const wavingArm = document.getElementById('waving-arm');
                if (wavingArm) wavingArm.classList.add('wave-action');
            }, 200);
        }, 3500);

        setTimeout(() => {
            bubble.innerText = 'About Me →';
            boatWrapper.classList.add('wiggle');
        }, 5500);

        boatWrapper.addEventListener('click', () => {
            window.location.href = 'about.html';
        });
    }

    // --- HAMBURGER MENU (About Page) ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
            hamburger.textContent = navMenu.classList.contains('nav-open') ? '✕' : '☰';
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-open');
                hamburger.textContent = '☰';
            });
        });
    }

    // --- ACTIVE NAV HIGHLIGHT ON SCROLL (About Page) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('nav-active'));
                    const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                    if (active) active.classList.add('nav-active');
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px' });

        sections.forEach(s => observer.observe(s));
    }

    // --- SCROLL OFFSET FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore standard hash links

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Select your profile picture
    const profileImage = document.querySelector('.profile-pic img');

    if (profileImage) {
        // Blur when the window loses focus (e.g., Snipping Tool opens)
        window.addEventListener('blur', () => {
            profileImage.style.transition = 'filter 0.1s ease';
            profileImage.style.filter = 'blur(15px) grayscale(100%)';
        });

        // Unblur when they click back into the website
        window.addEventListener('focus', () => {
            profileImage.style.filter = 'grayscale(100%) contrast(300%)'; // Restores your original sketch styling
        });

        // Optional: Disable right-click saving on the image
        profileImage.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
});
