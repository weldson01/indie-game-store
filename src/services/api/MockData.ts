import { IUser } from "@/interfaces/Interfaces"

export const games = [
    {
        id: 0, src: "/images/cs-go.png", title: "CS GO", info: "Counter-Strike: Global Offensive (CS:GO) foi um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia. Foi lançado no dia 21 de agosto de 2012 para as plataformas Windows e OS X no Steam, Xbox 360 (por meio da Xbox Live Arcade), e uma versão exclusiva para os EUA para PlayStation 3 (por meio da PlayStation Network). A versão de Linux foi lançada em setembro de 2014 (com suporte para o sistema Ubuntu a partir da versão 12.05).", uriGame: "https://store.steampowered.com/app/730/CounterStrike_2/",
        images: ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GM8UzzdxbTvTyNfVjRy371eKWv3878egMA&s", "https://www.pichauarena.com.br/wp-content/uploads/2022/08/cs-go.jpeg"]
    },

    { id: 1, src: "/images/final-fantasy.png", title: "Final Fantasy", info: "Final Fantasy VII Remake (ファイナルファンタジーVII リメイク Fainaru Fantajī VII Rimeiku?) é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Square Enix. É um título da série Final Fantasy e uma recriação de Final Fantasy VII, tendo sido lançado para PlayStation 4 em 10 de abril de 2020. A história se passa na metrópole de Midgar e acompanha o mercenário Cloud Strife, que se junta a um grupo ecoterrorista em uma tentativa de impedir que a poderosa megacorporação Shinra use a essência vital do planeta como fonte de energia. A jogabilidade combina combate em tempo real com elementos de estratégia.", images: ["https://image.api.playstation.com/vulcan/ap/rnd/202102/1515/QWAEW2vifrno17MgdwtpZFNI.jpg", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_20a352a2c20dd4bfb08fa131dc4c2e763510f584.1920x1080.jpg?t=1696383548", "https://s2-techtudo.glbimg.com/hctwytJfzriLtoD55KvQUOBMz5M=/0x0:695x390/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/P/A/p7IGtBSYOppB6fvwWzcQ/jogos-melhores-graficos-2021-final-fantasy-7-remake-intergrade.jpg"] },

    { id: 2, src: "/images/gta-v.png", title: "GTA V", info: "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sétimo título principal da série Grand Theft Auto e foi lançado originalmente em 17 de setembro de 2013 para PlayStation 3 e Xbox 360, com remasterizações lançadas em 2014 para PlayStation 4 e Xbox One, em 2015 para Microsoft Windows e em 2022 para PlayStation 5 e Xbox Series X/S. O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.", uriGame: "https://www.rockstargames.com/br/gta-v", images:["https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/16/gaming-gta5-wallpaper2.jpg", "https://criticalhits.com.br/wp-content/uploads/2013/01/v_trunk_800x600.jpg", "https://wallpapercg.com/media/ts_orig/14721.webp", "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/16/gaming-gta5-wallpaper1.jpg"] },

    {
        id: 3, src: "/images/league-of-legends.png", title: "League of Legends", info: "League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.", uriGame: "https://signup.leagueoflegends.com/", images: [
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_11.jpg",
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_1.jpg",
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
        ]
    },

    { id: 4, src: "/images/wow.png", title: "Wow", info: "World of Warcraft (também conhecido pelo acrônimo WoW) é um jogo on-line do gênero MMORPG, desenvolvido e distribuído pela produtora Blizzard Entertainment e lançado em 2004. O jogo se passa no mundo fantástico de Azeroth, introduzido no primeiro jogo da série, Warcraft: Orcs & Humans, lançado em 1994.", uriGame: "https://worldofwarcraft.blizzard.com/pt-br/", images:["https://images2.alphacoders.com/644/644529.jpg", "https://i.pinimg.com/736x/6e/da/05/6eda05f52634005517779c76ef16aaa4.jpg", "https://wallpapers.com/images/hd/wow-thrall-looking-at-horizon-blet0bw6z6gel93g.jpg", "https://wow.zamimg.com/uploads/screenshots/normal/1059910.jpg"] },
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
        email: "carl@carl.com",
        name: "Carl",
        password: "123123",
        imageUri: "https://pbs.twimg.com/profile_images/1410085780337405959/eQTpu4l0_400x400.jpg"
    }
]