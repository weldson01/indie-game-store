import { IGame } from "@/interfaces/Interfaces"
import ApiGamesInformations from "@/services/api/ApiGamesInformations"
import Image from "next/image";
import Link from "next/link";

export default function LinearList({ title }: { title: string }) {
    const games = ApiGamesInformations.getNewstGames();
    return <div className="mt-10 pl-5">
        <h2 className="text-3xl text-whiteColor">{title}:</h2>
        <div className="flex py-10 px-10 w-full gap-5 overflow-x-scroll no-scrollbar">
            {games.map(({ src,title, info,id }: IGame) => {
                return <div className="" key={id}>
                    <Link href={`/game/${id}`}>
                        <Image width={860} height={520} src={src} alt={info} className="max-w-32 h-40 antialiased" />
                        <p className="text-center pt-5">{title}</p>
                    </Link>
                </div>
            })}
        </div>
    </div>
}