import { getPlayersFromService, fetchPlayersFromService } from "./idea.service.js"

export const getPlayersFromController = (req) => {
    if (req.teamId) {
        return getPlayersFromService(req.teamId);
    } else {
        return "bad request"
    }
}

export const fetchPlayersFromController = (req) => {
    if (req.city) {
        return fetchPlayersFromService(req.city);
    } else {
        return "bad request"
    }
}