import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../../api/weatherData';
import { format } from 'date-fns';

export interface WeatherData {
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

export function useWeatherData(initialCity: string) {
  const [weatherApi, setWeatherApi] = useState<WeatherData | null>(null);
  const [city, setCity] = useState(initialCity);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [weekDay, setWeekDay] = useState<string>('');

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

  return { weatherApi, city, currentDate, weekDay, setCity, handleSearch };
}
