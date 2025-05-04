const config = {
    // Personal Information
    personalInfo: {
        name: "Arens",
        profession: "Hobby Developer",
        bio: "Im a hobby developer interested in software development and similar topics.",
        socialLinks: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            instagram: "#"
        }
    },

    // Projects
    projects: [
        // Add your projects here in the following format:
        /*
        {
            title: "Project Name",
            description: "Project description",
            image: "project-image-url",
            demoLink: "demo-link",
            githubLink: "github-link"
        }
        */
    ],

    // Skills
    skills: [
        // Add your skills here in the following format:
        /*
        {
            name: "Skill Name",
            icon: "fab fa-icon-name",
            level: 85
        }
        */
    ],

    // Social Media Links and Descriptions
    socialMedia: {
        linkedin: {
            url: "#",
            description: "Connect with me professionally"
        },
        github: {
            url: "#",
            description: "Check out my projects"
        },
        twitter: {
            url: "#",
            description: "Follow my updates"
        },
        instagram: {
            url: "#",
            description: "See my photos"
        }
    },

    // Contact Information
    contact: {
        email: "arens_privat@proton.me",
        formEndpoint: "#" // Replace with your form submission endpoint
    },

    // Footer
    footer: {
        disclaimer: "This website is only a prove of concept and is still in development.",
        copyright: "© 2025 Arens. All rights reserved.",
        designer: "Designed using Artificial Intelligence"
    },

    // Matrix Rain Effect Parameters
    matrixRain: {
        fontSize: 20,        // Size of the characters
        speed: 1,            // Base speed multiplier
        density: 1,          // Density multiplier (1 = normal, >1 = more rain)
        color: '#00ff41'     // Matrix green color
    }
};
window.config = config; 