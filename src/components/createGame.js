import { addDoc, collection } from "firebase/firestore";

export const createGame = async (db, userId, invitedUsers) => {
  try {
    const gameRef = await addDoc(collection(db, 'games'), {
      host: userId,
      invitedUsers: invitedUsers,
      teams: [],
      players: [],
      createdAt: new Date()
    });
    console.log('Partie créée avec ID:', gameRef.id);
  } catch (error) {
    console.error('Erreur de création de partie:', error);
  }
};
