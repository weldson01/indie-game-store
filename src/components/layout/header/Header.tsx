"use client"
import Link from "next/link";
import "./header.css";
import { BellSimple, Chat, MagnifyingGlass } from "@phosphor-icons/react";

export default function Header() {

    function handleSearch(e: any) {
        e.preventDefault();
        //Todo show result    
    }

    const menuLinks = [
        {
            title: "My Gallery",
            href: "/"
        },
        {
            title: "Chats",
            href: "/"
        }
    ]

    return <header className="bg-primary max-w-full min-h-20 ml-64 pl-10 flex align-middle items-center justify-between shadow-lg">
        <form className="flex bg-input rounded mx-5 pl-2 py-2">
            <button className="" onClick={handleSearch}>
                <MagnifyingGlass size={24} color="#ffffff" className="icon" />
            </button>
            <label htmlFor="input-search" className="label flex items-center align-middle">
                <input className="" id="input-search" />
            </label>
        </form>
        <ul className="gap-16 min-h-full ml-20">
            {menuLinks.map(links => <li><Link href={links.href}>{links.title}</Link></li>)}
        </ul>
        <ul className="gap-8">
            <li>
                <Link href="/"><Chat size={32} color="#ffffff" /></Link>
            </li>
            <li>
                <Link href="/"><BellSimple size={32} color="#ffffff" /></Link>
            </li>
        </ul>
        <img src="https://placehold.co/50x50" alt="" className="max-h-16 rounded-full mr-5" />
    </header>
}