import React from 'react';
import { useQuery } from 'react-query';

type MétéoProps = {
    position: [number, number];
};

const apiKey = "9635f9e06e30fb2404a28b96af67ec69";

// Correspondance de traduction des descriptions météorologiques
const weatherDescriptions = {
    'Clear': 'Dégagé',
    'Clouds': 'Nuageux',
    'Rain': 'Pluie',
    'Drizzle': 'Bruine',
    'Thunderstorm': 'Orage',
};

function getWindDirectionDescription(degrees: number): string {
    if (degrees >= 337.5 || degrees < 22.5) return 'Nord';
    if (degrees >= 22.5 && degrees < 67.5) return 'Nord-Est';
    if (degrees >= 67.5 && degrees < 112.5) return 'Est';
    if (degrees >= 112.5 && degrees < 157.5) return 'Sud-Est';
    if (degrees >= 157.5 && degrees < 202.5) return 'Sud';
    if (degrees >= 202.5 && degrees < 247.5) return 'Sud-Ouest';
    if (degrees >= 247.5 && degrees < 292.5) return 'Ouest';
    return 'Nord-Ouest';
}

export function Météo({ position }: MétéoProps) {
    const [lat, lon] = position;
    const params = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        appid: apiKey,
        units: 'metric', // Request temperature in degrees Celsius
        lang: 'fr' // Request language as French
    });
    const { isLoading, error, data } = useQuery('weatherData', () =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?${params}`).then(res =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error;

    // Traduisez la description météorologique en français
    const weatherDescriptionFR = weatherDescriptions[data.weather[0].main] || data.weather[0].description;
    const windDirectionDescription = getWindDirectionDescription(data.wind.deg);
    return (
        <div>
            <h5>Données météorologiques</h5>
            <table>
                <tbody>

                    <tr>
                        <td>Température :</td>
                        <td>{data.main.temp} °C</td>
                    </tr>
                    <tr>
                        <td>Humidité :</td>
                        <td>{data.main.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Pression atmosphérique :</td>
                        <td>{data.main.pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>Vitesse du vent :</td>
                        <td>{data.wind.speed} m/s</td>
                    </tr>
                    <tr>
                        <td>Direction du vent :</td>
                        <td>{windDirectionDescription}</td>
                    </tr>
                    <tr>
                        <td>Météo :</td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
