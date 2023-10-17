import LeftScreen from './LeftSideBar';
import RightScreen from './RightScreen';
import { Container } from './style';

export default function Home() {
  return (
    <Container>
      <LeftScreen />
      <RightScreen />
    </Container>
  );
}
