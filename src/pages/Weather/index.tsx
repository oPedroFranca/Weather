import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Container, Header, LocationIcon, Main, WeekDay } from './style';
import { fetchWeatherData } from '../../api/weatherData';
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
  const [currentDate, setCurrentDate] = useState<string>('');
  const [weekDay, setWeekDay] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const result = await fetchWeatherData(city);
      setWeather(result);

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
            {weather?.name}
          </span>
          <p>
            {currentDate} <WeekDay>{weekDay}</WeekDay>
          </p>
        </div>
        <div>
          <img src="public/img/Sun.png" alt="" />
        </div>
        <div>{weather?.main.temp} C</div>
      </Main>
    </Container>
  );
}
