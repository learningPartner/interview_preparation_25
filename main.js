const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        const toggleBtn = document.getElementById('toggleBtn');
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const body = document.body;

        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        });

        mobileToggle.addEventListener('click', function () {
            sidebar.classList.add('mobile-open');
            mobileOverlay.classList.add('show');
        });

        mobileOverlay.addEventListener('click', function () {
            sidebar.classList.remove('mobile-open');
            mobileOverlay.classList.remove('show');
        });

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

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeText.textContent = 'Light Mode';
        }

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