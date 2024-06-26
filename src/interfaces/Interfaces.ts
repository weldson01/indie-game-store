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