import { ReactNode } from 'react';
import { ButtonDiv, Container } from './styled';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <Container>
      <ButtonDiv onClick={onClick} className={className}>
        {children}
      </ButtonDiv>
    </Container>
  );
}
