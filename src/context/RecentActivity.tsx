"use client"
import { IGame } from "@/interfaces/Interfaces";
import { createContext, useState } from "react"


export const RecentActivityContext = createContext({});

export default function RecentActivityProvider({children}:any){
    const [game, setGame] = useState({}as IGame)
    return (
        <RecentActivityContext.Provider value={{game,setGame}}>
            {children}
        </RecentActivityContext.Provider>
    )
}