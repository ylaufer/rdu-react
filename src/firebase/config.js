
import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAGrxKL6c_D2yd_tKP2PauxoHZ6txf75U8",
  authDomain: "rey-de-urbino.firebaseapp.com",
  projectId: "rey-de-urbino",
  storageBucket: "rey-de-urbino.appspot.com",
  messagingSenderId: "734595660835",
  appId: "1:734595660835:web:6438f88193b6a9abe88596"
};


const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}