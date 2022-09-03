import { getPlayersFromDb } from "./idea.db.js"

// export const getPlayersFromService = (teamId) => {
//     // call db layer
//     const allPlayers = getPlayersFromDb();
//     const filteredPlayers = allPlayers.filter(

//         (p) => {
//             return p.teamId === teamId;
//         }
//     )

//     return filteredPlayers

// }
export const getPlayersFromService = (city) => {
    // call db layer
    const allPlayers = getPlayersFromDb();
    const filteredPlayers = allPlayers.filter(

        (p) => {
            return p.city === "Mianwali";
        }
    )

    return filteredPlayers

}