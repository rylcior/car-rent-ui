import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import Button from 'components/atoms/Button/Button';
const NavBar = () => {
  return (
    <AppBar position="fixed" component="nav" color="inherit">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography color="black" variant={'h6'}>
          Wypożyczalnia samochodów
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button label="Zaloguj" onClick={() => {}} />
          <Button label="Zarejestruj" onClick={() => {}} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
