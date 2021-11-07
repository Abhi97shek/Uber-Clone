import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDf9kLU5cUl55jxsw_tM6T_EJbAfA4yxfE",
  authDomain: "uber-clone-next.firebaseapp.com",
  projectId: "uber-clone-next",
  storageBucket: "uber-clone-next.appspot.com",
  messagingSenderId: "416516205214",
  appId: "1:416516205214:web:e9fb4be1b8f9209495298f"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export {app,provider,auth};