import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signUp = async (auth, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Utilisateur inscrit:', userCredential.user);
  } catch (error) {
    console.error('Erreur:', error.code, error.message);
  }
};

export const signIn = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Utilisateur connecté:', userCredential.user);
  } catch (error) {
    console.error('Erreur:', error.code, error.message);
  }
};

export const logOut = async (auth) => {
  try {
    await signOut(auth);
    console.log('Utilisateur déconnecté');
  } catch (error) {
    console.error('Erreur de déconnexion:', error);
  }
};
