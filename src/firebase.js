// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALA4DZzVs-NnNRkyopUGhg26IJG-5tvGk',
  authDomain: 'vocallist.firebaseapp.com',
  projectId: 'vocallist',
  storageBucket: 'vocallist.appspot.com',
  messagingSenderId: '841771247702',
  appId: '1:841771247702:web:004dcbfc8c821016f6f3f7',
  measurementId: 'G-H3ND1G4V9L'
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
