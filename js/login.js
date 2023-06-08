"use strict";

function initLogin() {
    setTimeout(() => {
        let logo = document.querySelector('.logoStart');
        logo.classList.remove('logoStart');
        logo.classList.add('logomotion');
    }, 1000);
    setTimeout(() => {
        loadForm()
    },1250);
}

function loadForm() {
    renderLogin();
    let container = document.getElementById('loginRender');
    container.classList.remove('d-none');
    let signupBox = document.querySelector('.sign-up');
    signupBox.classList.remove('d-none');
    renderLogin();
}

function renderLogin() {
    let container = document.getElementById('loginRender');
    container.innerHTML = generateLogin();
    let signupBox = document.querySelector('.sign-up');
    signupBox.classList.remove('d-none');
}

function generateLogin() {
    return `
    <div class="loginForm">
        <div class="loginHeader">
            <h1>Log in</h1>
            <div class="h-divider"></div>
        </div>
        <form class="form" onsubmit="login()">
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
        
            <div class="forgotPW">
                <div class="rememberBox">
                    <input type="checkbox">
                    <span>Remember me</span>
                </div>
                <a href="#" onclick="forgotPassword()">Forgot my password</a>
            </div>
            <div class="log-btns">
                <button class="login-btn">Log in</button>
                <div class="guest-btn">Guest Log in</div>
            </div>
        </form>
    </div>
`;
}

function forgotPassword() {
    let container = document.getElementById('loginRender');
    let signupBox = document.querySelector('.sign-up');
    signupBox.classList.add('d-none');
    container.innerHTML = generateForgotPassword();
}

function generateForgotPassword() {
    return `
    <div class="loginForm arrow">
        <img src="./assets/img/icons/backArrow.svg" onclick="renderLogin()">
        <div class="loginHeader">
            <h1>I forgot my password</h1>
            <div class="h-divider"></div>
        </div>
        <form class="form">
            <input type="email" placeholder="Email" required>
            <p class="forgotpwp">Don't worry! We will send you an e-mail with the instructions to reset your password</p>
            <div class="log-btns">
                <button class="login-btn">Send me the e-mail</button>
            </div>
        </form>
    </div>`;
}

function renderSignup() {
    let container = document.getElementById('loginRender');
    container.innerHTML = '';
    container.innerHTML = generateSignup();
    let signupBox = document.querySelector('.sign-up');
    signupBox.classList.add('d-none');
}

function generateSignup() {
    return `
    <div class="loginForm arrow">
        <img src="./assets/img/icons/backArrow.svg" onclick="renderLogin()">
        <div class="loginHeader">
            <h1>Sign up</h1>
            <div class="h-divider"></div>
        </div>
        <form class="form">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" minlength="8" required>
            <div class="log-btns">
                <button class="login-btn">Sign up</button>
            </div>
        </form>
    </div>`;
}