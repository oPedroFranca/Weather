/* eslint-disable no-useless-catch */
import { useEffect, useState } from 'react';

const weatherApi = {
  apiKey: '0e94284280403f462b7422ef6ef32632',
  baseURL: 'https://api.openweathermap.org/data/2.5',
};

interface WeatherData {
  main: {
    temp: number;
  };
}

export const WeatherComponent = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const city = 'tupaciguara';

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${weatherApi.apiKey}`,
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados meteorológicos:', error);
      });
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Temperatura Atual: {weather.main.temp}°C</h2>
        </div>
      ) : (
        <p>Carregando dados meteorológicos...</p>
      )}
    </div>
  );
};
