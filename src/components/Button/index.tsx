import { ReactNode } from 'react';
import { ButtonDiv, Container } from './styled';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <Container>
      <ButtonDiv onClick={onClick}> {children}</ButtonDiv>
    </Container>
  );
}
