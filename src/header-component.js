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

export default function loadHeader() {
    const dom = makeHeader();
    headerContainer.appendChild(dom);
}