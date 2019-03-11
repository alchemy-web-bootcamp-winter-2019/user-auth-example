import { auth } from './firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

// first param is id of element that will host the sign ui
// second param is list of options
ui.start('#firebaseui-auth-container', {
    // "providers" - how is user allowed to log in?
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});
