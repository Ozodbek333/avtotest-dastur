// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyUykb9TQNSvQwnkN9nf0RMz5ss-Yx2VI",
  authDomain: "sotuvavtotest.firebaseapp.com",
  databaseURL: "https://sotuvavtotest-default-rtdb.firebaseio.com",
  projectId: "sotuvavtotest",
  storageBucket: "sotuvavtotest.firebasestorage.app",
  messagingSenderId: "611564999891",
  appId: "1:611564999891:web:a759f8fd0690a453e4f026",
  measurementId: "G-6ZMNL1PMBV"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

if (auth.setPersistence) {
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function (err) {
    console.warn('Auth persistence set failed:', err);
  });
}
let realtimeDb;

try {
  realtimeDb = firebase.database();
  console.log("Firebase Realtime Database initialized");
} catch (error) {
  console.error("Error initializing Realtime Database:", error);
  setTimeout(function () {
    try {
      realtimeDb = firebase.database();
      window.realtimeDb = realtimeDb;
      console.log("Firebase Realtime Database initialized (retry)");
    } catch (retryError) {
      console.error("Failed to initialize Realtime Database after retry:", retryError);
    }
  }, 1000);
}

// Hardcoded admin credentials (CHANGE THESE!)


// Global access
window.auth = auth;
window.db = db;
window.realtimeDb = realtimeDb;

console.log("Firebase initialized", {
  auth: !!auth,
  db: !!db,
  realtimeDb: !!realtimeDb
});