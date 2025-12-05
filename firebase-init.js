// Your Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBgHoR6CSm7h2p3OePuVVZ-P4UZiFP7CdA",
    authDomain: "glamora-2c150.firebaseapp.com",
    databaseURL: "https://glamora-2c150-default-rtdb.firebaseio.com",
    projectId: "glamora-2c150",
    storageBucket: "glamora-2c150.firebasestorage.app",
    messagingSenderId: "266255279761",
    appId: "1:266255279761:web:babc6c7c22773d504b0130",
    measurementId: "G-53V885GLC2"
  };
  
  // ⭐ VERY IMPORTANT: Initialize Firebase (compat version)
  firebase.initializeApp(firebaseConfig);
  
  // Auth instance
  const auth = firebase.auth();
  