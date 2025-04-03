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
        // Set the correct language on page load
        const currentPath = window.location.pathname;
        const filename = currentPath.split('/').pop() || 'index.html';
        console.log("Current filename:", filename);
        
        if (filename.includes('-zh.html')) {
            languageSwitcher.value = 'zh';
        } else {
            languageSwitcher.value = 'en';
        }
        
        // Add change event listener
        languageSwitcher.addEventListener('change', function() {
            const selectedLang = this.value;
            console.log("Language changed to:", selectedLang);
            switchLanguage(selectedLang);
        });
    }
});

// Language switching functionality
function switchLanguage(lang) {
    // Get current page path
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html'; // Default to index.html if path ends with /
    
    console.log("switchLanguage() - Current path:", currentPath);
    console.log("switchLanguage() - Filename:", filename);
    console.log("switchLanguage() - Target language:", lang);
    
    // Special case handling for specific page pairs that might have issues
    if (filename === 'contact.html' && lang === 'zh') {
        window.location.href = 'contact-zh.html';
        return;
    } else if (filename === 'contact-zh.html' && lang === 'en') {
        window.location.href = 'contact.html';
        return;
    }
    
    if (filename === 'pricing.html' && lang === 'zh') {
        window.location.href = 'pricing-zh.html';
        return;
    } else if (filename === 'pricing-zh.html' && lang === 'en') {
        window.location.href = 'pricing.html';
        return;
    }
    
    if (filename === 'faq.html' && lang === 'zh') {
        window.location.href = 'faq-zh.html';
        return;
    } else if (filename === 'faq-zh.html' && lang === 'en') {
        window.location.href = 'faq.html';
        return;
    }
    
    // Determine target page for other cases
    let targetPage;
    if (lang === 'zh') {
        // If current page is English, switch to Chinese version
        if (!filename.includes('-zh.html')) {
            targetPage = filename.replace('.html', '-zh.html');
        } else {
            // Already on Chinese page
            console.log("Already on Chinese page");
            return;
        }
    } else {
        // If current page is Chinese, switch to English version
        if (filename.includes('-zh.html')) {
            targetPage = filename.replace('-zh.html', '.html');
        } else {
            // Already on English page
            console.log("Already on English page");
            return;
        }
    }
    
    console.log("Navigating to:", targetPage);
    // Navigate to target page
    window.location.href = targetPage;
}