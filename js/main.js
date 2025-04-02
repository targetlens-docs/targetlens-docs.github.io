// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    if (mobileNavToggle && sidebar) {
        mobileNavToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            if (sidebarOverlay) {
                sidebarOverlay.classList.toggle('active');
            }
        });
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
    }
    
    // Language switcher
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', function() {
            const selectedLang = this.value;
            switchLanguage(selectedLang);
        });
    }
});

// Language switching functionality
function switchLanguage(lang) {
    // Get current page path
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop();
    
    // Determine target page
    let targetPage;
    if (lang === 'zh') {
        // If current page is English, switch to Chinese version
        if (!filename.includes('-zh.html')) {
            targetPage = filename.replace('.html', '-zh.html');
        } else {
            // Already on Chinese page
            return;
        }
    } else {
        // If current page is Chinese, switch to English version
        if (filename.includes('-zh.html')) {
            targetPage = filename.replace('-zh.html', '.html');
        } else {
            // Already on English page
            return;
        }
    }
    
    // Navigate to target page
    window.location.href = targetPage;
}
