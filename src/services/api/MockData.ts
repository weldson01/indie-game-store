import { IUser } from "@/interfaces/Interfaces"

export const games = [
    { id: 0, src: "/images/cs-go.png", title: "CS GO", info: "CS-go is a good game", uriGame: "https://store.steampowered.com/app/730/CounterStrike_2/" },
    { id: 1, src: "/images/final-fantasy.png", title: "Final Fantasy", info: "League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.", uriGame: "https://freetrial.finalfantasyxiv.com/na/download" },
    { id: 2, src: "/images/gta-v.png", title: "GTA V", info: "GTA: Is a Game", uriGame: "https://www.rockstargames.com/br/gta-v" },
    {
        id: 3, src: "/images/league-of-legends.png", title: "League of Legends", info: "League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.", uriGame: "https://signup.leagueoflegends.com/", images: [
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_11.jpg",
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_1.jpg",
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
        ]
    },
    { id: 4, src: "/images/wow.png", title: "Wow", info: "Wow is a good game", uriGame: "https://worldofwarcraft.blizzard.com/pt-br/" },
]

export const users: IUser[] = [
    {
        email: "admin@admin.com",
        name: "Admin",
        favoriteGames: [{ id: 4, src: "/images/wow.png", title: "Wow", info: "Wow is a good game", uriGame: "https://worldofwarcraft.blizzard.com/pt-br/" }],
        imageUri: "https://steamuserimages-a.akamaihd.net/ugc/1975420364378297884/9AC78E3C2A0C93138227813C75BCDC127547441A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        password: "admin"
    },
    {
       email:"carl@carl.com", 
       name: "Carl", 
       password:"123123",
       imageUri: "https://pbs.twimg.com/profile_images/1410085780337405959/eQTpu4l0_400x400.jpg"
    }
]