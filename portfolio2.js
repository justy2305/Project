// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);

// Function to toggle between light and dark themes
function toggleTheme() {
    // Get current theme
    const theme = document.documentElement.getAttribute('data-theme');

    // Switch to the opposite theme
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save the preference to localStorage
    localStorage.setItem('theme', newTheme);
}

// Add click event listener to the toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);

    // Optional: Add keyboard support (Enter or Space to toggle)
    themeToggle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
}
