import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { Container } from './style';

export default function RightScreen() {
  const handleButtonClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <Container>
      <img src="public/img/umbrella.png" alt="" />

      <h1>Breeze</h1>
      <p>Weather App</p>

      <Link to="/weather">
        <Button onClick={handleButtonClick}>Get Started</Button>
      </Link>
    </Container>
  );
}
