import { getPlayersFromDb, fetchPlayersFromDb } from "./idea.db.js"

export const getPlayersFromService = (teamId) => {
    // call db layer
    const allPlayers = getPlayersFromDb();
    const filteredPlayers = allPlayers.filter(

        (p) => {
            return p.teamId === teamId;
        }
    )

    return filteredPlayers

}
export const fetchPlayersFromService = (city) => {
    // call db layer
    const allPlayers = fetchPlayersFromDb();
    const requiredPlayers = allPlayers.filter(

        (p) => {
            return p.city === "Mianwali";
        }
    )

    return requiredPlayers

}