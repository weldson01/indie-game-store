import Carousel from "./components/Carousel";
import LinearList from "./components/LinearList";


export default function Dashboard() {
    return <div>
        <Carousel />
        <LinearList title="Trends"/>
        <LinearList title="Indie Games"/>
    </div>
}