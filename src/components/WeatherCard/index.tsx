// WeatherCardsDay.tsx
import { CardDay, Container, WeekDay } from './style';
import { weatherIconMap } from '../WeatherDetails.tsx';
import { WeatherDetailsProps } from '../WeatherDetails.tsx';
import { getNextDayAndDate, getMonth } from './dateUtils'; // Importando as funções

export default function WeatherCardsDay({
  weatherApi,
  currentDate,
  weekDay,
}: WeatherDetailsProps) {
  let nextDay = weekDay;
  let nextDate = new Date(currentDate);

  return (
    <Container>
      {[...Array(7)].map((_, index) => {
        if (index > 0) {
          const nextDayAndDate = getNextDayAndDate(nextDay, nextDate);
          nextDay = nextDayAndDate.nextDay;
          nextDate = nextDayAndDate.nextDate;
        }

        return (
          <CardDay key={index}>
            <img
              src={
                weatherApi
                  ? weatherIconMap[weatherApi.weather[0].main]
                  : 'public/img/Clear.png'
              }
              alt=""
            />
            <p>
              {weatherApi && weatherApi.main
                ? Math.round(weatherApi.main.temp)
                : 'N/A'}
              °
            </p>
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
