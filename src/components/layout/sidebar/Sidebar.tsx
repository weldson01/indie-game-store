"use client"
import { Atom, Gear, House, Newspaper, SquaresFour, Users } from "@phosphor-icons/react";
import "./sidebar.css";
import Link from "next/link";


export default function Sidebar() {
    return <aside className="flex flex-col bg-secondary fixed top-0 max-w-72 h-full shadow-2xl rounded-e-3xl z-10" >
        <div className="flex justify-between px-5 py-6">
            <h1 className="text-3xl text-whiteColor">INDIE GAME STORE</h1>
            <Atom width={72} height={72} color="#ffffff" />
        </div>
        <nav>
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
    </aside>
}