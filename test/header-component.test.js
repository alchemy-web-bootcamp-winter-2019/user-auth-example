import { makeHeader } from '../src/header-component.js';
const test = QUnit.test;

test('make header', function(assert) {
    const dom = makeHeader();
    assert.htmlEqual(dom, /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
            <div class="profile">
                <span id="user-name"></span>
                <button>Sign Out</button>
            </div>
        </header>
    `);
});
