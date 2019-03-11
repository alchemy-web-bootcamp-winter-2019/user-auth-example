import './check-auth.js';
import { auth } from './firebase.js';
import loadHeader, { updateUser } from './header-component.js';

loadHeader(() => {
    auth.signOut();
});

auth.onAuthStateChanged(user => {
    if(user) {
        updateUser(user);
    }
});
  