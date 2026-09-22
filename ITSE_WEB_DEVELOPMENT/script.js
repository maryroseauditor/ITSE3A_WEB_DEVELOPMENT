const signupTab = document.getElementById('signup-tab');
const loginTab = document.getElementById('login-tab');

const formTitle = document.getElementById('form-title');
const socialArea = document.getElementById('social-area');
const formDivider = document.getElementById('form-divider');
const usernameGroup = document.getElementById('username-group');
const rememberGroup = document.getElementById('remember-group');
const loginLinks = document.getElementById('login-links');
const submitButton = document.getElementById('submit-button');
const createAccountLink = document.getElementById('create-account-link');

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    
    formTitle.textContent = "Begin Your Adventure";
    socialArea.style.display = "block";
    formDivider.style.display = "block";
    usernameGroup.style.display = "block";
    rememberGroup.style.display = "flex";
    loginLinks.style.display = "none";
    createAccountLink.style.display = "none"; 
    submitButton.textContent = "Let's Start";
});

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    
    formTitle.textContent = "Welcome Back";
    socialArea.style.display = "none";
    formDivider.style.display = "none";
    usernameGroup.style.display = "none";
    rememberGroup.style.display = "none";
    loginLinks.style.display = "block";
    createAccountLink.style.display = "block"; 
    submitButton.textContent = "Log In";
});

createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupTab.click(); 
});

const eyeIcon = document.querySelector('.eye-icon');
const passwordInput = document.querySelector('.password-group input');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="2" y1="2" x2="22" y2="22"></line>
            </svg>
        `;
    }
});
