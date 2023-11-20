import { CardDay, Container, WeekDay } from './style';
import { weatherIconMap } from '../WeatherDetails.tsx';
import { WeatherDetailsProps } from '../WeatherDetails.tsx';
import { getNextDayAndDate, getMonth } from './dateUtils'; // Importando as funções
import { useEffect, useState } from 'react';
import { Weather, fetchWeatherDays } from '../../api/fetchWeatherDays.ts';

export default function WeatherCardsDay({
  currentDate,
  weekDay,
  city,
  searchCalled,
}: WeatherDetailsProps) {
  let nextDay = weekDay;
  let nextDate = new Date(currentDate);

  const [weatherData, setWeatherData] = useState<Weather[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetchWeatherDays(city ? city : 'tupaciguara');
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [searchCalled]);

  return (
    <Container>
      {[...Array(7)].map((_, index) => {
        if (index > 0) {
          const nextDayAndDate = getNextDayAndDate(nextDay, nextDate);
          nextDay = nextDayAndDate.nextDay;
          nextDate = nextDayAndDate.nextDate;
        }

        const weather = weatherData[index];

        return (
          <CardDay key={index}>
            <img
              src={
                weather
                  ? weatherIconMap[weather.climate]
                  : 'public/img/Clear.png'
              }
              alt=""
            />
            <p>{weather ? Math.round(weather.temperature) : 'N/A'}°</p>
            <p>
              {getMonth(nextDate)} {nextDate.getDate()}
              <WeekDay>{nextDay}</WeekDay>
            </p>
          </CardDay>
        );
      })}
    </Container>
  );
}
