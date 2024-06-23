import { ITrends } from "@/interfaces/Interfaces"

export default function LinearList({title}:{title:string}) {
    const trendsGames: ITrends[] = [
        { src: "/images/cs-go.png", title:"GTA", info: "GTA: Is a Game" },
        { src: "/images/final-fantasy.png", info: "GTA: Is a Game" },
        { src: "/images/gta-v.png", info: "GTA: Is a Game" },
        { src: "/images/league-of-legends.png", info: "GTA: Is a Game" },
        { src: "/images/wow.png", info: "GTA: Is a Game" },
        { src: "/images/cs-go.png", info: "GTA: Is a Game" },
        { src: "/images/final-fantasy.png", info: "GTA: Is a Game" },
        { src: "/images/gta-v.png", info: "GTA: Is a Game" },
        { src: "/images/league-of-legends.png", info: "GTA: Is a Game" },
        { src: "/images/wow.png", info: "GTA: Is a Game" },
        { src: "/images/cs-go.png", info: "GTA: Is a Game" },
        { src: "/images/final-fantasy.png", info: "GTA: Is a Game" },
        { src: "/images/gta-v.png", info: "GTA: Is a Game" },
        { src: "/images/league-of-legends.png", info: "GTA: Is a Game" },
        { src: "/images/wow.png", info: "GTA: Is a Game" },
    ]
    return <div className="mt-10 pl-5">
        <h2 className="text-3xl text-whiteColor">{title}:</h2>
        <div className="flex py-10 px-10 w-full gap-5 overflow-x-scroll no-scrollbar">
            {trendsGames.map(({ src, info }: ITrends) => {
                return <div className="">
                    <img src={src} alt={info} className="max-w-32 h-40 antialiased"/>
                </div>
            })}
        </div>
    </div>
}