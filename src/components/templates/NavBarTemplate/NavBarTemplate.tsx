import NavBar from 'components/organisms/NavBar/NavBar';
import { type ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface NavBarTemplateProps {
  children: ReactNode;
}

const NavBarTemplate = ({ children }: NavBarTemplateProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NavBar />
      <Container maxWidth={'lg'}>{children}</Container>
    </Box>
  );
};

export default NavBarTemplate;
