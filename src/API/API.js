import firebase from "firebase";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyAuxIfY91V3M4fGVhKqfqxdSmodjXv7tuc",
    authDomain: "shop-example-1a675.firebaseapp.com",
    projectId: "shop-example-1a675",
    storageBucket: "shop-example-1a675.appspot.com",
    messagingSenderId: "736882472835",
    appId: "1:736882472835:web:001221f6c3f4df3e1da8b6"
})

export const db = app.firestore()
export default app
