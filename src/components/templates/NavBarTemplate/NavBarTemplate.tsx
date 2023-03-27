import NavBar from 'components/organisms/NavBar/NavBar';
import { type ReactNode, useState } from 'react';
import { Box, Container } from '@mui/material';
import AuthModal from '../../organisms/AuthModal/AuthModal';
import useToggle from '../../../hooks/useToggle';

interface NavBarTemplateProps {
  children: ReactNode;
}

const NavBarTemplate = ({ children }: NavBarTemplateProps) => {
  const [isOpen, toggle] = useToggle();
  const [isRegistration, setIsRegistration] = useState(false);
  const onLoginClick = () => {
    setIsRegistration(false);
    toggle();
  };
  const onRegisterClick = () => {
    setIsRegistration(true);
    toggle();
  };

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
      <NavBar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <Container maxWidth={'lg'}>{children}</Container>
      <AuthModal
        isOpen={isOpen}
        isRegistration={isRegistration}
        handleClose={toggle}
      />
    </Box>
  );
};

export default NavBarTemplate;
