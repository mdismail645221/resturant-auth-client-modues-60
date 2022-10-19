// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAWhJql1D_EunyQAwNnN3ZqFI1anf7b-Y",
    authDomain: "resturant-auth-client.firebaseapp.com",
    projectId: "resturant-auth-client",
    storageBucket: "resturant-auth-client.appspot.com",
    messagingSenderId: "589994882114",
    appId: "1:589994882114:web:d08ea36632debc78f3a9db",
    measurementId: "G-C193LH4458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;