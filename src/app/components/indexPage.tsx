"use client"
import { IGame } from "@/interfaces/Interfaces"
import { Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import {  useRouter } from "next/navigation"

export const GridItem = ({game}:{game:IGame}) => {
    const router = useRouter()
    const handleShowGame = (gameId:number)=>{
        router.push("/publicgames/"+gameId)
    }
    return (
        <Grid container xs={12} onClick={()=>handleShowGame(game.id)} className="hover:cursor-pointer">
            <Grid item xs={4} key={game.title + "image"}>
                <Image width={300} height={100} src={game.src} alt={game.title} />
            </Grid>
            <Grid item xs={8} key={game.title + "content"}>
                <Stack direction={"column"} justifyContent={"space-between"} className="px-2" minHeight={"50%"}>
                    <Typography variant="body1">
                        {game.title}
                    </Typography>
                    <Typography variant="body2" noWrap>
                        {game.info}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}