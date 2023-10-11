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
          <h1>
            Be part of the <span>atmosphere</span> matter where you are.
          </h1>

          <p>
            Informações confiáveis e em tempo real sobre as condições
            climáticas. Com uma interface intuitiva, você pode visualizar
            facilmente previsões precisas, Planeje seu dia com confiança.
          </p>
        </main>

        <footer>
          <img src={'public/img/umbrella.png'} />
          <p>Created with &lt;3 by Pedro Henrique.</p>
        </footer>
      </Container>
    </>
  );
}
