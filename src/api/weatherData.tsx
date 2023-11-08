import { weatherApi } from './weatherApi';

export async function fetchWeatherData(city: string) {
  const response = await fetch(
    `${weatherApi.baseURL}/weather?q=${city}&units=metric&APPID=${weatherApi.apiKey}`,
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Erro ao buscar dados meteorológicos: ');
  }
}
