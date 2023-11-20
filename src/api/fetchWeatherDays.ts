/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { weatherApi } from './weatherApi';

export interface Weather {
  temperature: number;
  description: string;
  climate: string;
}

export const fetchWeatherDays = async (city: string): Promise<Weather[]> => {
  try {
    const response = await axios.get(
      'http://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          q: city,
          appid: weatherApi.apiKey,
          units: 'metric',
          lang: 'en',
        },
      },
    );

    const data: Weather[] = response.data.list.map((item: any) => ({
      temperature: item.main.temp,
      description: item.weather[0].description,
      climate: item.weather[0].main,
    }));

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
