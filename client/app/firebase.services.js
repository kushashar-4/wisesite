import {
  collection,
  getDoc,
  onSnapshot,
  QuerySnapshot,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

const q = query(collection(db, "events"));

const unsub = onSnapshot(q, (QuerySnapshot) => {
  let eventsArr = [];

  QuerySnapshot.forEach((doc) => {
    eventsArr.push({ ...doc.data(), id: doc.id });
  });

  return eventsArr;
});

export default unsub;
