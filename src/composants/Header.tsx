import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export const Header = () => (
    <div className="navbar">
        <div className="topBarHeader">
            <h1 className="Titlefirst">SIMPLON.CO</h1>
            <div className="items">

                <FontAwesomeIcon icon={faTwitter} style={{ color: "#e01b24", }} className="borderIcon" />
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#e01b24", }} className="borderIcon" />
                <FontAwesomeIcon icon={faFacebookF} style={{ color: "#e01b24", }} className="borderIcon" />
            </div>
        </div>
        <div className="topBarHeader">
            <img className="imageSmall" src="src/assets/images/Sans titre.png" alt="logo simplon" />
            <div className="items boldText">
                <p className="boldText">vous voulez <FontAwesomeIcon icon={faChevronDown} /></p>
                <p className="boldText">welcode</p>
                <p className="boldText">Nos actualités</p>
            </div>
        </div>
    </div>
)