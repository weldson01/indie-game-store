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
        for (let i = 0; i < carousel.length; i++) {
            carousel[i] = carousel[i + 1];
        }
        carousel[carousel.length - 1] = aux;
        setCarousel([...carousel])
    }
    function handleMoveRight() {
        let aux = carousel[carousel.length - 1]
        for (let i = carousel.length - 1; i > 0; i--) {
            carousel[i] = carousel[i - 1];
        }
        carousel[0] = aux;
        setCarousel([...carousel])
    }

    return <div className="flex flex-1 items-center py-5 justify-between px-20">
        <button className="text-whiteColor" onClick={handleMoveLeft}>
            <ArrowCircleLeft size="42" />
        </button>
        <div className="carousel-wrapper min-h-80 w-full overflow-x-hidden">
            {carousel && carousel.map((item, index) => {
                return <Link href={`/game/${item.id}`} key={item.id}>
                    <Image width={860} height={520} src={item.src} alt={item.src} className={`${"carousel-item item"+index} transition-all`} />
                </Link>
            })}
        </div>
        <button className="ml-10 text-whiteColor" onClick={handleMoveRight}>
            <ArrowCircleRight size="42" />
        </button>
    </div>
}