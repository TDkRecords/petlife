// $lib/assets/js/citas.js

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function obtenerCitas(uid) {
  const ref = collection(db, "citas");
  const q = query(ref, where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
