// Check if user is already logged in
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('ownerLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'owner.html';
    }
});

// Default credentials
const OWNER_EMAIL = 'owner@hotel.com';
const OWNER_PASSWORD = 'admin123';

// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    const errorMessage = document.getElementById('error-message');
    
    // Clear previous error
    errorMessage.classList.remove('show');
    
    // Validate credentials
    if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {
        // Store login status
        localStorage.setItem('ownerLoggedIn', 'true');
        localStorage.setItem('ownerEmail', email);
        
        if (rememberMe) {
            localStorage.setItem('rememberOwner', 'true');
        }
        
        // Redirect to owner dashboard
        window.location.href = 'owner.html';
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid email or password!';
        errorMessage.classList.add('show');
    }
});

// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

