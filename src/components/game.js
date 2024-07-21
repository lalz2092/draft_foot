import { updateDoc, doc } from "firebase/firestore";

export const inviteUser = async (db, gameId, userId) => {
  const gameRef = doc(db, 'games', gameId);
  await updateDoc(gameRef, {
    invitedUsers: arrayUnion(userId)
  });
};

export const addTeamsToGame = async (db, gameId, teams) => {
  const gameRef = doc(db, 'games', gameId);
  await updateDoc(gameRef, {
    teams: teams
  });
};

export const addPlayerToUser = async (db, gameId, userId, player) => {
  const gameRef = doc(db, 'games', gameId);
  await updateDoc(gameRef, {
    [`players.${userId}`]: arrayUnion(player)
  });
};
