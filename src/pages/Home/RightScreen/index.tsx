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

      <Button onClick={handleButtonClick}>Get Started</Button>
    </Container>
  );
}
