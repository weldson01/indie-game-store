import { Dispatch, SetStateAction } from "react";
import { IUser } from "./Interfaces";

export interface IUserContext{
    user: IUser,
    setUser: Dispatch<SetStateAction<IUser>>
}