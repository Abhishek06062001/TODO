import firebase from 'firebase/app'
import "firebase/firestore" 
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDfFcijZpFd7jcxrDcwCICUxHaMOmXdMXA",
    authDomain: "todo-36652.firebaseapp.com",
    projectId: "todo-36652",
    storageBucket: "todo-36652.appspot.com",
    messagingSenderId: "491943825071",
    appId: "1:491943825071:web:ce1bb10b2d9bb7a4ce0e5a"
  };
firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase