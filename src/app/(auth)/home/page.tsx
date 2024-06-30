"use client"
import { useContext } from "react";
import Carousel from "./components/Carousel";
import LinearList from "./components/LinearList";
import { userContext } from "@/context/UserContext";
import { redirect } from "next/navigation";


export default function Home() {
    // @ts-ignore
    const {user} = useContext(userContext);
    if(!user.email){
        redirect("/login")
    }

    return <div className="flex flex-col">
        <Carousel />
        <LinearList title="Trends"/>
    </div>
}