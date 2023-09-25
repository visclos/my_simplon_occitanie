import React from "react";
import "./FirstSection.css";


export const FirstSection = () => (
    <div className="container">
        <div className="bgRed">
            <span className="textColor">
                <h2 className="hSize">Simplon.co en Occitanie</h2>
                <p className="pSize">Simplon est un réseau de Fabrique solidaires et inclusives qui proposent des formations gratuites métiers techniques du numérique en France et à l'étranger</p>
              
                <button className="btnRed">Formations Ouvertes</button>
            </span>
        </div>
        <img className="image" src="src/assets/images/Capture d’écran 1.png" alt="photo aprenants simplon" />
    </div>
       
)