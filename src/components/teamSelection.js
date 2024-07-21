import { getDocs, collection } from "firebase/firestore";

export const drawRandomTeams = async (db) => {
  const teamsSnapshot = await getDocs(collection(db, 'teams'));
  const teams = teamsSnapshot.docs.map(doc => doc.data());
  const randomTeams = teams.sort(() => 0.5 - Math.random()).slice(0, 55);
  return randomTeams;
};
