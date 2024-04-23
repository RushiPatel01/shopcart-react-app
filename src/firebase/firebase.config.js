import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

// Initialize Firebase app
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const cartCollection = collection(db, "cartItems");
const projectCollection = collection(db, "products");

console.log("cart",cartCollection);
console.log("data",projectCollection);
export { db , projectCollection };
export default firebaseConfig;
