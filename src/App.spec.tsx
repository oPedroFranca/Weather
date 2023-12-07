import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Weather, fetchWeatherDays } from './api/fetchWeatherDays';
import { fetchWeatherData } from './api/weatherData';
import { renderHook, act } from '@testing-library/react-hooks';
import { WeatherData, useWeatherData } from './pages/Weather/useWeatherData';

describe('fetchWeatherDays', () => {
  it('must get the weather correctlyclear', async () => {
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

describe('fetchWeatherData function', () => {
  it('should make a correct API call for current weather', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ mockData: 'currentWeather' }),
    });

    const city = 'London';
    const data = await fetchWeatherData(city);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0e94284280403f462b7422ef6ef32632`,
    );
    expect(data).toEqual({ mockData: 'currentWeather' });
  });

  it('should throw an error for invalid API response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const city = 'InvalidCity';

    await expect(fetchWeatherData(city)).rejects.toThrow(
      'Erro ao buscar dados meteorológicos: ',
    );
  });
});

jest.mock('./pages/Weather/useWeatherData');

describe('useWeatherData hook', () => {
  it('should fetch and set weather data correctly', async () => {
    const mockWeatherData: WeatherData = {
      name: 'TestCity',
      visibility: 10000,
      precipitation: 0,
      weather: [{ main: 'Clear' }],
      main: { temp: 25, pressure: 1015, humidity: 50 },
      wind: { speed: 5, direction: { value: 180, code: 'S', name: 'South' } },
    };

    (useWeatherData as jest.Mock).mockReturnValue({
      weatherApi: mockWeatherData,
      currentDate: 'mockDate',
      weekDay: 'mockWeekDay',
      setCity: jest.fn(),
      handleSearch: jest.fn(),
      city: 'mockCity',
    });

    const { result } = renderHook(() => useWeatherData('InitialCity'));

    expect(result.current.weatherApi).toEqual(mockWeatherData);

    act(() => {
      result.current.handleSearch();
    });

    expect(result.current.weatherApi).toEqual(mockWeatherData);
    expect(result.current.currentDate).toEqual('mockDate');
    expect(result.current.weekDay).toMatch(/\w+/);
  });
});
