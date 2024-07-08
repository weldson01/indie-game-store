"use client"
import ApiGame from "@/services/api/ApiGamesInformations";
import { games } from "@/services/api/MockData";
import { Search } from "@mui/icons-material";
import { Autocomplete,  Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type inputOption = {
    option:string
}

export default function SearchInput() {
    const {handleSubmit, register} = useForm<inputOption>()
    const router = useRouter()
    const handleSearch: SubmitHandler<inputOption> = async (data)=>{
        //Todo show result
        console.log(data.option)
        const game = await ApiGame.getSingleGameByTitle(data.option)
        if(game){
            router.push(`/game/${game?.id}`)
        }
           
    }

    return (
        <form onSubmit={handleSubmit(handleSearch)}>
            <Stack direction={"row"} margin={2} component="div" width={300} bgcolor={"white"} marginX={2} justifyContent={"space-between"} className="rounded-full overflow-hidden">
                <Autocomplete disablePortal fullWidth options={games.map(op => op.title)}
                    renderInput={(params) => <TextField {...register("option")} {...params} label="Search a Game" variant="filled" className="rounded-full" ></TextField>
                    }
                />
                <Button type="submit" variant="text" className="">
                    <Search/>
                </Button>
            </Stack>
        </form>
    )
} 