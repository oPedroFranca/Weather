/* eslint-disable no-useless-catch */
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = '0e94284280403f462b7422ef6ef32632';
const baseURL = 'https://api.openweathermap.org/data/2.5';

const weatherApi = axios.create({
  baseURL,
  params: {
    appid: apiKey,
  },
});

interface WeatherData {
  main: {
    temp: number;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await weatherApi.get('/weather', {
      params: {
        q: city,
      },
    });
    return response.data as WeatherData;
  } catch (error) {
    throw error;
  }
};

export const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const city = 'brasilia';
    fetchWeatherData(city)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados meteorológicos:', error);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Temperatura Atual: {weatherData.main.temp}°C</h2>
          {/* Outros dados do tempo podem ser renderizados aqui */}
        </div>
      ) : (
        <p>Carregando dados meteorológicos...</p>
      )}
    </div>
  );
};
