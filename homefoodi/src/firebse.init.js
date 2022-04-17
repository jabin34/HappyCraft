// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjm49xqn_b2HvgzBmZhZO_p4_LrafZdLs",
  authDomain: "homefoodie-b9dde.firebaseapp.com",
  projectId: "homefoodie-b9dde",
  storageBucket: "homefoodie-b9dde.appspot.com",
  messagingSenderId: "457558155843",
  appId: "1:457558155843:web:fd6520f3e63bbb3b486af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

