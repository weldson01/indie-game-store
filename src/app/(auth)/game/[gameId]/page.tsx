"use client"
import ApiGamesInformations from "@/services/api/ApiGamesInformations"
import { Button } from "@mui/material"
import { FavoriteBorder } from "@mui/icons-material";
import { useContext } from "react";
import { RecentActivityContext } from "@/context/RecentActivity";
import Image from "next/image";
import { notFound } from "next/navigation";
interface IProps {
    params: {
        gameId: string
    }
}

export default function GamePage({ params }: IProps) {
    const game = ApiGamesInformations.getSingleGame(parseInt(params.gameId))
    // @ts-ignore
    const {setGame} = useContext(RecentActivityContext)
    setGame(game)
    if(!game){
        notFound();
    }
    return (
        <div>
            <div className="grid grid-cols-8 p-10">
                <div className="col-span-4">
                    <img src={game.src} alt={game.title} />
                    <div className="flex pt-5 gap-16 justify-between">
                        <Button color="success" variant="contained" size="large" fullWidth href={game.uriGame}>
                            Play now
                        </Button>
                        <Button variant="contained" endIcon={<FavoriteBorder color="primary"/>}  size="large" fullWidth className="bg-focous hover:bg-focous">
                            Favorite
                        </Button>
                    </div>
                </div>
                <div className="col-span-3 px-10">
                    <h1 className="text-3xl mb-5">
                        {game.title}
                    </h1>
                    <p className="text-base">
                        {game.info}
                    </p>
                </div>
            </div>
            <div className="bg-primary p-10 z-10 min-h-96 overflow-x-auto">
                <h4 className="text-2xl pb-5">In Game</h4>
                <div className="flex  gap-5">
                    {game.images?.map(image=>{
                        return <>
                            <Image width={860} height={520} src={image} alt={image} className="h-36 hover:h-52 w-52 hover:w-80 transition-all " key={image}/>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}