import { Container, Footer, Header, Main } from './style';

export default function LeftScreen() {
  return (
    <Container>
      <Header>
        <span></span>
        <p>Undefined</p>
      </Header>

      <Main>
        <span>
          <h1>Be part of the weather.</h1>
          <p>
            Reliable, real-time information about weather conditions. With an
            intuitive interface, you can easily view accurate forecasts, plan
            your day with confidence.
          </p>
        </span>
      </Main>

      <Footer>
        <img src={'public/img/umbrella.png'} />
        <p>Created with &lt;3 by Pedro Henrique.</p>
      </Footer>
    </Container>
  );
}
