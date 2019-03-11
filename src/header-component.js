import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = /*html*/`
        <div class="profile">
            <img src="${user.photoURL}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    const dom = makeHeader();
    headerContainer.appendChild(dom);
    
    auth.onAuthStateChanged(user => {
        if(user) {
            // there is a user!
            const userNameDisplay = document.getElementById('user-name');
            userNameDisplay.textContent = user.displayName;
            const profileDisplay = document.getElementById('user-profile');
            profileDisplay.src = user.photoURL;
        }
        else {
            // no user
        }
    });
}