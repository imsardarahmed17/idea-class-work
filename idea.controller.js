import { getPlayersFromService } from "./idea.service.js"

// export const getPlayersFromController = (req) => {
//     if (req.teamId) {
//         return getPlayersFromService(req.teamId);
//     } else {
//         return "bad request"
//     }
// }

export const getPlayersFromController = (req) => {
    if (req.city) {
        return getPlayersFromService(req.city);
    } else {
        return "bad request"
    }
}