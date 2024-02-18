import Sponsers from "../Sponsers/Sponsers";
import Speaker from "../Speaker/Speaker";
import Footer from "../Footer/Footer"
import Competition from "../Competition/Competition";
import a from "./back.webp";
import "./Downtown.css"
export default function Downtown(){
    return <>
     <div className="downtown">
        <img className="downtownBackground" src={a} alt="" loading="lazy"/>
        <Competition/>
        <Sponsers/>
        <Speaker/>
        <Footer/>
    </div>
    </>
}