"use client"
import ApiGamesInformations from "@/services/api/ApiGamesInformations"
import { Button } from "@mui/material"
import {  useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface IProps {
    params: {
        gameId: string
    }
}

export default function GamePage({ params }: IProps) {
    const game = ApiGamesInformations.getSingleGame(parseInt(params.gameId))
    const [imageShow, setImageShow] = useState(game.src);
    const router = useRouter()
    return (
        <div className="bg-primary">
            <Button onClick={()=>router.back()} variant="contained" className="rounded-full m-5">
                Go back
            </Button>
            <div className="grid grid-cols-8 p-10">
                <div className="col-span-4">
                    <Image height={1800} width={3200} src={game.src} alt={game.title} />
                    <div className="flex pt-5 gap-16 justify-between">
                        <Button color="success" variant="contained" size="large" fullWidth href={game.uriGame}>
                            Play now
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
                <div className="flex justify-center">
                    <Image src={`${imageShow}`} width={400} height={300} alt="Image in game"/>
                </div>
                <div className="flex py-32 gap-10 justify-center transition-all w-full">
                    {game.images?.map(image=>{
                        return <>
                            <Image width={860} height={520} src={image} alt={image} className="h-28 w-36  hover:cursor-pointer" key={image}
                            onClick={()=>setImageShow(image)}
                            />
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}