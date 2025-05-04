const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Navigation click handling
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Intersection Observer for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Remove active class from all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active-section');
            });
            // Add active class to current section
            entry.target.classList.add('active-section');
        }
    });
}, {
    threshold: [0.5]
});

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to update the website content
function updateWebsiteContent() {
    try {
        // Update personal information
        const aboutTitle = document.querySelector('.about-text h1');
        const subtitle = document.querySelector('.subtitle');
        const bio = document.querySelector('.bio');

        if (aboutTitle) aboutTitle.textContent = `${config.personalInfo.name}`;
        if (subtitle) subtitle.textContent = config.personalInfo.profession;
        if (bio) bio.textContent = config.personalInfo.bio;

        // Update social links
        const socialLinks = document.querySelectorAll('.social-links a');
        if (socialLinks.length > 0) {
            socialLinks[0].href = config.personalInfo.socialLinks.linkedin;
            socialLinks[1].href = config.personalInfo.socialLinks.github;
            socialLinks[2].href = config.personalInfo.socialLinks.twitter;
            socialLinks[3].href = config.personalInfo.socialLinks.instagram;
        }

        // Update projects
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid && config.projects.length > 0) {
            projectsGrid.innerHTML = config.projects.map(project => `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.demoLink}" class="btn">View Demo</a>
                        <a href="${project.githubLink}" class="btn">GitHub</a>
                    </div>
                </div>
            `).join('');
        }

        // Update skills
        const skillsGrid = document.querySelector('.skills-grid');
        if (skillsGrid && config.skills.length > 0) {
            skillsGrid.innerHTML = config.skills.map(skill => `
                <div class="skill-item">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('');
        }

        // Update blog posts
        const blogGrid = document.querySelector('.blog-grid');
        if (blogGrid && config.blogPosts.length > 0) {
            blogGrid.innerHTML = config.blogPosts.map(post => `
                <div class="blog-card">
                    <img src="${post.image}" alt="${post.title}">
                    <h3>${post.title}</h3>
                    <p class="blog-date">${post.date}</p>
                    <p>${post.summary}</p>
                    <a href="${post.link}" class="btn">Read More</a>
                </div>
            `).join('');
        }

        // Update email in contact section
        const emailLink = document.getElementById('contact-email');
        if (emailLink && config.contact.email) {
            emailLink.textContent = config.contact.email;
            emailLink.href = `mailto:${config.contact.email}`;
        }

        // Update footer
        const footerContent = document.querySelector('.footer-content');
        if (footerContent) {
            const footerParagraphs = footerContent.querySelectorAll('p');
            if (footerParagraphs.length >= 2) {
                footerParagraphs[0].textContent = config.footer.copyright;
                footerParagraphs[1].textContent = config.footer.designer;
            }
        }

        // Update social media links and descriptions
        const socialPlatforms = document.querySelectorAll('.social-platform');
        if (socialPlatforms.length > 0) {
            const platforms = ['linkedin', 'github', 'twitter', 'instagram'];
            platforms.forEach((platform, index) => {
                if (config.socialMedia[platform]) {
                    socialPlatforms[index].href = config.socialMedia[platform].url;
                    const description = socialPlatforms[index].querySelector('p');
                    if (description) {
                        description.textContent = config.socialMedia[platform].description;
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error updating website content:', error);
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', updateWebsiteContent);

// Animation observer
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    animationObserver.observe(element);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Theme toggle logic for pill switch
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Default to dark mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    setTheme('light');
} else {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
    }
}); 