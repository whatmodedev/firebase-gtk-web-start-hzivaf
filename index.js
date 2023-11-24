// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: 'AIzaSyAG5GsQWbJ46GViupp4z7GtU-Yp5cbIGNg',
    authDomain: 'fir-web-codelab-d1835.firebaseapp.com',
    projectId: 'fir-web-codelab-d1835',
    storageBucket: 'fir-web-codelab-d1835.appspot.com',
    messagingSenderId: '12627071786',
    appId: '1:12627071786:web:96d0157a995373d20d0453',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // initializeApp(firebaseConfig);
  auth = getAuth();

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };
  const ui = new firebaseui.auth.AuthUI(auth);
  startRsvpButton.addEventListener('click', () => {
    ui.start('#firebase-auth-container', uiConfig);
  });
}
main();
