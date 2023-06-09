import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import Button from 'components/atoms/Button/Button';

interface NavBarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}
const NavBar = (props: NavBarProps) => {
  const { onLoginClick, onRegisterClick } = props;

  return (
    <AppBar position="fixed" component="nav" color="inherit">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography color="black" variant={'h6'}>
          Wypożyczalnia samochodów
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button label="Zaloguj" onClick={onLoginClick} />
          <Button label="Zarejestruj" onClick={onRegisterClick} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
