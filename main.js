// Detect base path for GitHub Pages compatibility
function getBasePath() {
    const hostname = window.location.hostname;
    
    // If hosted on GitHub Pages
    if (hostname.includes('github.io')) {
        return 'https://learningpartner.github.io/interview_preparation_25/';
    }
    
    // Local development (http://127.0.0.1 or localhost)
    return '/interview_preparation_25/';
}

const BASE_PATH = getBasePath();

// Menu items configuration - easily add new items here
const menuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'fas fa-home',
        href: `${BASE_PATH}index.html`,
        submenu: null
    },
    {
        id: 'javascript',
        label: 'JavaScript',
        icon: 'fas fa-code',
        submenu: [
            { label: 'Overview', icon: 'fas fa-laptop-code', href: `${BASE_PATH}javascript/overview.html` },
            { label: 'Exe Context -EventLoop', icon: 'fas fa-project-diagram', href: `${BASE_PATH}javascript/executionEventLoop.html` },
             { label: 'Hoisting', icon: 'fas fa-database', href: `${BASE_PATH}javascript/hoisting.html` },
            { label: 'Closure', icon: 'fas fa-database', href: `${BASE_PATH}javascript/closure.html` },
            { label: 'System Design', icon: 'fas fa-network-wired', href: '#' }
        ]
    },
    {
        id: 'programming',
        label: 'Programming',
        icon: 'fas fa-file-code',
        submenu: [
            { label: 'Java', icon: 'fab fa-java', href: '#' },
            { label: 'Python', icon: 'fab fa-python', href: '#' },
            { label: 'JavaScript', icon: 'fab fa-js', href: '#' },
            { label: 'C++', icon: 'fab fa-node', href: '#' }
        ]
    },
    {
        id: 'behavioral',
        label: 'Behavioral',
        icon: 'fas fa-users',
        submenu: [
            { label: 'STAR Method', icon: 'fas fa-star', href: '#' },
            { label: 'Common Questions', icon: 'fas fa-tasks', href: '#' },
            { label: 'Tips & Tricks', icon: 'fas fa-lightbulb', href: '#' }
        ]
    },
    {
        id: 'mock-interviews',
        label: 'Mock Interviews',
        icon: 'fas fa-book',
        href: '#',
        submenu: null
    },
    {
        id: 'progress',
        label: 'Progress',
        icon: 'fas fa-chart-line',
        href: '#',
        submenu: null
    },
    {
        id: 'resources',
        label: 'Resources',
        icon: 'fas fa-folder-open',
        submenu: [
            { label: 'Video Tutorials', icon: 'fas fa-video', href: '#' },
            { label: 'Study Materials', icon: 'fas fa-file-pdf', href: '#' },
            { label: 'Useful Links', icon: 'fas fa-link', href: '#' }
        ]
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: 'fas fa-cog',
        href: '#',
        submenu: null
    }
];

// Function to render menu dynamically
function renderMenu() {
    const sidebarMenu = document.querySelector('.sidebar-menu');
    if (!sidebarMenu) return;

    sidebarMenu.innerHTML = '';

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';

        if (item.submenu && item.submenu.length > 0) {
            // Create submenu item
            const menuLink = document.createElement('div');
            menuLink.className = 'menu-link';
            menuLink.setAttribute('data-submenu', item.id);
            menuLink.innerHTML = `
                <i class="${item.icon} menu-icon"></i>
                <span class="menu-text">${item.label}</span>
                <i class="fas fa-chevron-right menu-arrow"></i>
            `;

            const submenuDiv = document.createElement('div');
            submenuDiv.className = 'submenu';
            submenuDiv.id = `${item.id}-submenu`;

            item.submenu.forEach(subitem => {
                const submenuItemDiv = document.createElement('div');
                submenuItemDiv.className = 'menu-item submenu-item';
                submenuItemDiv.innerHTML = `
                    <a href="${subitem.href}" class="menu-link">
                        <i class="${subitem.icon} menu-icon"></i>
                        <span class="menu-text">${subitem.label}</span>
                    </a>
                `;
                submenuDiv.appendChild(submenuItemDiv);
            });

            menuItemDiv.appendChild(menuLink);
            menuItemDiv.appendChild(submenuDiv);
        } else {
            // Create regular menu item
            const menuLink = document.createElement('a');
            menuLink.href = item.href || '#';
            menuLink.className = item.id === 'dashboard' ? 'menu-link active' : 'menu-link';
            menuLink.innerHTML = `
                <i class="${item.icon} menu-icon"></i>
                <span class="menu-text">${item.label}</span>
            `;
            menuItemDiv.appendChild(menuLink);
        }

        sidebarMenu.appendChild(menuItemDiv);
    });

    // Attach event listeners after rendering
    attachMenuEventListeners();
}

// Attach event listeners to menu items
function attachMenuEventListeners() {
    const menuLinks = document.querySelectorAll('.menu-link[data-submenu]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const submenuId = this.getAttribute('data-submenu') + '-submenu';
            const submenu = document.getElementById(submenuId);

            this.classList.toggle('expanded');
            submenu.classList.toggle('show');
        });
    });

    const allMenuLinks = document.querySelectorAll('.menu-link:not([data-submenu])');
    allMenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                mobileOverlay.classList.remove('show');
            }
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    renderMenu();
});

// DOM elements
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const toggleBtn = document.getElementById('toggleBtn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const mobileToggle = document.getElementById('mobileToggle');
const mobileOverlay = document.getElementById('mobileOverlay');
const body = document.body;

// Toggle sidebar
toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
});

// Mobile menu
mobileToggle.addEventListener('click', function () {
    sidebar.classList.add('mobile-open');
    mobileOverlay.classList.add('show');
});

mobileOverlay.addEventListener('click', function () {
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('show');
});

// Theme toggle
themeToggle.addEventListener('click', function () {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeText.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Restore theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeText.textContent = 'Light Mode';
}