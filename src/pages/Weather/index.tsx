import { WeatherComponent } from '../../api/weatherData';
import { Container, Header } from './style';

export default function Weather() {
  return (
    <Container>
      <Header>
        <input type="search" />
      </Header>

      <main>
        <WeatherComponent />
      </main>
    </Container>
  );
}
