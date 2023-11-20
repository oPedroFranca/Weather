import { MdLocationOn } from 'react-icons/md';
import { InfoWeather, LocationIcon, Main, Temperature, WeekDay } from './style';
import { WeatherData } from '../../pages/Weather/useWeatherData';

export const weatherIconMap: { [key: string]: string } = {
  Rain: 'public/img/Rain.png',
  Clouds: 'public/img/Clouds.png',
  Clear: 'public/img/Clear.png',
  Thunderstorm: 'public/img/Thunderstorm.png',
  Snow: 'public/img/Snow.png',
};

export interface WeatherDetailsProps {
  weatherApi: WeatherData | null;
  currentDate: string;
  weekDay: string;
  city?: string;
  searchCalled?: boolean;
}

export function WeatherDetails({
  weatherApi,
  currentDate,
  weekDay,
}: WeatherDetailsProps) {
  return (
    <Main>
      <div>
        <span>
          <LocationIcon>
            <MdLocationOn />
          </LocationIcon>
          {weatherApi?.name}
        </span>
        <p>
          {currentDate} <WeekDay>{weekDay}</WeekDay>
        </p>
      </div>
      <div>
        <img
          src={
            weatherApi
              ? weatherIconMap[weatherApi.weather[0].main]
              : 'public/img/Clear.png'
          }
          alt=""
        />
      </div>
      <div>
        <Temperature>
          <img
            src={
              weatherApi && weatherApi.main
                ? Math.round(weatherApi.main.temp) < 15
                  ? 'public/img/thermometerIce.png'
                  : 'public/img/thermometerHot.png'
                : 'public/img/thermometerHot.png'
            }
            alt=""
          />
          {weatherApi && weatherApi.main
            ? Math.round(weatherApi.main.temp)
            : 'N/A'}
          °C
        </Temperature>

        <InfoWeather>
          <span>
            Humidity, <strong>% {weatherApi?.main.humidity}</strong>
          </span>
          <span>
            Visibility, <strong>% {weatherApi?.visibility}</strong>
          </span>
          <span>
            Wind, <strong>m/s {weatherApi?.wind.speed}</strong>
          </span>
          <span>
            Pressure, <strong>mm {weatherApi?.main.pressure}</strong>
          </span>
          <span>
            Climate, <strong> {weatherApi?.weather[0].main}</strong>
          </span>
        </InfoWeather>
      </div>
    </Main>
  );
}
