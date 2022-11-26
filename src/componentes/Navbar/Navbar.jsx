import React from 'react'
import "./Navbar.css"
import { ReactComponent as HouseIcon } from "../../assets/cil_house.svg";

export default function Navbar() {
    return (
        <div className="navColor">
            <div className="navArea">
                <a href="#home" className=""><HouseIcon /></a>
                <div className="navText">
                    <a href="#weWork">How We Work</a>
                    <a href="#services">Services</a>
                    <a href="#freeQuote">Free Quote</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>            
        </div>
    )
}
