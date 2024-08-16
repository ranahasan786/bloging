 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAuv-RlUJypAmq36iVwowbCzOPd-FN8Q3s",
   authDomain: "singup123-e8ea0.firebaseapp.com",
   projectId: "singup123-e8ea0",
   storageBucket: "singup123-e8ea0.appspot.com",
   messagingSenderId: "860406211189",
   appId: "1:860406211189:web:a40ce3600005bed8fd8e3c",
   measurementId: "G-H9XTXYW21S"
 };

 // Initialize Firebase
 const auth = getAuth(app);
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);