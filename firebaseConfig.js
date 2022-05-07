import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js";

const firebaseConfig = {

  apiKey: "AIzaSyAemMTeckkKdZue8Kw--okLuDKTeKC0Csw",

  authDomain: "pwa-daaw.firebaseapp.com",

  projectId: "pwa-daaw",

  storageBucket: "pwa-daaw.appspot.com",

  messagingSenderId: "389666649300",

  appId: "1:389666649300:web:f5cb81ccaf0551e93a3741",

  measurementId: "G-13BZBLC6M6"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
