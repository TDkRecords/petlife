// src/lib/assets/js/citas.js
import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function obtenerCitas(uid) {
    const q = query(collection(db, 'citas'), where('usuarioId', '==', uid));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
