import NavBar from 'components/organisms/NavBar/NavBar';
import { type ReactNode } from 'react';
import { Container } from '@mui/material';

interface NavBarTemplateProps {
  children: ReactNode;
}

const NavBarTemplate = ({ children }: NavBarTemplateProps) => {
  return (
    <div>
      <NavBar />
      <Container maxWidth={'lg'}>{children}</Container>
    </div>
  );
};

export default NavBarTemplate;
