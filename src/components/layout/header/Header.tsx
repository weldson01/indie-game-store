"use client"
import Link from "next/link";
import { BellSimple, Chat, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import { useContext } from "react";
import { userContext } from "@/context/UserContext";
import SearchInput from "./components/SearchInput";

export default function Header() {
    // @ts-ignore
    const { user } = useContext(userContext);

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

    return <header className="bg-primary max-w-full min-h-20 flex flex-1 align-middle items-center justify-between shadow-lg">
        <SearchInput />
        <ul className="gap-16 ml-20">
            {menuLinks.map(links => <li key={links.href}><Link href={links.href}>{links.title}</Link></li>)}
        </ul>
        <ul className="gap-8">
            <li>
                <Link href="/"><Chat size={32} color="#ffffff" /></Link>
            </li>
            <li>
                <Link href="/"><BellSimple size={32} color="#ffffff" /></Link>
            </li>
        </ul>
        <p>
            {user && user.name}
        </p>
        <Image lang="https://placehold.co/50" width={50} height={50} src={`${user?.imageUri ? user.imageUri : "https://placehold.co/50"}`} alt="" className="max-h-16 rounded-full mr-5" />

    </header>
}