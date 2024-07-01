"use client"
import { Atom, Gear, House, Newspaper, SquaresFour, Users } from "@phosphor-icons/react";
import "./sidebar.css";
import Link from "next/link";
import { useContext, useState } from "react";
import { RecentActivityContext } from "@/context/RecentActivity";
import Image from "next/image";


export default function Sidebar() {
    // @ts-ignore
    const { game } = useContext(RecentActivityContext)
    const [showMenu, setShowMenu] = useState(true)

    return <aside className={`flex flex-col bg-secondary max-w-72 min-h-screen shadow-2xl rounded-e-3xl z-10  ${!showMenu && "-translate-x-3/4"} lg:translate-x-0 transition-all`}>
        <div className="flex justify-between px-5 py-6 sticky top-0">
            <h1 className="text-3xl text-whiteColor">INDIE GAME STORE</h1>
            <Atom width={72} height={72} color="#ffffff" onClick={()=>setShowMenu(!showMenu)}/>
        </div>
        <nav className="sticky top-32">
            <ul className="side-menu">
                <li>
                    <Link href={"/home"}><House />{showMenu && "Home"}</Link>
                </li>
                <li> 
                    <Link href={"/dashboard"}><SquaresFour />{showMenu && "Dashboard"} </Link>
                </li>
                <li>
                    <Link href={"#"}><Users />{showMenu && "Groups"}</Link>
                </li>
                <li>
                    <Link href={"#"}><Newspaper />{showMenu && "News/blog"}</Link>
                </li>
                <li>
                    <Link href={"#"}><Gear />{showMenu && "Settings"}</Link>
                </li>
            </ul>
        </nav>
        {game.title && showMenu &&
            <div className="sticky top-96 px-10 pt-5">
                <Link href={`/game/${game.id}`}>
                    <h2 className="text-2xl text-center">
                    </h2>
                    <p className="text-center">{game.title}</p>
                    <Image width={500} height={350} src={game.src} alt="" />
                </Link>
            </div>
        }
    </aside>
}