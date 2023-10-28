import React, { useState } from 'react';
import { Container, Header } from './style';
import { fetchWeatherData } from '../../api/weatherData'; // Importe a API daqui

interface WeatherData {
  name: string;
  visibility: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    precipitation: number;
  };
  wind: {
    speed: number;
    direction: {
      value: number;
      code: string;
      name: string;
    };
  };
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData(city)
      .then((result) => {
        setWeather(result);
        console.log(result);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados meteorológicos:', error);
      });
  };

  return (
    <Container>
      <Header>
        <input
          type="search"
          value={city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <button onClick={handleSearch}>Buscar</button>
      </Header>

      <main>
        {weather ? <h2>{weather.main.temp}</h2> : <p>Digite a Cidade</p>}
      </main>
    </Container>
  );
}
