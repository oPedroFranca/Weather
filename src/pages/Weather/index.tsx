import React, { useEffect, useState } from 'react';
import { Container, Header, Main } from './style';
import { fetchWeatherData } from '../../api/weatherData'; // Importe a API daqui
import Button from '../../components/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';

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
  const [city, setCity] = useState('Tupaciguara');

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

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Container>
      <Header>
        <input
          type="search"
          value={city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <Button
          onClick={() => {
            handleSearch();
          }}
          className="buttonSearch"
        >
          <AiOutlineSearch />
        </Button>
      </Header>

      <Main>
        <div>
          <span>
            <MdLocationOn /> {weather?.name}
          </span>
          <p>date</p>
        </div>
        <div>
          <img src="public/img/Sun.png" alt="" />
        </div>
        <div>{weather?.main.temp} C</div>
      </Main>
    </Container>
  );
}
