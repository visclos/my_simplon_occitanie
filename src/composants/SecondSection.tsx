import React, { useState } from "react";
import "./SecondSection.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet'
import Data from "../data/simplon.json"
import { Météo } from './Météo'; // Import the Météo component

const factories = Data.factories;

export const SecondSection = () => {
    const [selectedFactory, setSelectedFactory] = useState(""); // État local pour stocker le nom de  sélectionnée

    const handlePopupOpen = (factoryName) => {
        setSelectedFactory(factoryName); // Mettre à jour l'état local avec le nom de 
    };

    return (
        <div className="containerBis">
            <div className="titre">
                <h3>Simplon près de chez vous</h3>
            </div>
            <div className="meteo">
                <Météo position={[0, 0]} />
            </div>
            <div className="map">
                <MapContainer className="containerMap" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {factories.map((factory, index) => (
                        <Marker key={index} position={[factory.lat, factory.lng]} eventHandlers={{
                            popupopen: () => handlePopupOpen(factory.factoryName) // Appeler handlePopupOpen avec le nom de 
                        }}>
                            <Popup>
                                <h4>{factory.factoryName}</h4>
                                <Météo position={[factory.lat, factory.lng]} />
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            {selectedFactory && (
                <div className="selected-factory">
                    {selectedFactory}
                </div>
            )}
        </div>
    );
};
