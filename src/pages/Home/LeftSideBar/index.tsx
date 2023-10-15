import { Container } from './style';

export default function LeftSideBar() {
  return (
    <>
      <Container>
        <header>
          <span></span>
          <p>Undefined</p>
        </header>

        <main>
          <span>
            <h1>Be part of the atmosphere.</h1>
            <p>
              Informações confiáveis e em tempo real sobre as condições
              climáticas. Com uma interface intuitiva, você pode visualizar
              facilmente previsões precisas, Planeje seu dia com confiança.
            </p>
          </span>
        </main>

        <footer>
          <img src={'public/img/umbrella.png'} />
          <p>Created with &lt;3 by Pedro Henrique.</p>
        </footer>
      </Container>
    </>
  );
}
