import { firebaseAuth } from "../../firebase/firebase";

export const login = (email, password) =>
  firebaseAuth.signInWithEmailAndPassword(email, password);
