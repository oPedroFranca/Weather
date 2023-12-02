import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Weather, fetchWeatherDays } from './api/fetchWeatherDays';

describe('fetchWeatherDays', () => {
  it('deve buscar o clima corretamente', async () => {
    const mock = new MockAdapter(axios);
    const data: Weather[] = [
      {
        temperature: 20,
        description: 'céu claro',
        climate: 'Clear',
      },
    ];

    mock.onGet('http://api.openweathermap.org/data/2.5/forecast').reply(200, {
      list: [
        {
          main: {
            temp: 20,
          },
          weather: [
            {
              description: 'céu claro',
              main: 'Clear',
            },
          ],
        },
      ],
    });

    const city = 'São Paulo';
    const result = await fetchWeatherDays(city);

    expect(result).toEqual(data);
  });
});
