import React from "react";
import { ReactComponent as HouseIcon } from "../../assets/cil_house.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faSquareFacebook,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="information-container">
                <div className="information-panels">
                    <div className="general-info panel">
                        <HouseIcon />
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page
                            whenters.
                        </p>
                        <div className="icons">
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faSquareFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                    <div className="about-us panel">
                        <h2>About Us</h2>
                        <ul>
                            <li>About</li>
                            <li>Privacy & Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Faq</li>
                        </ul>
                    </div>
                    <div className="navigate panel">
                        <h2>Navigate</h2>
                        <ul>
                            <li>How We Work</li>
                            <li>Services</li>
                            <li>Faq</li>
                            <li>Contact</li>
                            <li>Free Quote</li>
                        </ul>
                    </div>
                    <div className="contact-us panel">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Ricardo Margain 444</li>
                            <li>Call: +52 81 1234 5678</li>
                            <li>Email: info@challenge.com</li>
                        </ul>

                        <div className="whatsapp-button">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <div className="whatsapp-text">Whatsapp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
