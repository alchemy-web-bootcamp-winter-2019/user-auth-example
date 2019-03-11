export function makeHeader() {
    const html = /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
            <div class="profile">
                <span id="user-name"></span>
                <button>Sign Out</button>
            </div>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(signOutCallback) {
    const dom = makeHeader();
    const signOutButton = dom.querySelector('button');
    signOutButton.addEventListener('click', signOutCallback);
    headerContainer.appendChild(dom);
}

export function updateUser(user) {
    const username = document.getElementById('user-name');
    username.textContent = user.displayName;
}