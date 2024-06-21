"use client"
import { useEffect, useState } from "react";
import "./carousel-style.css";

export default function Carousel() {
    const carouselInit = [
        { src: "/images/cs-go.png", info: "GTA: Is a Game" },
        { src: "/images/final-fantasy.png", info: "GTA: Is a Game" },
        { src: "/images/gta-v.png", info: "GTA: Is a Game" },
        { src: "/images/league-of-legends.png", info: "GTA: Is a Game" },
        { src: "/images/wow.png", info: "GTA: Is a Game" },
    ]
    const [carousel, setCarousel] = useState(carouselInit);
    const [isShowDetails, setIsShowDatails] = useState(false)
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

    if (!isShowDetails) {
        setTimeout(() => {
            if (!isShowDetails) {
                handleMoveLeft()
            }
        }, 5000)
    }

    function showDatails() {
        setIsShowDatails(true)
    }

    return <div className="carousel-wrapper">
        <button className="text-whiteColor absolute left-5" onClick={handleMoveLeft}>
            {"<"}
        </button>
        {carousel && carousel.map((item, index) => {
            return <><img src={item.src} alt={item.src} className={`item${index} carousel-item transition-all`} onMouseOver={showDatails} onMouseLeave={() => setIsShowDatails(false)} /></>
        })}
        <button className="text-whiteColor right-5 absolute" onClick={handleMoveRight}>
            {">"}
        </button>
    </div>
}