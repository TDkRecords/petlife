// src/lib/assets/js/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx_w29n9LiqZpZoOUeK2guQoT0wT4Tg60",
  authDomain: "petlife-colombia.firebaseapp.com",
  projectId: "petlife-colombia",
  storageBucket: "petlife-colombia.firebasestorage.app",
  messagingSenderId: "223900315603",
  appId: "1:223900315603:web:6194bdcec07d28f7a18926"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de la app y el servicio de autenticación
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
