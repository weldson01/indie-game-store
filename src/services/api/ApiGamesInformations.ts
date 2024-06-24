import { IGame } from "@/interfaces/Interfaces";
import { games } from "./MockData"

class ApiGamesInformations {
    getNewstGames() {
        // return 10 new games
        // TODO
        return games
    }
    getSingleGame(id: number): IGame {
        // return informations about a single game
        // TODO
        const game = games.find((gameSearch) =>{ return gameSearch.id == id })
        // @ts-ignore
        return game;
    }
}

export default new ApiGamesInformations()