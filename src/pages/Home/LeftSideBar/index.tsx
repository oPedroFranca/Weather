import { Container } from './style';

export default function LeftScreen() {
  return (
    <Container>
      <header>
        <span></span>
        <p>Undefined</p>
      </header>

      <main>
        <span>
          <h1>Be part of the atmosphere.</h1>
          <p>
            Reliable, real-time information about weather conditions. With an
            intuitive interface, you can easily view accurate forecasts, plan
            your day with confidence.
          </p>
        </span>
      </main>

      <footer>
        <img src={'public/img/umbrella.png'} />
        <p>Created with &lt;3 by Pedro Henrique.</p>
      </footer>
    </Container>
  );
}
