import { getPlayersFromController, fetchPlayersFromController } from "./idea.controller.js"

const players = () => {
    const req = {
        teamId: 3
    }
    // token 
    // routing
    const players = getPlayersFromController(req);
    console.log(players)
}
players();

const foundPlayers = () => {
    const req = {
        city: "Mianwali"
    }
    const foundPlayers = fetchPlayersFromController(req);
    console.log(foundPlayers)
}
foundPlayers();