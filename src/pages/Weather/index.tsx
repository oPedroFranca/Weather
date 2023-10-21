import { WeatherComponent } from '../../api/weatherData';
import { Container } from './style';

export default function Weather() {
  return (
    <Container>
      <header>
        <input type="search" />

        <WeatherComponent />
      </header>
    </Container>
  );
}
