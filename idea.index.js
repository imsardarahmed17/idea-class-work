import { getPlayersFromController } from "./idea.controller.js"

// const players = () => {
//     const req = {
//         teamId: 3
//     }
//     // token 
//     // routing
//     const players = getPlayersFromController(req);
//     console.log(players)
// }
// players();

const players = () => {
    const req = {
        city: "Mianwali"
    }
    const players = getPlayersFromController(req);
    console.log(players)
}
players();