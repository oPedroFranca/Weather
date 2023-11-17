import { Container, Header } from './style';
import Button from '../../components/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { useWeatherData } from './useWeatherData';
import { WeatherDetails } from '../../components/WeatherDetails.tsx';
import WeatherCardsDay from '../../components/WeatherCard/index.tsx';

export default function Weather() {
  const { weatherApi, city, currentDate, weekDay, setCity, handleSearch } =
    useWeatherData('Tupaciguara');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <Header>
        <input
          type="search"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            handleSearch();
          }}
          onKeyDown={handleKeyDown}
          placeholder="City"
        />
        <Button onClick={handleSearch} className="buttonSearch">
          <AiOutlineSearch />
        </Button>
      </Header>

      <WeatherDetails
        weatherApi={weatherApi}
        currentDate={currentDate}
        weekDay={weekDay}
      />

      <WeatherCardsDay
        weatherApi={weatherApi}
        currentDate={currentDate}
        weekDay={weekDay}
        city={city}
      />
    </Container>
  );
}
