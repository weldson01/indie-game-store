"use client"
import { Atom, Gear, House, Newspaper, SquaresFour, Users } from "@phosphor-icons/react";
import "./sidebar.css";
import Link from "next/link";
import { useContext } from "react";
import { RecentActivityContext } from "@/context/RecentActivity";
import Image from "next/image";


export default function Sidebar() {
    // @ts-ignore
    const { game } = useContext(RecentActivityContext)

    return <aside className="flex flex-col bg-secondary max-w-72 shadow-2xl rounded-e-3xl z-10" >
        <div className="flex justify-between px-5 py-6 sticky top-0">
            <h1 className="text-3xl text-whiteColor">INDIE GAME STORE</h1>
            <Atom width={72} height={72} color="#ffffff" />
        </div>
        <nav className="sticky top-32">
            <ul className="side-menu">
                <li>
                    <Link href={"/home"}><House /> Home</Link>
                </li>
                <li>
                    <Link href={"/dashboard"}><SquaresFour /> Dashboard</Link>
                </li>
                <li>
                    <Link href={"#"}><Users /> Groups</Link>
                </li>
                <li>
                    <Link href={"#"}><Newspaper /> News/blog</Link>
                </li>
                <li>
                    <Link href={"#"}><Gear /> Settings</Link>
                </li>
            </ul>
        </nav>
        {game &&
            <div className="sticky top-96 px-10 pt-5">
                <Link href={`/game/${game.id}`}>
                    <h2 className="text-2xl text-center">
                        Recent Activity
                    </h2>
                    <p className="text-center">{game.title}</p>
                    <Image width={500} height={350} src={game.src} alt="" />
                </Link>
            </div>
        }
    </aside>
}