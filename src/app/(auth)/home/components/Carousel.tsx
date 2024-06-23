"use client"
import { useState } from "react";
import "./carousel-style.css";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { ArrowCircleLeft } from "@phosphor-icons/react";

export default function Carousel() {
    const carouselInit = [
        { src: "/images/cs-go.png", info: "GTA: Is a Game" },
        { src: "/images/final-fantasy.png", info: "GTA: Is a Game" },
        { src: "/images/gta-v.png", info: "GTA: Is a Game" },
        { src: "/images/league-of-legends.png", info: "GTA: Is a Game" },
        { src: "/images/wow.png", info: "GTA: Is a Game" },
    ]
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
            return <img src={item.src} alt={item.src} className={`item${index} carousel-item transition-all`}/>
        })}
        <button className="text-whiteColor right-5 absolute" onClick={handleMoveRight}>
            <ArrowCircleRight size="42" />
        </button>
    </div>
}