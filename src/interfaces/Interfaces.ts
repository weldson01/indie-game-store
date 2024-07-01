export interface IGame {
    id: number
    src: string
    title: string
    info: string
    uriGame: string
    images?: string[]
}

export type InputsLogin = {
    email: string
    password: string
}

export interface APILoginArgs{
    email: string,
    password: string
}

export interface IUser{
    email: string,
    name: string,
    favoriteGames?: IGame[],
    imageUri?: string,
    password: string
}
