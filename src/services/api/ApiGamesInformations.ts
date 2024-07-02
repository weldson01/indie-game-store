import { IGame } from "@/interfaces/Interfaces";
import { games } from "./MockData"

class ApiGamesInformations {
    getNewstGames() {
        // return 10 new games
        // TODO
        return games
    }
    getSingleGameByTitle(title: string){
        // return from API the game based on the name params
        const game = games.find((g)=> g.title === title)
        if(game){
            return game
        }
    }
    getSingleGame(id: number): IGame {
        // return informations about a single game
        // TODO
        const game = games.find((gameSearch) =>{ return gameSearch.id == id })
        // @ts-ignore
        return game;
    }
}

const ApiGame = new ApiGamesInformations(); 


export default ApiGame;