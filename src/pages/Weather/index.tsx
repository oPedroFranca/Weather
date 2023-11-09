import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import {
  Container,
  Header,
  InfoWeather,
  LocationIcon,
  Main,
  Temperature,
  WeekDay,
} from './style';
import { fetchWeatherData } from '../../api/weatherData';
import Button from '../../components/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';

interface WeatherData {
  name: string;
  visibility: number;
  precipitation: number;
  weather: [
    {
      main: string;
    },
  ];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
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
  const [weatherApi, setWeatherApi] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('Tupaciguara');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [weekDay, setWeekDay] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const result = await fetchWeatherData(city);
      setWeatherApi(result);

      const today = new Date();
      setCurrentDate(format(today, 'MMMM d'));
      setWeekDay(format(today, 'EEEE'));
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const weatherIconMap: { [key: string]: string } = {
    Rain: 'public/img/Rain.png',
    Clouds: 'public/img/Clouds.png',
    Clear: 'public/img/Clear.png',
    Thunderstorm: 'public/img/Thunderstorm.png',
    Snow: 'public/img/Snow.png',
  };

  return (
    <Container>
      <Header>
        <input
          type="search"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="City"
        />
        <Button onClick={handleSearch} className="buttonSearch">
          <AiOutlineSearch />
        </Button>
      </Header>

      <Main>
        <div>
          <span>
            <LocationIcon>
              <MdLocationOn />
            </LocationIcon>
            {weatherApi?.name}
          </span>
          <p>
            {currentDate} <WeekDay>{weekDay}</WeekDay>
          </p>
        </div>
        <div>
          <img
            src={
              weatherApi
                ? weatherIconMap[weatherApi.weather[0].main]
                : 'public/img/Sun.png'
            }
            alt=""
          />
        </div>
        <div>
          <Temperature>
            <img src="public/img/thermometerHot.png" alt="" />
            {weatherApi && weatherApi.main
              ? Math.round(weatherApi.main.temp)
              : 'N/A'}
            °C
          </Temperature>

          <InfoWeather>
            <span>
              Humidity, <strong>% {weatherApi?.main.humidity}</strong>
            </span>
            <span>
              Visibility, <strong>% {weatherApi?.visibility}</strong>
            </span>
            <span>
              Wind, <strong>m/s {weatherApi?.wind.speed}</strong>
            </span>
            <span>
              Pressure, <strong>mm {weatherApi?.main.pressure}</strong>
            </span>
            <span>
              Climate, <strong> {weatherApi?.weather[0].main}</strong>
            </span>
          </InfoWeather>
        </div>
      </Main>
    </Container>
  );
}
