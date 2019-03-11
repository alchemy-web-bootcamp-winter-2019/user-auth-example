import { makeHeader, makeProfile } from '../src/header-component.js';
const test = QUnit.test;

test('make header', assert => {
    const dom = makeHeader();
    assert.htmlEqual(dom, /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
        </header>
    `);
});

test('make profile', assert => {
    // arrange
    const user = {
        displayName: 'Marty Nelson',
        photoURL: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };

    const expected = /*html*/`
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg">
            <span>Marty Nelson</span>
            <button>Sign Out</button>
        </div>
    `;

    //act
    const dom = makeProfile(user);

    //assert
    assert.htmlEqual(dom, expected);
});
