"use client"
import { useState } from "react";
import "./carousel-style.css";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import ApiGamesInformations from "@/services/api/ApiGamesInformations";
import Link from "next/link";
import Image from "next/image";

export default function Carousel() {
    const carouselInit = ApiGamesInformations.getNewstGames()

    const [carousel, setCarousel] = useState(carouselInit);
    function handleMoveLeft() {
        let aux = carousel[0]
        let auxCarousel = [...carousel]
        for (let i = 0; i < auxCarousel.length; i++) {
            auxCarousel[i] = auxCarousel[i + 1];
        }
        auxCarousel[auxCarousel.length - 1] = aux;
        setCarousel(auxCarousel)
    }
    function handleMoveRight() {
        let aux = carousel[carousel.length - 1]
        let auxCarousel = [...carousel]
        for (let i = auxCarousel.length - 1; i > 0; i--) {
            auxCarousel[i] = auxCarousel[i - 1];
        }
        auxCarousel[0] = aux;
        setCarousel(auxCarousel)
    }

    return <div className="carousel-wrapper">
        <button className="text-whiteColor absolute left-5" onClick={handleMoveLeft}>
            <ArrowCircleLeft size="42" />
        </button>
        {carousel && carousel.map((item, index) => {
            return <Link href={`/game/${item.id}`}>
                <Image width={860} height={520} src={item.src} alt={item.src} className={`item${index} carousel-item transition-all`} key={item.id}/>

            </Link>
        })}
        <button className="text-whiteColor right-5 absolute" onClick={handleMoveRight}>
            <ArrowCircleRight size="42" />
        </button>
    </div>
}