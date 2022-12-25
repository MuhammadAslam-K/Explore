import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAdObYyrRD31zel-gtf5Sdh7FT0J8cQFi4",
    authDomain: "travelling-c5746.firebaseapp.com",
    projectId: "travelling-c5746",
    storageBucket: "travelling-c5746.appspot.com",
    messagingSenderId: "70493442805",
    appId: "1:70493442805:web:e25b2da4208ac547f0abbc",
    measurementId: "G-LWDCT6QMZ0"
  };

  export default firebase.initializeApp(firebaseConfig)