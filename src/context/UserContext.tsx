"use client"

import { IUserContext } from "@/interfaces/ContextInterfaces";
import { IUser } from "@/interfaces/Interfaces";
import { ReactNode, createContext, useState } from "react";

export const userContext = createContext<IUserContext | undefined>(undefined)

export default function UserContextProvider({ children }:{children:ReactNode}) {
    const [user, setUser] = useState<IUser>({} as IUser);
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}